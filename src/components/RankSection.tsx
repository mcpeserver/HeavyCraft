import { siteConfig } from "../config/site";
import { Check, Shield, Info, ExternalLink, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function RankSection() {
  const ranks = [
    {
      name: "NEWBIE",
      price: "Gratis",
      color: "from-emerald-600 to-green-500",
      accent: "emerald",
      border: "hover:border-emerald-500/40",
      glow: "shadow-emerald-500/5",
      features: ["Akses Server 24/7", "Basic Kit Newbie", "Global Chat", "RTP (Random Teleport)"],
    },
    {
      name: "MEMBER",
      price: "Gratis",
      color: "from-blue-600 to-cyan-500",
      accent: "blue",
      border: "hover:border-blue-500/40",
      glow: "shadow-blue-500/5",
      features: ["Semua Fitur Newbie", "Kits Member Terkustom", "Simpan hingga 3 Rumah (/sethome)", "Akses Trade Player"],
    },
    {
      name: "VIP",
      price: "Rp 5.000",
      color: "from-purple-600 to-fuchsia-500",
      accent: "purple",
      border: "hover:border-purple-500/40",
      glow: "shadow-purple-500/5",
      features: ["Semua Fitur Member", "Akses /anvil di mana saja", "Akses /workbench portabel", "Kits Spesial VIP"],
    },
    {
      name: "MVP",
      price: "Rp 10.000",
      color: "from-yellow-600 to-amber-500",
      accent: "yellow",
      border: "hover:border-yellow-500/40",
      glow: "shadow-yellow-500/5",
      features: [
        "Semua Fitur VIP",
        "Akses terbang /fly",
        "Kits Premium MVP",
      ],
    },
    {
      name: "ELITE",
      price: "Rp 20.000",
      color: "from-orange-600 to-amber-500",
      accent: "orange",
      border: "hover:border-orange-500/40",
      glow: "shadow-orange-500/5",
      features: [
        "Semua Fitur MVP",
        "Gunakan item di kepala /hat",
        "Kustomisasi Warna Nickname",
        "Kits Eksklusif ELITE",
      ],
    },
    {
      name: "HERO",
      price: "Rp 30.000",
      color: "from-red-600 to-rose-500",
      accent: "red",
      border: "hover:border-red-500/40",
      glow: "shadow-red-500/5",
      features: [
        "Semua Fitur ELITE",
        "Akses Nickname RGB",
        "Akses /enderchest portabel",
        "Kits Ultimate HERO",
      ],
    },
    {
      name: "LEGEND",
      price: "Rp 50.000",
      color: "from-slate-700 to-slate-500",
      accent: "slate",
      border: "hover:border-slate-500/40",
      glow: "shadow-slate-500/5",
      features: [
        "Semua Fitur HERO",
        "Pulihkan darah /heal",
        "Bersihkan inventori /clearinven",
        "Kembali ke lokasi mati /back",
        "Kits Legendary LEGEND",
      ],
    },
    {
      name: "MYTHIC",
      price: "Rp 60.000",
      color: "from-yellow-500 via-amber-600 to-red-600",
      accent: "gold",
      border: "hover:border-yellow-500/60",
      glow: "shadow-yellow-500/15",
      featured: true,
      features: [
        "Semua Fitur LEGEND",
        "Ganti warna nama item (RGB)",
        "Title Chat Menakjubkan",
        "Kits God-Like MYTHIC",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="rank" className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-brand-charcoal/40">
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">
            DONASI & RANK SERVER
          </h2>
          <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pilih Rank Pendukung Anda
          </p>
          <p className="mt-4 text-base text-slate-300">
            Dukung kestabilan operasional server Heavy Craft dengan berlangganan rank khusus. Dapatkan hak istimewa kosmetik dan kemudahan utilitas di dalam game.
          </p>
        </div>

        {/* Verbatim Important Note Banner */}
        <div className="mx-auto max-w-4xl mb-16 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 text-slate-300 shadow-lg shadow-amber-500/2">
          <div className="flex gap-4 items-start">
            <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-400 shrink-0">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide">
                Catatan Penting (Disclaimer Resmi)
              </h4>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300">
                Rank untuk support server, bukan pay-to-win. Semua player tetap bisa main normal tanpa beli rank. Harga bisa berubah sesuai kebijakan admin. Pembelian menggunakan duit asli melalui chat WA Admin.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ranks.map((rank) => {
            const waText = encodeURIComponent(
              `Halo Admin Heavy Craft, saya ingin membeli Rank ${rank.name} seharga ${rank.price}. Mohon dipandu untuk pembayarannya.`
            );
            const waUrl = `https://wa.me/${siteConfig.contacts.adminWhatsapp}?text=${waText}`;

            return (
              <motion.div
                key={rank.name}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col rounded-2xl border border-white/5 bg-brand-charcoal p-6 transition-all duration-300 shadow-xl ${rank.border} ${rank.glow} ${
                  rank.featured ? "ring-2 ring-yellow-500/50 bg-brand-charcoal/90" : ""
                }`}
              >
                {/* Featured Badge */}
                {rank.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 px-3 py-1 text-[10px] font-extrabold text-brand-obsidian uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Zap className="h-3 w-3 fill-brand-obsidian" /> TOP VALUE
                  </span>
                )}

                {/* Rank Name & Price Header */}
                <div className="mb-6">
                  <span className={`inline-block rounded-md bg-gradient-to-r ${rank.color} px-2.5 py-1 text-xs font-bold text-white tracking-wide shadow-sm`}>
                    {rank.name}
                  </span>
                  <div className="mt-3 flex items-baseline text-white">
                    <span className="text-2xl font-extrabold tracking-tight">
                      {rank.price}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {rank.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs">
                      <Check className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                {rank.price === "Gratis" ? (
                  <a
                    href="#koneksi"
                    className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3 text-xs font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-all w-full text-center"
                  >
                    Main Sekarang
                  </a>
                ) : (
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center gap-1.5 rounded-xl py-3 px-4 text-xs font-bold transition-all w-full text-center shadow-lg cursor-pointer ${
                      rank.featured
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-brand-obsidian hover:shadow-yellow-500/20"
                        : "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan hover:bg-brand-cyan hover:text-brand-obsidian hover:shadow-brand-cyan/10"
                    }`}
                  >
                    Beli Rank via WA
                    <ExternalLink className="h-3 w-3 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
