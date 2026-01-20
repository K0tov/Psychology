import { Calendar, Video, FileCheck } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Запис на консультацію",
    description: "Заплануйте вашу першу сесію онлайн. Оберіть зручний для вас час."
  },
  {
    icon: Video,
    number: "02",
    title: "Перша сесія",
    description: "Ми обговоримо ваші цілі та разом створимо персоналізований план лікування."
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Постійна підтримка",
    description: "Регулярні сесії з вимірюванням прогресу та адаптивними стратегіями."
  }
];

export function ProcessSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t-2 border-clinical-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl lg:text-4xl mb-4 font-bold">
            Як це працює
          </h2>
          <p className="text-clinical-medium text-lg max-w-2xl mx-auto">
            Простий, структурований підхід до початку роботи
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] 
                                bg-gradient-to-r from-clinical-light to-transparent" />
                )}

                <motion.div
                  className="relative inline-flex items-center justify-center w-24 h-24 
                           bg-mint-green rounded-full mb-6 shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-10 h-10 text-clinical-dark" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-clinical-dark 
                                text-white rounded-full flex items-center justify-center 
                                text-sm font-semibold shadow-lg">
                    {step.number}
                  </div>
                </motion.div>

                <h3 className="font-heading text-xl mb-3 font-semibold">
                  {step.title}
                </h3>
                <p className="text-clinical-medium leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
