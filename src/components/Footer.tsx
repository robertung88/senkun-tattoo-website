"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white text-sm tracking-[0.15em] uppercase mb-6">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {[
                { label: t.nav.work, href: "#work" },
                { label: t.nav.about, href: "#about" },
                { label: t.nav.contact, href: "#contact" },
                { label: t.nav.faq, href: "#faq" },
                { label: t.aftercare.title, href: "#aftercare" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#a0a0a0] text-sm hover:text-white transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white text-sm tracking-[0.15em] uppercase mb-6">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@senkuntattoo.ch"
                  className="text-[#a0a0a0] text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  hello@senkuntattoo.ch
                </a>
              </li>
              <li className="text-[#a0a0a0] text-sm flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Rue de la Tattoo 42<br />1205 Geneva, Switzerland</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white text-sm tracking-[0.15em] uppercase mb-6">
              {t.footer.follow}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/senkun.tattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:border-white hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
            <p className="text-[#a0a0a0] text-xs mt-6">
              {t.footer.followText}
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666] text-xs">
            © {currentYear} Senkun Tattoo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#666] text-xs hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#666] text-xs hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
