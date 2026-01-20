import { Brain, Heart, Users, MessageCircle, Target, Palette, Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Brain,
    title: "Тривога та панічні атаки",
    description: "Робота зі страхами, тривогою та панічними станами. Повернення відчуття безпеки та спокою."
  },
  {
    icon: Heart,
    title: "Депресивні стани та апатія",
    description: "Підтримка при втраті сенсу, апатії та депресивних переживаннях (не клінічна депресія)."
  },
  {
    icon: Users,
    title: "Міжособистісні стосунки",
    description: "Робота з труднощами у спілкуванні, побудова здорових стосунків з оточуючими."
  },
  {
    icon: Shield,
    title: "Самооцінка та впевненість",
    description: "Повернення віри в себе, робота з невпевненістю та внутрішніми блоками."
  },
  {
    icon: Target,
    title: "Самовизначення та цілі",
    description: "Пошук життєвих орієнтирів, мотивації та визначення власного шляху."
  },
  {
    icon: Sparkles,
    title: "Втрата та горювання",
    description: "Підтримка в процесі переживання втрати та внутрішньої трансформації."
  },
  {
    icon: MessageCircle,
    title: "Вигорання та хронічна втома",
    description: "Відновлення внутрішніх ресурсів, робота з емоційним виснаженням."
  },
  {
    icon: Palette,
    title: "Арт-терапія",
    description: "Творчий підхід до роботи з емоціями через малювання, колаж та інші техніки."
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
            Напрямки роботи
          </h2>
          <p className="text-clinical-medium text-lg max-w-2xl mx-auto">
            Простір для роботи з тим, що хвилює вас найбільше
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
                <p className="text-clinical-medium leading-relaxed relative z-10 text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-clinical-medium text-lg max-w-3xl mx-auto leading-relaxed">
            Також проводжу <span className="font-semibold text-clinical-dark">тренінги</span>,
            <span className="font-semibold text-clinical-dark"> трансформаційні ігри</span> та
            <span className="font-semibold text-clinical-dark"> групове консультування</span> для дорослих.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
