"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star, Crown, Zap } from "lucide-react";

type Plan = {
  id: string;
  icon: typeof Star;
  name: string;
  tagline: string;
  price: number;
  period: string;
  color: string;
  popular: boolean;
  features: string[];
  cta: string;
};

const plans: Plan[] = [
  {
    id: "comfort",
    icon: Zap,
    name: "Comfort",
    tagline: "Twój start do luksusu",
    price: 249,
    period: "/ miesiąc",
    color: "#8b8b8b",
    popular: false,
    features: [
      "Dostęp do siłowni 06:00–22:00",
      "Strefa cardio i maszyny",
      "2 zajęcia grupowe / tydzień",
      "Szatnia i przebieralnia VIP",
      "Aplikacja mobilna z planem treningowym",
      "1 konsultacja z trenerem / miesiąc",
    ],
    cta: "Zacznij teraz",
  },
  {
    id: "premium",
    icon: Star,
    name: "Premium",
    tagline: "Dla prawdziwych graczy",
    price: 449,
    period: "/ miesiąc",
    color: "#c9a84c",
    popular: true,
    features: [
      "Dostęp 24/7 do całego klubu",
      "Nieograniczone zajęcia grupowe",
      "Strefa Wellness & Sauna bez limitu",
      "4 sesje z trenerem personalnym / miesiąc",
      "Protein Bar – 20% rabat",
      "Priorytetowa rezerwacja zajęć",
      "Analiza składu ciała co miesiąc",
      "Dedykowany plan żywieniowy",
    ],
    cta: "Wybierz Premium",
  },
  {
    id: "vip",
    icon: Crown,
    name: "VIP Elite",
    tagline: "Bez kompromisów",
    price: 799,
    period: "/ miesiąc",
    color: "#c0392b",
    popular: false,
    features: [
      "Wszystko z planu Premium",
      "Dedykowany trener personalny",
      "8 sesji treningowych / miesiąc",
      "Zarezerwowana szafka VIP",
      "Wstęp na eventy i masterclassy",
      "Krioterapia bez limitu",
      "Masaże sportowe 2× / miesiąc",
      "Konsjerż treningowy – linia priorytetowa",
      "Roczna analiza postępów z ekspertem",
    ],
    cta: "Wejdź do elity",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#080810]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/4 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">
            Karnety
          </span>
          <h2
            className="text-5xl sm:text-6xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Wybierz swój{" "}
            <span className="text-gradient-gold">poziom</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Każdy karnet to gwarancja jakości. Różni się tylko zakresem dostępu do luksusu.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`relative rounded-2xl overflow-hidden flex flex-col ${
                plan.popular
                  ? "lg:-translate-y-4 lg:scale-[1.03]"
                  : ""
              }`}
              style={{
                background: plan.popular
                  ? `linear-gradient(135deg, #0f0f1a, #1a1208)`
                  : "linear-gradient(135deg, #0d0d12, #111118)",
                border: plan.popular
                  ? `1px solid ${plan.color}60`
                  : `1px solid rgba(255,255,255,0.08)`,
                boxShadow: plan.popular
                  ? `0 0 60px ${plan.color}25, 0 30px 80px rgba(0,0,0,0.5)`
                  : "none",
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-bold tracking-[0.3em] uppercase text-black"
                  style={{
                    background: `linear-gradient(90deg, ${plan.color}, #e8c96a)`,
                    fontFamily: "var(--font-oswald)",
                  }}
                >
                  Najpopularniejszy wybór
                </div>
              )}

              <div className={`p-8 flex flex-col flex-1 ${plan.popular ? "pt-12" : ""}`}>
                {/* Icon + Name */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}30` }}
                    >
                      <plan.icon className="w-6 h-6" style={{ color: plan.color }} />
                    </div>
                    <h3
                      className="text-2xl font-black uppercase text-white"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-sm text-white/40 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                      {plan.tagline}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-5xl font-black"
                      style={{ fontFamily: "var(--font-oswald)", color: plan.color }}
                    >
                      {plan.price} zł
                    </span>
                  </div>
                  <span className="text-sm text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
                    {plan.period} • bez zobowiązań
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${plan.color}20` }}
                      >
                        <Check className="w-3 h-3" style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#footer"
                  className="block text-center py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    background: plan.popular
                      ? `linear-gradient(135deg, ${plan.color}, #e8c96a)`
                      : "transparent",
                    color: plan.popular ? "#000" : plan.color,
                    border: plan.popular ? "none" : `1px solid ${plan.color}50`,
                    boxShadow: plan.popular ? `0 0 30px ${plan.color}40` : "none",
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 text-sm text-white/30"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Wszystkie ceny zawierają VAT. Możliwość rezygnacji z miesięcznym wyprzedzeniem.
          Brak opłat aktywacyjnych.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
