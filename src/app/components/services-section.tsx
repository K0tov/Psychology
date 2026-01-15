import { Brain, Heart, Users, MessageCircle, Target, Clock } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Brain,
    title: "Тривожність і стрес",
    description: "Науково обґрунтовані методи для управління тривожними розладами та хронічним стресом."
  },
  {
    icon: Heart,
    title: "Відновлення від вигорання",
    description: "Структурований підхід для запобігання та відновлення від професійного вигорання."
  },
  {
    icon: Users,
    title: "Проблеми у стосунках",
    description: "Терапевтична підтримка при міжособистісних викликах та патернах прив'язаності."
  },
  {
    icon: MessageCircle,
    title: "Комунікативні навички",
    description: "Розвиток ефективних стратегій спілкування для особистого та професійного життя."
  },
  {
    icon: Target,
    title: "Постановка цілей",
    description: "Визначення завдань та створення дієвих планів для значущих життєвих змін."
  },
  {
    icon: Clock,
    title: "Баланс роботи та життя",
    description: "Створення здорових меж та сталих моделей способу життя."
  }
];

export function ServicesSection() {
  return (
    <section className="w-full bg-soft-grey py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl mb-4 font-semibold">
            Ключові напрямки роботи
          </h2>
          <p className="text-clinical-medium text-lg max-w-2xl mx-auto">
            Спеціалізоване лікування для викликів сучасного життя
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-clinical-light 
                         hover:border-clinical-dark transition-all duration-300 
                         cursor-pointer group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
              >
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-ice-blue to-mint-green 
                              opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <motion.div
                  className="w-12 h-12 bg-ice-blue rounded-lg flex items-center justify-center mb-4 
                           group-hover:bg-accent-blue transition-colors duration-300 relative z-10"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Icon className="w-6 h-6 text-clinical-dark" />
                </motion.div>

                <h3 className="mb-2 font-semibold relative z-10">
                  {service.title}
                </h3>
                <p className="text-clinical-medium leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
