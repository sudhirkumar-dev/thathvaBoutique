"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/config/siteConfig";

export default function InstagramSection() {
  const { copy } = siteConfig.instagramSection;
  const feed = siteConfig.images?.instagram || [];

  return (
    <Reveal
      as="section"
      id="instagram"
      aria-labelledby="instagram-heading"
      className="bg-sand/45"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-36 lg:px-14">
        {/* Header */}
        <div className="text-center">
          <div className="reveal mx-auto mb-10 flex max-w-xs items-center justify-center gap-5">
            <span className="rule reveal-line" />
            <span className="eyebrow whitespace-nowrap text-gold">Instagram</span>
            <span className="rule reveal-line" />
          </div>

          <h2
            id="instagram-heading"
            className="display reveal mx-auto max-w-5xl"
            style={{ fontSize: "clamp(2.6rem, 8vw, 7.5rem)" }}
          >
            FOLLOW
            <br />
            <span className="italic">THE TATHVA EDIT</span>
          </h2>

          <p className="reveal mx-auto mt-8 max-w-md text-base font-light leading-relaxed text-charcoal/80">
            {copy}
          </p>
        </div>

        {/* Curated Social Feed Grid */}
        {feed.length > 0 && (
          <div className="reveal mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6 lg:gap-4">
            {feed.map((item, idx) => (
              <motion.a
                key={item.src}
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-espresso/10 shadow-md ring-1 ring-gold/20"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Subtle bottom gradient on idle */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-0" />

                {/* Hover luxury overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-espresso/70 p-4 text-center opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/15 text-ivory">
                    <Instagram size={18} strokeWidth={1.5} />
                  </div>
                  <span className="eyebrow mt-3 text-[0.6rem] text-gold tracking-widest">
                    {item.category}
                  </span>
                  <p className="display mt-1 text-sm font-medium text-ivory line-clamp-2">
                    {item.title}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[0.62rem] font-sans uppercase tracking-wider text-sand/90">
                    View on IG <ArrowUpRight size={12} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="reveal mt-14 text-center">
          <motion.a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="btn btn-dark"
          >
            Follow {siteConfig.instagramHandle}
            <ArrowUpRight size={16} strokeWidth={1.25} />
          </motion.a>
        </div>
      </div>
    </Reveal>
  );
}
