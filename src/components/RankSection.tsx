import React from "react";
import { siteConfig } from "../config/site";
import { Check, ShieldCheck, HeartHandshake, ShieldAlert, Sparkles, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export default function RankSection() {
  const ranks = [
    {
      name: "NEWBIE",
      price: "Gratis",
      isFree: true,
      color: "text-emerald-400",
      bgGradient: "from-emerald-500/10 via-slate-900 to-slate-950",
      borderGlow: "hover:border-emerald-500/30",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      features: ["Akses game utama", "Kits dasar bawaan", "Chat regional umum"]
    },
    {
      name: "MEMBER",
      price: "Gratis",
      isFree: true,
      color: "text-blue-400",
      bgGradient: "from-blue-500/10 via-slate-900 to-slate-950",
      borderGlow: "hover:border-blue-500/30",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      features: ["Akses penuh server", "Kits Member dasar", "Claim wilayah (claim block)", "Menjual barang di Market"]
    },
    {
      name: "VIP",
      price: "5.000",
      isFree: false,
      color: "text-purple-400",
      bgGradient: "from-purple-500/10 via-slate-900 to-slate-950",
      borderGlow: "hover:border-purple-500/30",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      features: ["Semua fitur Member", "Akses /anvil portabel", "Akses /workbench portabel", "Kits VIP khusus"]
    },
    {
      name: "MVP",
      price: "10.000",
      isFree: false,
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/10 via-slate-900 to-slate-950",
      borderGlow: "hover:border-yellow-500/30",
      badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      features: ["Semua fitur VIP", "Akses /fly (terbang)", "Kits MVP khusus"]
    },
    {
      name: "ELITE",
      price: "20.000",
      isFree: false,
      color: "text-orange-400",
      bgGradient: "from-orange-500/10 via-slate-900 to-slate-950",
      borderGlow: "hover:border-orange-500/30",
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      features: ["Semua fitur MVP", "Akses /hat (pakai blok di kepala)", "Nick color & formatting", "Kits ELITE khusus"]
    },
    {
      name: "HERO",
      price: "30.000",
      isFree: false,
      color: "text-rose-400",
      bgGradient: "from-rose-500/10 via-slate-900 to-slate-950",
      borderGlow: "hover:border-rose-500/30",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      features: [
        "Semua fitur ELITE",
        "Nick color, format, & RGB text",
        "Akses /enderchest portabel",
        "Kits HERO khusus"
      ]
    },
    {
      name: "LEGEND",
      price: "50.000",
      isFree: false,
      color: "text-slate-300",
      bgGradient: "from-slate-500/15 via-slate-900 to-slate-950",
      borderGlow: "hover:border-cyan-500/35 box-glow-cyan",
      badgeColor: "bg-slate-800 text-slate-200 border-slate-700",
      features: [
        "Semua fitur HERO",
        "Akses /heal (pulihkan nyawa)",
        "Akses /clearinven portabel",
        "Akses /back (kembali ke tempat mati)",
        "Kits LEGEND khusus"
      ]
    },
    {
      name: "MYTHIC",
      price: "60.000",
      isFree: false,
      isPremium: true,
      color: "text-amber-300",
      bgGradient: "from-amber-500/15 via-slate-900 to-slate-950",
      borderGlow: "hover:border-amber-400/40 box-glow-emerald",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      features: [
        "Semua fitur LEGEND",
        "Itemname color, format, & RGB",
        "Kits MYTHIC khusus",
        "Prioritas bantuan eksklusif"
      ]
    }
  ];

  // Container variants for staggered child animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="rank" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-950/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold block mb-3">
            Dukungan Server Komunitas
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white mb-4">
            Daftar Rank & Fitur Lengkap
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Verbatim Disclaimer Card Callout */}
        <div className="mb-16 p-6 md:p-8 rounded-2xl bg-slate-950/80 border border-cyan-500/20 max-w-3xl mx-auto shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 hidden sm:block">
              <HeartHandshake size={24} />
            </div>
            <div>
              <span className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider block mb-1">Dukungan Sukarela</span>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                &ldquo;<span className="text-white font-semibold">Rank untuk support server, bukan pay-to-win. Semua player tetap bisa main normal tanpa beli rank.</span> Harga bisa berubah sesuai kebijakan admin. Pembelian menggunakan duit asli melalui chat WA Admin.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>100% Amanah & langsung diproses oleh Admin Utama</span>
              </div>
            </div>
          </div>
        </div>

        {/* Staggered Grid of Ranks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ranks.map((rank) => (
            <motion.div
              key={rank.name}
              variants={itemVariants}
              className={`p-6 rounded-2xl bg-gradient-to-b ${rank.bgGradient} border border-slate-850 transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between group ${rank.borderGlow} relative overflow-hidden`}
            >
              {rank.isPremium && (
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-black font-mono tracking-widest px-3 py-1 rounded-bl-xl uppercase flex items-center gap-1 shadow-md">
                  <Sparkles size={10} className="fill-current" />
                  Ultimate
                </div>
              )}

              <div>
                {/* Header card info */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs uppercase tracking-wider font-mono font-bold px-2 py-0.5 rounded border ${rank.badgeColor}`}>
                    {rank.isFree ? "Default" : "Donator"}
                  </span>
                </div>

                <h3 className={`font-display font-black text-2xl tracking-tight mb-2 flex items-center gap-2 ${rank.color}`}>
                  {rank.name}
                </h3>

                {/* Pricing section */}
                <div className="mb-6 pb-6 border-b border-slate-800/60">
                  {rank.isFree ? (
                    <span className="text-3xl font-black font-display text-white">Gratis</span>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-slate-400 font-sans">Rp</span>
                      <span className="text-3xl font-black font-display text-white">{rank.price}</span>
                      <span className="text-xs text-slate-500 font-mono">/selamanya</span>
                    </div>
                  )}
                </div>

                {/* Feature Bullet Points */}
                <ul className="space-y-3 mb-8">
                  {rank.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed font-sans">
                      <Check size={14} className="text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                {rank.isFree ? (
                  <button
                    onClick={() => {
                      const element = document.getElementById("koneksi");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-bold hover:bg-slate-900 hover:text-white transition-all text-xs tracking-wide flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Mulai Main
                  </button>
                ) : (
                  <a
                    href={`https://wa.me/${siteConfig.contacts.adminWhatsapp}?text=Halo%20Admin%20Heavy%20Craft,%20saya%20ingin%20membeli%20rank%20*${rank.name}*%20dengan%20harga%20Rp%20${rank.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 rounded-xl text-center font-bold text-xs tracking-wide flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md ${
                      rank.isPremium
                        ? "bg-amber-500 text-slate-950 hover:bg-amber-400 hover:shadow-amber-500/10"
                        : "bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-850 hover:text-cyan-300 hover:border-cyan-500/30"
                    }`}
                  >
                    <ShoppingBag size={13} className="fill-current shrink-0" />
                    <span>Beli Rank WA</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
