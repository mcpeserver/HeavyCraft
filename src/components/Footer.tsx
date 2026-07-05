import React from "react";
import { siteConfig } from "../config/site";
import { ArrowUp, Github, Heart, Globe } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
      {/* Absolute dark pattern decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_120%,rgba(6,182,212,0.03),transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        {/* Floating Back to Top button */}
        <button
          onClick={handleScrollTop}
          className="p-3 rounded-full bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/20 text-slate-400 hover:text-cyan-400 shadow-lg cursor-pointer transition-all duration-300 hover:translate-y-[-2px] mb-8"
          title="Kembali ke Atas"
        >
          <ArrowUp size={18} />
        </button>

        {/* Logo and Brand in Footer */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-800">
            <img
              src={siteConfig.logoPath}
              alt={siteConfig.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-extrabold text-base tracking-wider text-white">
            {siteConfig.name}
          </span>
        </div>

        {/* Navigation shortcuts */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-xs text-slate-400 font-medium">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-cyan-400 transition-colors">Home</button>
          <button onClick={() => document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors">Tentang</button>
          <button onClick={() => document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors">Peraturan</button>
          <button onClick={() => document.getElementById("rank")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors">Rank & Fitur</button>
          <button onClick={() => document.getElementById("koneksi")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors">Koneksi IP</button>
          <button onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-400 transition-colors">Portfolio DEV</button>
        </div>

        {/* Verbatim watermark and copyright text */}
        <div className="text-center space-y-3 max-w-xl">
          <p className="text-xs text-slate-500">
            © 2026 <span className="text-slate-400 font-semibold">{siteConfig.name}</span>. Minecraft adalah merek dagang dari Mojang Synergies AB. Kami tidak berafiliasi secara resmi dengan Mojang.
          </p>
          <div className="text-[11px] text-slate-400 font-sans py-1.5 px-4 rounded-full bg-slate-900/60 border border-slate-900 inline-block">
            Website dikembangkan oleh <span className="text-cyan-400 font-bold">{siteConfig.developer.name}</span> (WhatsApp: <a href={`https://wa.me/${siteConfig.developer.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-400">{siteConfig.developer.whatsapp}</a>)
          </div>
        </div>
      </div>
    </footer>
  );
}
