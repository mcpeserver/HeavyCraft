import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServerInfo from "./components/ServerInfo";
import RulesSection from "./components/RulesSection";
import RankSection from "./components/RankSection";
import ConnectionSection from "./components/ConnectionSection";
import Footer from "./components/Footer";
import { Check, Clipboard, Info, Sparkles, X, ChevronUp, Bell } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for back-to-top button and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Show back to top
      setShowScrollTop(window.scrollY > 300);

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopySuccess = (message: string) => {
    setToastMessage(message);
    // Auto dismiss after 3 seconds
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans bg-[#0b0f19] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* 1. Dynamic Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-500 via-emerald-400 to-blue-500 z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Sticky Header with Developer Watermark & Navs */}
      <Header onCopySuccess={handleCopySuccess} />

      {/* 3. Main Sections Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onCopySuccess={handleCopySuccess} />

        {/* Server Info / Tentang */}
        <ServerInfo />

        {/* Peraturan Server / Rules */}
        <RulesSection />

        {/* Rank List & Features */}
        <RankSection />

        {/* Connection Section (Java / Bedrock IP details) */}
        <ConnectionSection onCopySuccess={handleCopySuccess} />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Custom Interactive Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-[100] max-w-sm w-full bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 p-4 rounded-xl shadow-2xl shadow-cyan-950/20 flex items-start gap-3"
          >
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <Check size={18} className="animate-bounce" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wide">Salin Berhasil</h4>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed font-sans">{toastMessage}</p>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-slate-500 hover:text-slate-300 transition-colors p-1"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. Quick Float Back to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleScrollTop}
            className="fixed bottom-6 left-6 z-40 p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-cyan-400 cursor-pointer shadow-lg transition-all hover:translate-y-[-2px] hover:border-cyan-500/30 group"
            title="Kembali ke atas"
          >
            <ChevronUp size={16} className="group-hover:translate-y-[-1px] transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
