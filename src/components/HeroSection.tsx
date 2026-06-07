"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown, Play, Zap } from "lucide-react";

const GymScene3D = dynamic(() => import("./GymScene3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />,
});

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid">
      {/* Deep background layers */}
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0a0508] to-[#050508]" />

      {/* Radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#8b0000]/10 blur-[80px]" />

      {/* 3D Scene */}
      <GymScene3D />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
              <Zap className="w-3 h-3" />
              Ekskluzywny Klub Fitness
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-6 uppercase"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            <span className="block text-white glow-text-gold">IRON</span>
            <span className="block text-gradient-gold">HAVEN</span>
            <span className="block text-white/30 text-3xl sm:text-4xl md:text-5xl tracking-[0.3em] font-light mt-2">
              PREMIUM
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Miejsce, gdzie ambicja spotyka luksus. Przekraczaj granice własnych możliwości
            w otoczeniu zaprojektowanym dla{" "}
            <span className="text-[#c9a84c] font-semibold">absolutnej elity.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#8b6914] text-black font-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,168,76,0.6)]"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#e8c96a] to-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Zap className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Dołącz teraz</span>
            </a>

            <a
              href="#about"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold text-sm tracking-widest uppercase hover:border-[#c9a84c]/60 hover:text-[#c9a84c] transition-all duration-300"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Wirtualny spacer
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 sm:gap-16"
          >
            {[
              { value: "5000+", label: "Aktywnych członków" },
              { value: "28", label: "Trenerów Premium" },
              { value: "3200m²", label: "Powierzchni Klubu" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-1"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-white/30 uppercase">Odkryj więcej</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#c9a84c]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
