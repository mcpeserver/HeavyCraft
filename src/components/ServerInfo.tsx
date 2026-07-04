import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Compass, Users, Sparkles } from "lucide-react";
import { siteConfig } from "../config/site";

export default function ServerInfo() {
  const modesData = [
    {
      title: "Survival",
      icon: <Compass className="w-8 h-8 text-cyan-400" />,
      description: "Berjuanglah untuk bertahan hidup, mengumpulkan sumber daya alam, dan bertarung melawan monster malam yang kejam. Bentuk aliansi kuat untuk menaklukkan rintangan ekstrem bersama-sama.",
      color: "border-cyan-500/20 hover:border-cyan-400/50"
    },
    {
      title: "Creative",
      icon: <Sparkles className="w-8 h-8 text-emerald-400" />,
      description: "Salurkan kreativitas dan imajinasi tanpa batas Anda. Bangun megastruktur, kastil megah, atau kota modern tanpa khawatir kehabisan blok atau diserang monster jahat.",
      color: "border-emerald-500/20 hover:border-emerald-400/50"
    },
    {
      title: "Roleplay & Ekonomi",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      description: "Rasakan interaksi sosial yang solid dan mendalam. Lakukan perdagangan item, bangun perekonomian Anda, jalani peran unik, dan jadilah pemimpin komunitas legendaris.",
      color: "border-blue-500/20 hover:border-blue-400/50"
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-charcoal/50 relative overflow-hidden">
      {/* Decorative side glows */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-full">
            Tentang Kami
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 mb-6 tracking-tight">
            Selamat Datang di <span className="text-glow-cyan text-cyan-400 uppercase">{siteConfig.name}</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full" />
          </div>
        </div>

        {/* Feature Cards Grid (Survival, Creative, Roleplay) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {modesData.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-obsidian/60 backdrop-blur-xs p-8 rounded-2xl border ${mode.color} transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] group`}
            >
              <div className="w-14 h-14 rounded-xl bg-charcoal flex items-center justify-center border border-slate-700/50 mb-6 group-hover:scale-110 transition-transform">
                {mode.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-4 tracking-wide group-hover:text-cyan-300 transition-colors">
                {mode.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {mode.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Pitch Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-r from-cyan-950/40 via-charcoal/80 to-blue-950/40 rounded-3xl p-8 md:p-12 border border-slate-800/80 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-radial-at-c from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h4 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              Ayo Mulai Petualanganmu Sekarang!
            </h4>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
              Kami mengundang seluruh pemain, baik veteran maupun pemula, untuk bergabung dalam membangun peradaban megah, melatih kemampuan bertahan hidup, serta menjadi bagian dari komunitas Minecraft Indonesia yang solid, berkembang, dan bersahabat.
            </p>
            <a
              href="#koneksi"
              className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 hover:scale-105 active:scale-95 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5" />
              Gabung Bersama Komunitas
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
