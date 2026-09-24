import CategorySection from "./CategorySection";
import { siteConfig } from "@/config/siteConfig";

/**
 * Soft, everyday composition: overlapping translucent circles in muted rose
 * and sand. Light and airy compared to the other sections.
 */
function SoftCirclesArt() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-ivory ring-1 ring-sand">
      <div className="absolute -left-[15%] top-[8%] h-[70%] w-[70%] rounded-full bg-rose/45" />
      <div className="absolute -right-[10%] top-[30%] h-[65%] w-[65%] rounded-full bg-sand/80 mix-blend-multiply" />
      <div className="absolute bottom-[6%] left-[20%] h-[40%] w-[40%] rounded-full border border-gold/60" />
    </div>
  );
}

export default function KurtisSection() {
  return (
    <CategorySection
      id="kurtis"
      item={siteConfig.collections[2]}
      imageKey="kurtis"
      theme="ivory"
      align="left"
      art={<SoftCirclesArt />}
    />
  );
}
