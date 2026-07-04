import React from "react";
import { motion } from "motion/react";
import { Check, Info, ShoppingCart, Sparkles, Award, Shield, Flame, Crown } from "lucide-react";
import { siteConfig } from "../config/site";

export default function RankSection() {
  const ranks = [
    {
      name: "NEWBIE",
      price: "Gratis",
      colorName: "🟢",
      glowColor: "shadow-emerald-500/10",
      borderColor: "border-emerald-500/30 hover:border-emerald-400",
      textColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      features: [
        "Akses dasar ke server",
        "Command standard player",
        "Akses chat komunitas",
        "Kit Survival dasar"
      ]
    },
    {
      name: "MEMBER",
      price: "Gratis",
      colorName: "🔵",
      glowColor: "shadow-blue-500/10",
      borderColor: "border-blue-500/30 hover:border-blue-400",
      textColor: "text-blue-400",
      badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      features: [
        "Semua fitur Newbie",
        "Claim Lahan (Residence)",
        "Membuat Toko Pribadi",
        "Akses Ekonomi dasar"
      ]
    },
    {
      name: "VIP",
      price: "5k",
      colorName: "🟣",
      glowColor: "shadow-purple-500/10",
      borderColor: "border-purple-500/30 hover:border-purple-400",
      textColor: "text-purple-400",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      features: [
        "Akses Anvil (/anvil)",
        "Akses Workbench (/wb)",
        "Kits VIP khusus",
        "Prefix Badge VIP di Chat"
      ]
    },
    {
      name: "MVP",
      price: "10k",
      colorName: "🟡",
      glowColor: "shadow-amber-500/10",
      borderColor: "border-amber-500/30 hover:border-amber-400",
      textColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      features: [
        "Akses Anvil (/anvil)",
        "Akses Workbench (/wb)",
        "Mode Terbang (/fly)",
        "Kits MVP khusus",
        "Prefix Badge MVP di Chat"
      ]
    },
    {
      name: "ELITE",
      price: "20k",
      colorName: "🟠",
      glowColor: "shadow-orange-500/10",
      borderColor: "border-orange-500/30 hover:border-orange-400",
      textColor: "text-orange-400",
      badgeBg: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      features: [
        "Akses Anvil & Workbench",
        "Mode Terbang (/fly)",
        "Memakai Blok di Kepala (/hat)",
        "Warna Nickname & Format custom",
        "Kits ELITE khusus",
        "Akses VIP Claim Lahan luas"
      ]
    },
    {
      name: "HERO",
      price: "30k",
      colorName: "🔴",
      glowColor: "shadow-red-500/15",
      borderColor: "border-red-500/30 hover:border-red-400",
      textColor: "text-red-400",
      badgeBg: "bg-red-500/10 text-red-400 border-red-500/20",
      features: [
        "Akses Anvil & Workbench",
        "Mode Terbang (/fly)",
        "Memakai Blok di Kepala (/hat)",
        "Nick color/format/rgb khusus",
        "Virtual Enderchest (/ec)",
        "Kits HERO khusus",
        "Join Penuh saat server ramai"
      ]
    },
    {
      name: "LEGEND",
      price: "50k",
      colorName: "⚫",
      glowColor: "shadow-slate-500/20",
      borderColor: "border-slate-500/40 hover:border-slate-300",
      textColor: "text-slate-300",
      badgeBg: "bg-slate-800/80 text-slate-300 border-slate-700",
      features: [
        "Akses Anvil & Workbench",
        "Mode Terbang (/fly) & Hat",
        "Nick color/format/rgb khusus",
        "Virtual Enderchest (/ec)",
        "Command Pemulihan Darah (/heal)",
        "Hapus Inventory (/clearinven)",
        "Kembali ke lokasi mati (/back)",
        "Kits LEGEND khusus"
      ]
    },
    {
      name: "MYTHIC",
      price: "60k",
      colorName: "👑",
      glowColor: "shadow-cyan-500/20",
      borderColor: "border-cyan-500/50 hover:border-cyan-300 bg-linear-to-b from-charcoal to-cyan-950/20",
      textColor: "text-cyan-300",
      badgeBg: "bg-cyan-500/20 text-cyan-200 border-cyan-500/40 font-bold",
      isPremium: true,
      features: [
        "Semua Fitur Rank Legend",
        "Nama Item Kustom (/itemname RGB)",
        "Kits MYTHIC Terkuat",
        "Prioritas Support Admin Utama",
        "Prefix Chat Berkedip Mewah",
        "Hak Claim Lahan Terbesar"
      ]
    }
  ];

  const getWaLink = (rankName: string, price: string) => {
    const rawNum = siteConfig.contacts.adminWhatsapp;
    const formattedNum = rawNum.startsWith("0") ? "62" + rawNum.slice(1) : rawNum;
    const message = `Halo Admin HEAVY CRAFT, saya tertarik untuk membeli rank *${rankName}* seharga *${price}*. Bagaimana langkah pembayarannya?`;
    return `https://wa.me/${formattedNum}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="rank" className="py-20 bg-charcoal/30 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-full">
            Server Support
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 mb-6 tracking-tight">
            Daftar Rank & <span className="text-glow-cyan text-cyan-400">Fitur Lengkap</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Pilihlah tingkatan pangkat yang paling sesuai dengan gaya petualanganmu di Heavy Craft. Setiap pembelian mendukung operasional server agar tetap aktif dan berkinerja tinggi.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full" />
          </div>
        </div>

        {/* Warning & Info Box (MUST BE EXACT VERBATIM) */}
        <div className="mb-12 bg-charcoal/80 border border-amber-500/20 rounded-2xl p-6 md:p-8 max-w-5xl mx-auto shadow-xl flex items-start gap-4">
          <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 flex-shrink-0">
            <Info className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-amber-300 mb-2">Catatan Penting Pembelian Rank</h4>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              "Rank untuk support server, bukan pay-to-win. Semua player tetap bisa main normal tanpa beli rank. Harga bisa berubah sesuai kebijakan admin. Pembelian menggunakan duit asli melalui chat WA Admin."
            </p>
          </div>
        </div>

        {/* Ranks Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map((rank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`flex flex-col bg-obsidian/85 backdrop-blur-xs rounded-2xl border p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg ${rank.glowColor} ${rank.borderColor} ${rank.isPremium ? 'ring-2 ring-cyan-500/30' : ''}`}
            >
              {/* Badge Icon */}
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs uppercase font-mono tracking-widest px-2.5 py-1 rounded-md border font-semibold ${rank.badgeBg}`}>
                  {rank.colorName} {rank.name}
                </span>
                {rank.isPremium && (
                  <Crown className="w-5 h-5 text-cyan-300 animate-pulse" />
                )}
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-black text-white font-display tracking-tight">
                  {rank.price}
                </span>
                {rank.price !== "Gratis" && (
                  <span className="text-xs text-slate-400 font-mono ml-1">/ Selamanya</span>
                )}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-slate-800/80 mb-6" />

              {/* Features List */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {rank.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              {rank.price === "Gratis" ? (
                <a
                  href="#koneksi"
                  className="w-full text-center py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                >
                  Main Sekarang
                </a>
              ) : (
                <a
                  href={getWaLink(rank.name, rank.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-950/20 border border-cyan-400/15 cursor-pointer group transition-all duration-300"
                >
                  <ShoppingCart className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  Beli via WA
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
