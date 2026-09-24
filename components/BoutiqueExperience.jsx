import Reveal from "./Reveal";
import { siteConfig } from "@/config/siteConfig";

export default function BoutiqueExperience() {
  const image = siteConfig.images.boutique;

  return (
    <Reveal
      as="section"
      aria-labelledby="experience-heading"
      className="grain grain-light relative isolate overflow-hidden bg-espresso text-ivory"
    >
      {/* background: real boutique photo if supplied, else CSS composition */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {image ? (
          <div className="reveal-img h-full w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt="TATHVA Boutique Experience"
              loading="lazy"
              className="h-full w-full object-cover object-[center_35%]"
            />
          </div>
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #241d1a 0%, #302b29 55%, #3a2f2a 100%)",
              }}
            />
            <div
              className="absolute -left-[10%] top-[10%] h-[80vh] w-[80vh] rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(166,138,91,0.35) 0%, transparent 65%)",
              }}
            />
            <div
              className="absolute -bottom-[20%] right-[5%] h-[70vh] w-[70vh] rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(183,155,148,0.4) 0%, transparent 70%)",
              }}
            />
            <div className="absolute inset-y-0 right-[12%] hidden w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block" />
          </>
        )}
        {image && <div className="absolute inset-0 bg-espresso/60" />}
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-[1600px] flex-col justify-center px-6 py-28 md:px-10 md:py-40 lg:px-14">
        <div className="reveal mb-10 flex items-center gap-5">
          <span className="eyebrow text-gold">The Boutique</span>
          <span className="rule reveal-line max-w-[90px]" />
        </div>

        <h2
          id="experience-heading"
          className="display reveal"
          style={{ fontSize: "clamp(2.6rem, 7vw, 6.5rem)" }}
        >
          THE TATHVA
          <br />
          <span className="italic text-sand">EXPERIENCE</span>
        </h2>

        <p className="reveal mt-12 max-w-xl font-serif text-[1.7rem] italic leading-[1.35] text-ivory/90 md:text-[2.1rem]">
          {siteConfig.experience.lines.map((line, i) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </Reveal>
  );
}
