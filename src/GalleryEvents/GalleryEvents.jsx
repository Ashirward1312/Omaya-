// src/GalleryEvents/GalleryEvents.jsx
import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  CalendarDays,
  Users,
  ImageIcon,
} from "lucide-react";

/* ── Gold accent (matches existing theme) ── */
const ACCENT = { from: "#C9A45C", to: "#8F613B" };

/* ── Import all events videos ── */
import evtVid1  from "../Images/event.mp4";
import evtVid2  from "../Images/event2.mp4";
import evtVid3  from "../Images/event3.mp4";
import evtVid4  from "../Images/event4.mp4";
import evtVid5  from "../Images/event5.mp4";
import evtVid6  from "../Images/event6.mp4";
import evtVid7  from "../Images/events1.mp4";
import evtVid8  from "../Images/events7.mp4";
import evtVid9  from "../Images/events8.mp4";
import evtVid10 from "../Images/events9.MOV";
import evtVid11 from "../Images/events10.MOV";
import evtImg12 from "../Images/events11.webp";

/* ── Import guests video ── */
import guestVid from "../Images/guests.MOV";

/* ─────────────────────────────────────────────
   MEDIA catalogue
───────────────────────────────────────────── */
const ALL_MEDIA = [
  // ── Events ──
  { id: "ev1",  type: "video", category: "events", src: evtVid1,  title: "Omaya Events Highlights" },
  { id: "ev2",  type: "video", category: "events", src: evtVid2,  title: "Grand Event Soirée" },
  { id: "ev3",  type: "video", category: "events", src: evtVid3,  title: "Celebration Night" },
  { id: "ev4",  type: "video", category: "events", src: evtVid4,  title: "Royal Banquet Evening" },
  { id: "ev5",  type: "video", category: "events", src: evtVid5,  title: "Private Gathering" },
  { id: "ev6",  type: "video", category: "events", src: evtVid6,  title: "Luxury Gala" },
  { id: "ev7",  type: "video", category: "events", src: evtVid7,  title: "Omaya Special Events" },
  { id: "ev8",  type: "video", category: "events", src: evtVid8,  title: "Evening Soirée" },
  { id: "ev9",  type: "video", category: "events", src: evtVid9,  title: "Exclusive Function" },
  { id: "ev10", type: "video", category: "events", src: evtVid10, title: "Memorable Moments" },
  { id: "ev11", type: "video", category: "events", src: evtVid11, title: "Grand Celebration" },
  { id: "ev12", type: "image", category: "events", src: evtImg12, title: "Special Moment" },

  // ── Guests ──
  { id: "gu1", type: "video", category: "guests", src: guestVid, title: "Our Cherished Guests" },
];

/* ── Filter tabs ── */
const FILTERS = [
  { id: "events", label: "Events", Icon: CalendarDays },
  { id: "guests", label: "Guests", Icon: Users },
];

/* ─────────────────────────────────────────────
   Reel (9:16 portrait) grid — no span needed,
   grid handles columns automatically
───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   Video Lightbox
───────────────────────────────────────────── */
function VideoLightbox({ item, onClose, onPrev, onNext, current, total }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-[91] w-full max-w-sm sm:max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F14] shadow-[0_50px_160px_-80px_rgba(0,0,0,0.95)]">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="min-w-0 flex items-center gap-3">
            {item.type === "image" ? (
              <ImageIcon size={18} className="text-[#C9A45C] shrink-0" />
            ) : (
              <PlayCircle size={18} className="text-[#C9A45C] shrink-0" />
            )}
            <div>
              <div className="text-[10px] font-extrabold uppercase text-[#C9A45C]">
                {item.category === "events" ? "OMAYA EVENTS" : "OUR GUESTS"}
              </div>
              <div className="mt-0.5 truncate text-sm font-semibold text-white">
                {item.title}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-xs font-semibold text-white/55">
              {current + 1} / {total}
            </div>
            <button
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition hover:bg-white/[0.08]"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Media area — video or image (9:16) */}
        <div className="relative bg-black">
          <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 h-full w-full bg-black object-contain"
              />
            ) : (
              <video
                key={item.src}
                src={item.src}
                autoPlay
                loop
                controls
                playsInline
                className="absolute inset-0 h-full w-full bg-black object-cover"
              />
            )}

            {/* ── Floating Close Button (top-right of media) ── */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md shadow-lg transition-all duration-200 hover:bg-red-600/80 hover:border-red-400/50 hover:scale-110 focus:outline-none"
              aria-label="Close lightbox"
              title="Close"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Prev */}
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-white/90 backdrop-blur transition hover:bg-black/65 focus:outline-none z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-white/90 backdrop-blur transition hover:bg-black/65 focus:outline-none z-10"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 px-5 py-3 sm:px-6">
          <div className="text-xs text-white/45">Use ← → keys • ESC to close</div>
          <div
            className="h-1 w-24 rounded-full"
            style={{ background: `linear-gradient(90deg, ${ACCENT.from}, ${ACCENT.to})` }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Media Card — handles both video & image (9:16)
───────────────────────────────────────────── */
function VideoCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = React.useRef(null);
  const isVideo  = item.type === "video";

  useEffect(() => {
    if (!videoRef.current || !isVideo) return;
    if (hovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered, isVideo]);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-black/40 shadow-[0_22px_80px_-60px_rgba(0,0,0,0.75)] outline-none focus-within:ring-2 focus-within:ring-[#C9A45C]/40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      title={isVideo ? "Play video" : "View photo"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* 9:16 aspect ratio wrapper */}
      <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
        {/* Gold top bar */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[3px] opacity-80"
          style={{ background: `linear-gradient(90deg, ${ACCENT.from}, ${ACCENT.to})` }}
        />

        {/* Media: video or image */}
        {isVideo ? (
          <video
            ref={videoRef}
            src={item.src}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-70" />

        {/* Center icon */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div
            className={[
              "flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 backdrop-blur-sm",
              "transition-all duration-300",
              hovered ? "scale-110 bg-white/20" : "scale-100 bg-black/40",
            ].join(" ")}
          >
            {isVideo ? (
              <PlayCircle
                size={28}
                className="text-[#C9A45C] drop-shadow-[0_2px_8px_rgba(201,164,92,0.6)]"
              />
            ) : (
              <ImageIcon
                size={24}
                className="text-[#C9A45C] drop-shadow-[0_2px_8px_rgba(201,164,92,0.6)]"
              />
            )}
          </div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-extrabold uppercase text-white/90 backdrop-blur-md">
            {isVideo ? (
              <PlayCircle size={11} className="text-[#C9A45C]" />
            ) : (
              <ImageIcon size={11} className="text-[#C9A45C]" />
            )}
            {isVideo
              ? (item.category === "events" ? "Event Video" : "Guest Reel")
              : "Event Photo"}
          </div>
          <div className="mt-2 text-xs font-medium text-white/70 line-clamp-1">
            {item.title}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main GalleryEvents Component
───────────────────────────────────────────── */
export default function GalleryEvents() {
  const [activeFilter, setActiveFilter] = useState("events");
  const [lbIndex, setLbIndex]           = useState(null);

  const filtered = useMemo(
    () => ALL_MEDIA.filter((m) => m.category === activeFilter),
    [activeFilter]
  );

  const openAt = useCallback((i) => setLbIndex(i), []);
  const close  = useCallback(() => setLbIndex(null), []);
  const prev   = useCallback(
    () => setLbIndex((i) => (i == null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const next   = useCallback(
    () => setLbIndex((i) => (i == null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );

  /* Reset lightbox when filter changes */
  useEffect(() => setLbIndex(null), [activeFilter]);

  return (
    <section
      id="gallery-events"
      className="relative overflow-hidden bg-[#0B0F14] pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36"
    >
      {/* ── Background glows ── */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[480px] w-[480px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#B58D56]/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center">
          <div className="mx-auto flex max-w-xs items-center justify-center gap-4">
            <span
              className="h-px flex-1"
              style={{ background: `linear-gradient(90deg, transparent, ${ACCENT.from})` }}
            />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C9A45C]">
              Gallery
            </span>
            <span
              className="h-px flex-1"
              style={{ background: `linear-gradient(90deg, ${ACCENT.from}, transparent)` }}
            />
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#F4F1E9] sm:text-5xl">
            Omaya{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT.from}, ${ACCENT.to})` }}
            >
              Moments
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Relive the magic of extraordinary events and cherished guest experiences
            captured at Omaya — where every moment becomes a lasting memory.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="mt-10 flex items-center justify-center gap-3" role="tablist">
          {FILTERS.map(({ id, label, Icon }) => {
            const on = activeFilter === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActiveFilter(id)}
                className={[
                  "group relative inline-flex items-center gap-2.5 rounded-2xl px-7 py-3",
                  "text-sm font-semibold tracking-wide transition-all duration-300",
                  "border overflow-hidden",
                  on
                    ? "text-white shadow-[0_8px_40px_-12px_rgba(201,164,92,0.6)] border-[#C9A45C]/40"
                    : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:bg-white/[0.06] hover:text-white/80",
                ].join(" ")}
                style={
                  on
                    ? { background: `linear-gradient(135deg, ${ACCENT.from}, ${ACCENT.to})` }
                    : undefined
                }
              >
                <Icon
                  size={17}
                  className={on ? "text-white" : "text-white/50 group-hover:text-white/70 transition"}
                />
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Stats bar ── */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/40">
          <span
            className="h-px w-8"
            style={{ background: `linear-gradient(90deg, transparent, ${ACCENT.from}66)` }}
          />
          <span>
            {filtered.length} {activeFilter === "events" ? "event" : "guest"}{" "}
            {filtered.length === 1 ? "item" : "items"} available
          </span>
          <span
            className="h-px w-8"
            style={{ background: `linear-gradient(90deg, ${ACCENT.from}66, transparent)` }}
          />
        </div>

        {/* ── Media Grid — portrait reel columns ── */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item, idx) => (
            <VideoCard
              key={item.id}
              item={item}
              onClick={() => openAt(idx)}
            />
          ))}
        </div>

        {/* ── Decorative divider ── */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ── Bottom tagline ── */}
        <div className="mt-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            Crafting Memories · One Event at a Time
          </p>
        </div>
      </div>

      {/* ── Video Lightbox ── */}
      {lbIndex !== null && filtered[lbIndex] && (
        <VideoLightbox
          item={filtered[lbIndex]}
          current={lbIndex}
          total={filtered.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}

