"use client";

import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";

/**
 * Scroll-triggered reveal wrapper (GSAP).
 *
 * Animates, inside the wrapper:
 *   .reveal        opacity 0 -> 1, y 50 -> 0
 *   .reveal-line   scaleX 0 -> 1  (decorative rules, width 0 -> 100%)
 *   .stagger-item  staggered fade-up
 *   .reveal-img    clip-path reveal + scale 1.08 -> 1 (only if images exist)
 *
 * Reduced-motion users skip all of this via useGsap and see the final state.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  start = "top 82%",
  ...rest
}) {
  const ref = useRef(null);

  useGsap(ref, ({ gsap }) => {
    const el = ref.current;
    const trigger = { trigger: el, start, once: true };

    const singles = el.querySelectorAll(".reveal");
    singles.forEach((node) => {
      gsap.from(node, {
        opacity: 0,
        y: 50,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: node, start, once: true },
      });
    });

    const lines = el.querySelectorAll(".reveal-line");
    lines.forEach((node) => {
      gsap.from(node, {
        scaleX: 0,
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: { trigger: node, start: "top 92%", once: true },
      });
    });

    const stagger = el.querySelectorAll(".stagger-item");
    if (stagger.length) {
      gsap.from(stagger, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: trigger,
      });
    }

    el.querySelectorAll(".reveal-img").forEach((node) => {
      const img = node.querySelector("img");
      gsap.from(node, {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.4,
        ease: "power4.inOut",
        scrollTrigger: { trigger: node, start: "top 85%", once: true },
      });
      if (img) {
        gsap.from(img, {
          scale: 1.08,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 85%", once: true },
        });
      }
    });
  }, []);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
