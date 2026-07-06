import { siteConfig } from "../config/site";
import { Globe, Users, MessageSquare } from "lucide-react";
import { DevConfig } from "../hooks/useDevConfig";

interface FooterProps {
  devConfig?: DevConfig;
}

export default function Footer({ devConfig }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const devName = devConfig?.name || siteConfig.developer.name;
  const devWhatsapp = devConfig?.contact?.whatsapp || siteConfig.developer.whatsapp;
  const devPortfolio = devConfig?.website?.portfolio || `https://wa.me/${devWhatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20Minecraft`;
  const devCommunityName = devConfig?.community?.name || "RAN DEV Community";
  const devCommunityWeb = devConfig?.community?.website || `https://wa.me/${devWhatsapp}`;
  const devCommunityDiscord = devConfig?.community?.discord || "https://discord.gg/";

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

        {/* Right: RAN DEV Watermark Credit Card with Portfolio, Community, and Discord Links */}
        <div className="flex flex-col items-center md:items-end gap-2.5 bg-white/2 border border-white/5 rounded-2xl px-5 py-4.5 shadow-lg max-w-sm">
          <span className="text-slate-400 text-xs flex items-center gap-1">
            Website dikembangkan oleh
            <a
              href={`https://wa.me/${devWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cyan font-bold hover:underline"
            >
              {devName}
            </a>
          </span>

          {/* Quick link buttons for portfolio and developer community */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 mt-0.5">
            <a
              href={devPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-white/5 hover:bg-brand-cyan/10 px-2 py-1 text-[9px] font-bold text-slate-300 hover:text-brand-cyan transition-all border border-white/10"
              title="Lihat Portfolio Web"
            >
              <Globe className="h-3 w-3" />
              Portfolio
            </a>
            <a
              href={devCommunityWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-white/5 hover:bg-brand-cyan/10 px-2 py-1 text-[9px] font-bold text-slate-300 hover:text-brand-cyan transition-all border border-white/10"
              title="Kunjungi Website Komunitas Developer"
            >
              <Users className="h-3 w-3" />
              Komunitas
            </a>
            <a
              href={devCommunityDiscord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-white/5 hover:bg-brand-cyan/10 px-2 py-1 text-[9px] font-bold text-slate-300 hover:text-brand-cyan transition-all border border-white/10"
              title="Gabung Discord Komunitas"
            >
              <MessageSquare className="h-3 w-3" />
              Discord
            </a>
          </div>

          <a
            href={`https://wa.me/${devWhatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20seperti%20Heavy%20Craft`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-brand-cyan/80 hover:text-white transition-colors flex items-center gap-1 font-mono uppercase tracking-wider"
          >
            WhatsApp: {devWhatsapp}
          </a>
        </div>
      </div>
    </footer>
  );
}

