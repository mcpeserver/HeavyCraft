import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import logoImg from "../assets/images/logo_1783279235216.jpg";
import heroBgImg from "../assets/images/hero_bg_1783279248075.jpg";
import { MessageSquare, ArrowDown, ExternalLink, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
    <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Heavy Craft Cinematic Landscape"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center scale-105 animate-[pulse_8s_infinite_alternate]"
        />
        {/* Dark overlays to ensure full legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/80 to-brand-obsidian/30"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-obsidian/90"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-10 grid-bg opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3.5 py-1 text-xs font-bold text-brand-cyan tracking-wider uppercase font-mono"
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          Server Resmi Indonesia
        </motion.div>

        {/* Server Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative mb-6 h-36 w-36 overflow-hidden rounded-2xl border-2 border-brand-cyan/30 bg-brand-charcoal p-1.5 shadow-2xl shadow-brand-cyan/20"
        >
          <img
            src={logoImg}
            alt="Heavy Craft Logo"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Server Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl font-extrabold tracking-wider text-white sm:text-6xl md:text-7xl"
        >
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            HEAVY
          </span>{" "}
          <span className="bg-gradient-to-r from-brand-cyan to-brand-emerald bg-clip-text text-transparent text-glow-cyan">
            CRAFT
          </span>
        </motion.h1>

        {/* Subtitle/Slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 font-display text-base font-medium tracking-wide text-slate-300 sm:text-xl md:text-2xl"
        >
          {siteConfig.server.slogans.hero}
        </motion.p>

        {/* Changing Quotes Block */}
        <div className="mt-8 min-h-[50px] w-full px-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="font-sans italic text-sm text-brand-cyan/80 md:text-base max-w-lg leading-relaxed"
            >
              "{quotes[quoteIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Action Buttons (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
        >
          {/* Main CTA - WhatsApp Admin */}
          <a
            href={`https://wa.me/${siteConfig.contacts.adminWhatsapp}?text=Halo%20Admin%20Heavy%20Craft,%20saya%20tertarik%20untuk%20membeli%20rank%20di%20server`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald p-4 text-sm font-bold text-brand-obsidian hover:shadow-xl hover:shadow-brand-cyan/20 hover:scale-102 transition-all duration-300"
          >
            <MessageSquare className="h-4.5 w-4.5" />
            Hubungi Admin via WA
            <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA - Learn More */}
          <a
            href="#tentang"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 p-4 text-sm font-bold text-white transition-all duration-300"
          >
            <ArrowDown className="h-4.5 w-4.5 animate-bounce" />
            Lihat Informasi Server
          </a>
        </motion.div>
      </div>
    </section>
  );
}
