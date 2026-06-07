"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Camera, Link } from "lucide-react";

const trainers = [
  {
    name: "Marek Kowalski",
    role: "Head Coach CrossFit",
    specialty: "CrossFit • Olimpijskie • Siła",
    quote: "Każde powtórzenie to negocjacja z własnym umysłem. Wygrywaj ją każdego dnia.",
    years: 12,
    clients: 340,
    cert: "CF-L3 Master Trainer",
    initials: "MK",
    color: "#c0392b",
  },
  {
    name: "Anna Wiśniewska",
    role: "Trener Personalny & Nutrition",
    specialty: "Trening Funkcjonalny • Dieta • Mobility",
    quote: "Twoje ciało jest najlepszą inwestycją, jaką kiedykolwiek zrobisz. Traktuj je tak.",
    years: 9,
    clients: 210,
    cert: "NASM-CPT • Dietetyk kliniczny",
    initials: "AW",
    color: "#c9a84c",
  },
  {
    name: "Bartosz Wielki",
    role: "Mistrz Powerlifting",
    specialty: "Powerlifting • Strongman • Siła Absolutna",
    quote: "Ciężar na sztandze nie kłamie. Albo dźwigasz, albo nie. Proste.",
    years: 15,
    clients: 180,
    cert: "WDFPF Champion • IFBB Coach",
    initials: "BW",
    color: "#c9a84c",
  },
  {
    name: "Dawid Jabłoński",
    role: "Instruktor Sztuk Walki",
    specialty: "Muay Thai • Boxing • MMA",
    quote: "Sztuka walki to nie przemoc. To dyscyplina, szacunek i kompletna kontrola ciała.",
    years: 14,
    clients: 290,
    cert: "WBC Certified • Kickboxing Champion",
    initials: "DJ",
    color: "#c0392b",
  },
  {
    name: "Zofia Kamińska",
    role: "Yoga & Mindfulness Expert",
    specialty: "Yoga • Meditation • Breathwork",
    quote: "Siła zaczyna się w umyśle. Najpierw uspokój myśl, potem porusz ciałem.",
    years: 11,
    clients: 420,
    cert: "E-RYT 500 • NASM Wellness Coach",
    initials: "ZK",
    color: "#4a90d9",
  },
  {
    name: "Igor Zbrojny",
    role: "Olympic Lifting Specialist",
    specialty: "Olympic Lifting • Eksplozywność • Atletyzm",
    quote: "Perfekcja techniki to nie cel. To jedyna droga. Reszta to tylko ćwiczenie.",
    years: 13,
    clients: 155,
    cert: "USAW Level 2 • Sports Science MSc",
    initials: "IZ",
    color: "#c9a84c",
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

export default function TrainersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trainers" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8b0000]/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">
            Kadra
          </span>
          <h2
            className="text-5xl sm:text-6xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Nasza <span className="text-gradient-gold">Drużyna</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Certyfikowani mistrzowie z pasją. Ich sukcesy stają się Twoimi sukcesami.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="luxury-card rounded-2xl overflow-hidden group"
            >
              {/* Top accent */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
              />

              <div className="p-7">
                {/* Avatar + social */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}40, ${t.color}20)`,
                      border: `2px solid ${t.color}40`,
                      fontFamily: "var(--font-oswald)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-[#c9a84c]/50 transition-colors">
                      <Camera className="w-3.5 h-3.5 text-white/40" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-[#c9a84c]/50 transition-colors">
                      <Link className="w-3.5 h-3.5 text-white/40" />
                    </button>
                  </div>
                </div>

                {/* Name & role */}
                <h3
                  className="text-xl font-bold text-white uppercase mb-0.5"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {t.name}
                </h3>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: t.color, fontFamily: "var(--font-inter)" }}>
                  {t.role}
                </p>
                <p className="text-xs text-white/35 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                  {t.specialty}
                </p>

                {/* Quote */}
                <div className="relative mb-5">
                  <Quote className="absolute -top-1 -left-1 w-4 h-4 text-[#c9a84c]/30" />
                  <p
                    className="pl-4 text-sm text-white/55 italic leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t.quote}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                  <div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: t.color, fontFamily: "var(--font-oswald)" }}
                    >
                      {t.years}+
                    </div>
                    <div className="text-xs text-white/30 tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>lat doświadczenia</div>
                  </div>
                  <div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: t.color, fontFamily: "var(--font-oswald)" }}
                    >
                      {t.clients}+
                    </div>
                    <div className="text-xs text-white/30 tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>zadowolonych klientów</div>
                  </div>
                </div>

                <p className="mt-3 text-xs text-white/25 italic" style={{ fontFamily: "var(--font-inter)" }}>
                  {t.cert}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
