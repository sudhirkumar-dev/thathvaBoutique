"use client";

import { useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// useLayoutEffect warns during SSR/static export; fall back to useEffect on server.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Runs `setup` inside a gsap.context scoped to `scopeRef`, using gsap.matchMedia
 * so desktop / mobile / reduced-motion each get their own animation set and are
 * reverted cleanly on unmount or breakpoint change.
 *
 * setup receives ({ gsap, ScrollTrigger, isDesktop, isMobile, reduce }).
 */
export function useGsap(scopeRef, setup, deps = []) {
  useIsoLayoutEffect(() => {
    if (!scopeRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, isMobile, reduce } = context.conditions;
        // Reduced motion: leave everything in its final, static state.
        if (reduce) return;
        return setup({ gsap, ScrollTrigger, isDesktop, isMobile, reduce }, scopeRef.current);
      },
      scopeRef
    );

    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export { gsap, ScrollTrigger };
