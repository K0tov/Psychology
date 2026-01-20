import { Phone, Send, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg mb-4 font-bold text-white">
              Контакти
            </h3>
            <div className="space-y-3 text-gray-200">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+380975332475" className="hover:text-white transition-colors">
                  +380 97 533 24 75
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Send className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="https://t.me/ninanedashkovskaya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @ninanedashkovskaya
                </a>
              </div>
            </div>
          </div>

          {/* Format */}
          <div>
            <h3 className="font-heading text-lg mb-4 font-bold text-white">
              Формат роботи
            </h3>
            <div className="space-y-2 text-gray-200">
              <div>Індивідуальні консультації</div>
              <div>Групова терапія</div>
              <div>Онлайн та офлайн</div>
              <div className="pt-2 text-sm text-gray-300">
                Запис за домовленістю
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading text-lg mb-4 font-bold text-white">
              Соціальні мережі
            </h3>
            <div className="flex gap-4">
              <a
                href="https://t.me/ninanedashkovskaya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ninakolomiec_psychology/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-200 text-sm mt-4">
              Психолог-психотерапевт<br />
              Арт-терапевт<br />
              Сімейний медіатор
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-300 text-sm">
          <p>© 2026 Ніна Недашківська. Всі права захищені.</p>
          <p className="mt-2">
            Цей сайт призначений лише для інформаційних цілей і не є медичною консультацією.
          </p>
        </div>
      </div>
    </footer>
  );
}
