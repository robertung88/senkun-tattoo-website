"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Clock } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    placement: "",
    size: "",
    description: "",
    isFirstTattoo: "no",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">
            {t.contact.subtitle}
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-[#a0a0a0] max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-[#a0a0a0] mb-3">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white placeholder-[#666] focus:border-[#c9a962] focus:outline-none transition-colors"
                    placeholder={t.contact.form.name}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-[#a0a0a0] mb-3">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white placeholder-[#666] focus:border-[#c9a962] focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-[#a0a0a0] mb-3">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white placeholder-[#666] focus:border-[#c9a962] focus:outline-none transition-colors"
                    placeholder="+41 XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-[#a0a0a0] mb-3">
                    {t.contact.form.placement}
                  </label>
                  <input
                    type="text"
                    name="placement"
                    value={formData.placement}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white placeholder-[#666] focus:border-[#c9a962] focus:outline-none transition-colors"
                    placeholder={language === "fr" ? "Ex: Bras, dos..." : "e.g. Arm, back..."}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-[#a0a0a0] mb-3">
                    {t.contact.form.size}
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white focus:border-[#c9a962] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">{t.contact.form.sizeOptions.select}</option>
                    <option value="small">{t.contact.form.sizeOptions.small}</option>
                    <option value="medium">{t.contact.form.sizeOptions.medium}</option>
                    <option value="large">{t.contact.form.sizeOptions.large}</option>
                    <option value="xl">{t.contact.form.sizeOptions.xl}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-[#a0a0a0] mb-3">
                    {t.contact.form.firstTattoo}
                  </label>
                  <select
                    name="isFirstTattoo"
                    value={formData.isFirstTattoo}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white focus:border-[#c9a962] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="no">{t.contact.form.no}</option>
                    <option value="yes">{t.contact.form.yes}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.1em] uppercase text-[#a0a0a0] mb-3">
                  {t.contact.form.description}
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white placeholder-[#666] focus:border-[#c9a962] focus:outline-none transition-colors resize-none"
                  placeholder={language === "fr" 
                    ? "Décrivez votre vision, vos préférences de style..." 
                    : "Describe your vision, style preferences..."}
                />
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto">
                {t.contact.form.send}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Availability Status */}
            <div className="bg-[#1a1a1a] p-8 border-l-2 border-[#c9a962]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white font-medium">{t.contact.availability.booking}</span>
              </div>
              <p className="text-[#a0a0a0] text-sm mb-4">
                {t.contact.availability.waitTime}
              </p>
              <p className="text-[#a0a0a0] text-sm">
                {t.contact.availability.description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="heading-serif text-xl text-white">{t.contact.contact.title}</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:hello@senkuntattoo.ch"
                  className="flex items-center gap-4 text-[#a0a0a0] hover:text-white transition-colors group"
                >
                  <Mail size={20} className="text-[#c9a962]" />
                  <span className="link-underline">hello@senkuntattoo.ch</span>
                </a>
                <a
                  href="tel:+41791234567"
                  className="flex items-center gap-4 text-[#a0a0a0] hover:text-white transition-colors"
                >
                  <Phone size={20} className="text-[#c9a962]" />
                  <span className="link-underline">+41 79 123 45 67</span>
                </a>
                <a
                  href="https://instagram.com/senkun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#a0a0a0] hover:text-white transition-colors"
                >
                  <Instagram size={20} className="text-[#c9a962]" />
                  <span className="link-underline">@senkun</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-6">
              <h3 className="heading-serif text-xl text-white">{t.contact.contact.studio}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-[#a0a0a0]">
                  <MapPin size={20} className="text-[#c9a962] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white">Rue de la Tattoo 42</p>
                    <p>1205 Geneva, Switzerland</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-[#a0a0a0]">
                  <Clock size={20} className="text-[#c9a962] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white">{t.contact.contact.hours}</p>
                    <p>{t.contact.contact.schedule}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Info */}
            <div className="bg-[#1a1a1a] p-8">
              <h3 className="heading-serif text-xl text-white mb-4">{t.contact.pricing.title}</h3>
              <div className="space-y-3 text-[#a0a0a0] text-sm">
                <div className="flex justify-between">
                  <span>{t.contact.pricing.hourly}</span>
                  <span className="text-white">180 CHF/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.pricing.minimum}</span>
                  <span className="text-white">2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.pricing.fullDay}</span>
                  <span className="text-white">900 CHF</span>
                </div>
                <div className="pt-3 border-t border-[#2a2a2a]">
                  <p className="text-xs">
                    {t.contact.pricing.deposit}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
