import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/whatsapp";
import { Flame, MessageCircle } from "lucide-react";
import productImg from "@/assets/product.jpg";

type Pack = {
  size: string;
  price: string;
  heat: 1 | 2 | 3 | 4 | 5;
  en: { use: string; tag: string };
  te: { use: string; tag: string };
  featured?: boolean;
};

const packs: Pack[] = [
  { size: "100 g", price: "₹60", heat: 3, en: { use: "Best for daily dal & curries", tag: "Trial Pack" }, te: { use: "రోజువారీ పప్పు & కూరలకు", tag: "ట్రయల్ ప్యాక్" } },
  { size: "250 g", price: "₹140", heat: 4, en: { use: "Perfect for biryani & pickles", tag: "Family Favourite" }, te: { use: "బిర్యానీ & ఊరగాయలకు", tag: "కుటుంబ ఇష్టం" }, featured: true },
  { size: "500 g", price: "₹260", heat: 4, en: { use: "Great for festive cooking", tag: "Best Value" }, te: { use: "పండుగ వంటకాలకు", tag: "మంచి విలువ" } },
  { size: "1 kg", price: "₹500", heat: 5, en: { use: "For big families & tiffin centres", tag: "Bulk Saver" }, te: { use: "పెద్ద కుటుంబాలు & టిఫిన్ సెంటర్లకు", tag: "హోల్‌సేల్" } },
  { size: "5 kg+", price: "On request", heat: 5, en: { use: "Kirana, hotels & sweet shops", tag: "Wholesale" }, te: { use: "కిరాణా, హోటళ్ళు & స్వీట్ షాపులకు", tag: "హోల్‌సేల్" } },
];

function HeatBar({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Flame
          key={i}
          className={`h-3.5 w-3.5 ${i < level ? "text-chilli fill-chilli" : "text-foreground/15"}`}
        />
      ))}
    </div>
  );
}

export function Products() {
  const { lang, tr } = useI18n();
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-chilli font-semibold mb-3">— Pure Chilli</div>
            <h2 className={`text-4xl sm:text-6xl font-display font-semibold tracking-tight ${lang === "te" ? "font-telugu" : ""}`}>{tr("products_title")}</h2>
            <p className={`mt-3 text-muted-foreground text-lg ${lang === "te" ? "font-telugu" : ""}`}>{tr("products_sub")}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {packs.map((p, i) => {
            const c = lang === "te" ? p.te : p.en;
            const msg =
              lang === "te"
                ? `నమస్తే! నేను ${p.size} బిజినపల్లి కారం ఆర్డర్ చేయాలనుకుంటున్నాను.`
                : `Hello! I'd like to order ${p.size} Bijnapally Karam chilli powder.`;
            return (
              <article
                key={p.size}
                className={`reveal group relative overflow-hidden rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1 ${
                  p.featured ? "lg:row-span-2 lg:col-span-1 bg-gradient-to-br from-chilli to-ember text-cream border-transparent" : ""
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {p.featured && (
                  <div className="absolute top-4 right-4 z-10 text-[10px] tracking-[0.2em] uppercase glass-dark text-cream px-2.5 py-1 rounded-full">
                    Bestseller
                  </div>
                )}
                <div className={`relative ${p.featured ? "aspect-[4/5]" : "aspect-[4/3]"} overflow-hidden`}>
                  <img
                    src={productImg}
                    alt={`Bijnapally Karam ${p.size}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${p.featured ? "bg-gradient-to-t from-chilli/80 via-chilli/20 to-transparent" : "bg-gradient-to-t from-background/40 to-transparent"}`} />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs uppercase tracking-wider font-semibold ${p.featured ? "text-cream/90" : "text-ember"}`}>
                      {c.tag}
                    </span>
                    <HeatBar level={p.heat} />
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className={`font-display text-2xl font-semibold ${p.featured ? "text-cream" : ""}`}>{p.size}</h3>
                    <span className={`font-display text-xl ${p.featured ? "text-turmeric" : "text-chilli"}`}>{p.price}</span>
                  </div>
                  <p className={`text-sm ${p.featured ? "text-cream/85" : "text-muted-foreground"} ${lang === "te" ? "font-telugu" : ""}`}>
                    {c.use}
                  </p>
                  <a
                    href={waLink(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                      p.featured ? "bg-cream text-chilli" : "bg-foreground text-background hover:bg-chilli hover:text-cream"
                    }`}
                  >
                    <MessageCircle className="h-4 w-4 fill-current" />
                    {tr("order_now")}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
