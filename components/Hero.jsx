"use client";

import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useGsap } from "@/hooks/useGsap";

export default function Hero() {
  const root = useRef(null);
  const bgRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const scrollCueRef = useRef(null);

  useGsap(root, ({ gsap }) => {
    // ---- Intro (on load) -------------------------------------------------
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .fromTo(
        bgRef.current,
        { scale: 1.16 },
        { scale: 1.08, duration: 2.2, ease: "power2.out" },
        0
      )
      .from(".hero-eyebrow", { opacity: 0, y: 20, duration: 1 }, 0.4)
      .from(
        ".hero-line > span",
        { yPercent: 110, duration: 1.3, stagger: 0.14, ease: "power4.out" },
        0.5
      )
      .from(".hero-rule", { scaleX: 0, duration: 1.4, ease: "power3.inOut" }, 0.9)
      .from(copyRef.current, { opacity: 0, y: 24, duration: 1 }, 1.1)
      .from(".hero-cta", { opacity: 0, y: 20, duration: 1, stagger: 0.12 }, 1.3)
      .from(scrollCueRef.current, { opacity: 0, duration: 1 }, 1.8);

    // ---- Scroll scrub (cinematic exit) ----------------------------------
    // Uses fromTo with immediateRender:false so the intro's inline styles are
    // not clobbered before the user has scrolled.
    const scrub = {
      trigger: root.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    };

    gsap.fromTo(
      bgRef.current,
      { scale: 1.08, yPercent: 0 },
      { scale: 1, yPercent: -12, ease: "none", scrollTrigger: scrub, immediateRender: false }
    );

    gsap.fromTo(
      headingRef.current,
      { y: 0, opacity: 1 },
      { y: -100, opacity: 0, ease: "none", scrollTrigger: scrub, immediateRender: false }
    );

    gsap.fromTo(
      copyRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        ease: "none",
        immediateRender: false,
        scrollTrigger: { ...scrub, end: "60% top" },
      }
    );

    gsap.to(scrollCueRef.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: { ...scrub, end: "20% top" },
    });
  }, []);

  const boutique = siteConfig.images.hero || siteConfig.images.boutique;

  return (
    <section
      id="top"
      ref={root}
      className="hero-root relative w-full overflow-hidden bg-espresso text-ivory"
    >
      {/* ---------------- Layer 1: background ---------------- */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "scale(1.08)" }}
        aria-hidden="true"
      >
        {boutique ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={boutique}
            alt="TATHVA Boutique Storefront"
            className="h-full w-full object-cover object-[center_35%] md:object-center"
            fetchPriority="high"
          />
        ) : (
          <HeroFallback />
        )}
      </div>

      {/* ---------------- Layer 2: warm overlay ---------------- */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(36,29,26,0.92) 0%, rgba(36,29,26,0.6) 40%, rgba(36,29,26,0.25) 70%, rgba(36,29,26,0.45) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(36,29,26,0.85) 0%, rgba(36,29,26,0.45) 45%, rgba(36,29,26,0.15) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(183,155,148,0.45), transparent 60%)",
        }}
      />
      <div aria-hidden="true" className="grain grain-light absolute inset-0" />

      {/* ---------------- Layer 3: typography + CTA ---------------- */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-24 pt-28 md:px-10 md:pb-24 md:pt-32 lg:px-14">
        <div ref={headingRef} className="max-w-5xl">
          <p className="hero-eyebrow eyebrow mb-6 text-sand md:mb-8">
            Women&rsquo;s Fashion Boutique
          </p>

          <h1
            className="display text-ivory"
            aria-label={siteConfig.tagline}
            style={{ fontSize: "var(--hero-fs)" }}
          >
            {["TRADITION", "MEETS", "TREND"].map((word, i) => (
              <span
                key={word}
                className="hero-line block overflow-hidden pb-[0.06em]"
                aria-hidden="true"
              >
                <span
                  className={`block ${i === 1 ? "italic text-sand lg:pl-[1.4em]" : ""}`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <span className="hero-rule rule mt-8 max-w-[220px] md:mt-10" />
        </div>

        <div ref={copyRef} className="mt-8 max-w-md md:mt-10">
          <p className="text-[0.95rem] font-light leading-relaxed text-ivory/85 md:text-base">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#collections" className="hero-cta btn btn-solid">
              Explore Collections
            </a>
            <a href="#visit" className="hero-cta btn btn-ghost">
              Visit TATHVA
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-ivory/80 md:flex md:right-10 lg:right-14"
      >
        <span className="eyebrow">Scroll</span>
        <ArrowDown size={14} strokeWidth={1.25} />
      </div>
    </section>
  );
}

/**
 * CSS-only atmosphere used until a real boutique photograph is supplied.
 * Warm gradients + soft lighting + a fine gold line. No images, no network.
 */
function HeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #302b29 0%, #241d1a 45%, #3a2f2a 100%)",
        }}
      />
      {/* warm pooled light, upper right (like a boutique window) */}
      <div
        className="absolute -right-[10%] -top-[15%] h-[85vh] w-[85vh] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(216,200,184,0.55) 0%, rgba(183,155,148,0.22) 40%, transparent 70%)",
        }}
      />
      {/* secondary rose glow, lower left */}
      <div
        className="absolute -bottom-[25%] -left-[10%] h-[70vh] w-[70vh] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(183,155,148,0.4) 0%, transparent 70%)",
        }}
      />
      {/* architectural arch outline: evokes a boutique doorway */}
      <div
        className="absolute right-[8%] top-[14%] hidden h-[62%] w-[26%] rounded-t-full border border-gold/30 lg:block"
      />
      <div
        className="absolute right-[10.5%] top-[17%] hidden h-[59%] w-[21%] rounded-t-full border border-sand/15 lg:block"
      />
      {/* vertical gold hairline */}
      <div className="absolute bottom-0 left-[6%] top-0 hidden w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:block" />
    </div>
  );
}
