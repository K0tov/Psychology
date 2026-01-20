import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t-2 border-clinical-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left - Photo */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-soft-grey shadow-xl relative">
              <img
                src="/Psychology/photo_1.jpg"
                alt="Ніна Недашківська"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <motion.div
              className="absolute -top-6 -left-6 w-48 h-48 bg-mint-green rounded-2xl -z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">
              Ніна Недашківська
            </h2>

            <p className="text-lg text-clinical-medium font-medium">
              Психолог-психотерапевт, арт-терапевт, сімейний медіатор
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-[2px] w-16 bg-gradient-to-r from-accent-blue to-accent-mint"></div>
              <div className="h-1 w-1 rounded-full bg-clinical-dark"></div>
              <div className="h-[2px] w-16 bg-gradient-to-r from-accent-mint to-accent-blue"></div>
            </div>

            <div className="space-y-6 text-clinical-medium leading-relaxed">
              <p className="text-lg">
                В моєму кабінеті немає місця оцінкам, зручним шаблонам чи готовим порадам.
                Я вірю, що психологія — це не про пошук «помилок» у людині, а про повернення собі права на справжність.
              </p>

              <p className="text-lg">
                Я знаю, що кожен крок до себе потребує мужності. Якщо ви відчуваєте втому від боротьби
                з обставинами, тривогою чи самим собою — я тут, щоб розділити цей шлях.
              </p>

              <p className="text-lg font-medium text-clinical-dark">
                Наша спільна робота — це простір повної чесності та прийняття, де ваші почуття нарешті
                отримають право на існування, а ваш досвід, яким би складним він не був, стане фундаментом
                для вашої внутрішньої свободи.
              </p>
            </div>

            {/* Specializations */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <motion.div
                className="bg-ice-blue p-5 rounded-lg text-center"
                whileHover={{ y: -5, boxShadow: "0 8px 16px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl mb-2">🧠</div>
                <div className="font-heading font-semibold text-clinical-dark">Психотерапія</div>
                <div className="text-sm text-clinical-medium mt-1">Індивідуальне консультування</div>
              </motion.div>

              <motion.div
                className="bg-mint-green p-5 rounded-lg text-center"
                whileHover={{ y: -5, boxShadow: "0 8px 16px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-heading font-semibold text-clinical-dark">Арт-терапія</div>
                <div className="text-sm text-clinical-medium mt-1">Творчий підхід</div>
              </motion.div>

              <motion.div
                className="bg-soft-grey p-5 rounded-lg text-center"
                whileHover={{ y: -5, boxShadow: "0 8px 16px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl mb-2">👥</div>
                <div className="font-heading font-semibold text-clinical-dark">Медіація</div>
                <div className="text-sm text-clinical-medium mt-1">Сімейні конфлікти</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
