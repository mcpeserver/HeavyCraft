import { useState } from "react";
import { siteConfig } from "../config/site";
import logoImg from "../assets/images/logo_1783279235216.jpg";
import { Copy, Shield, Layers, HelpCircle, Server, Menu, X, Globe, Users, ArrowUpRight, MessageSquare } from "lucide-react";
import { DevConfig } from "../hooks/useDevConfig";

interface HeaderProps {
  onCopyIP: (ip: string) => void;
  activePage: string;
  setActivePage: (page: string) => void;
  devConfig?: DevConfig;
}

export default function Header({ onCopyIP, activePage, setActivePage, devConfig }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "beranda", name: "Beranda", icon: HelpCircle },
    { id: "informasi", name: "Informasi Server", icon: Server },
    { id: "aturan", name: "Peraturan", icon: Shield },
    { id: "rank", name: "Daftar Rank", icon: Layers },
  ];

  const handleCopy = () => {
    onCopyIP(siteConfig.server.javaIp);
  };

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const devName = devConfig?.name || siteConfig.developer.name;
  const devWhatsapp = devConfig?.contact?.whatsapp || siteConfig.developer.whatsapp;
  const devPortfolio = devConfig?.website?.portfolio || `https://wa.me/${devWhatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20Minecraft`;
  const devCommunityName = devConfig?.community?.name || "RAN DEV Community";
  const devCommunityWeb = devConfig?.community?.website || `https://wa.me/${devWhatsapp}`;
  const devCommunityDiscord = devConfig?.community?.discord || "https://discord.gg/";

  return (
    <div className="sticky top-0 z-50 w-full flex flex-col">
      {/* Desktop-Only Developer Watermark Pitch Bar */}
      <div className="hidden md:block w-full bg-brand-cyan px-4 py-1.5 text-brand-obsidian shadow-sm relative z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-[11px] font-semibold">
          <div className="flex items-center gap-1.5">
            <span>Developed by <span className="font-extrabold">{devName}</span> (<a href={`https://wa.me/${devWhatsapp}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors font-bold">{devWhatsapp}</a>) —</span>
            <span className="text-brand-obsidian/85">{siteConfig.developer.headerPitch}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={devPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-brand-obsidian px-2.5 py-0.5 text-[10px] font-extrabold text-brand-cyan hover:bg-white hover:text-brand-obsidian transition-all border border-brand-cyan/20"
            >
              <Globe className="h-2.5 w-2.5" />
              Portfolio
            </a>
            <a
              href={devCommunityWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-brand-obsidian px-2.5 py-0.5 text-[10px] font-extrabold text-brand-cyan hover:bg-white hover:text-brand-obsidian transition-all border border-brand-cyan/20"
            >
              <Users className="h-2.5 w-2.5" />
              Komunitas
            </a>
            <a
              href={`https://wa.me/${devWhatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20Minecraft`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-brand-obsidian px-2.5 py-0.5 text-[10px] font-extrabold text-brand-cyan hover:bg-white hover:text-brand-obsidian transition-all border border-brand-cyan/20"
            >
              Hubungi Kami <ArrowUpRight className="h-2.5 w-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Glassmorphic design with subtle border */}
      <header className="w-full border-b border-white/5 bg-brand-obsidian/90 py-3.5 backdrop-blur-md shadow-lg shadow-brand-obsidian/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo & Server Name */}
          <button 
            onClick={() => handleNavClick("beranda")} 
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
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
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/5 rounded-full p-1.5 border border-white/5">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/10"
                      : "text-slate-300 hover:bg-white/5 hover:text-brand-cyan border border-transparent"
                  }`}
                >
                  <item.icon className={`h-3.5 w-3.5 ${isActive ? "text-brand-cyan animate-pulse" : "text-slate-400"}`} />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Call to Action - Copy IP */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 hover:bg-brand-cyan hover:text-brand-obsidian px-4 py-2 text-xs font-bold text-brand-cyan transition-all cursor-pointer shadow-lg shadow-brand-cyan/5 active:scale-95"
            >
              <Copy className="h-3.5 w-3.5" />
              Salin IP Java
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10 hover:text-white transition-all focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-brand-charcoal/98 border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-xl z-40 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all text-left w-full cursor-pointer ${
                    isActive
                      ? "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/10"
                      : "text-slate-300 hover:bg-white/5 hover:text-brand-cyan border border-transparent"
                  }`}
                >
                  <item.icon className={`h-4.5 w-4.5 ${isActive ? "text-brand-cyan" : "text-brand-cyan/50"}`} />
                  {item.name}
                </button>
              );
            })}
          </nav>

          <div className="border-t border-white/5 pt-3.5 flex flex-col gap-3">
            <button
              onClick={() => {
                handleCopy();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 py-3 text-sm font-bold text-brand-cyan hover:bg-brand-cyan hover:text-brand-obsidian transition-all w-full cursor-pointer"
            >
              <Copy className="h-4 w-4" />
              Salin IP Java
            </button>

            {/* Premium Mobile Developer Watermark Card */}
            <div className="border-t border-white/5 pt-3.5 mt-1 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Developer Info Hub
                </span>
                <span className="text-[10px] font-extrabold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded">
                  RAN DEV
                </span>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/2 p-3 flex flex-col gap-2">
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Situs ini dikembangkan secara profesional oleh <strong className="text-white">{devName}</strong> ({devWhatsapp}). Tertarik memesan website komunitas game premium?
                </p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <a
                    href={devPortfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-white/5 hover:bg-brand-cyan/10 py-2 text-[10px] font-bold text-slate-300 hover:text-brand-cyan transition-all border border-white/10"
                  >
                    <Globe className="h-3 w-3" />
                    Portfolio
                  </a>
                  <a
                    href={devCommunityWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-white/5 hover:bg-brand-cyan/10 py-2 text-[10px] font-bold text-slate-300 hover:text-brand-cyan transition-all border border-white/10"
                  >
                    <Users className="h-3 w-3" />
                    Komunitas
                  </a>
                </div>
                <a
                  href={`https://wa.me/${devWhatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20Minecraft`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-brand-cyan text-brand-obsidian py-2 px-3 text-xs font-bold hover:bg-white hover:text-brand-obsidian transition-all shadow-md w-full"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
