"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/config/siteConfig";

/**
 * Editorial category section shared by Sarees / Suits / Kurtis / Indo-Western /
 * Lehengas. Supports multi-look interactive lookbooks with authentic client photography.
 *
 * theme: "ivory" | "sand" | "espresso"
 * align: "left" | "right"  (which side the type sits on at desktop)
 * art:   optional CSS composition node used when no photograph is supplied
 */
const themes = {
  ivory: {
    bg: "bg-ivory",
    text: "text-espresso",
    muted: "text-charcoal/65",
    rule: "bg-gold",
    index: "text-gold",
    cardBg: "bg-espresso/5",
    border: "border-espresso/10",
  },
  sand: {
    bg: "bg-sand/45",
    text: "text-espresso",
    muted: "text-charcoal/70",
    rule: "bg-gold",
    index: "text-gold",
    cardBg: "bg-sand/50",
    border: "border-espresso/10",
  },
  espresso: {
    bg: "bg-espresso",
    text: "text-ivory",
    muted: "text-sand",
    rule: "bg-gold",
    index: "text-gold",
    cardBg: "bg-ivory/5",
    border: "border-ivory/15",
  },
};

export default function CategorySection({
  id,
  item,
  imageKey,
  theme = "ivory",
  align = "left",
  art,
}) {
  const t = themes[theme];
  const galleryRaw = siteConfig.images?.gallery?.[imageKey] || [];
  const singleImage = siteConfig.images?.[imageKey];
  const looks =
    galleryRaw.length > 0
      ? galleryRaw
      : singleImage
      ? [{ src: singleImage, title: item.title, look: "Look 01" }]
      : [];

  const [activeIdx, setActiveIdx] = useState(0);
  const right = align === "right";
  const currentLook = looks[activeIdx] || looks[0];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? looks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === looks.length - 1 ? 0 : prev + 1));
  };

  return (
    <Reveal
      as="section"
      id={`${id}-section`}
      aria-labelledby={`${id}-title`}
      className={`relative overflow-hidden ${t.bg} ${t.text} ${
        theme === "espresso" ? "grain grain-light" : ""
      }`}
    >
      <div className="mx-auto grid min-h-[85vh] max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:gap-12 lg:px-14">
        {/* Type Column */}
        <div
          className={`relative z-10 min-w-0 ${
            right ? "lg:col-span-6 lg:col-start-7 lg:row-start-1" : "lg:col-span-6 lg:col-start-1 lg:row-start-1"
          }`}
        >
          <div className="reveal mb-8 flex items-center gap-5">
            <span className={`eyebrow ${t.index}`}>{item.index}</span>
            <span className={`rule reveal-line max-w-[90px] ${t.rule}`} />
            <span className={`eyebrow ${t.muted}`}>The Collection</span>
          </div>

          <h2
            id={`${id}-title`}
            className="display reveal"
            style={{ fontSize: "clamp(3.2rem, min(8.5vw, 14svh), 8.5rem)" }}
          >
            {item.lines.map((line, i) => (
              <span
                key={line}
                className={`block ${i === 1 ? "italic" : ""}`}
              >
                {line}
              </span>
            ))}
          </h2>

          <p
            className={`reveal mt-8 max-w-md font-serif text-2xl italic leading-snug md:text-[1.7rem] ${t.muted}`}
          >
            {item.copy}
          </p>

          {/* Social Enquire & Look Counter */}
          <div className={`reveal mt-10 flex flex-wrap items-center gap-5 pt-6 border-t ${t.border}`}>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={theme === "espresso" ? "btn btn-solid" : "btn btn-dark"}
            >
              Enquire This Look
            </a>
            {looks.length > 1 && (
              <span className={`eyebrow ${t.muted} text-[0.68rem]`}>
                0{looks.length} Signature Looks in Boutique
              </span>
            )}
          </div>
        </div>

        {/* Visual Column */}
        <div
          className={`relative min-w-0 ${
            right ? "lg:col-span-6 lg:col-start-1 lg:row-start-1" : "lg:col-span-6 lg:col-start-7 lg:row-start-1"
          }`}
        >
          {currentLook ? (
            <div className="flex flex-col gap-4">
              {/* Main Focal Frame */}
              <div className="reveal-img relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-espresso/5 shadow-2xl ring-1 ring-gold/25 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentLook.src}
                    src={currentLook.src}
                    alt={currentLook.title || item.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>

                {/* Subtle gradient vignette at bottom */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-espresso/90 via-espresso/35 to-transparent"
                />

                {/* Bottom title & look count */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-ivory">
                  <div>
                    <span className="eyebrow text-gold text-[0.65rem] tracking-wider block">
                      {currentLook.look || `Look 0${activeIdx + 1}`}
                    </span>
                    <span className="display text-xl md:text-2xl text-ivory font-normal leading-tight block mt-1">
                      {currentLook.title}
                    </span>
                  </div>

                  <span className="eyebrow text-sand text-[0.65rem] bg-espresso/70 px-3 py-1.5 rounded backdrop-blur-md border border-sand/20">
                    0{activeIdx + 1} / 0{looks.length}
                  </span>
                </div>

                {/* Mobile/Tablet Prev/Next Arrows overlay */}
                {looks.length > 1 && (
                  <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none md:hidden">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous look"
                      className="pointer-events-auto h-9 w-9 rounded-full bg-espresso/70 text-ivory backdrop-blur-sm flex items-center justify-center border border-sand/20 hover:bg-espresso"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next look"
                      className="pointer-events-auto h-9 w-9 rounded-full bg-espresso/70 text-ivory backdrop-blur-sm flex items-center justify-center border border-sand/20 hover:bg-espresso"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </div>

              {/* Multi-Look Interactive Thumbnail Strip */}
              {looks.length > 1 && (
                <div className="flex items-center justify-between gap-4 pt-1">
                  <div className="flex items-center gap-3">
                    <span className={`eyebrow ${t.muted} text-[0.65rem] shrink-0 mr-1`}>
                      Select Look:
                    </span>
                    {looks.map((look, idx) => {
                      const isActive = idx === activeIdx;
                      return (
                        <button
                          key={look.src}
                          type="button"
                          onClick={() => setActiveIdx(idx)}
                          aria-label={`View ${look.look || `Look ${idx + 1}`}: ${look.title}`}
                          className={`group relative h-20 w-16 md:h-22 md:w-18 overflow-hidden rounded-sm transition-all duration-300 ${
                            isActive
                              ? "ring-2 ring-gold scale-105 shadow-lg"
                              : "opacity-60 hover:opacity-100 ring-1 ring-espresso/15"
                          }`}
                        >
                          <img
                            src={look.src}
                            alt=""
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <span
                            className={`absolute bottom-0 inset-x-0 text-center text-[0.58rem] font-sans uppercase tracking-wider py-0.5 ${
                              isActive
                                ? "bg-gold text-espresso font-semibold"
                                : "bg-espresso/80 text-ivory"
                            }`}
                          >
                            0{idx + 1}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Desktop Quick Nav Arrows */}
                  <div className="hidden items-center gap-2 md:flex">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous look"
                      className="h-9 w-9 rounded-full border border-espresso/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next look"
                      className="h-9 w-9 rounded-full border border-espresso/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={`reveal aspect-[4/5] w-full max-w-md ${right ? "" : "lg:ml-auto"}`}>
              {art}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
