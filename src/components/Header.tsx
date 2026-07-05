import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Copy, Check, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onCopySuccess: (message: string) => void;
}

export default function Header({ onCopySuccess }: HeaderProps) {
  const [copiedJava, setCopiedJava] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = (text: string, isJava: boolean) => {
    navigator.clipboard.writeText(text);
    if (isJava) {
      setCopiedJava(true);
      setTimeout(() => setCopiedJava(false), 2000);
    }
    onCopySuccess(`Berhasil menyalin IP: ${text}`);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // accounting for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full flex flex-col">
      {/* 1. Developer Watermark Bar (RAN DEV) */}
      <div className="w-full bg-slate-950 border-b border-cyan-500/20 text-slate-300 text-[11px] md:text-xs py-2 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 font-sans tracking-wide">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-center sm:text-left justify-center sm:justify-start w-full sm:w-auto">
          <div className="flex items-center gap-1.5 justify-center">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>
              Developed by <a href={`https://wa.me/${siteConfig.developer.whatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20Minecraft`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold hover:underline">{siteConfig.developer.name}</a>
            </span>
          </div>
          <span className="hidden sm:inline text-slate-700">|</span>
          <a
            href="https://sfl.gl/x2ic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all font-medium border border-cyan-500/20"
          >
            Lihat Server Lain 🔗
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <a
            href={`https://wa.me/${siteConfig.developer.whatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20Minecraft`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-all text-[11px] font-medium flex items-center gap-1 group"
          >
            {siteConfig.developer.headerPitch}
            <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-md py-3 shadow-lg border-b border-slate-800"
            : "bg-slate-950/50 backdrop-blur-sm py-4 border-b border-slate-900/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-cyan-500/30 bg-slate-900 flex items-center justify-center">
              <img
                src={siteConfig.logoPath}
                alt={siteConfig.name}
                className="w-full h-full object-cover scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-lg md:text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-cyan-400 transition-all cursor-pointer relative py-1"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("tentang")}
              className="hover:text-cyan-400 transition-all cursor-pointer relative py-1"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection("rules")}
              className="hover:text-cyan-400 transition-all cursor-pointer relative py-1"
            >
              Peraturan
            </button>
            <button
              onClick={() => scrollToSection("rank")}
              className="hover:text-cyan-400 transition-all cursor-pointer relative py-1"
            >
              Rank & Fitur
            </button>
            <button
              onClick={() => scrollToSection("koneksi")}
              className="hover:text-cyan-400 transition-all cursor-pointer relative py-1"
            >
              Koneksi Server
            </button>
          </nav>

          {/* Action Button: Copy Java IP */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => copyToClipboard(siteConfig.server.javaIpOnly, true)}
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-cyan-500/20 text-xs font-mono font-bold flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-200 shadow-sm shadow-cyan-950/20 hover:border-cyan-500/40"
            >
              <span>{siteConfig.server.javaIpOnly}</span>
              {copiedJava ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
            <a
              href={`https://wa.me/${siteConfig.contacts.adminWhatsapp}?text=Halo%20Admin%20Heavy%20Craft,%20saya%20ingin%20membeli%20rank%20di%20server`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-200"
            >
              Beli Rank
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 border border-slate-800 transition-all"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-slate-950 border-b border-slate-800 shadow-xl overflow-hidden font-sans"
          >
            <div className="px-4 py-4 flex flex-col gap-3 text-sm font-semibold">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-900 hover:text-cyan-400 text-slate-300 transition-all"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("tentang")}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-900 hover:text-cyan-400 text-slate-300 transition-all"
              >
                Tentang Server
              </button>
              <button
                onClick={() => scrollToSection("rules")}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-900 hover:text-cyan-400 text-slate-300 transition-all"
              >
                Peraturan
              </button>
              <button
                onClick={() => scrollToSection("rank")}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-900 hover:text-cyan-400 text-slate-300 transition-all"
              >
                Rank & Fitur
              </button>
              <button
                onClick={() => scrollToSection("koneksi")}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-900 hover:text-cyan-400 text-slate-300 transition-all"
              >
                Koneksi Server
              </button>

              <hr className="border-slate-800 my-1" />

              {/* Mobile CTA */}
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  onClick={() => copyToClipboard(siteConfig.server.javaIpOnly, true)}
                  className="w-full py-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center gap-1.5 font-mono text-xs text-slate-300 active:bg-slate-850"
                >
                  <Copy size={12} />
                  <span>Salin IP</span>
                </button>
                <a
                  href={`https://wa.me/${siteConfig.contacts.adminWhatsapp}?text=Halo%20Admin%20Heavy%20Craft,%20saya%20ingin%20membeli%20rank`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <span>Beli Rank</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
