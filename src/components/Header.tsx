import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Copy, Check, ShieldAlert, Wifi, Phone } from "lucide-react";
import { siteConfig } from "../config/site";

interface HeaderProps {
  onShowToast: (message: string) => void;
}

export default function Header({ onShowToast }: HeaderProps) {
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.server.javaIp);
      setCopied(true);
      onShowToast("IP Java berhasil disalin ke clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      onShowToast("Gagal menyalin IP, silakan salin manual.");
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex flex-col transition-all duration-300 shadow-2xl">
      {/* Dev Watermark Banner */}
      <div 
        className={`w-full bg-linear-to-r from-cyan-950 via-charcoal to-cyan-950 text-cyan-200 text-center font-medium border-b border-cyan-800/30 flex flex-wrap justify-center items-center gap-1.5 transition-all duration-300 ${
          isScrolled 
            ? "py-1.5 px-4 text-[11px] md:text-xs" 
            : "py-2.5 px-4 text-xs md:text-sm shadow-md"
        }`}
      >
        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono uppercase tracking-wider transition-all duration-300 ${
          isScrolled ? "text-[8px] px-1 py-0" : "text-[10px]"
        }`}>
          Partner Resmi
        </span>
        <span className="transition-all duration-300">
          Developed by <strong className="text-cyan-400 font-semibold">{siteConfig.developer.name}</strong> 
          {" "}(WhatsApp: <a href={`https://wa.me/${siteConfig.developer.whatsapp}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300 font-mono transition-colors">{siteConfig.developer.whatsapp}</a>)
        </span>
        
        {/* Hide extra text and button on scroll to shrink the header beautifully */}
        {!isScrolled && (
          <>
            <span className="hidden md:inline text-cyan-500/50">•</span>
            <span className="text-slate-300 text-xs hidden md:inline">{siteConfig.developer.headerPitch}</span>
            <a
              href={`https://wa.me/${siteConfig.developer.whatsapp}?text=Halo%20Ran%20Dev,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs bg-linear-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-medium px-3 py-1 rounded-full shadow-lg hover:shadow-green-500/20 transition-all duration-300 ml-2 border border-green-400/20 group animate-pulse hover:animate-none"
            >
              <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              Hubungi Kami
            </a>
          </>
        )}
      </div>

      {/* Main Glassmorphism Header */}
      <div className={`w-full bg-obsidian/90 backdrop-blur-md border-b border-slate-800/60 transition-all duration-300 ${
        isScrolled ? "py-1 shadow-lg" : "py-0"
      }`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-300 ${
          isScrolled ? "h-14 md:h-16" : "h-20"
        }`}>
          
          {/* Logo and Brand */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className={`relative rounded-lg overflow-hidden border border-cyan-500/30 shadow-lg group-hover:border-cyan-400/80 transition-all duration-300 bg-charcoal ${
              isScrolled ? "w-9 h-9" : "w-12 h-12"
            }`}>
              <img
                src="/logo.png"
                alt="HEAVY CRAFT Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold tracking-wider bg-linear-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent group-hover:text-glow-cyan transition-all duration-300 ${
                isScrolled ? "text-base md:text-lg" : "text-lg md:text-xl"
              }`}>
                {siteConfig.name}
              </span>
              <span className={`text-slate-400 font-mono tracking-widest uppercase transition-all duration-300 ${
                isScrolled ? "text-[8px]" : "text-[10px]"
              }`}>
                Survival & Creative
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#beranda" className="hover:text-cyan-400 transition-colors py-2 border-b-2 border-transparent hover:border-cyan-400/50">Beranda</a>
            <a href="#tentang" className="hover:text-cyan-400 transition-colors py-2 border-b-2 border-transparent hover:border-cyan-400/50">Tentang</a>
            <a href="#peraturan" className="hover:text-cyan-400 transition-colors py-2 border-b-2 border-transparent hover:border-cyan-400/50">Peraturan</a>
            <a href="#rank" className="hover:text-cyan-400 transition-colors py-2 border-b-2 border-transparent hover:border-cyan-400/50">Rank & Fitur</a>
            <a href="#koneksi" className="hover:text-cyan-400 transition-colors py-2 border-b-2 border-transparent hover:border-cyan-400/50">Koneksi</a>
          </nav>

          {/* Server IP Copy and Status */}
          <div className="flex items-center gap-3">
            {/* Server Status Indicator */}
            <div className={`hidden sm:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full font-mono transition-all duration-300 ${
              isScrolled ? "text-[10px] px-2 py-1" : "text-xs px-3 py-1.5"
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              STATUS: <strong className="font-bold">{siteConfig.server.status}</strong>
            </div>

            {/* Quick Copy Button */}
            <button
              onClick={handleCopyIp}
              className={`relative inline-flex items-center gap-2 bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/20 border border-cyan-400/20 active:scale-95 transition-all duration-300 group cursor-pointer ${
                isScrolled ? "text-[11px] px-3.5 py-1.5" : "text-xs px-4 py-2 md:py-2.5"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-300 animate-bounce" />
                  <span className="font-mono">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Salin IP Java</span>
                  <span className="sm:hidden font-mono">play.heavycraft.my.id</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
