import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, ArrowDown, Shield, Server, Swords } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = siteConfig.server.slogans.quotes;

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background Cinematic Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.webp"
          alt="HEAVY CRAFT Cinematic Background"
          className="w-full h-full object-cover scale-105 filter brightness-[0.25] saturate-[1.2]"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial and linear gradient overlay for maximum readability */}
        <div className="absolute inset-0 bg-radial-at-c from-charcoal/30 via-obsidian/90 to-obsidian z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-obsidian to-transparent z-0" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-xs font-semibold uppercase tracking-widest mb-8 shadow-lg box-glow-cyan"
        >
          <Swords className="w-3.5 h-3.5" />
          Minecraft Server Indonesia
        </motion.div>

        {/* Big Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.15)] mb-8 bg-charcoal/80 p-2"
        >
          <img
            src="/logo.png"
            alt="HEAVY CRAFT Server Logo"
            className="w-full h-full object-contain animate-float"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Server Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-4 uppercase text-glow-cyan"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl font-semibold text-slate-300 max-w-2xl tracking-wide mb-6 font-display"
        >
          {siteConfig.server.slogans.hero}
        </motion.p>

        {/* Rotating Quote Banner */}
        <div className="h-16 flex items-center justify-center max-w-xl mx-auto mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-base text-cyan-200/90 italic font-mono px-4 py-2 bg-charcoal/40 backdrop-blur-xs rounded-lg border border-slate-800/40"
            >
              " {quotes[quoteIndex]} "
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Button WhatsApp Admin */}
          <a
            href={`https://wa.me/${siteConfig.contacts.adminWhatsapp}?text=Halo%20Admin%20HEAVY%20CRAFT,%20saya%20tertarik%20membeli%20rank%20atau%20memberikan%20support.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 hover:scale-105 active:scale-98 text-white font-bold px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] border border-emerald-400/20 cursor-pointer transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            Hubungi Admin via WA
          </a>

          {/* Button Scroll to Info */}
          <a
            href="#tentang"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white hover:scale-105 active:scale-98 font-bold px-8 py-4 rounded-xl border border-slate-700/80 cursor-pointer transition-all duration-300"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
            Lihat Informasi Server
          </a>
        </motion.div>

        {/* Quick Tech Specs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-slate-800/60 pt-8 w-full max-w-3xl"
        >
          <div className="text-center p-3">
            <span className="block text-slate-400 text-xs uppercase tracking-wider font-mono">Platform</span>
            <span className="text-glow-cyan text-sm md:text-base font-bold text-cyan-300 font-display">Java & Bedrock (PE)</span>
          </div>
          <div className="text-center p-3">
            <span className="block text-slate-400 text-xs uppercase tracking-wider font-mono">Game Mode</span>
            <span className="text-glow-cyan text-sm md:text-base font-bold text-cyan-300 font-display">Survival & Economy</span>
          </div>
          <div className="col-span-2 md:col-span-1 text-center p-3">
            <span className="block text-slate-400 text-xs uppercase tracking-wider font-mono">Uptime Status</span>
            <span className="inline-flex items-center gap-1.5 text-sm md:text-base font-bold text-emerald-400 font-display">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block"></span>
              24/7 ONLINE
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
