import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4 font-semibold text-white">
              Контакти
            </h3>
            <div className="space-y-3 text-gray-200">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:dr.mitchell@example.com" className="hover:text-white transition-colors">
                  dr.mitchell@example.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>вул. Терапії 123, Офіс 200<br />Сан-Франциско, CA 94102</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg mb-4 font-semibold text-white">
              Години роботи
            </h3>
            <div className="space-y-2 text-gray-200">
              <div className="flex justify-between">
                <span>Понеділок - Четвер</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>П'ятниця</span>
                <span>9:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Вихідні</span>
                <span>За домовленістю</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg mb-4 font-semibold text-white">
              Зв'язок
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-200 text-sm mt-4">
              Ліцензований клінічний психолог у Каліфорнії
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-300 text-sm">
          <p>© 2026 Др. Сара Мітчелл, PsyD. Всі права захищені.</p>
          <p className="mt-2">
            Цей сайт призначений лише для інформаційних цілей і не є медичною консультацією.
          </p>
        </div>
      </div>
    </footer>
  );
}
