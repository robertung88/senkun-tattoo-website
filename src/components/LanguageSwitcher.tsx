"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { Language } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-xs tracking-[0.15em] uppercase text-[#a0a0a0] hover:text-white transition-colors"
      aria-label="Switch language"
    >
      <span className={language === "fr" ? "text-white" : ""}>FR</span>
      <span className="text-[#2a2a2a]">/</span>
      <span className={language === "en" ? "text-white" : ""}>EN</span>
    </button>
  );
}
