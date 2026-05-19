import { useI18n } from "@/lib/i18n";
import { Flame } from "lucide-react";

export function Footer() {
  const { lang, tr } = useI18n();
  return (
    <footer className="relative bg-charcoal text-cream/80 py-16 grain">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-ember text-cream">
                <Flame className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="font-display font-semibold text-lg text-cream">Bijnapally Karam</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-saffron">Since 2003</div>
              </div>
            </div>
            <p className={`max-w-md text-cream/60 leading-relaxed ${lang === "te" ? "font-telugu" : ""}`}>{tr("footer_tag")}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-cream/50 mb-4">{lang === "te" ? "శీఘ్ర లింకులు" : "Quick Links"}</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-saffron transition-colors">{tr("nav_products")}</a></li>
              <li><a href="#about" className="hover:text-saffron transition-colors">{tr("nav_about")}</a></li>
              <li><a href="#bulk" className="hover:text-saffron transition-colors">{tr("nav_bulk")}</a></li>
              <li><a href="#contact" className="hover:text-saffron transition-colors">{tr("nav_contact")}</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-cream/50 mb-4">{lang === "te" ? "సంప్రదించండి" : "Contact"}</div>
            <ul className="space-y-2 text-sm">
              <li className={lang === "te" ? "font-telugu" : ""}>
                {lang === "te" ? "బిజినపల్లి, నాగర్‌కర్నూల్" : "Bijnapally, Nagarkurnool"}
              </li>
              <li>+91 95338 43529</li>
              <li>+91 83281 22895</li>
              <li>saitejgoud217@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/40">
          <div>© {new Date().getFullYear()} Bijnapally Karam · A family business since 2003</div>
          <div className="font-telugu">తెలంగాణ ప్రేమతో తయారు చేయబడింది</div>
        </div>
      </div>
    </footer>
  );
}
