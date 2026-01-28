"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Logo from "./Logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="#" className="relative z-10">
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline text-sm tracking-[0.15em] uppercase text-[#a0a0a0] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA & Language */}
            <div className="hidden md:flex items-center gap-8">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="flex items-center gap-1 text-xs tracking-[0.15em] uppercase text-[#a0a0a0] hover:text-white transition-colors"
                aria-label="Switch language"
              >
                <span className={language === "fr" ? "text-white" : ""}>FR</span>
                <span className="text-[#2a2a2a]">/</span>
                <span className={language === "en" ? "text-white" : ""}>EN</span>
              </button>

              <a
                href="https://instagram.com/senkun.tattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#contact"
                className="btn-primary"
              >
                {t.nav.bookNow}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {/* Mobile Language Switcher */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.5 }}
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="flex items-center gap-2 text-[#a0a0a0] mb-4"
              >
                <span className={`text-lg ${language === "fr" ? "text-white" : ""}`}>FR</span>
                <span className="text-[#2a2a2a]">/</span>
                <span className={`text-lg ${language === "en" ? "text-white" : ""}`}>EN</span>
              </motion.button>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1, duration: 0.5 }}
                  className="heading-serif text-3xl tracking-[0.1em] text-white hover:text-[#c9a962] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="btn-primary mt-8"
              >
                {t.nav.bookNow}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
