import Reveal from "./Reveal";
import { siteConfig } from "@/config/siteConfig";

/**
 * Renders only the contact fields that actually have values in siteConfig.
 * Nothing is invented: with all fields empty, the section shows the
 * Instagram route instead of a blank or fabricated address.
 */
export default function VisitSection() {
  const { address, phone, email } = siteConfig.visit;

  const rows = [
    address && { label: "Address", value: address, href: null },
    phone && { label: "Phone", value: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
    email && { label: "Email", value: email, href: `mailto:${email}` },
  ].filter(Boolean);

  return (
    <Reveal
      as="section"
      id="visit"
      aria-labelledby="visit-heading"
      className="bg-ivory"
    >
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 py-28 md:px-10 md:py-44 lg:grid-cols-12 lg:gap-8 lg:px-14">
        <div className="min-w-0 lg:col-span-7">
          <div className="reveal mb-10 flex items-center gap-5">
            <span className="eyebrow text-gold">Visit</span>
            <span className="rule reveal-line max-w-[90px]" />
          </div>
          <h2
            id="visit-heading"
            className="display reveal"
            style={{ fontSize: "clamp(2.9rem, min(8.4vw, 15svh), 8.5rem)" }}
          >
            VISIT
            <br />
            <span className="italic">TATHVA</span>
          </h2>
        </div>

        <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
          <span className="rule reveal-line mb-8 max-w-[60px]" />

          {rows.length > 0 ? (
            <dl className="reveal space-y-8">
              {rows.map((r) => (
                <div key={r.label}>
                  <dt className="eyebrow mb-2 text-taupe">{r.label}</dt>
                  <dd className="font-serif text-2xl leading-snug">
                    {r.href ? (
                      <a href={r.href} className="link-line">
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <div className="reveal">
              <p className="font-serif text-2xl italic leading-snug text-charcoal/80">
                Follow TATHVA on Instagram for the latest from the label.
              </p>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mt-8"
              >
                @tathva_label
              </a>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
