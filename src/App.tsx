import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, CheckCircle, Flame, Swords } from "lucide-react";
import { siteConfig } from "./config/site";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServerInfo from "./components/ServerInfo";
import RulesSection from "./components/RulesSection";
import RankSection from "./components/RankSection";
import ConnectionSection from "./components/ConnectionSection";
import Footer from "./components/Footer";

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Trigger toast with auto-fadeout
  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Handle scroll events for scroll progress and Back to Top
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Structured SEO JSON-LD Data for Schema.org
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "GameServer",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": `https://${siteConfig.domain}`,
    "game": {
      "@type": "VideoGame",
      "name": "Minecraft",
      "playMode": "MultiPlayer",
      "applicationCategory": "Game",
      "gamePlatform": ["PC", "Android", "iOS", "Xbox", "PlayStation"]
    },
    "serverStatus": "Online",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IDR",
      "lowPrice": "0",
      "highPrice": "60000",
      "offerCount": "8"
    }
  };

  return (
    <div className="relative min-h-screen bg-obsidian text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Injecting JSON-LD for premium search engine indexation */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script>

      {/* Progress Scroll Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-linear-to-r from-cyan-500 via-emerald-400 to-blue-500 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header (Contains top watermark banner) */}
      <Header onShowToast={handleShowToast} />

      {/* Main Sections */}
      <main className="flex-1 pt-[116px] md:pt-[124px]">
        <Hero />
        <ServerInfo />
        <RulesSection />
        <RankSection />
        <ConnectionSection onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3.5 rounded-xl bg-charcoal border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-950/20 shadow-2xl active:scale-95 transition-all duration-300 z-40 cursor-pointer group"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Interactive Toast Notifications */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-charcoal/95 backdrop-blur-md border border-cyan-500/30 text-white px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(6,182,212,0.15)] flex items-center gap-3 z-50 min-w-[280px] md:min-w-[320px]"
          >
            <div className="p-1 rounded-full bg-cyan-500/10">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Notifikasi Sukses</p>
              <p className="text-xs text-slate-200 mt-0.5">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
