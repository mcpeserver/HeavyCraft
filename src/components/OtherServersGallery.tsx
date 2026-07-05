import { siteConfig } from "../config/site";
import { ArrowUpRight, MessageSquare, Shield, Sparkles, Server } from "lucide-react";
import { motion } from "motion/react";

export default function OtherServersGallery() {
  const otherServers = siteConfig.otherServers;

  return (
    <section id="server-lain" className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-brand-charcoal/40">
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 text-[11px] font-bold text-brand-cyan uppercase tracking-wider font-mono">
            <Sparkles className="h-3.5 w-3.5 animate-spin-slow" /> PORTOFOLIO DESAIN RAN DEV
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Inspirasi Web Komunitas Premium
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Berikut adalah beberapa server Minecraft terkemuka lainnya yang telah mempercayakan pembuatan website komunitasnya kepada <span className="text-brand-cyan font-semibold">RAN DEV</span>. Setiap proyek dibuat kustom untuk menonjolkan keunikan gameplay mereka.
          </p>
        </div>

        {/* Servers Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {otherServers.map((server) => {
            const waMsg = encodeURIComponent(
              `Halo RAN DEV, saya melihat website portofolio untuk "${server.name}" (${server.theme}). Saya tertarik untuk membuat website komunitas Minecraft sejenis.`
            );
            const waUrl = `https://wa.me/${siteConfig.developer.whatsapp}?text=${waMsg}`;

            return (
              <motion.div
                key={server.name}
                whileHover={{ y: -6 }}
                className="flex flex-col h-full rounded-2xl border border-white/5 bg-brand-charcoal p-6 sm:p-7 relative overflow-hidden group hover:border-brand-cyan/20 transition-all duration-300 shadow-xl"
              >
                {/* Decorative glow background */}
                <div className="absolute -top-10 -right-10 h-32 w-32 bg-brand-cyan/2 rounded-full blur-2xl group-hover:bg-brand-cyan/5 transition-all"></div>

                {/* Theme Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-300 font-mono">
                    {server.theme}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                      {server.status}
                    </span>
                  </div>
                </div>

                {/* Server Name & IP */}
                <h3 className="font-display text-xl font-extrabold text-white group-hover:text-brand-cyan transition-colors">
                  {server.name}
                </h3>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Server className="h-3.5 w-3.5 text-brand-cyan/50" />
                  <span>{server.ip}</span>
                </div>

                {/* Description */}
                <p className="mt-4 text-slate-300 text-sm leading-relaxed flex-grow">
                  {server.description}
                </p>

                {/* Contact CTA */}
                <div className="mt-8 pt-5 border-t border-white/5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between w-full rounded-xl bg-white/5 hover:bg-brand-cyan hover:text-brand-obsidian border border-white/10 hover:border-brand-cyan py-3 px-4 text-xs font-bold transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Ingin Desain Seperti Ini?
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Developer Pitch Box */}
        <div className="mt-16 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-brand-cyan/2">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white">
              Siap Membuat Website Komunitas Anda Sendiri?
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
              Dapatkan website landing page server Minecraft premium dengan integrasi domain kustom (`.id`, `.my.id`, atau `.net`), salin IP instan, dan optimasi SEO sekelas industri bersama <span className="text-brand-cyan font-bold">RAN DEV</span>.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.developer.whatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20Minecraft%20seperti%20Heavy%20Craft`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-xl bg-brand-cyan text-brand-obsidian px-6 py-4 text-sm font-bold shadow-lg shadow-brand-cyan/20 hover:scale-102 transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageSquare className="h-4 w-4" />
            Konsultasi Gratis via WA
          </a>
        </div>
      </div>
    </section>
  );
}
