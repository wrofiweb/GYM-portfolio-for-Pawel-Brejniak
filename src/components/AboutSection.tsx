"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Shield, Target, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precyzja",
    desc: "Każdy plan treningowy tworzony jest z chirurgiczną dokładnością pod Twoje indywidualne cele.",
  },
  {
    icon: Shield,
    title: "Ekskluzywność",
    desc: "Ograniczona liczba członków zapewnia Ci przestrzeń i uwagę, na jaką zasługujesz.",
  },
  {
    icon: TrendingUp,
    title: "Progresja",
    desc: "Nieustanny monitoring wyników i adaptacja treningu gwarantują stały, mierzalny postęp.",
  },
  {
    icon: Award,
    title: "Doskonałość",
    desc: "Sprzęt najwyższej klasy, certyfikowani trenerzy i atmosfera motywująca do pokonywania granic.",
  },
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0a0508] to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#c9a84c]/3 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left – Text */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="inline-block text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">
              Nasza Filozofia
            </span>
            <h2
              className="text-5xl sm:text-6xl font-black uppercase leading-tight mb-8 text-white"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Więcej niż
              <br />
              <span className="text-gradient-gold">siłownia.</span>
              <br />
              Styl życia.
            </h2>
            <div className="space-y-5 text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              <p>
                Iron Haven Premium to projekt urodzony z obsesji na punkcie doskonałości.
                Założyliśmy go dla tych, którym nie wystarczają standardy — dla ludzi, którzy wiedzą,
                że szczyt jest dopiero punktem wyjścia.
              </p>
              <p>
                Na{" "}
                <span className="text-[#c9a84c]">3200 metrach kwadratowych</span> łączymy
                technologię treningową przyszłości z estetyką luksusowego spa. Nasze strefy —
                od hardcore powerlifting po strefę medytacji i krioterapii — tworzą kompletny
                ekosystem dla ciała i umysłu.
              </p>
              <p>
                Tu nie ma anonimowości. Każdy członek Iron Haven otrzymuje dedykowanego
                trenera, spersonalizowany plan i priorytetowy dostęp do wszystkich zasobów klubu.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#8b6914] text-black font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Poznaj karnety
              </a>
              <div className="h-px flex-1 bg-gradient-to-r from-[#c9a84c]/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right – Value cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeInRight}
                className="luxury-card rounded-2xl p-6 group cursor-default"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c]/20 to-[#8b0000]/20 flex items-center justify-center mb-4 group-hover:from-[#c9a84c]/40 group-hover:to-[#8b0000]/40 transition-all duration-300">
                  <v.icon className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
