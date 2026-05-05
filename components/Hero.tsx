"use client";
import { useState, useEffect } from "react";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import DonateModal from "./DonateModal";

const slides = [
  "/images/propose-home-1.jpeg",
  "/images/2026-04-29-3.41.23pm.jpeg",
  "/images/2026-04-29-3.41.12pm.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${slides[current]}')` }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Restoring{" "}
            <span className="text-orange-400">Hope.</span>
            <br />
            Rebuilding{" "}
            <span className="text-orange-400">Lives.</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            We support internally displaced persons with shelter, food, healthcare, and opportunities for a better tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDonateOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-md flex items-center gap-2 text-[15px] transition-colors"
            >
              <Heart size={16} fill="white" />
              Donate Now
            </motion.button>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white/60 hover:border-white text-white font-semibold px-7 py-3.5 rounded-md flex items-center gap-2 text-[15px] transition-all hover:bg-white/10"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${current === i ? "w-8 bg-orange-500" : "w-2 bg-white/40"
              }`}
          />
        ))}
      </div>

      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </section>
  );
}

