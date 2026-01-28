"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  const processSteps = [
    {
      number: "01",
      title: t.about.process.steps[0].title,
      description: t.about.process.steps[0].description,
    },
    {
      number: "02",
      title: t.about.process.steps[1].title,
      description: t.about.process.steps[1].description,
    },
    {
      number: "03",
      title: t.about.process.steps[2].title,
      description: t.about.process.steps[2].description,
    },
    {
      number: "04",
      title: t.about.process.steps[3].title,
      description: t.about.process.steps[3].description,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Artist Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/artist.jpg"
                alt="Senkun - Tattoo Artist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c9a962]/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">
              {t.about.subtitle}
            </span>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-[#a0a0a0] leading-relaxed">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#2a2a2a]">
              <div>
                <span className="heading-serif text-3xl md:text-4xl text-white block">7+</span>
                <span className="text-[#a0a0a0] text-sm">{t.about.yearsExperience}</span>
              </div>
              <div>
                <span className="heading-serif text-3xl md:text-4xl text-white block">500+</span>
                <span className="text-[#a0a0a0] text-sm">{t.about.tattoosCreated}</span>
              </div>
              <div>
                <span className="heading-serif text-3xl md:text-4xl text-white block">Geneva</span>
                <span className="text-[#a0a0a0] text-sm">{t.about.based}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">
            {t.about.process.subtitle}
          </span>
          <h2 className="heading-display text-4xl md:text-5xl text-white">
            {t.about.process.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <span className="heading-serif text-6xl text-[#1a1a1a] absolute -top-4 -left-2">
                {step.number}
              </span>
              <div className="relative pt-8">
                <h3 className="heading-serif text-xl text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#2a2a2a]" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Studio Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">
              {t.about.studio.subtitle}
            </span>
            <h2 className="heading-display text-4xl md:text-5xl text-white">
              {t.about.studio.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden image-hover"
            >
              <Image
                src="/images/studio/studio-1.jpg"
                alt="Senkun at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-[4/3] overflow-hidden image-hover"
            >
              <Image
                src="/images/studio/studio-2.jpg"
                alt="Tattooing in progress"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] overflow-hidden image-hover"
            >
              <Image
                src="/images/studio/studio-3.jpg"
                alt="Studio details"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden image-hover"
            >
              <Image
                src="/images/studio/studio-4.jpg"
                alt="Client session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              {t.about.studio.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
