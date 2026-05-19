import { useI18n } from "@/lib/i18n";
import { Building2, Store, ChefHat, Cake, ArrowRight } from "lucide-react";
import { useState } from "react";

const buyerTypes = [
  { icon: Store, en: "Kirana Stores", te: "కిరాణా దుకాణాలు" },
  { icon: ChefHat, en: "Hotels & Mess", te: "హోటళ్ళు & మెస్" },
  { icon: Cake, en: "Sweet Shops", te: "స్వీట్ షాపులు" },
  { icon: Building2, en: "Distributors", te: "డిస్ట్రిబ్యూటర్లు" },
];

export function Bulk() {
  const { lang, tr } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="bulk" className="relative py-24 sm:py-32 bg-gradient-hero text-cream overflow-hidden grain">
      <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-ember/30 blur-3xl animate-float-slow" />
      <div className="mx-auto max-w-7xl px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-turmeric font-semibold mb-3">— Wholesale</div>
            <h2 className={`text-4xl sm:text-6xl font-display font-semibold tracking-tight text-cream ${lang === "te" ? "font-telugu" : ""}`}>
              {tr("bulk_title")}
            </h2>
            <p className={`mt-4 text-cream/75 text-lg ${lang === "te" ? "font-telugu" : ""}`}>{tr("bulk_sub")}</p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {buyerTypes.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="glass-dark rounded-2xl p-4 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-turmeric shrink-0" />
                    <span className={`text-sm font-medium ${lang === "te" ? "font-telugu" : ""}`}>
                      {lang === "te" ? b.te : b.en}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              {[
                { n: "20+", l: lang === "te" ? "సంవత్సరాలు" : "Years" },
                { n: "100+", l: lang === "te" ? "రైతులు" : "Farmers" },
                { n: "5000+", l: lang === "te" ? "కుటుంబాలు" : "Families" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display text-3xl sm:text-4xl gradient-text font-semibold">{s.n}</div>
                  <div className={`text-xs text-cream/65 mt-1 ${lang === "te" ? "font-telugu" : ""}`}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <form
            action="https://formspree.io/f/mqejawbd"
            method="POST"
            onSubmit={(e) => {
              // Frontend-only fallback if Formspree isn't configured
              if (!e.currentTarget.action.includes("your-id")) return;
              e.preventDefault();
              setSubmitted(true);
            }}
            className="reveal glass-dark rounded-3xl p-6 sm:p-8 border border-cream/15"
          >
            <h3 className={`font-display text-2xl font-semibold mb-1 ${lang === "te" ? "font-telugu" : ""}`}>
              {lang === "te" ? "విచారణ పంపండి" : "Send an enquiry"}
            </h3>
            <p className={`text-cream/65 text-sm mb-6 ${lang === "te" ? "font-telugu" : ""}`}>
              {lang === "te" ? "మేము 24 గంటల్లో సంప్రదిస్తాము" : "We respond within 24 hours"}
            </p>

            {submitted ? (
              <div className="rounded-2xl bg-whatsapp/20 border border-whatsapp/40 p-6 text-center">
                <div className="text-2xl mb-2">🌶️</div>
                <p className="font-medium text-cream">
                  {lang === "te" ? "ధన్యవాదాలు! త్వరలో సంప్రదిస్తాం." : "Thank you! We'll reach out shortly."}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {[
                  { name: "name", type: "text", ph: { en: "Your name", te: "మీ పేరు" } },
                  { name: "business", type: "text", ph: { en: "Business / Shop name", te: "వ్యాపార పేరు" } },
                  { name: "phone", type: "tel", ph: { en: "Phone number", te: "ఫోన్ నంబర్" } },
                  { name: "city", type: "text", ph: { en: "City / Town", te: "నగరం / పట్టణం" } },
                ].map((f) => (
                  <input
                    key={f.name}
                    name={f.name}
                    type={f.type}
                    required
                    placeholder={lang === "te" ? f.ph.te : f.ph.en}
                    className={`w-full rounded-xl bg-cream/5 border border-cream/15 px-4 py-3.5 text-cream placeholder-cream/40 focus:outline-none focus:border-ember focus:bg-cream/10 transition ${lang === "te" ? "font-telugu" : ""}`}
                  />
                ))}
                <textarea
                  name="message"
                  rows={3}
                  placeholder={lang === "te" ? "మీ అవసరాలు (పరిమాణం, తరచుదనం)" : "Your needs (quantity, frequency)"}
                  className={`w-full rounded-xl bg-cream/5 border border-cream/15 px-4 py-3.5 text-cream placeholder-cream/40 focus:outline-none focus:border-ember focus:bg-cream/10 transition resize-none ${lang === "te" ? "font-telugu" : ""}`}
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-ember text-cream px-6 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition-transform"
                >
                  {lang === "te" ? "విచారణ పంపండి" : "Send Enquiry"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
