"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";

const navLinks = [
  { label: "O nas", href: "#about" },
  { label: "Strefy", href: "#zones" },
  { label: "Grafik", href: "#schedule" },
  { label: "Karnety", href: "#pricing" },
  { label: "Trenerzy", href: "#trainers" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050508]/95 backdrop-blur-xl border-b border-[#c9a84c]/20 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#8b0000] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(201,168,76,0.5)] transition-all duration-300">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-bold tracking-widest text-gradient-gold"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  IRON HAVEN
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#c9a84c]/60 uppercase">
                  Premium
                </span>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="animated-underline text-sm tracking-widest text-white/70 hover:text-[#c9a84c] transition-colors duration-300 uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#pricing"
                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#8b6914] text-black font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Dołącz teraz
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[#c9a84c] hover:text-white transition-colors"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#050508]/98 backdrop-blur-2xl border-b border-[#c9a84c]/20 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-lg tracking-widest text-white/80 hover:text-[#c9a84c] transition-colors uppercase py-2 border-b border-white/5"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center py-3 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#8b6914] text-black font-bold tracking-widest uppercase"
              >
                Dołącz teraz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
