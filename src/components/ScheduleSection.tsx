"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Clock, User, Flame } from "lucide-react";

type Class = {
  time: string;
  name: string;
  trainer: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  spots: number;
};

type Category = {
  id: string;
  label: string;
  color: string;
  classes: Class[];
};

const levelColors: Record<string, string> = {
  Beginner: "#22c55e",
  Intermediate: "#c9a84c",
  Advanced: "#c0392b",
  "All Levels": "#8b8b8b",
};

const schedule: Category[] = [
  {
    id: "crossfit",
    label: "CrossFit",
    color: "#c0392b",
    classes: [
      { time: "06:00", name: "Morning WOD", trainer: "Marek Kowalski", duration: "60 min", level: "Advanced", spots: 3 },
      { time: "08:30", name: "Foundations CF", trainer: "Anna Wiśniewska", duration: "75 min", level: "Beginner", spots: 8 },
      { time: "12:00", name: "Power Hour", trainer: "Piotr Nowak", duration: "60 min", level: "Intermediate", spots: 5 },
      { time: "17:30", name: "Competition Prep", trainer: "Marek Kowalski", duration: "90 min", level: "Advanced", spots: 2 },
      { time: "19:00", name: "Evening WOD", trainer: "Katarzyna Maj", duration: "60 min", level: "All Levels", spots: 6 },
    ],
  },
  {
    id: "yoga",
    label: "Yoga & Mind",
    color: "#4a90d9",
    classes: [
      { time: "07:00", name: "Sunrise Vinyasa", trainer: "Zofia Kamińska", duration: "60 min", level: "All Levels", spots: 12 },
      { time: "10:00", name: "Power Yoga", trainer: "Zofia Kamińska", duration: "75 min", level: "Intermediate", spots: 9 },
      { time: "13:00", name: "Yin & Restore", trainer: "Marta Lewandowska", duration: "90 min", level: "Beginner", spots: 14 },
      { time: "18:00", name: "Hot Yoga 38°C", trainer: "Marta Lewandowska", duration: "60 min", level: "Intermediate", spots: 7 },
      { time: "20:00", name: "Meditation & Breath", trainer: "Zofia Kamińska", duration: "45 min", level: "All Levels", spots: 20 },
    ],
  },
  {
    id: "combat",
    label: "Sztuki Walki",
    color: "#c9a84c",
    classes: [
      { time: "07:30", name: "Muay Thai Basic", trainer: "Dawid Jabłoński", duration: "75 min", level: "Beginner", spots: 10 },
      { time: "10:30", name: "BJJ Fundamentals", trainer: "Rafał Stępień", duration: "90 min", level: "Beginner", spots: 8 },
      { time: "14:00", name: "Boxing Sparring", trainer: "Dawid Jabłoński", duration: "60 min", level: "Advanced", spots: 4 },
      { time: "17:00", name: "MMA Circuit", trainer: "Rafał Stępień", duration: "90 min", level: "Intermediate", spots: 6 },
      { time: "19:30", name: "Muay Thai Advanced", trainer: "Dawid Jabłoński", duration: "90 min", level: "Advanced", spots: 3 },
    ],
  },
  {
    id: "powerlifting",
    label: "Powerlifting",
    color: "#c0392b",
    classes: [
      { time: "06:30", name: "Squat Masterclass", trainer: "Bartosz Wielki", duration: "90 min", level: "Intermediate", spots: 5 },
      { time: "09:00", name: "Bench Press Clinic", trainer: "Bartosz Wielki", duration: "60 min", level: "All Levels", spots: 7 },
      { time: "12:30", name: "Olympic Lifting", trainer: "Igor Zbrojny", duration: "75 min", level: "Advanced", spots: 4 },
      { time: "16:00", name: "Deadlift Day", trainer: "Bartosz Wielki", duration: "90 min", level: "Intermediate", spots: 6 },
      { time: "19:00", name: "Competition Prep", trainer: "Igor Zbrojny", duration: "120 min", level: "Advanced", spots: 3 },
    ],
  },
];

export default function ScheduleSection() {
  const [active, setActive] = useState("crossfit");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const activeData = schedule.find((s) => s.id === active)!;

  return (
    <section id="schedule" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">
            Plan Zajęć
          </span>
          <h2
            className="text-5xl sm:text-6xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Grafik <span className="text-gradient-gold">Treningów</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Ponad 60 zajęć tygodniowo prowadzonych przez certyfikowanych mistrzów swoich dyscyplin.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {schedule.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 overflow-hidden ${
                active === cat.id
                  ? "text-black shadow-lg scale-105"
                  : "text-white/50 border border-white/10 hover:border-white/30 hover:text-white/80"
              }`}
              style={{
                fontFamily: "var(--font-oswald)",
                background: active === cat.id
                  ? `linear-gradient(135deg, ${cat.color}, ${cat.color}aa)`
                  : "transparent",
                boxShadow: active === cat.id ? `0 0 25px ${cat.color}60` : "none",
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Classes list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {activeData.classes.map((cls, i) => (
              <motion.div
                key={cls.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                className="luxury-card rounded-xl p-5 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#c9a84c]" />
                    <span
                      className="text-lg font-bold text-[#c9a84c]"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {cls.time}
                    </span>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      color: levelColors[cls.level],
                      background: `${levelColors[cls.level]}20`,
                      border: `1px solid ${levelColors[cls.level]}40`,
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {cls.level}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-white mb-1 uppercase"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {cls.name}
                </h3>

                <div className="flex items-center gap-3 mt-3 text-sm text-white/50" style={{ fontFamily: "var(--font-inter)" }}>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{cls.trainer}</span>
                  </div>
                  <span>•</span>
                  <span>{cls.duration}</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#c0392b]" />
                    <span className="text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                      {cls.spots} wolnych miejsc
                    </span>
                  </div>
                  <button
                    className="text-xs text-[#c9a84c] hover:text-white border border-[#c9a84c]/30 hover:border-[#c9a84c] px-3 py-1 rounded-full transition-all duration-200"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    Zapisz się
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
