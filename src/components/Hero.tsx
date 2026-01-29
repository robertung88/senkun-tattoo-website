"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { LogoHero } from "./Logo";
import TattooCanvas from "./TattooCanvas";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Tattoo Animation */}
      <div className="absolute inset-0 z-0">
        <TattooCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/30 to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="text-[#c9a962] text-xs md:text-sm tracking-[0.3em] uppercase">
            {t.hero.subtitle}
          </span>
        </motion.div>

        {/* Logo with animation */}
        <div className="mb-10">
          <LogoHero />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#a0a0a0] text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#work" className="btn-primary w-full sm:w-auto">
            {t.hero.viewPortfolio}
          </a>
          <a href="#contact" className="btn-outline w-full sm:w-auto">
            {t.hero.bookConsultation}
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#work"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors"
        >
          <span className="text-xs tracking-[0.2em] uppercase">{t.hero.scroll}</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>

      {/* Side Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2"
      >
        <span
          className="text-[#a0a0a0] text-xs tracking-[0.3em] uppercase writing-mode-vertical transform rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          {t.hero.est}
        </span>
      </motion.div>
    </section>
  );
}
