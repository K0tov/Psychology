import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Dr. Mitchell helped me develop practical strategies for managing work anxiety. Her evidence-based approach and clear communication made all the difference.",
      author: "Alex K.",
      role: "Software Engineer"
    },
    {
      text: "After months of struggling with burnout, I finally found effective tools to rebuild my work-life balance. The structured approach really works.",
      author: "Jamie L.",
      role: "Marketing Director"
    },
    {
      text: "The therapy sessions were professional, focused, and incredibly valuable. I appreciated the clinical expertise combined with genuine understanding.",
      author: "Morgan T.",
      role: "Startup Founder"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[var(--ice-blue)] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ fontWeight: 600 }}>
            Client Testimonials
          </h2>
          <p className="text-[var(--medium-grey)] text-lg">
            What people say about their experience
          </p>
        </div>

        <div className="relative bg-white rounded p-8 lg:p-12">
          <Quote className="w-12 h-12 text-[var(--accent-blue)] mb-6" />
          
          <div className="mb-8">
            <p className="text-xl text-[var(--dark-grey)] leading-relaxed mb-6">
              "{testimonials[currentIndex].text}"
            </p>
            <div>
              <div className="text-lg" style={{ fontWeight: 600 }}>
                {testimonials[currentIndex].author}
              </div>
              <div className="text-[var(--medium-grey)]">
                {testimonials[currentIndex].role}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 flex items-center justify-center border border-[var(--light-border)] rounded hover:bg-[var(--soft-grey)] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-[var(--dark-grey)]"
                      : "bg-[var(--light-border)]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center border border-[var(--light-border)] rounded hover:bg-[var(--soft-grey)] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
