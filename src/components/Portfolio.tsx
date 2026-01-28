"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const portfolioItems = [
  {
    id: 1,
    src: "/images/work-1-santa-muerte.jpg",
    title: "Santa Muerte",
    category: "fantasy",
    placement: "Thigh",
    sessions: "3 sessions",
    details: "Black & grey illustrative with ornamental halo",
  },
  {
    id: 2,
    src: "/images/work-2-mythological-portrait.jpg",
    title: "Mythological Portrait",
    category: "fantasy",
    placement: "Full Sleeve",
    sessions: "6 sessions",
    details: "Fine line portrait with ornamental elements",
  },
  {
    id: 3,
    src: "/images/work-3.jpg",
    title: "Dragon",
    category: "fantasy",
    placement: "Rib/Torso",
    sessions: "4 sessions",
    details: "Dotwork dragon with stippled scales",
  },
  {
    id: 4,
    src: "/images/work-4.jpg",
    title: "Medusa",
    category: "fantasy",
    placement: "Chest",
    sessions: "2 sessions",
    details: "Fine line Medusa with snake hair detail",
  },
  {
    id: 5,
    src: "/images/work-5.jpg",
    title: "Scorpion",
    category: "ornamental",
    placement: "Shoulder",
    sessions: "1 session",
    details: "Stippled scorpion with geometric accents",
  },
  {
    id: 6,
    src: "/images/mythological-portrait/Untitled.jpg",
    title: "Ornamental Sleeve",
    category: "large-scale",
    placement: "Full Sleeve",
    sessions: "8 sessions",
    details: "Large-scale ornamental composition",
  },
  {
    id: 7,
    src: "/images/santa-muerte/Untitled.jpg",
    title: "Santa Muerte Detail",
    category: "fantasy",
    placement: "Thigh",
    sessions: "3 sessions",
    details: "Healed result showing dotwork aging",
  },
];

export default function Portfolio() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: "all", label: t.portfolio.categories.all },
    { id: "fantasy", label: t.portfolio.categories.fantasy },
    { id: "ornamental", label: t.portfolio.categories.ornamental },
    { id: "large-scale", label: t.portfolio.categories.largeScale },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="work" className="py-24 md:py-32 bg-[#0a0a0a]">
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
            {t.portfolio.subtitle}
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {t.portfolio.title}
          </h2>
          <p className="text-[#a0a0a0] max-w-xl mx-auto">
            {t.portfolio.description}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 text-sm tracking-[0.1em] uppercase transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-white text-[#0a0a0a]"
                  : "border border-[#2a2a2a] text-[#a0a0a0] hover:border-white hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer"
              >
                <div className="image-hover relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="heading-serif text-xl text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#a0a0a0] text-sm mb-2">
                      {item.placement} • {item.sessions}
                    </p>
                    <p className="text-[#c9a962] text-xs tracking-[0.1em] uppercase">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-2 text-white hover:text-[#c9a962] transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-[#c9a962] transition-colors"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-[#c9a962] transition-colors"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredItems[currentIndex].src}
                alt={filteredItems[currentIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <h3 className="heading-serif text-xl text-white mb-1">
                {filteredItems[currentIndex].title}
              </h3>
              <p className="text-[#a0a0a0] text-sm">
                {filteredItems[currentIndex].placement} • {filteredItems[currentIndex].sessions}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
