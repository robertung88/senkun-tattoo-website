"use client";

import { motion } from "framer-motion";
import { Check, X, Clock, Droplets, Sun, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const doItemsEn = [
  "Keep the bandage on for 2-4 hours after your session",
  "Wash gently with unscented soap and lukewarm water",
  "Pat dry with a clean paper towel—don't rub",
  "Apply a thin layer of recommended aftercare balm",
  "Keep the tattoo clean and moisturized for 2-3 weeks",
  "Wear loose, breathable clothing over the area",
  "Let any scabbing or peeling happen naturally",
];

const dontItemsEn = [
  "Don't pick, scratch, or peel any scabs or flakes",
  "Avoid swimming pools, hot tubs, and baths for 2 weeks",
  "No direct sun exposure or tanning for 4 weeks",
  "Don't use petroleum-based products or heavy lotions",
  "Avoid tight clothing that rubs against the tattoo",
  "No intense workouts that stretch the tattooed area for 1 week",
  "Don't let pets sleep on or near fresh tattoos",
];

const doItemsFr = [
  "Gardez le bandage 2-4 heures après votre séance",
  "Lavez doucement avec du savon sans parfum et de l'eau tiède",
  "Séchez en tapotant avec une serviette en papier propre—ne frottez pas",
  "Appliquez une fine couche de baume de soin recommandé",
  "Gardez le tatouage propre et hydraté pendant 2-3 semaines",
  "Portez des vêtements amples et respirants sur la zone",
  "Laissez les croûtes ou pellicules se détacher naturellement",
];

const dontItemsFr = [
  "Ne grattez, ne piquez ou ne retirez pas les croûtes",
  "Évitez piscines, jacuzzis et bains pendant 2 semaines",
  "Pas d'exposition directe au soleil ou bronzage pendant 4 semaines",
  "N'utilisez pas de produits à base de pétrole ou lotions épaisses",
  "Évitez les vêtements serrés qui frottent contre le tatouage",
  "Pas d'entraînement intense étirant la zone tatouée pendant 1 semaine",
  "Ne laissez pas les animaux dormir sur ou près des tatouages frais",
];

export default function Aftercare() {
  const { t, language } = useLanguage();

  const doItems = language === "fr" ? doItemsFr : doItemsEn;
  const dontItems = language === "fr" ? dontItemsFr : dontItemsEn;

  const timeline = [
    {
      days: language === "fr" ? "Jours 1-3" : "Days 1-3",
      title: language === "fr" ? "Frais & Protégé" : "Fresh & Protected",
      description: language === "fr" 
        ? "Le tatouage sera sensible, légèrement gonflé et peut suinter. Gardez-le propre et légèrement hydraté. Rougueur et gonflement normaux."
        : "The tattoo will be tender, slightly raised, and may weep plasma. Keep it clean and lightly moisturized. Redness and swelling are normal.",
      icon: Droplets,
    },
    {
      days: language === "fr" ? "Jours 4-7" : "Days 4-7",
      title: language === "fr" ? "Peeling" : "Peeling Begins",
      description: language === "fr"
        ? "Le tatouage commence à peler comme un coup de soleil. C'est normal—laissez-le faire. Continuez l'hydratation légère."
        : "The tattoo will start to flake and peel like a sunburn. This is normal—let it happen naturally. Continue light moisturizing.",
      icon: Sparkles,
    },
    {
      days: language === "fr" ? "Jours 8-14" : "Days 8-14",
      title: language === "fr" ? "Installation" : "Settling In",
      description: language === "fr"
        ? "Le peeling diminue. Le tatouage peut paraître terne pendant que la nouvelle peau se forme. Démangeaisons normales—ne grattez pas."
        : "Peeling subsides. The tattoo may look dull or cloudy as the new skin forms. Continue care routine. Itching is common—don't scratch.",
      icon: Clock,
    },
    {
      days: language === "fr" ? "Semaines 3-6" : "Weeks 3-6",
      title: language === "fr" ? "Complètement Guéri" : "Fully Healed",
      description: language === "fr"
        ? "La couche supérieure est guérie. Les couleurs et détails deviennent nets. Vous pouvez reprendre toutes les activités."
        : "The top layer is healed, though deeper layers continue settling. Colors and details become crisp. You can resume all activities.",
      icon: Sun,
    },
  ];

  return (
    <section id="aftercare" className="py-24 md:py-32 bg-[#1a1a1a]">
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
            {t.aftercare.subtitle}
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {t.aftercare.title}
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto">
            {t.aftercare.description}
          </p>
        </motion.div>

        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Do's */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0a0a0a] p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check size={20} className="text-green-500" />
              </div>
              <h3 className="heading-serif text-2xl text-white">{t.aftercare.do}</h3>
            </div>
            <ul className="space-y-4">
              {doItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-[#a0a0a0]"
                >
                  <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Don'ts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <X size={20} className="text-red-500" />
              </div>
              <h3 className="heading-serif text-2xl text-white">{t.aftercare.dont}</h3>
            </div>
            <ul className="space-y-4">
              {dontItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-[#a0a0a0]"
                >
                  <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="heading-serif text-2xl md:text-3xl text-white text-center mb-12">
            {t.aftercare.timeline.title}
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((phase, index) => (
            <motion.div
              key={phase.days}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0a0a0a] p-6 border-t-2 border-[#c9a962]"
            >
              <div className="flex items-center gap-3 mb-4">
                <phase.icon size={20} className="text-[#c9a962]" />
                <span className="text-[#c9a962] text-xs tracking-[0.1em] uppercase">
                  {phase.days}
                </span>
              </div>
              <h4 className="heading-serif text-lg text-white mb-3">
                {phase.title}
              </h4>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Download PDF */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="btn-outline">
            {t.aftercare.download}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
