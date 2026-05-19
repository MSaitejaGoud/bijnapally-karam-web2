import { useI18n } from "@/lib/i18n";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function Contact() {
  const { lang, tr } = useI18n();
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-chilli font-semibold mb-3">— Visit Us</div>
          <h2 className={`text-4xl sm:text-6xl font-display font-semibold tracking-tight ${lang === "te" ? "font-telugu" : ""}`}>
            {tr("contact_title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-3 reveal rounded-3xl overflow-hidden shadow-warm aspect-[4/3] lg:aspect-auto bg-muted">
            <iframe
              title="Bijnapally Karam Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3914.8337917227136!2d78.2038516!3d16.5331853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca15002fb4daaf%3A0x6295bbc4f11f3c88!2sTeja%20chilli%20powder!5e1!3m2!1sen!2sin!4v1779176940587!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="reveal rounded-3xl bg-card border border-border/60 p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-chilli/10 text-chilli shrink-0">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-semibold">{lang === "te" ? "చిరునామా" : "Address"}</div>
                  <p className={`text-muted-foreground mt-1 ${lang === "te" ? "font-telugu" : ""}`}>
                    {lang === "te"
                      ? "బిజినపల్లి మండలం, నాగర్‌కర్నూల్ జిల్లా, తెలంగాణ — 509209"
                      : "Bijnapally Mandal, Nagarkurnool District, Telangana — 509209"}
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal rounded-3xl bg-card border border-border/60 p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-ember/10 text-ember shrink-0">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-semibold">{lang === "te" ? "సమయాలు" : "Hours"}</div>
                  <p className={`text-muted-foreground mt-1 ${lang === "te" ? "font-telugu" : ""}`}>
                    {lang === "te" ? "ప్రతిరోజూ · ఉదయం 7 – రాత్రి 10" : "Every day · 7 AM – 10 PM"}
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal grid grid-cols-2 gap-3">
              <div className="rounded-3xl bg-foreground text-background p-5 shadow-soft flex flex-col gap-2">
                <Phone className="h-5 w-5 text-saffron" />
                <div className="text-xs uppercase tracking-wider opacity-60">{lang === "te" ? "కాల్ చేయండి" : "Call"}</div>
                <a href="tel:+919493878575" className="font-display text-lg hover:text-saffron transition-colors">+91 94938 78575</a>
                <a href="tel:+919533843529" className="font-display text-lg hover:text-saffron transition-colors">+91 95338 43529</a>
                <a href="tel:+918328122895" className="font-display text-lg hover:text-saffron transition-colors">+91 83281 22895</a>
              </div>
              <a
                href={waLink(lang === "te" ? "నమస్తే!" : "Hello!")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl bg-whatsapp text-white p-5 shadow-soft hover:scale-[1.03] transition-transform flex flex-col gap-2"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                <div className="text-xs uppercase tracking-wider opacity-80">WhatsApp</div>
                <div className="font-display text-lg">{lang === "te" ? "మెసేజ్" : "Message"}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
