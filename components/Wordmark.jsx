import { siteConfig } from "@/config/siteConfig";

/**
 * Brand Wordmark component.
 * Displays the authentic TATHVA emblem badge alongside the signature typography.
 */
export default function Wordmark({ className = "" }) {
  if (siteConfig.images.logo) {
    return (
      <span className="inline-flex items-center gap-3 group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteConfig.images.logo}
          alt={siteConfig.name}
          className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover ring-1 ring-gold/40 shadow-sm transition-transform duration-300 group-hover:scale-105"
        />
        <span
          className={`display inline-block text-[1.45rem] font-medium tracking-[0.38em] md:text-[1.75rem] transition-colors ${className}`}
        >
          {siteConfig.name}
        </span>
      </span>
    );
  }

  return (
    <span
      className={`display inline-block text-[1.65rem] font-medium tracking-[0.42em] md:text-[1.85rem] ${className}`}
    >
      {siteConfig.name}
    </span>
  );
}
