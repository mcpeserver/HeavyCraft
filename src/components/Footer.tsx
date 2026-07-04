import React from "react";
import { MessageCircle, Code, ShieldCheck, Heart } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-at-b from-cyan-950/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Upper Brand Section */}
        <div className="flex flex-col items-center gap-3 mb-8 text-center">
          <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-800 p-1 bg-charcoal">
            <img
              src="/logo.png"
              alt="HEAVY CRAFT Footer Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="font-display font-extrabold text-xl tracking-wider text-white uppercase text-glow-cyan">
            {siteConfig.name}
          </h2>
          <p className="text-xs text-slate-500 max-w-md font-sans">
            Membangun komunitas, mempererat pertemanan, dan menghidupkan petualangan survival & creative tanpa batas.
          </p>
        </div>

        {/* Navigation Quicklinks */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-semibold text-slate-400 mb-8 uppercase tracking-widest font-mono">
          <a href="#beranda" className="hover:text-cyan-400 transition-colors">Beranda</a>
          <a href="#tentang" className="hover:text-cyan-400 transition-colors">Tentang</a>
          <a href="#peraturan" className="hover:text-cyan-400 transition-colors">Peraturan</a>
          <a href="#rank" className="hover:text-cyan-400 transition-colors">Rank & Fitur</a>
          <a href="#koneksi" className="hover:text-cyan-400 transition-colors">Koneksi</a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-3xl h-px bg-slate-900 mb-8" />

        {/* Copyrights and Mandatory Developer Watermark (VERBATIM REQUIRED) */}
        <div className="w-full text-center space-y-4">
          <p className="text-xs text-slate-500 font-mono">
            &copy; {currentYear} <span className="text-slate-400 font-semibold">{siteConfig.name}</span>. All Rights Reserved. Minecraft is a trademark of Mojang Synergies AB. This server is not affiliated with Mojang.
          </p>
          
          {/* Developer Watermark Section */}
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-charcoal/50 border border-slate-900 shadow-inner">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Code className="w-4 h-4 text-cyan-400" />
              <span>Website dikembangkan oleh <strong className="text-cyan-300 font-bold">{siteConfig.developer.name}</strong></span>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <a
              href={`https://wa.me/${siteConfig.developer.whatsapp}?text=Halo%20Ran%20Dev,%20saya%20tertarik%20dengan%20website%20Heavy%20Craft%20dan%20ingin%20memesan%20jasa%20pembuatan%20website%20komunitas.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 hover:underline font-mono"
            >
              <MessageCircle className="w-4 h-4 animate-pulse text-emerald-500" />
              WhatsApp: {siteConfig.developer.whatsapp}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
