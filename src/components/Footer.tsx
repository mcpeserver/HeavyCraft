import { siteConfig } from "../config/site";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/5 bg-brand-obsidian py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-white tracking-wider text-base">{siteConfig.name}</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 text-xs font-mono">EST. 2026</span>
          </div>
          <p className="text-slate-400 text-xs text-center md:text-left mt-1.5">
            © {currentYear} {siteConfig.name} Community. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <p className="text-[10px] text-slate-500 mt-0.5">
            Server ini tidak berafiliasi dengan Mojang AB atau Microsoft.
          </p>
        </div>

        {/* Right: RAN DEV Watermark Credit */}
        <div className="flex flex-col items-center md:items-end gap-1.5 bg-white/2 border border-white/5 rounded-2xl px-5 py-3 shadow-lg">
          <span className="text-slate-400 text-xs flex items-center gap-1">
            Website dikembangkan oleh
            <a
              href={`https://wa.me/${siteConfig.developer.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cyan font-bold hover:underline"
            >
              {siteConfig.developer.name}
            </a>
          </span>
          <a
            href={`https://wa.me/${siteConfig.developer.whatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20seperti%20Heavy%20Craft`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-brand-cyan/80 hover:text-white transition-colors flex items-center gap-1 font-mono uppercase tracking-wider"
          >
            WhatsApp: {siteConfig.developer.whatsapp}
          </a>
        </div>
      </div>
    </footer>
  );
}
