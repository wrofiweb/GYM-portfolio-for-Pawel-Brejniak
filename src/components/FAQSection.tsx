"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Czy mogę przyjść i przetestować klub przed zakupem karnetu?",
    a: "Oczywiście! Oferujemy bezpłatne próbne wejście przez 3 dni dla nowych osób. Skontaktuj się z nami przez formularz lub przyjdź bezpośrednio do recepcji. Oprowadzi Cię nasz konsjerż, który pokaże wszystkie strefy i odpowie na pytania.",
  },
  {
    q: "Czy w cenie karnetu zawarte są zajęcia grupowe?",
    a: "Plan Comfort obejmuje 2 zajęcia grupowe tygodniowo. Plany Premium i VIP Elite zapewniają nieograniczony dostęp do wszystkich zajęć grupowych, w tym specjalistycznych masterclassów i sesji z gośćmi specjalnymi.",
  },
  {
    q: "Jakie są godziny otwarcia Iron Haven Premium?",
    a: "Strefa z maszynami i siłownią jest dostępna 24/7 dla posiadaczy kart Premium i VIP Elite. Recepcja i personel są obecni od poniedziałku do piątku 6:00–22:00, w weekendy 8:00–20:00. Krioterapia i sauna działają w godzinach obsługi personelu.",
  },
  {
    q: "Czy oferujecie treningi personalne i jak je zarezerwować?",
    a: "Tak! Sesje personalne można zarezerwować przez naszą aplikację mobilną, na recepcji lub telefonicznie. Plan Premium obejmuje 4 sesje miesięcznie, VIP Elite – 8 sesji z dedykowanym trenerem. Dodatkowe sesje można dokupić.",
  },
  {
    q: "Co z parkowaniem i komunikacją miejską?",
    a: "Dysponujemy bezpłatnym parkingiem podziemnym na 80 miejsc dla członków. Klub jest zlokalizowany 200 m od stacji metra Centrum oraz obsługują go linie tramwajowe 4, 12 i 15. Dla rowerów mamy zabezpieczone stojaki i szatnie ze sztancami.",
  },
  {
    q: "Czy można zawiesić karnet, np. na czas urlopu lub choroby?",
    a: "Tak – każdy karnet można zawiesić raz na kwartał na okres od 1 do 4 tygodni bez dodatkowych opłat. W przypadku długotrwałej choroby lub wypadku (po okazaniu dokumentacji medycznej) możemy zawiesić karnet na dowolny czas.",
  },
  {
    q: "Jakie masz możliwości, jeśli chcę schudnąć / nabrać masy / przygotować się do zawodów?",
    a: "Każdy nowy członek przechodzi bezpłatną analizę składu ciała i konsultację ze specjalistą, który określi optymalny plan treningowy i żywieniowy dostosowany do Twojego celu. Przy planach Premium i VIP masz regularny monitoring postępów.",
  },
  {
    q: "Czy dzieci i juniorzy mogą ćwiczyć w Iron Haven?",
    a: "Klub jest dedykowany dorosłym (18+). Wyjątek stanowią juniorzy 16–17 lat, którzy mogą ćwiczyć za pisemną zgodą rodzica/opiekuna i pod okiem trenera. Na specjalne zajęcia juniorskie należy pytać indywidualnie w recepcji.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: "easeOut" }}
      className="border-b border-white/8 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span
          className="text-base sm:text-lg font-semibold text-white/80 group-hover:text-white transition-colors duration-200 pr-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {q}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-[#c9a84c] text-black scale-110"
              : "border border-white/20 text-white/40 group-hover:border-[#c9a84c]/50 group-hover:text-[#c9a84c]"
          }`}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p
                className="text-white/55 leading-relaxed text-sm sm:text-base"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#080810]" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#c9a84c]/3 blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">
            Masz Pytania?
          </span>
          <h2
            className="text-5xl sm:text-6xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Odpowiedzi na{" "}
            <span className="text-gradient-gold">wszystko</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        {isInView && (
          <div className="luxury-card rounded-2xl px-6 sm:px-10 divide-y divide-white/0">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        )}

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Nie znalazłeś odpowiedzi? Napisz do nas.
          </p>
          <a
            href="#footer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] text-sm font-semibold tracking-widest uppercase hover:border-[#c9a84c]/60 hover:bg-[#c9a84c]/10 transition-all duration-300"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Skontaktuj się z nami
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
