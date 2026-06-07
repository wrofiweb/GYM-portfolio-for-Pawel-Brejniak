"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Clock,
  Camera,
  Globe,
  Play,
  X,
} from "lucide-react";

const hours = [
  { day: "Poniedziałek – Piątek", hours: "06:00 – 22:00" },
  { day: "Sobota", hours: "08:00 – 20:00" },
  { day: "Niedziela", hours: "09:00 – 18:00" },
  { day: "Strefa VIP 24/7", hours: "Całą dobę" },
];

const socials = [
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Globe, label: "Facebook", href: "#" },
  { icon: Play, label: "YouTube", href: "#" },
  { icon: X, label: "X / Twitter", href: "#" },
];

const quickLinks = [
  { label: "O nas", href: "#about" },
  { label: "Strefy klubu", href: "#zones" },
  { label: "Grafik zajęć", href: "#schedule" },
  { label: "Karnety", href: "#pricing" },
  { label: "Trenerzy", href: "#trainers" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#030305] overflow-hidden">
      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      {/* Map placeholder */}
      <div className="relative w-full h-64 bg-[#0a0a12] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
          <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center">
            <MapPin className="w-7 h-7 text-[#c9a84c]" />
          </div>
          <div className="text-center">
            <p
              className="text-white/60 text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Iron Haven Premium
            </p>
            <p className="text-white/30 text-xs mt-1" style={{ fontFamily: "var(--font-inter)" }}>
              ul. Złota 44, 00-120 Warszawa
            </p>
          </div>
          <div
            className="absolute bottom-4 right-4 text-xs text-white/20 border border-white/10 rounded px-2 py-1"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Mapa interaktywna – wkrótce
          </div>
        </div>
        {/* Decorative grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#8b0000] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <div
                  className="text-xl font-bold tracking-widest text-gradient-gold uppercase"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Iron Haven
                </div>
                <div className="text-[10px] tracking-[0.3em] text-[#c9a84c]/50 uppercase">
                  Premium
                </div>
              </div>
            </a>
            <p
              className="text-white/40 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Ekskluzywny klub fitness dla tych, którym nie wystarczają standardy. Luksus, siła i wyniki — w jednym miejscu.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm font-bold tracking-[0.2em] uppercase text-white/80 mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Szybkie linki
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-[#c9a84c] transition-colors duration-200 animated-underline"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="text-sm font-bold tracking-[0.2em] uppercase text-white/80 mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              <Clock className="w-4 h-4 text-[#c9a84c]" />
              Godziny Otwarcia
            </h4>
            <ul className="space-y-4">
              {hours.map((h) => (
                <li key={h.day} className="flex flex-col gap-0.5">
                  <span
                    className="text-xs text-white/30 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {h.day}
                  </span>
                  <span
                    className="text-sm font-semibold text-[#c9a84c]"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold tracking-[0.2em] uppercase text-white/80 mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50" style={{ fontFamily: "var(--font-inter)" }}>
                  ul. Złota 44<br />00-120 Warszawa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                <a
                  href="tel:+48221234567"
                  className="text-sm text-white/50 hover:text-[#c9a84c] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  +48 22 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                <a
                  href="mailto:hello@ironhaven.pl"
                  className="text-sm text-white/50 hover:text-[#c9a84c] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  hello@ironhaven.pl
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-xs text-white/30 mb-3 tracking-wider uppercase" style={{ fontFamily: "var(--font-inter)" }}>
                Newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Twój e-mail"
                  className="flex-1 bg-[#0d0d12] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
                <button
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#c9a84c] to-[#8b6914] text-black text-xs font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-white/20"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © {new Date().getFullYear()} Iron Haven Premium. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            {["Polityka Prywatności", "Regulamin", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/20 hover:text-white/50 transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
