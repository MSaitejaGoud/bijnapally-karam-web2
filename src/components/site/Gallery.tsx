import dryingImg from "@/assets/drying.jpg";
import grindingImg from "@/assets/grinding.jpg";
import farmImg from "@/assets/farm.jpg";
import productImg from "@/assets/product.jpg";
import { useI18n } from "@/lib/i18n";

const shots = [
  { img: farmImg, label: { en: "Village Farms", te: "గ్రామ పొలాలు" }, span: "md:col-span-2 md:row-span-2" },
  { img: dryingImg, label: { en: "Sun Drying", te: "ఎండ ఆరబెట్టడం" } },
  { img: grindingImg, label: { en: "Stone Mill", te: "రాతి మర" } },
  { img: productImg, label: { en: "Fresh Packed", te: "తాజా ప్యాకింగ్" }, span: "md:col-span-2" },
];

export function Gallery() {
  const { lang } = useI18n();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-chilli font-semibold mb-3">— Behind the Scenes</div>
          <h2 className="text-4xl sm:text-6xl font-display font-semibold tracking-tight">A look inside our mill</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] gap-4">
          {shots.map((s, i) => (
            <div
              key={i}
              className={`reveal relative overflow-hidden rounded-3xl group shadow-soft ${s.span ?? ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img src={s.img} alt={s.label.en} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className={`absolute bottom-4 left-4 right-4 text-cream font-display text-lg sm:text-xl ${lang === "te" ? "font-telugu" : ""}`}>
                {lang === "te" ? s.label.te : s.label.en}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
