import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Legacy } from "@/components/site/Legacy";
import { Products } from "@/components/site/Products";
import { Journey } from "@/components/site/Journey";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Bulk } from "@/components/site/Bulk";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bijnapally Karam — Authentic Telangana Chilli Powder Since 2003" },
      {
        name: "description",
        content:
          "Pure, stone-ground Telangana chilli powder from Bijnapally Mandal. No colors, no mixing — trusted by families, kirana stores and hotels for 20+ years.",
      },
      { property: "og:title", content: "Bijnapally Karam — Authentic Telangana Chilli Powder" },
      { property: "og:description", content: "Stone-ground, sun-dried, family-made since 2003." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <PageBody />
    </I18nProvider>
  );
}

function PageBody() {
  useReveal();
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Legacy />
        <Products />
        <Journey />
        <Gallery />
        <Reviews />
        <Bulk />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
