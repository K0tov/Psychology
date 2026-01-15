import { Header } from "@/app/components/header";
import { HeroSection } from "@/app/components/hero-section";
import { AboutSection } from "@/app/components/about-section";
import { ServicesSection } from "@/app/components/services-section";
import { ProcessSection } from "@/app/components/process-section";
import { TestimonialsSection } from "@/app/components/testimonials-section";
import { Footer } from "@/app/components/footer";

export default function App() {
  return (
    <div className="w-full min-h-screen overflow-y-auto">
      <Header />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}