import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-form-schema";
import { getContactDeliveryMode } from "@/lib/contact-delivery";
import { sendContactEmail } from "@/lib/send-email";
import { SITE_URL } from "@/lib/constants";

const MAX_BODY_BYTES = 8_000;

type RequestBodyResult =
  | { ok: true; text: string }
  | { ok: false; reason: "invalid" | "too_large" };

function jsonResponse(
  body: Record<string, unknown>,
  status = 200
) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

async function readRequestBody(request: Request): Promise<RequestBodyResult> {
  const reader = request.body?.getReader();
  if (!reader) return { ok: true, text: "" };

  const bytes = new Uint8Array(MAX_BODY_BYTES);
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!value) continue;

      if (totalBytes + value.byteLength > MAX_BODY_BYTES) {
        await reader.cancel().catch(() => undefined);
        return { ok: false, reason: "too_large" };
      }

      bytes.set(value, totalBytes);
      totalBytes += value.byteLength;
    }

    return {
      ok: true,
      text: new TextDecoder("utf-8", { fatal: true }).decode(
        bytes.subarray(0, totalBytes),
      ),
    };
  } catch {
    return { ok: false, reason: "invalid" };
  } finally {
    reader.releaseLock();
  }
}

export async function POST(request: Request) {
  if (getContactDeliveryMode() === "disabled") {
    return jsonResponse({ ok: false, reason: "not_configured" }, 503);
  }

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(SITE_URL).origin) {
        return jsonResponse({ ok: false, reason: "invalid" }, 403);
      }
    } catch {
      return jsonResponse({ ok: false, reason: "invalid" }, 403);
    }
  }

  const contentType = request.headers.get("content-type")?.split(";")[0].trim();
  if (contentType !== "application/json") {
    return jsonResponse({ ok: false, reason: "invalid" }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, reason: "too_large" }, 413);
  }

  const bodyResult = await readRequestBody(request);
  if (!bodyResult.ok) {
    const status = bodyResult.reason === "too_large" ? 413 : 400;
    return jsonResponse({ ok: false, reason: bodyResult.reason }, status);
  }

  let body: unknown;
  try {
    body = JSON.parse(bodyResult.text);
  } catch {
    return jsonResponse({ ok: false, reason: "invalid" }, 400);
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return jsonResponse({ ok: false, reason: "invalid" }, 400);
  }

  // Quietly discard likely bots without storing or sending their message.
  if (parsed.data.company?.trim()) return jsonResponse({ ok: true });

  const result = await sendContactEmail(parsed.data);
  if (!result.ok) {
    const status = result.reason === "not_configured" ? 503 : 502;
    return jsonResponse(result, status);
  }

  return jsonResponse(result);
}
