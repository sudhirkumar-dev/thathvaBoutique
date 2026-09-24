import CategorySection from "./CategorySection";
import { siteConfig } from "@/config/siteConfig";

/**
 * Minimal composition: a single tall arch with a fine inner line on warm
 * taupe. Intentionally restrained, per the brief ("keep visual treatment minimal").
 */
function SilhouetteArt() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-ivory to-sand/70">
      <div className="absolute inset-x-[18%] bottom-0 top-[10%] rounded-t-full border border-taupe/50" />
      <div className="absolute inset-x-[24%] bottom-0 top-[16%] rounded-t-full bg-gradient-to-b from-taupe/25 to-taupe/5" />
      <div className="absolute bottom-6 left-1/2 h-px w-16 -translate-x-1/2 bg-gold" />
    </div>
  );
}

export default function SuitsSection() {
  return (
    <CategorySection
      id="suits"
      item={siteConfig.collections[1]}
      imageKey="suits"
      theme="sand"
      align="right"
      art={<SilhouetteArt />}
    />
  );
}
