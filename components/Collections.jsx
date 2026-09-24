"use client";

import { useRef, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { useGsap } from "@/hooks/useGsap";
import Reveal from "./Reveal";
import CollectionItem from "./CollectionItem";

const imageKeys = ["sarees", "suits", "kurtis", "indoWestern", "lehengas"];

/**
 * Overview strip (desktop): a pinned horizontal glide through the five
 * categories. It is deliberately a *preview* (large index numeral + name +
 * one-line direction) rather than a repeat of the full category sections that
 * follow, so visitors do not scroll the same content twice.
 */
const panelStyles = [
  { bg: "bg-ivory", text: "text-espresso" },
  { bg: "bg-sand/60", text: "text-espresso" },
  { bg: "bg-ivory", text: "text-espresso" },
  { bg: "bg-espresso", text: "text-ivory" },
  { bg: "bg-sand/60", text: "text-espresso" },
];

export default function Collections() {
  const [active, setActive] = useState(null);

  const trackWrap = useRef(null);
  const track = useRef(null);
  const progress = useRef(null);

  // Desktop only: pin + translate. Mobile/tablet and reduced-motion skip this
  // (the strip is hidden below lg and the category sections stack naturally).
  useGsap(
    trackWrap,
    ({ gsap, isDesktop }) => {
      if (!isDesktop) return;

      const el = track.current;
      const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);

      gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: trackWrap.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      gsap.to(progress.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: trackWrap.current,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    },
    []
  );

  return (
    <section id="collections" aria-labelledby="collection-heading" className="bg-ivory">
      {/* ---------- Intro + interactive index ---------- */}
      <Reveal className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="reveal mb-8 flex items-center gap-5">
              <span className="eyebrow text-gold">The Edit</span>
              <span className="rule reveal-line max-w-[90px]" />
            </div>
            <h2
              id="collection-heading"
              className="display reveal"
              style={{ fontSize: "clamp(3.2rem, 10vw, 9rem)" }}
            >
              THE
              <br />
              <span className="italic">COLLECTION</span>
            </h2>
          </div>

          <p className="reveal self-end font-serif text-2xl italic leading-snug text-charcoal/80 md:text-[1.7rem] lg:col-span-4 lg:col-start-9">
            {siteConfig.collectionIntro}
          </p>
        </div>

        <ul className="mt-16 md:mt-24" aria-label="Collection categories">
          {siteConfig.collections.map((item, i) => (
            <CollectionItem
              key={item.id}
              item={item}
              imageKey={imageKeys[i]}
              active={active === item.id}
              onActivate={() => setActive(item.id)}
              onDeactivate={() => setActive(null)}
            />
          ))}
        </ul>
      </Reveal>

      {/* ---------- Horizontal overview strip (desktop only) ---------- */}
      <div
        ref={trackWrap}
        aria-hidden="true"
        className="relative hidden h-screen overflow-hidden lg:block"
      >
        <div ref={track} className="flex h-full w-max will-change-transform">
          {siteConfig.collections.map((item, i) => {
            const s = panelStyles[i];
            const imgKey = imageKeys[i];
            const catImg = siteConfig.images?.[imgKey];
            return (
              <div
                key={item.id}
                className={`relative flex h-full w-[70vw] shrink-0 items-center justify-between gap-10 border-r border-espresso/10 px-14 pb-20 pt-28 ${s.bg} ${s.text} ${
                  i === 3 ? "grain grain-light" : ""
                }`}
              >
                {/* Left Content */}
                <div className="flex h-full max-w-md flex-col justify-between">
                  <span className="eyebrow text-gold">{item.index} / 05</span>

                  <div>
                    <span
                      className="display block text-gold/60"
                      style={{ fontSize: "clamp(6rem, 14vw, 15rem)" }}
                    >
                      {item.index}
                    </span>
                    <h3
                      className="display -mt-4"
                      style={{ fontSize: "clamp(2.4rem, 4vw, 4.5rem)" }}
                    >
                      {item.title.toUpperCase()}
                    </h3>
                    <p className="mt-6 font-serif text-xl italic opacity-85">
                      {item.copy}
                    </p>
                  </div>

                  <a
                    href={`#${item.id}-section`}
                    className="eyebrow link-line text-gold inline-flex items-center gap-2"
                  >
                    Explore Collection →
                  </a>
                </div>

                {/* Right Category Image */}
                {catImg && (
                  <div className="relative aspect-[3/4] w-72 lg:w-80 xl:w-96 shrink-0 overflow-hidden rounded-sm shadow-2xl ring-1 ring-gold/25 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={catImg}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-ivory">
                      <span className="eyebrow text-gold text-xs tracking-wider">
                        {item.title}
                      </span>
                      <span className="eyebrow text-sand text-[0.6rem] bg-espresso/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* progress hairline */}
        <div className="pointer-events-none absolute inset-x-14 bottom-8 h-px bg-espresso/15">
          <span ref={progress} className="rule block origin-left scale-x-0" />
        </div>
      </div>
    </section>
  );
}
