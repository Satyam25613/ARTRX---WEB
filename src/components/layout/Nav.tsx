"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/content/nav";
import { SITE_NAME } from "@/content/site";
import { Button } from "@/components/ui/Button";
import styles from "./Nav.module.css";

const MENU_LINKS = NAV_LINKS.filter((link) => link.href !== "/contact-us");

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  // While the overlay is open: lock background scroll, allow Escape to close,
  // and move focus into the menu for keyboard and screen-reader users.
  useEffect(() => {
    if (!open) return undefined;

    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuToggleRef.current?.focus();
        return;
      }

      if (event.key === "Tab") {
        const focusable = mobileNavRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        const first = focusable?.[0];
        const last = focusable?.[focusable.length - 1];

        if (first && last && event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (first && last && !event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // One rAF-throttled scroll handler drives both reading affordances: the
  // sage progress hairline in the pill, and the hide-on-scroll-down /
  // reveal-on-scroll-up behavior of the pill itself.
  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;

    function apply() {
      frame = 0;
      const y = window.scrollY;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }

      const dock = dockRef.current;
      if (dock && !open) {
        const goingDown = y > lastY && y > 120;
        const goingUp = y < lastY - 4;
        if (goingDown) dock.style.transform = "translateY(-130%)";
        else if (goingUp) dock.style.transform = "";
      }

      lastY = y;
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(apply);
    }

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [open]);

  return (
    <>
      <div ref={dockRef} className={styles.dock}>
        <nav className={styles.pill} aria-label="Primary">
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              <Image
                className={styles.brandMarkImage}
                src="/images/artrx-logo.png"
                alt=""
                width={96}
                height={96}
                preload
              />
            </span>
            <span className={styles.brandName}>{SITE_NAME}</span>
            <span className={styles.previewBadge}>Preview</span>
          </Link>

          <ul className={styles.links}>
            {MENU_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={isActive ? styles.linkActive : styles.link}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.ctaDesktop}>
            <Button
              href="/contact-us"
              variant="primary"
              aria-current={pathname === "/contact-us" ? "page" : undefined}
            >
              Contact
            </Button>
          </div>

          <button
            ref={menuToggleRef}
            type="button"
            className={
              open ? `${styles.menuToggle} ${styles.menuToggleOpen}` : styles.menuToggle
            }
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={styles.menuLine} aria-hidden="true" />
            <span className={styles.menuLine} aria-hidden="true" />
          </button>

          <span ref={progressRef} className={styles.progress} aria-hidden="true" />
        </nav>
      </div>

      <nav
        ref={mobileNavRef}
        id="mobile-nav"
        aria-label="Mobile"
        className={open ? `${styles.overlay} ${styles.overlayOpen}` : styles.overlay}
        hidden={!open}
      >
        <ul className={styles.mobileLinks}>
          {MENU_LINKS.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                className={styles.mobileItem}
                style={{ animationDelay: `${140 + index * 80}ms` }}
              >
                <Link
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={isActive ? styles.mobileLinkActive : styles.mobileLink}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className={styles.mobileCta}
          style={{ animationDelay: `${140 + MENU_LINKS.length * 80}ms` }}
        >
          <Button
            href="/contact-us"
            variant="primary"
            fullWidth
            aria-current={pathname === "/contact-us" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Contact
          </Button>
        </div>
      </nav>
    </>
  );
}
