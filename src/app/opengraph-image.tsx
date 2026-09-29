import { ImageResponse } from "next/og";
import { SITE_TAGLINE } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#FAF6F1",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 42,
          }}
        >
          <div
            style={{
              color: "#183058",
              fontFamily: "serif",
              fontSize: 62,
              fontWeight: 600,
              letterSpacing: -3,
            }}
          >
            ArtRX
          </div>
          <div
            style={{
              marginLeft: 4,
              padding: "9px 18px",
              borderRadius: 999,
              border: "1px solid rgba(56, 112, 88, 0.35)",
              background: "#E8F1EC",
              color: "#285A46",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Art & expression
          </div>
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 500,
            color: "#183058",
            maxWidth: 940,
            lineHeight: 1.12,
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            fontWeight: 500,
            color: "#285A46",
          }}
        >
          Illustrated prompts · ArtRX
        </div>
      </div>
    ),
    { ...size }
  );
}
