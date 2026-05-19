import { useI18n } from "@/lib/i18n";
import { Sprout, Sun, Settings, Package, Home } from "lucide-react";

const steps = [
  { icon: Sprout, en: { t: "Farmer", d: "Hand-picked chillies from Nagarkurnool farms" }, te: { t: "రైతు", d: "నాగర్‌కర్నూల్ పొలాల నుండి ఏరిన మిరపకాయలు" } },
  { icon: Sun, en: { t: "Sun Dried", d: "Slow dried on woven mats for deep colour" }, te: { t: "ఎండ ఆరబెట్టడం", d: "లోతైన రంగు కోసం మెల్లగా ఎండలో ఆరబెట్టడం" } },
  { icon: Settings, en: { t: "Machine Ground", d: "Modern machinery grinds precisely for consistent quality" }, te: { t: "మషీన్ గ్రైండింగ్", d: "నాణ్యతకు ఆధునిక మషీన్లతో ఖచ్చితంగా గ్రైండ్ చేస్తాము" } },
  { icon: Package, en: { t: "Pure Packed", d: "Sealed fresh — no colors, no fillers" }, te: { t: "స్వచ్ఛమైన ప్యాకింగ్", d: "తాజాగా సీల్ — రంగులు, కల్తీ లేవు" } },
  { icon: Home, en: { t: "Your Kitchen", d: "Delivered to your home with love" }, te: { t: "మీ వంటిల్లు", d: "ప్రేమతో మీ ఇంటికి చేరుతుంది" } },
];

export function Journey() {
  const { lang, tr } = useI18n();
  return (
    <section className="relative py-24 sm:py-32 bg-charcoal text-cream overflow-hidden grain">
      <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-chilli/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-ember/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-turmeric font-semibold mb-3">— The Journey</div>
          <h2 className={`text-4xl sm:text-6xl font-display font-semibold tracking-tight ${lang === "te" ? "font-telugu" : ""}`}>
            {tr("journey_title")}
          </h2>
          <p className={`mt-4 text-cream/70 text-lg ${lang === "te" ? "font-telugu" : ""}`}>{tr("journey_sub")}</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {steps.map((s, i) => {
              const c = lang === "te" ? s.te : s.en;
              const Icon = s.icon;
              return (
                <div key={i} className="reveal text-center group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="relative mx-auto mb-5 grid place-items-center h-24 w-24 rounded-full glass-dark border border-cream/15 group-hover:border-ember/60 transition-all group-hover:scale-110">
                    <Icon className="h-9 w-9 text-turmeric" />
                    <span className="absolute -top-1 -right-1 text-[10px] font-display font-semibold bg-gradient-ember text-cream rounded-full h-7 w-7 grid place-items-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className={`font-display text-lg font-semibold ${lang === "te" ? "font-telugu" : ""}`}>{c.t}</h3>
                  <p className={`mt-1 text-sm text-cream/65 ${lang === "te" ? "font-telugu" : ""}`}>{c.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
