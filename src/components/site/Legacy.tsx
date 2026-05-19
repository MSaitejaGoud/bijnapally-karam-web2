import { useI18n } from "@/lib/i18n";
import dryingImg from "@/assets/drying.jpg";
import grindingImg from "@/assets/grinding.jpg";
import farmImg from "@/assets/farm.jpg";

const milestones = [
  {
    year: "2003",
    en: { t: "A family begins", d: "From a single mill in Bijnapally, our family started grinding chillies for neighbouring families." },
    te: { t: "ఒక కుటుంబం ప్రారంభం", d: "బిజినపల్లిలో ఒకే ఒక మరతో, మా కుటుంబం పొరుగు కుటుంబాలకు కారం గ్రైండ్ చేయడం మొదలుపెట్టారు." },
    img: grindingImg,
  },
  {
    year: "2010",
    en: { t: "Farmer partnerships", d: "Direct relationships with 100+ chilli farmers across Nagarkurnool district — no middlemen, fair prices." },
    te: { t: "రైతుల భాగస్వామ్యాలు", d: "నాగర్కర్నూల్ జిల్లాలోని 100+ మిరప రైతులతో నేరుగా సంబంధాలు — మధ్యవర్తులు లేరు, న్యాయమైన ధరలు." },
    img: farmImg,
  },
  {
    year: "2016",
    en: { t: "Sun-dried purity", d: "Slow sun-drying on woven mats locks in deep colour and aroma — never artificially enhanced." },
    te: { t: "ఎండ ఆరబెట్టిన స్వచ్ఛత", d: "మెల్లగా ఎండలో ఆరబెట్టడం వలన రంగు, సువాసన చెదరవు — కృత్రిమం ఏదీ లేదు." },
    img: dryingImg,
  },
  {
    year: "Today",
    en: { t: "Thousands of kitchens", d: "Trusted by households, kirana stores, hotels & sweet shops across Telangana — processed with modern machinery for consistent quality." },
    te: { t: "వేలాది వంటిళ్ళు", d: "తెలంగాణ అంతటా ఇళ్ళు, కిరాణా దుకాణాలు, హోటళ్ళు, స్వీట్ షాపులు మాపై నమ్మకం ఉంచుతున్నాయి — ఇంకా అదే పాత పద్ధతిలోనే." },
    img: grindingImg,
  },
];

export function Legacy() {
  const { lang, tr } = useI18n();
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-gradient-cream">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mb-16 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-chilli font-semibold mb-3">— Our Story</div>
          <h2 className={`text-4xl sm:text-6xl font-display font-semibold tracking-tight ${lang === "te" ? "font-telugu" : ""}`}>
            {tr("legacy_title")}
          </h2>
          <p className={`mt-4 text-lg text-muted-foreground ${lang === "te" ? "font-telugu" : ""}`}>{tr("legacy_sub")}</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-chilli/40 to-transparent" />
          <div className="space-y-12 sm:space-y-20">
            {milestones.map((m, i) => {
              const c = lang === "te" ? m.te : m.en;
              const left = i % 2 === 0;
              return (
                <div key={i} className={`relative reveal grid sm:grid-cols-2 gap-6 sm:gap-12 items-center`}>
                  <div className={`${left ? "sm:order-1" : "sm:order-2"} pl-12 sm:pl-0 sm:px-8`}>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="font-display text-5xl sm:text-6xl font-semibold gradient-text">{m.year}</span>
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-display font-semibold mb-2 ${lang === "te" ? "font-telugu" : ""}`}>{c.t}</h3>
                    <p className={`text-muted-foreground leading-relaxed ${lang === "te" ? "font-telugu" : ""}`}>{c.d}</p>
                  </div>
                  <div className={`${left ? "sm:order-2" : "sm:order-1"} pl-12 sm:pl-0`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm group">
                      <img src={m.img} alt={c.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-chilli/30 via-transparent to-transparent" />
                    </div>
                  </div>
                  <span className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 sm:top-1/2 sm:-translate-y-1/2 h-4 w-4 rounded-full bg-chilli ring-4 ring-cream shadow-glow" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
