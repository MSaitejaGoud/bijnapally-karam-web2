import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "te";

type Dict = Record<string, { en: string; te: string }>;

export const t: Dict = {
  nav_home: { en: "Home", te: "హోమ్" },
  nav_products: { en: "Products", te: "ఉత్పత్తులు" },
  nav_about: { en: "About", te: "మా గురించి" },
  nav_bulk: { en: "Bulk Orders", te: "హోల్‌సేల్" },
  nav_reviews: { en: "Reviews", te: "సమీక్షలు" },
  nav_contact: { en: "Contact", te: "సంప్రదించండి" },

  hero_eyebrow: { en: "Since 2003 · Bijnapally, Nagarkurnool", te: "2003 నుండి · బిజినపల్లి, నాగర్‌కర్నూల్" },
  hero_title_1: { en: "Authentic Telangana", te: "అసలైన తెలంగాణ" },
  hero_title_2: { en: "Chilli Powder", te: "కారం పొడి" },
  hero_title_3: { en: "Since 2003", te: "2003 నుండి" },
  hero_sub: {
    en: "For over 20 years, our family has machine-ground pure red chillies from trusted Telangana farmers — no colors, no mixing, just the heat your grandmother remembers.",
    te: "20 సంవత్సరాలకు పైగా, మా కుటుంబం నమ్మకమైన తెలంగాణ రైతుల నుండి స్వచ్ఛమైన ఎర్ర మిరపకాయలను ఆధునిక మషీన్లతో గ్రైండ్ చేస్తోంది — రంగులు లేవు, కల్తీ లేదు, మీ అమ్మమ్మ గుర్తుపెట్టుకున్న కారం మాత్రమే.",
  },
  cta_whatsapp: { en: "Order on WhatsApp", te: "వాట్సాప్‌లో ఆర్డర్" },
  cta_explore: { en: "Explore Products", te: "ఉత్పత్తులు చూడండి" },
  cta_bulk: { en: "Bulk Orders", te: "హోల్‌సేల్ ఆర్డర్" },

  trust_pure: { en: "100% Pure", te: "100% స్వచ్ఛం" },
  trust_no_color: { en: "No Artificial Color", te: "కృత్రిమ రంగులు లేవు" },
  trust_stone: { en: "Machine Ground", te: "మషీన్ గ్రైండింగ్" },
  trust_family: { en: "Family Owned", te: "కుటుంబ వ్యాపారం" },

  legacy_title: { en: "20+ Years of Trust", te: "20+ సంవత్సరాల నమ్మకం" },
  legacy_sub: { en: "From a small village mill to thousands of Telangana kitchens.", te: "ఒక చిన్న గ్రామ మర నుండి వేలాది తెలంగాణ వంటిళ్ళకు." },

  products_title: { en: "Our Chilli Powder", te: "మా కారం పొడి" },
  products_sub: { en: "Choose the pack that fits your kitchen.", te: "మీ వంటింటికి సరిపోయే పాకెట్ ఎంచుకోండి." },
  order_now: { en: "Order Now", te: "ఇప్పుడే ఆర్డర్" },

  journey_title: { en: "Village to Kitchen", te: "గ్రామం నుండి వంటింటి వరకు" },
  journey_sub: { en: "Every grain travels a story.", te: "ప్రతి కణం ఒక కథ చెబుతుంది." },

  reviews_title: { en: "Loved Across Telangana", te: "తెలంగాణ అంతటా ప్రేమించబడింది" },

  bulk_title: { en: "Bulk & Wholesale", te: "హోల్‌సేల్ ఆర్డర్లు" },
  bulk_sub: { en: "Kirana stores, hotels, messes & sweet shops — let's talk pricing.", te: "కిరాణా దుకాణాలు, హోటళ్ళు, మెస్‌లు & స్వీట్ షాపులు — ధర గురించి మాట్లాడుదాం." },

  contact_title: { en: "Visit Our Mill", te: "మా మరకు రండి" },

  footer_tag: { en: "Authentic Telangana Chilli Powder · Since 2003", te: "అసలైన తెలంగాణ కారం పొడి · 2003 నుండి" },
};

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; tr: (k: keyof typeof t) => string }>({
  lang: "en",
  setLang: () => {},
  tr: (k) => t[k]?.en ?? String(k),
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "te") setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  const tr = (k: keyof typeof t) => t[k]?.[lang] ?? t[k]?.en ?? String(k);
  return <I18nCtx.Provider value={{ lang, setLang, tr }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
