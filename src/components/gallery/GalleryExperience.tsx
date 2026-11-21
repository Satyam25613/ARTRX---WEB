"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { GalleryCategory, GalleryItem } from "@/lib/types";
import styles from "./GalleryExperience.module.css";

type FilterValue = GalleryCategory | "all";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All pages" },
  { value: "prompt", label: "Prompt sheets" },
  { value: "in-progress", label: "In progress" },
  { value: "drawing", label: "Finished drawings" },
];

const COLLECTION_STORIES: {
  value: GalleryCategory;
  eyebrow: string;
  title: string;
  description: string;
}[] = [
  {
    value: "prompt",
    eyebrow: "Illustrated prompts",
    title: "Start with a question.",
    description:
      "Each page begins with a familiar idea and leaves the answer open. The drawing can go anywhere its maker takes it.",
  },
  {
    value: "in-progress",
    eyebrow: "In the making",
    title: "See an idea take shape.",
    description:
      "A first line, a favorite color, one more detail. These pages show the small choices that make a drawing personal.",
  },
  {
    value: "drawing",
    eyebrow: "Finished drawings",
    title: "A page all their own.",
    description:
      "The finished drawings keep each artist's point of view in the foreground, in every line and color.",
  },
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
        {FILTERS.map((filter) => {
          const count = filter.value === "all"
            ? items.length
            : items.filter((item) => item.category === filter.value).length;

          return (
            <button
              key={filter.value}
              type="button"
              aria-pressed={activeFilter === filter.value}
              aria-label={`${filter.label}, ${count} ${count === 1 ? "image" : "images"}`}
              className={activeFilter === filter.value ? styles.filterActive : styles.filter}
              onClick={() => selectFilter(filter.value)}
            >
              <span>{filter.label}</span>
              <span className={styles.filterCount} aria-hidden="true">{count}</span>
            </button>
          );
        })}
      </div>

      {COLLECTION_STORIES
        .filter((story) => activeFilter === "all" || story.value === activeFilter)
        .map((story) => {
          const storyItems = items.filter((item) => item.category === story.value);
          if (storyItems.length === 0) return null;

          return (
            <section
              key={story.value}
              className={styles.collection}
              data-story={story.value}
              aria-labelledby={`gallery-${story.value}-title`}
            >
              <header className={styles.collectionHeading}>
                <p className={styles.collectionEyebrow}>{story.eyebrow}</p>
                <h2 id={`gallery-${story.value}-title`}>{story.title}</h2>
                <p className={styles.collectionDescription}>{story.description}</p>
              </header>

              <div className={styles.grid}>
                {storyItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={styles.item}
                    data-category={item.category}
                    style={{ animationDelay: `${Math.min(index, 8) * 42}ms` }}
                    onClick={() => openLightbox(item)}
                    aria-label={`Open image: ${item.title}`}
                  >
                    <span className={styles.itemInner}>
                      <span className={styles.imageWrap}>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          loading={item.id === filtered[0]?.id ? "eager" : "lazy"}
                          className={styles.image}
                          sizes={index === 0
                            ? "(min-width: 1100px) 62vw, (min-width: 680px) 96vw, 94vw"
                            : "(min-width: 1100px) 31vw, (min-width: 680px) 47vw, 94vw"}
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
            </section>
          );
        })}

      {selectedItem && typeof document !== "undefined" ? createPortal(
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
        </div>,
        document.body,
      ) : null}
    </>
  );
}
