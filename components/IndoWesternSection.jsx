import CategorySection from "./CategorySection";
import { siteConfig } from "@/config/siteConfig";

/**
 * Contrast composition on espresso: a split panel, half traditional arch,
 * half straight modern edge, joined by a gold line. A quiet visual nod to
 * "tradition meets trend" without any invented product detail.
 */
function SplitArt() {
  return (
    <div className="relative h-full w-full overflow-hidden border border-gold/40">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-b from-charcoal to-espresso">
        <div className="absolute inset-x-[14%] bottom-0 top-[14%] rounded-t-full border border-sand/40" />
      </div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-b from-rose/50 to-rose/10">
        <div className="absolute inset-x-[14%] bottom-0 top-[14%] border border-ivory/40" />
      </div>
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold" />
    </div>
  );
}

export default function IndoWesternSection() {
  return (
    <CategorySection
      id="indo-western"
      item={siteConfig.collections[3]}
      imageKey="indoWestern"
      theme="espresso"
      align="right"
      art={<SplitArt />}
    />
  );
}
