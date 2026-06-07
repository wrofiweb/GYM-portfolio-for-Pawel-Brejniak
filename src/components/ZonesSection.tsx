"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Dumbbell,
  Activity,
  Wind,
  Waves,
  Coffee,
  Swords,
} from "lucide-react";

const zones = [
  {
    icon: Dumbbell,
    title: "Hardcore Zone",
    subtitle: "Powerlifting & Strongman",
    desc: "Dedykowana przestrzeń z platformami olimpijskimi, klatkami do przysiadów i sprzętem strongman. Dla tych, którzy nie kompromitują się w kwestii ciężarów.",
    color: "#c0392b",
    gradient: "from-[#8b0000]/30 to-[#c0392b]/10",
    border: "border-[#8b0000]/30 hover:border-[#c0392b]/70",
    badge: "Zona Mocy",
  },
  {
    icon: Activity,
    title: "Cardio Arena",
    subtitle: "High-Performance Cardio",
    desc: "120 maszyn cardio najnowszej generacji Technogym. Bieżnie 4K, rowery kinomap i system treningów interwałowych HIIT z monitoringiem HR.",
    color: "#c9a84c",
    gradient: "from-[#c9a84c]/20 to-[#8b6914]/10",
    border: "border-[#c9a84c]/20 hover:border-[#c9a84c]/70",
    badge: "Cardio",
  },
  {
    icon: Swords,
    title: "Combat Lab",
    subtitle: "Sztuki Walki & MMA",
    desc: "Profesjonalny ring bokserski, klatka MMA, worki treningowe i strefy do grapplingu. Trening z certyfikowanymi instruktorami Muay Thai, BJJ i boksem.",
    color: "#c0392b",
    gradient: "from-[#8b0000]/30 to-transparent",
    border: "border-[#8b0000]/20 hover:border-[#c0392b]/70",
    badge: "Combat",
  },
  {
    icon: Wind,
    title: "Maszyny Izotoniczne",
    subtitle: "Precyzja & Izolacja",
    desc: "Kompletna seria maszyn Life Fitness Insignia i Hammer Strength. Każda partia mięśniowa, izolowana perfekcyjnie. Idealne dla zaawansowanych i rehabilitacji.",
    color: "#c9a84c",
    gradient: "from-[#c9a84c]/15 to-transparent",
    border: "border-[#c9a84c]/20 hover:border-[#c9a84c]/60",
    badge: "Izolacja",
  },
  {
    icon: Waves,
    title: "Wellness & Spa",
    subtitle: "Recovery & Relaks",
    desc: "Sauna fińska 90°C, łaźnia parowa, jacuzzi, krioterapia -110°C, masaże sportowe i strefa medytacji. Kompletny program regeneracji po intensywnym treningu.",
    color: "#4a90d9",
    gradient: "from-[#1a3a5c]/30 to-transparent",
    border: "border-[#1a3a5c]/30 hover:border-[#4a90d9]/50",
    badge: "Recovery",
  },
  {
    icon: Coffee,
    title: "Protein Bar",
    subtitle: "Fuel & Nutrition",
    desc: "Autorski bar proteinowy z koktajlami, suplementacją, posiłkami potreningowymi i konsultacjami dietetycznymi. Bo wyniki zaczynają się w kuchni.",
    color: "#c9a84c",
    gradient: "from-[#4a3000]/30 to-transparent",
    border: "border-[#4a3000]/30 hover:border-[#c9a84c]/50",
    badge: "Nutrition",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

export default function ZonesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="zones" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#c9a84c]/2 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">
            Infrastruktura
          </span>
          <h2
            className="text-5xl sm:text-6xl font-black uppercase leading-tight text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Strefy{" "}
            <span className="text-gradient-gold">Klubu</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Sześć dedykowanych przestrzeni, zaprojektowanych by odpowiedzieć na każdą potrzebę
            — od maksymalnej siły po głęboki relaks.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone, i) => (
            <motion.div
              key={zone.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`relative luxury-card rounded-2xl p-8 overflow-hidden group cursor-default ${zone.border} transition-all duration-500`}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${zone.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Badge */}
              <span
                className="absolute top-6 right-6 text-xs tracking-[0.2em] uppercase px-2 py-1 rounded-full"
                style={{
                  color: zone.color,
                  background: `${zone.color}15`,
                  border: `1px solid ${zone.color}30`,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {zone.badge}
              </span>

              {/* Icon */}
              <div
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${zone.color}20`, border: `1px solid ${zone.color}30` }}
              >
                <zone.icon className="w-7 h-7" style={{ color: zone.color }} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-xl font-bold text-white uppercase mb-1"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {zone.title}
                </h3>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: zone.color, fontFamily: "var(--font-inter)" }}>
                  {zone.subtitle}
                </p>
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300" style={{ fontFamily: "var(--font-inter)" }}>
                  {zone.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                style={{ background: `linear-gradient(90deg, ${zone.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
