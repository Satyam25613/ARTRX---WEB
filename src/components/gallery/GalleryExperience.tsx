"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { GalleryCategory, GalleryItem } from "@/lib/types";
import styles from "./GalleryExperience.module.css";

type FilterValue = GalleryCategory | "all";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All work" },
  { value: "prompt", label: "Prompt sheets" },
  { value: "in-progress", label: "In progress" },
  { value: "drawing", label: "Completed drawings" },
];

export function GalleryExperience({ items }: { items: GalleryItem[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);

  const filtered = useMemo(
    () => activeFilter === "all" ? items : items.filter((item) => item.category === activeFilter),
    [items, activeFilter],
  );
  const selectedItem = selectedId ? filtered.find((item) => item.id === selectedId) ?? null : null;
  const selectedIndex = selectedItem ? filtered.findIndex((item) => item.id === selectedItem.id) : -1;

  function selectFilter(filter: FilterValue) {
    setActiveFilter(filter);
    setSelectedId(null);
  }

  function openLightbox(item: GalleryItem) {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setSelectedId(item.id);
  }

  function closeLightbox() {
    setSelectedId(null);
    window.requestAnimationFrame(() => lastFocusedRef.current?.focus());
  }

  function showPrevious() {
    if (selectedIndex < 0 || filtered.length < 2) return;
    setSelectedId(filtered[(selectedIndex - 1 + filtered.length) % filtered.length].id);
  }

  function showNext() {
    if (selectedIndex < 0 || filtered.length < 2) return;
    setSelectedId(filtered[(selectedIndex + 1) % filtered.length].id);
  }

  useEffect(() => {
    if (!selectedItem) {
      if (wasOpenRef.current) {
        document.body.style.overflow = "";
        wasOpenRef.current = false;
      }
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    wasOpenRef.current = true;
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
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
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // The selected image controls the open dialog and its keyboard navigation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, filtered.length]);

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter gallery">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            aria-pressed={activeFilter === filter.value}
            className={activeFilter === filter.value ? styles.filterActive : styles.filter}
            onClick={() => selectFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={styles.item}
            data-category={item.category}
            onClick={() => openLightbox(item)}
            aria-label={`Open image: ${item.title}`}
          >
            <span className={styles.itemInner}>
              <span className={styles.imageWrap}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  className={styles.image}
                  sizes="(min-width: 1100px) 31vw, (min-width: 680px) 47vw, 94vw"
                />
              </span>
              <span className={styles.itemInfo}>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.itemCaption}>{item.caption}</span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {selectedItem ? (
        <div className={styles.overlay} onClick={(event) => {
          if (event.target === event.currentTarget) closeLightbox();
        }}>
          <div
            ref={dialogRef}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.close}
              onClick={closeLightbox}
              aria-label="Close image preview"
            >
              <span aria-hidden="true">×</span>
            </button>

            <div className={styles.dialogBody} key={selectedItem.id}>
              <div className={styles.modalImageWrap}>
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className={styles.modalImage}
                  sizes="(min-width: 900px) 76vw, 92vw"
                />
              </div>
              <div className={styles.modalCopy}>
                <p className={styles.modalType}>
                  {selectedItem.category === "prompt" ? "Prompt sheet" :
                    selectedItem.category === "in-progress" ? "In progress" : "Drawing"}
                </p>
                <h2 id="lightbox-title">{selectedItem.title}</h2>
                <p>{selectedItem.caption}</p>
              </div>
            </div>

            {filtered.length > 1 ? (
              <div className={styles.dialogControls}>
                <button type="button" onClick={showPrevious} aria-label="Previous image">
                  <span aria-hidden="true">←</span> Previous
                </button>
                <button type="button" onClick={showNext} aria-label="Next image">
                  Next <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
