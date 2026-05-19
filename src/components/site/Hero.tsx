import heroImg from "@/assets/hero-chilli.jpg";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle, Package, ShieldCheck, Flame, Sprout, Mountain } from "lucide-react";

export function Hero() {
  const { tr, lang } = useI18n();
  const msg =
    lang === "te"
      ? "నమస్తే! బిజినపల్లి కారం ఆర్డర్ చేయాలనుకుంటున్నాను."
      : "Hello! I'd like to order Bijnapally Karam chilli powder.";

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-gradient-hero text-cream grain">
      <img
        src={heroImg}
        alt="Telangana red chilli powder pouring with whole dried chillies"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-ember/30 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-chilli/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-36 pb-20 sm:pt-44 sm:pb-28 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-cream/90 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="h-1.5 w-1.5 rounded-full bg-turmeric animate-pulse" />
            {tr("hero_eyebrow")}
          </div>

          <h1 className={`font-display font-semibold leading-[0.95] tracking-tight text-cream animate-in fade-in slide-in-from-bottom-6 duration-700 ${lang === "te" ? "font-telugu text-4xl sm:text-6xl lg:text-7xl" : "text-5xl sm:text-7xl lg:text-[5.5rem]"}`}>
            <span className="block">{tr("hero_title_1")}</span>
            <span className="block gradient-text italic">{tr("hero_title_2")}</span>
            <span className="block text-cream/80 text-3xl sm:text-4xl lg:text-5xl font-light mt-2">{tr("hero_title_3")}</span>
          </h1>

          <p className={`mt-6 max-w-2xl text-cream/85 text-base sm:text-lg leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 ${lang === "te" ? "font-telugu" : ""}`}>
            {tr("hero_sub")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <a
              href={waLink(msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-5 sm:px-6 py-3.5 text-sm sm:text-base font-semibold shadow-warm hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              {tr("cta_whatsapp")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-charcoal px-5 sm:px-6 py-3.5 text-sm sm:text-base font-semibold shadow-soft hover:scale-[1.03] transition-transform"
            >
              <Package className="h-4 w-4" />
              {tr("cta_explore")}
            </a>
            <a
              href="#bulk"
              className="inline-flex items-center gap-2 rounded-full glass-dark text-cream px-5 sm:px-6 py-3.5 text-sm sm:text-base font-semibold hover:bg-white/15 transition-colors"
            >
              {tr("cta_bulk")}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-cream/80 text-xs sm:text-sm animate-in fade-in duration-1000 delay-500">
            {[
              { icon: ShieldCheck, k: "trust_pure" as const },
              { icon: Flame, k: "trust_no_color" as const },
              { icon: Mountain, k: "trust_stone" as const },
              { icon: Sprout, k: "trust_family" as const },
            ].map(({ icon: Icon, k }) => (
              <div key={k} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-turmeric" />
                {tr(k)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-[10px] tracking-[0.3em] uppercase flex flex-col items-center gap-2 z-10">
        scroll
        <span className="block h-8 w-px bg-cream/40" />
      </div>
    </section>
  );
}
