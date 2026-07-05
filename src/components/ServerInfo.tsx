import React from "react";
import { siteConfig } from "../config/site";
import { ShieldAlert, Compass, Sword, Hammer, HeartHandshake, Users } from "lucide-react";
import { motion } from "motion/react";

export default function ServerInfo() {
  const features = [
    {
      icon: <Sword size={22} className="text-cyan-400" />,
      title: "Survival & Economy",
      description: "Bertahan hidup di dunia liar, kumpulkan sumber daya alam, bertani, berdagang dengan pemain lain, dan kumpulkan koin untuk membangun wilayah impianmu."
    },
    {
      icon: <Hammer size={22} className="text-emerald-400" />,
      title: "Creative Building",
      description: "Ekspresikan semua imajinasi dan kemampuan arsitekturmu tanpa batasan. Bangun kastil megah, kota modern, atau monumen epik bersama teman komunitas."
    },
    {
      icon: <Users size={22} className="text-indigo-400" />,
      title: "Roleplay & Socials",
      description: "Ambil peran unik di masyarakat Heavy Craft, bangun reputasi sosial, selenggarakan event menarik, dan jalin persahabatan erat dalam komunitas yang solid."
    }
  ];

  return (
    <section id="tentang" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold block mb-3">
            Eksplorasi Dunia Tanpa Batas
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white mb-4">
            Tentang <span className="text-cyan-400">HEAVY CRAFT</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-sm md:text-base text-slate-400 leading-relaxed font-sans">
            HEAVY CRAFT adalah server Minecraft yang berfokus pada mode <span className="text-slate-200 font-semibold">Survival, Creative, dan Roleplay</span>. Kami menyajikan pengalaman bermain yang stabil, adil, dan didukung oleh komunitas pemain yang ramah dan aktif serta admin yang responsif.
          </p>
        </div>

        {/* Feature Grid with staggered scroll reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-850/60 hover:border-cyan-500/25 transition-all duration-300 hover:translate-y-[-4px] group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-cyan-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-display text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-950/60 to-cyan-950/20 border border-slate-800/80 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
        >
          {/* Subtle decoration inside banner */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-3 flex items-center justify-center md:justify-start gap-2">
              <Compass className="text-cyan-400 animate-spin" style={{ animationDuration: "12s" }} size={24} />
              Jadilah Bagian dari Legenda Kami
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Kami percaya kesuksesan komunitas tidak dibangun dalam sehari, melainkan melalui petualangan kecil bersama. Mari membangun wilayahmu sendiri, menjalin aliansi ekonomi, dan bertualang bersama para player hebat lainnya di HEAVY CRAFT!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById("koneksi");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all text-sm tracking-wide shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 text-center cursor-pointer"
            >
              Dapatkan IP Server
            </button>
            <a
              href={`https://wa.me/${siteConfig.contacts.adminWhatsapp}?text=Halo%20Admin%20Heavy%20Craft,%20saya%20tertarik%20tanya%20tanya%20seputar%20server`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-950/90 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all text-sm font-semibold text-center"
            >
              Hubungi Admin
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
