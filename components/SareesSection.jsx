import CategorySection from "./CategorySection";
import { siteConfig } from "@/config/siteConfig";

/**
 * CSS-only composition: layered vertical "drape" bands echoing a pleated
 * saree fall. Purely decorative; no product claims implied.
 */
function DrapeArt() {
  const bands = [
    "from-rose/70 to-rose/20",
    "from-sand to-sand/30",
    "from-gold/60 to-gold/10",
    "from-taupe/70 to-taupe/15",
    "from-sand to-ivory",
    "from-rose/60 to-rose/10",
    "from-espresso/80 to-espresso/20",
  ];
  return (
    <div className="relative h-full w-full overflow-hidden border border-gold/30">
      <div className="absolute inset-0 flex">
        {bands.map((b, i) => (
          <div
            key={i}
            className={`h-full flex-1 bg-gradient-to-b ${b}`}
          />
        ))}
      </div>
      {/* soft diagonal light sweep */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(247,243,238,0.35) 50%, transparent 70%)",
        }}
      />
      <div className="absolute inset-3 border border-ivory/50" />
    </div>
  );
}

export default function SareesSection() {
  return (
    <CategorySection
      id="sarees"
      item={siteConfig.collections[0]}
      imageKey="sarees"
      theme="ivory"
      align="left"
      art={<DrapeArt />}
    />
  );
}
