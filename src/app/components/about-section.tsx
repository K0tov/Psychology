import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-soft-grey shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700168333952-3d44a3f427af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXBpc3QlMjBvZmZpY2UlMjBjbGVhbnxlbnwxfHx8fDE3Njg1MDg1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Кабінет терапевта"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <motion.div
              className="absolute -top-6 -left-6 w-48 h-48 bg-ice-blue rounded-2xl -z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Др. Сара Мітчелл, PsyD
            </h2>

            <div className="space-y-4 text-clinical-medium leading-relaxed">
              <p>
                Маючи понад 12 років клінічного досвіду, я спеціалізуюся на науково-обґрунтованій
                психотерапії для молодих професіоналів, які долають складнощі сучасного життя.
              </p>
              <p>
                Мій підхід інтегрує когнітивно-поведінкову терапію (КПТ), терапію прийняття та
                відповідальності (ACT) та втручання на основі усвідомленості, щоб надати практичні,
                дієві стратегії для тривалих змін.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                className="border-l-2 border-clinical-dark pl-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-1 font-semibold">12+</div>
                <div className="text-clinical-medium">Років досвіду</div>
              </motion.div>
              <motion.div
                className="border-l-2 border-clinical-dark pl-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-1 font-semibold">500+</div>
                <div className="text-clinical-medium">Клієнтів допомогли</div>
              </motion.div>
            </div>

            <div className="space-y-2 pt-4">
              <h3 className="text-lg font-semibold">Кваліфікації</h3>
              <ul className="space-y-2 text-clinical-medium">
                <li>• PsyD, Клінічна психологія – Стенфордський університет</li>
                <li>• Ліцензований клінічний психолог (CA #PSY12345)</li>
                <li>• Член Американської психологічної асоціації</li>
                <li>• Сертифікат з ДПТ та EMDR</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
