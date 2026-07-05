import { useState } from "react";
import { siteConfig } from "../config/site";
import logoImg from "../assets/images/logo_1783279235216.jpg";
import { Copy, Shield, Layers, HelpCircle, Server, Menu, X, ArrowUpRight, ChevronDown, Globe } from "lucide-react";

interface HeaderProps {
  onCopyIP: (ip: string) => void;
}

export default function Header({ onCopyIP }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const navItems = [
    { name: "Tentang", href: "#tentang", icon: HelpCircle },
    { name: "Aturan", href: "#aturan", icon: Shield },
    { name: "Daftar Rank", href: "#rank", icon: Layers },
    { name: "Koneksi", href: "#koneksi", icon: Server },
  ];

  const handleCopy = () => {
    onCopyIP(siteConfig.server.javaIp);
  };

  return (
    <div className="sticky top-0 z-50 w-full flex flex-col">
      {/* RAN DEV Developer Watermark Pitch Bar with Interactive Dropdown */}
      <div className="w-full bg-brand-cyan px-4 py-2 text-brand-obsidian shadow-md relative z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 flex-wrap text-[11px] sm:text-xs font-semibold">
          <div className="flex items-center gap-2 flex-wrap">
            <span>Developed by <span className="font-extrabold">RAN DEV</span> (<a href={`https://wa.me/${siteConfig.developer.whatsapp}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors font-bold">{siteConfig.developer.whatsapp}</a>) —</span>
            <span className="text-brand-obsidian/85 hidden lg:inline">{siteConfig.developer.headerPitch}</span>
          </div>

          <div className="flex items-center gap-2 ml-auto sm:ml-0 relative">
            {/* Interactive Portfolio Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => setPortfolioOpen(!portfolioOpen)}
                className="inline-flex items-center gap-1 rounded-full bg-brand-obsidian px-2.5 py-1 text-[10px] font-extrabold text-brand-cyan hover:bg-white hover:text-brand-obsidian transition-all shadow-sm cursor-pointer border border-brand-cyan/20"
              >
                <Globe className="h-3 w-3" />
                Lihat Web Server Lain <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${portfolioOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu Overlay & Card */}
              {portfolioOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setPortfolioOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-64 rounded-xl border border-white/10 bg-brand-charcoal/95 p-3 text-white shadow-2xl shadow-brand-cyan/10 backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider mb-2 pb-1 border-b border-white/5">
                      Portofolio Web RAN DEV
                    </p>
                    <div className="flex flex-col gap-1">
                      {siteConfig.otherServers.map((server) => {
                        const r = encodeURIComponent(`Halo RAN DEV, saya melihat portofolio untuk "${server.name}" (${server.theme}). Saya tertarik untuk membuat website komunitas Minecraft sejenis.`);
                        const s = `https://wa.me/${siteConfig.developer.whatsapp}?text=${r}`;
                        return (
                          <a
                            key={server.name}
                            href={s}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setPortfolioOpen(false)}
                            className="flex flex-col rounded-lg p-2 hover:bg-white/5 transition-all text-left group/item"
                          >
                            <span className="font-display font-bold text-xs flex items-center justify-between text-white group-hover/item:text-brand-cyan transition-colors">
                              {server.name}
                              <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </span>
                            <span className="text-[9px] text-slate-400 font-mono mt-0.5">{server.theme}</span>
                          </a>
                        );
                      })}
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/5">
                      <a
                        href={`https://wa.me/${siteConfig.developer.whatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20Minecraft`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 rounded-lg bg-brand-cyan text-brand-obsidian py-1.5 text-[10px] font-bold hover:bg-white hover:text-brand-obsidian transition-all w-full"
                      >
                        Pesan Website Komunitas
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>

            <a
              href={`https://wa.me/${siteConfig.developer.whatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20seperti%20Heavy%20Craft`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 rounded-full bg-brand-obsidian px-2.5 py-1 text-[10px] font-extrabold text-brand-cyan hover:bg-white hover:text-brand-obsidian transition-all border border-brand-cyan/20"
            >
              Hubungi Kami <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="w-full border-b border-white/5 bg-brand-obsidian/80 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & Server Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-brand-cyan/20 bg-brand-charcoal p-0.5 transition-transform duration-300 group-hover:scale-105">
              <img
                src={logoImg}
                alt={siteConfig.name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-wider text-white group-hover:text-brand-cyan transition-colors">
                {siteConfig.name}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1.5 border border-white/5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-brand-cyan transition-all"
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call to Action - Copy IP */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 hover:bg-brand-cyan hover:text-brand-obsidian px-4 py-2 text-xs font-bold text-brand-cyan transition-all cursor-pointer shadow-lg shadow-brand-cyan/5"
            >
              <Copy className="h-3.5 w-3.5" />
              Salin IP Java
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-brand-charcoal/98 border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-brand-cyan transition-all"
              >
                <item.icon className="h-4 w-4 text-brand-cyan/70" />
                {item.name}
              </a>
            ))}
          </nav>

          <div className="border-t border-white/5 pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                handleCopy();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 py-3 text-sm font-bold text-brand-cyan hover:bg-brand-cyan hover:text-brand-obsidian transition-all w-full"
            >
              <Copy className="h-4 w-4" />
              Salin IP Java
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
