"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useGsap } from "@/hooks/useGsap";
import Wordmark from "./Wordmark";

const mobileLinks = [{ label: "Home", href: "#top" }, ...siteConfig.nav];

export default function Navbar() {
  const barRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // GSAP: scroll-driven navbar state (transparent -> ivory, reduced height).
  useGsap(barRef, ({ gsap, ScrollTrigger }) => {
    const bar = barRef.current;
    const st = ScrollTrigger.create({
      start: 80,
      end: "max",
      onUpdate: (self) => {
        // self.scroll() > 80 once past the start
        setScrolled(self.scroll() > 80);
      },
    });
    // set initial state in case the page loads mid-scroll
    setScrolled(window.scrollY > 80);
    gsap.set(bar, { yPercent: 0 });
    return () => st.kill();
  }, []);

  // Fallback for reduced-motion users (useGsap returns early for them).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const light = !scrolled && !open; // light text over the dark hero

  return (
    <>
      <header
        ref={barRef}
        className={[
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ease-luxe",
          scrolled
            ? "h-16 border-sand/60 bg-ivory/95 shadow-[0_1px_18px_rgba(36,29,26,0.06)] backdrop-blur-md"
            : "h-24 border-transparent bg-transparent",
        ].join(" ")}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14"
        >
          <a
            href="#top"
            aria-label="TATHVA home"
            className={`relative z-[60] transition-colors duration-500 ${
              light ? "text-ivory" : "text-espresso"
            }`}
          >
            <Wordmark />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-10 lg:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`eyebrow link-line transition-colors duration-500 ${
                    light ? "text-ivory" : "text-espresso"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`relative z-[60] -mr-2 flex h-12 w-12 items-center justify-center transition-colors duration-500 lg:hidden ${
              light ? "text-ivory" : open ? "text-ivory" : "text-espresso"
            }`}
          >
            {open ? <X size={26} strokeWidth={1.25} /> : <Menu size={26} strokeWidth={1.25} />}
          </button>
        </nav>
      </header>

      {/* Full-screen mobile overlay (Framer Motion: UI interaction) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grain grain-light fixed inset-0 z-40 flex flex-col justify-between bg-espresso px-8 pb-12 pt-32 text-ivory lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {mobileLinks.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.07,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-ivory/10"
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display flex min-h-[4.25rem] items-center justify-between py-3 text-[2.6rem]"
                  >
                    <span>{item.label.toUpperCase()}</span>
                    <span className="eyebrow text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <span className="display text-2xl italic text-sand">
                {siteConfig.tagline}
              </span>
              <span className="eyebrow text-taupe">{siteConfig.name}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
