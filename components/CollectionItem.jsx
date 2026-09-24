"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

/**
 * A single row in the interactive collection index.
 *
 * Hover / focus:
 *  - title grows
 *  - gold line draws across
 *  - row background warms slightly
 *  - if a local image exists for this category, it is revealed on the right
 *
 * Works fully without images. Framer Motion handles the hover micro-interaction
 * (UI concern); GSAP handles scroll-driven reveals elsewhere.
 */
export default function CollectionItem({ item, imageKey, active, onActivate, onDeactivate }) {
  const image = siteConfig.images[imageKey];

  return (
    <li className="stagger-item">
      <a
        href={`#${item.id}-section`}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        className="group relative block overflow-hidden border-t border-espresso/15 last:border-b"
      >
        {/* warm background wash */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 bg-sand/40"
          initial={false}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="relative flex items-center justify-between gap-6 px-1 py-7 md:px-4 md:py-9">
          <div className="flex items-center gap-5 md:gap-10">
            <span className="eyebrow w-8 text-gold md:w-10">{item.index}</span>

            <motion.span
              className="display block origin-left text-[2.1rem] text-espresso md:text-[3.4rem] lg:text-[4.2rem]"
              initial={false}
              animate={{
                scale: active ? 1.06 : 1,
                x: active ? 14 : 0,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.title.toUpperCase()}
            </motion.span>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            {image && (
              <motion.div
                aria-hidden="true"
                className="h-24 w-20 overflow-hidden"
                initial={false}
                animate={{
                  opacity: active ? 1 : 0,
                  clipPath: active ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
              </motion.div>
            )}

            <motion.span
              className="eyebrow text-gold"
              initial={false}
              animate={{ opacity: active ? 1 : 0, x: active ? 0 : -10 }}
              transition={{ duration: 0.5 }}
            >
              View →
            </motion.span>
          </div>
        </div>

        {/* gold line that draws on hover */}
        <motion.span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-gold"
          initial={false}
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </a>
    </li>
  );
}
