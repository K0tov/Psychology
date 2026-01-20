import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BookingModal } from "@/app/components/booking-modal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleBookNow = () => {
    setIsBookingOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white border-b border-clinical-light sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/Psychology/logo.svg" alt="Ніна Недашківська - Психолог-психотерапевт" className="h-12 w-auto" />
              <span className="font-heading text-xl font-bold hidden sm:block">Ніна Недашківська</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-clinical-medium hover:text-clinical-dark transition-colors"
              >
                Про мене
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-clinical-medium hover:text-clinical-dark transition-colors"
              >
                Послуги
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-clinical-medium hover:text-clinical-dark transition-colors"
              >
                Процес
              </button>
              <button
                onClick={handleBookNow}
                className="px-6 py-2 bg-[#2D2D2D] text-white rounded 
                         hover:bg-[#1A1A1A] transition-all font-medium"
              >
                Записатися
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-soft-grey rounded transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-clinical-dark" />
              ) : (
                <Menu className="w-6 h-6 text-clinical-dark" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav
              className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-slide-up"
            >
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-clinical-medium hover:text-clinical-dark 
                         transition-colors py-2 px-4 hover:bg-soft-grey rounded"
              >
                Про мене
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-clinical-medium hover:text-clinical-dark 
                         transition-colors py-2 px-4 hover:bg-soft-grey rounded"
              >
                Послуги
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left text-clinical-medium hover:text-clinical-dark 
                         transition-colors py-2 px-4 hover:bg-soft-grey rounded"
              >
                Процес
              </button>
              <button
                onClick={handleBookNow}
                className="px-6 py-3 bg-[#2D2D2D] text-white rounded 
                         hover:bg-[#1A1A1A] transition-all font-medium text-center"
              >
                Записатися
              </button>
            </nav>
          )}
        </div>
      </header>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
