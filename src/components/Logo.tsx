"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = "", showTagline = false }: LogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Main Logo */}
      <motion.div
        className="relative"
        whileHover="hover"
        initial="initial"
      >
        {/* Decorative top line */}
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent"
          variants={{
            initial: { scaleX: 0.5, opacity: 0.5 },
            hover: { scaleX: 1, opacity: 1 },
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Dot accents */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-2">
          <motion.span
            className="w-1 h-1 rounded-full bg-[#c9a962]"
            variants={{
              initial: { opacity: 0.3 },
              hover: { opacity: 1 },
            }}
          />
          <motion.span
            className="w-1 h-1 rounded-full bg-[#c9a962]"
            variants={{
              initial: { opacity: 0.6 },
              hover: { opacity: 1 },
            }}
          />
          <motion.span
            className="w-1 h-1 rounded-full bg-[#c9a962]"
            variants={{
              initial: { opacity: 0.3 },
              hover: { opacity: 1 },
            }}
          />
        </div>

        {/* SENKUN Text */}
        <motion.span
          className="heading-serif text-2xl md:text-3xl tracking-[0.35em] text-white relative"
          style={{ 
            fontWeight: 300,
            letterSpacing: '0.35em',
          }}
        >
          {"SENKUN".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hover: { y: -2 },
              }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.03,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>

        {/* Decorative bottom line with dots */}
        <div className="absolute -bottom-2 left-0 right-0 flex items-center justify-center gap-3">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent to-[#c9a962]/60"
            variants={{
              initial: { width: 20 },
              hover: { width: 40 },
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#c9a962]"
            variants={{
              initial: { scale: 0.8, opacity: 0.6 },
              hover: { scale: 1, opacity: 1 },
            }}
          />
          <motion.div
            className="h-px bg-gradient-to-l from-transparent to-[#c9a962]/60"
            variants={{
              initial: { width: 20 },
              hover: { width: 40 },
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>

      {/* Optional tagline */}
      {showTagline && (
        <motion.span
          className="text-[10px] tracking-[0.4em] uppercase text-[#c9a962]/70 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Tattoo Artistry
        </motion.span>
      )}
    </div>
  );
}

// Simple text version for navigation
export function LogoText({ className = "" }: { className?: string }) {
  return (
    <motion.span
      className={`heading-serif text-2xl md:text-3xl tracking-[0.3em] text-white ${className}`}
      style={{ fontWeight: 300 }}
      whileHover={{ 
        letterSpacing: "0.35em",
        transition: { duration: 0.3 }
      }}
    >
      SENKUN
    </motion.span>
  );
}

// Hero version with animation
export function LogoHero() {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top ornamental line */}
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a962]/50" />
        <div className="w-2 h-2 rounded-full border border-[#c9a962]/50" />
        <div className="w-2 h-2 rounded-full bg-[#c9a962]" />
        <div className="w-2 h-2 rounded-full border border-[#c9a962]/50" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a962]/50" />
      </motion.div>

      {/* Main text */}
      <h1 className="heading-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-[0.2em]">
        {"SENKUN".split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4 + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      {/* Bottom decorative element */}
      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a962]/40 to-transparent" />
      </motion.div>
    </motion.div>
  );
}
