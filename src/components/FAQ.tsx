"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const faqsEn = [
  {
    question: "How do I book an appointment?",
    answer: "Start by filling out the contact form with your idea, placement, and approximate size. I'll review your request and get back to you within 2-3 business days to schedule a consultation. For large custom pieces, we'll discuss the design in detail before booking your first session.",
  },
  {
    question: "How much will my tattoo cost?",
    answer: "My hourly rate is 180 CHF with a 2-hour minimum. Small pieces are typically completed in 2-3 hours. Large-scale work like sleeves or back pieces require multiple sessions (usually 3-8 sessions of 3-6 hours each) and are priced per session. I'll provide a detailed estimate after our consultation.",
  },
  {
    question: "How long does a tattoo take to heal?",
    answer: "Initial healing takes 2-3 weeks, during which you'll follow specific aftercare instructions. The skin will continue to settle for 4-6 weeks total. For dotwork and fine line tattoos, the final result becomes fully visible after 6-8 weeks as the stippling settles into its permanent state.",
  },
  {
    question: "Does it hurt?",
    answer: "Pain varies by placement and individual tolerance. Areas over bone (ribs, ankles, collarbones) tend to be more sensitive, while fleshier areas (thighs, upper arms) are generally more tolerable. I work efficiently to minimize session time, and we can schedule breaks as needed during longer sessions.",
  },
  {
    question: "Can I see the design before my appointment?",
    answer: "Absolutely. For custom work, I'll share the design at least 48 hours before your session for approval. Revisions are included in the process—we'll work together until you're completely satisfied with the design. The 30% deposit covers this design time.",
  },
  {
    question: "What should I do before my session?",
    answer: "Get a good night's sleep, eat a solid meal, and stay hydrated. Avoid alcohol for 24 hours before (it thins blood). Wear comfortable clothing that allows easy access to the tattoo area. Bring entertainment for long sessions—headphones, book, or tablet.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "I understand plans change. Cancellations made 72+ hours before your appointment can be rescheduled or receive a deposit refund minus a 50 CHF administrative fee. Cancellations within 72 hours forfeit the deposit. No-shows forfeit the deposit and require full prepayment for future bookings.",
  },
  {
    question: "Do you do cover-ups or fix other artists' work?",
    answer: "I take on select cover-up projects depending on the existing tattoo's size, darkness, and location. Some pieces require laser fading first for best results. Send clear photos of the area and I'll assess whether it's something I can work with.",
  },
];

const faqsFr = [
  {
    question: "Comment réserver un rendez-vous ?",
    answer: "Commencez par remplir le formulaire de contact avec votre idée, l'emplacement et la taille approximative. J'examinerai votre demande et vous répondrai sous 2-3 jours ouvrables pour planifier une consultation. Pour les grandes pièces personnalisées, nous discuterons du design en détail avant de réserver votre première séance.",
  },
  {
    question: "Combien coûtera mon tatouage ?",
    answer: "Mon tarif horaire est de 180 CHF avec un minimum de 2 heures. Les petites pièces sont généralement terminées en 2-3 heures. Les travaux à grande échelle comme les manchettes ou les dos nécessitent plusieurs séances (généralement 3-8 séances de 3-6 heures chacune) et sont facturés par séance. Je vous fournirai un devis détaillé après notre consultation.",
  },
  {
    question: "Combien de temps faut-il pour qu'un tatouage guérisse ?",
    answer: "La guérison initiale prend 2-3 semaines, pendant lesquelles vous suivrez des instructions de soins spécifiques. La peau continuera de se stabiliser pendant 4-6 semaines au total. Pour les tatouages dotwork et fin line, le résultat final devient entièrement visible après 6-8 semaines lorsque le pointillage se stabilise dans son état permanent.",
  },
  {
    question: "Est-ce que ça fait mal ?",
    answer: "La douleur varie selon l'emplacement et la tolérance individuelle. Les zones au-dessus des os (côtes, chevilles, clavicules) ont tendance à être plus sensibles, tandis que les zones plus charnues (cuisses, haut des bras) sont généralement plus tolérables. Je travaille efficacement pour minimiser le temps de séance, et nous pouvons planifier des pauses pendant les longues séances.",
  },
  {
    question: "Puis-je voir le design avant mon rendez-vous ?",
    answer: "Absolument. Pour le travail personnalisé, je partagerai le design au moins 48 heures avant votre séance pour approbation. Les révisions sont incluses dans le processus—nous travaillerons ensemble jusqu'à ce que vous soyez complètement satisfait du design. L'acompte de 30% couvre ce temps de conception.",
  },
  {
    question: "Que dois-je faire avant ma séance ?",
    answer: "Faites une bonne nuit de sommeil, mangez un repas solide et hydratez-vous. Évitez l'alcool 24 heures avant (cela fluidifie le sang). Portez des vêtements confortables qui permettent un accès facile à la zone du tatouage. Apportez du divertissement pour les longues séances—casque, livre ou tablette.",
  },
  {
    question: "Quelle est votre politique d'annulation ?",
    answer: "Je comprends que les plans changent. Les annulations faites 72+ heures avant votre rendez-vous peuvent être reprogrammées ou remboursées moins des frais administratifs de 50 CHF. Les annulations dans les 72 heures perdent l'acompte. Les absences perdent l'acompte et nécessitent un prépaiement intégral pour les réservations futures.",
  },
  {
    question: "Faites-vous des recouvrements ou réparez-vous le travail d'autres artistes ?",
    answer: "Je prends des projets de recouvrement sélectifs selon la taille, l'obscurité et l'emplacement du tatouage existant. Certaines pièces nécessitent d'abord un éclaircissement au laser pour de meilleurs résultats. Envoyez des photos claires de la zone et j'évaluerai si c'est quelque chose avec lequel je peux travailler.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#2a2a2a]">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-white text-lg pr-8 group-hover:text-[#c9a962] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={24} className="text-[#a0a0a0]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#a0a0a0] leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = language === "fr" ? faqsFr : faqsEn;

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">
            {t.faq.subtitle}
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {t.faq.title}
          </h2>
          <p className="text-[#a0a0a0] max-w-xl mx-auto">
            {t.faq.description}
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-[#a0a0a0] mb-4">{t.faq.stillQuestions}</p>
          <a
            href="#contact"
            className="btn-outline inline-block"
          >
            {t.faq.getInTouch}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
