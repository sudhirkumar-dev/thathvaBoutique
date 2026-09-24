import CategorySection from "./CategorySection";
import { siteConfig } from "@/config/siteConfig";

/**
 * Statement composition: concentric flared arcs, suggesting the sweep of a
 * skirt. Rich rose/gold on ivory for an occasion-wear feel.
 */
function FlareArt() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-ivory via-sand/60 to-rose/50">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 rounded-[50%] border border-gold/50"
          style={{
            width: `${40 + i * 22}%`,
            height: `${18 + i * 12}%`,
            bottom: `${-6 - i * 2}%`,
            transform: "translateX(-50%)",
            opacity: 1 - i * 0.14,
          }}
        />
      ))}
      <div className="absolute left-1/2 top-[14%] h-[30%] w-px bg-gold/70" />
      <div className="absolute left-1/2 top-[12%] h-2 w-2 -translate-x-1/2 rounded-full bg-gold" />
    </div>
  );
}

export default function LehengasSection() {
  return (
    <CategorySection
      id="lehengas"
      item={siteConfig.collections[4]}
      imageKey="lehengas"
      theme="sand"
      align="left"
      art={<FlareArt />}
    />
  );
}
