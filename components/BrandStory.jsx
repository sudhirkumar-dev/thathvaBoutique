import Reveal from "./Reveal";
import { siteConfig } from "@/config/siteConfig";

export default function BrandStory() {
  return (
    <Reveal
      as="section"
      id="about"
      aria-labelledby="perspective-heading"
      className="relative overflow-hidden bg-ivory"
    >
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 py-28 md:px-10 md:py-44 lg:grid-cols-12 lg:gap-8 lg:px-14">
        {/* LEFT: huge serif type */}
        <div className="min-w-0 lg:col-span-7">
          <div className="reveal mb-10 flex items-center gap-5">
            <span className="eyebrow text-gold">About</span>
            <span className="rule reveal-line max-w-[90px]" />
          </div>
          <h2
            id="perspective-heading"
            className="display reveal"
            style={{ fontSize: "clamp(2.9rem, min(8.4vw, 15svh), 8.5rem)" }}
          >
            <span className="whitespace-nowrap">THE TATHVA</span>
            <br />
            <span className="italic">PERSPECTIVE</span>
          </h2>
        </div>

        {/* RIGHT: short editorial paragraph */}
        <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
          <span className="rule reveal-line mb-8 max-w-[60px]" />
          <p className="reveal font-serif text-[1.7rem] leading-[1.35] text-espresso md:text-[2rem]">
            {siteConfig.perspective}
          </p>
          <p className="reveal eyebrow mt-10 text-taupe">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
