import { useI18n } from "@/lib/i18n";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Lakshmi Devi",
    place: "Hyderabad",
    role: { en: "Home Cook", te: "గృహిణి" },
    en: "The colour and aroma reminds me of my mother's kitchen in our village. No store-bought powder comes close.",
    te: "ఈ కారం రంగు, వాసన మా అమ్మ వంటింటిని గుర్తుచేస్తుంది. షాపులో దొరికే ఏ పొడీ దీనికి సాటి రాదు.",
  },
  {
    name: "Ravi Kumar",
    place: "Mahbubnagar",
    role: { en: "Kirana Store Owner", te: "కిరాణా దుకాణ యజమాని" },
    en: "Customers keep coming back asking for Bijnapally Karam by name. That trust is rare.",
    te: "కస్టమర్లు పేరు చెప్పి బిజినపల్లి కారం అడుగుతున్నారు. ఆ నమ్మకం అరుదు.",
  },
  {
    name: "Hotel Annapurna",
    place: "Mahbubnagar",
    role: { en: "Restaurant", te: "హోటల్" },
    en: "Our biryani's signature heat is from this powder. We've been buying in bulk for 8 years.",
    te: "మా బిర్యానీ ప్రత్యేక కారం ఈ పొడి నుండే. 8 ఏళ్లుగా హోల్‌సేల్‌లో కొంటున్నాం.",
  },
  {
    name: "Sunitha R.",
    place: "Bangalore",
    role: { en: "Family Customer", te: "కుటుంబ కస్టమర్" },
    en: "I order 1kg every two months from Bangalore. Worth every rupee — truly pure.",
    te: "నేను బెంగళూరు నుండి ప్రతి రెండు నెలలకు 1 కేజీ ఆర్డర్ చేస్తాను. ప్రతి రూపాయికి విలువ — నిజంగా స్వచ్ఛం.",
  },
];

export function Reviews() {
  const { lang, tr } = useI18n();
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-gradient-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-chilli font-semibold mb-3">— Word of Mouth</div>
          <h2 className={`text-4xl sm:text-6xl font-display font-semibold tracking-tight ${lang === "te" ? "font-telugu" : ""}`}>
            {tr("reviews_title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="reveal relative rounded-3xl bg-card p-7 sm:p-8 shadow-soft hover:shadow-warm transition-shadow border border-border/60"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-chilli/15" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-saffron fill-saffron" />
                ))}
              </div>
              <p className={`text-foreground/85 leading-relaxed mb-3 ${lang === "te" ? "font-telugu text-lg" : "text-lg"}`}>
                "{lang === "te" ? r.te : r.en}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="grid place-items-center h-11 w-11 rounded-full bg-gradient-ember text-cream font-display font-semibold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className={`text-xs text-muted-foreground ${lang === "te" ? "font-telugu" : ""}`}>
                    {lang === "te" ? r.role.te : r.role.en} · {r.place}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
