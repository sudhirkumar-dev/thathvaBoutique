import { siteConfig } from "@/config/siteConfig";
import Wordmark from "./Wordmark";

export default function Footer() {
  const links = [
    { label: "Collections", href: "#collections" },
    { label: "About", href: "#about" },
    { label: "Visit", href: "#visit" },
    { label: "Instagram", href: "#instagram" },
  ];

  return (
    <footer className="grain grain-light relative overflow-hidden bg-espresso text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-28 md:px-10 md:pt-40 lg:px-14">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Wordmark className="!text-[2.4rem] md:!text-[3.2rem]" />
            <p className="display mt-6 text-2xl italic text-sand md:text-3xl">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4 lg:col-start-9">
            <ul className="space-y-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="eyebrow link-line text-ivory/85 hover:text-ivory">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-28 flex flex-col gap-3 border-t border-ivory/10 pt-8 md:mt-40 md:flex-row md:items-center md:justify-between">
          <span className="eyebrow text-taupe">© 2026 {siteConfig.name}</span>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow link-line text-taupe hover:text-ivory"
          >
            {siteConfig.instagramHandle}
          </a>
        </div>
      </div>
    </footer>
  );
}
