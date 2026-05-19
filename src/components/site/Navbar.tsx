import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Flame } from "lucide-react";

const links = [
  { id: "home", key: "nav_home" as const },
  { id: "products", key: "nav_products" as const },
  { id: "about", key: "nav_about" as const },
  { id: "bulk", key: "nav_bulk" as const },
  { id: "reviews", key: "nav_reviews" as const },
  { id: "contact", key: "nav_contact" as const },
];

export function Navbar() {
  const { lang, setLang, tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-ember text-cream shadow-glow group-hover:scale-110 transition-transform">
              <Flame className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-semibold text-lg text-foreground">Bijnapally</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-chilli font-medium">Karam</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-chilli rounded-lg transition-colors relative group"
              >
                {tr(l.key)}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-chilli scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full bg-foreground/5 p-0.5 text-xs font-medium">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  lang === "en" ? "bg-chilli text-cream shadow-soft" : "text-foreground/70"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("te")}
                className={`px-3 py-1.5 rounded-full transition-all font-telugu ${
                  lang === "te" ? "bg-chilli text-cream shadow-soft" : "text-foreground/70"
                }`}
              >
                తె
              </button>
            </div>
            <button
              className="lg:hidden grid place-items-center h-10 w-10 rounded-xl bg-foreground/5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-soft animate-in fade-in slide-in-from-top-2">
            <nav className="grid gap-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-chilli/10 hover:text-chilli transition-colors"
                >
                  {tr(l.key)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
