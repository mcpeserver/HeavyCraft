import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { ArrowRight, MessageCircle, Shield, Gamepad2, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onCopySuccess: (message: string) => void;
}

export default function Hero({ onCopySuccess }: HeroProps) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % siteConfig.server.slogans.quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToKoneksi = () => {
    const element = document.getElementById("koneksi");
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* 1. Cinematic Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.heroBgPath}
          alt="Cinematic Minecraft World Background"
          className="w-full h-full object-cover scale-105 filter brightness-[0.35]"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-slate-950/40 to-[#0b0f19]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/80 via-transparent to-[#0b0f19]/80" />
        {/* Cyberpunk grid overlay for text-glow feeling */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.1)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30" />
      </div>

      {/* 2. Interactive Ambient Particles/Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[10s]" />

      {/* 3. Main Center Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Floating Logo with staggered slide-up */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-28 h-28 md:w-36 md:h-36 mb-6 rounded-2xl overflow-hidden border-2 border-cyan-400/40 bg-slate-950/60 p-1 shadow-2xl box-glow-cyan"
        >
          <img
            src={siteConfig.logoPath}
            alt={siteConfig.name}
            className="w-full h-full object-cover rounded-xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Server Subheader/Intro badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-850 text-xs text-slate-300 font-medium mb-4 tracking-wide shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Minecraft Indonesia Server • Survival & Economy
        </motion.div>

        {/* Brand Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-display font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter text-white mb-3"
        >
          <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* Slogan Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-2xl font-semibold tracking-wide text-cyan-300/90 font-sans mb-6"
        >
          {siteConfig.server.slogans.hero}
        </motion.p>

        {/* Rotating Quotes Container */}
        <div className="h-12 flex items-center justify-center mb-10 overflow-hidden px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-xs sm:text-sm text-slate-400 max-w-lg italic font-sans font-light leading-relaxed text-center"
            >
              &ldquo;{siteConfig.server.slogans.quotes[quoteIndex]}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Two Interactive Call-To-Action (CTA) Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
        >
          <a
            href={`https://wa.me/${siteConfig.contacts.adminWhatsapp}?text=Halo%20Admin%20Heavy%20Craft,%20saya%20ingin%20membeli%20rank%20di%20server`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold tracking-wide shadow-xl shadow-cyan-500/15 flex items-center justify-center gap-2 group transition-all duration-300 scale-100 hover:scale-[1.03] text-sm md:text-base"
          >
            <MessageCircle size={18} className="fill-current text-slate-950" />
            <span>Hubungi Admin via WA</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={scrollToKoneksi}
            className="px-8 py-4 rounded-xl bg-slate-900/95 hover:bg-slate-850 border border-slate-800 text-slate-200 hover:text-white font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 scale-100 hover:scale-[1.03] text-sm md:text-base cursor-pointer"
          >
            <Gamepad2 size={18} className="text-slate-400" />
            <span>Mulai Bermain</span>
          </button>
        </motion.div>

        {/* Minecraft Survival stats or general modes representation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl text-left border-t border-slate-900/60 pt-8"
        >
          <div className="bg-slate-950/40 backdrop-blur-sm p-4 rounded-xl border border-slate-900 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/30 text-cyan-400 border border-cyan-900/20">
              <Gamepad2 size={16} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Game Mode</p>
              <h3 className="text-sm font-bold text-slate-300">Survival & Economy</h3>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-sm p-4 rounded-xl border border-slate-900 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/30 text-emerald-400 border border-emerald-900/20">
              <Shield size={16} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Community</p>
              <h3 className="text-sm font-bold text-slate-300">Solid & Active</h3>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 bg-slate-950/40 backdrop-blur-sm p-4 rounded-xl border border-slate-900 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-950/30 text-indigo-400 border border-indigo-900/20">
              <span className="text-xs font-black font-mono">24/7</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Server Uptime</p>
              <h3 className="text-sm font-bold text-slate-300">Always Online</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
