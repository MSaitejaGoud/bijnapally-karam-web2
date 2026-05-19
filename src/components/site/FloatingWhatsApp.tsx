import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { useI18n } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const { lang } = useI18n();
  const msg =
    lang === "te"
      ? "నమస్తే! బిజినపల్లి కారం ఆర్డర్ చేయాలనుకుంటున్నాను."
      : "Hello! I'd like to order Bijnapally Karam chilli powder.";
  return (
    <a
      href={waLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full bg-whatsapp text-white shadow-warm group-hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6 fill-current" />
      </span>
      <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap glass px-3 py-1.5 rounded-full text-xs font-medium shadow-soft opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  );
}
