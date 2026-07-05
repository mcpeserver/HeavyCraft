import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { Copy, Check, Server, Smartphone, Info, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface ConnectionSectionProps {
  onCopySuccess: (message: string) => void;
}

export default function ConnectionSection({ onCopySuccess }: ConnectionSectionProps) {
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  const handleCopy = (text: string, type: "java" | "bedrock" | "port") => {
    navigator.clipboard.writeText(text);
    if (type === "java") {
      setCopiedJava(true);
      setTimeout(() => setCopiedJava(false), 2000);
      onCopySuccess(`IP Java berhasil disalin: ${text}`);
    } else if (type === "bedrock") {
      setCopiedBedrock(true);
      setTimeout(() => setCopiedBedrock(false), 2000);
      onCopySuccess(`IP Bedrock berhasil disalin: ${text}`);
    } else if (type === "port") {
      setCopiedPort(true);
      setTimeout(() => setCopiedPort(false), 2000);
      onCopySuccess(`Port Bedrock berhasil disalin: ${text}`);
    }
  };

  return (
    <section id="koneksi" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-900">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-950/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold block mb-3">
            Cara Bergabung & Bermain
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white mb-4">
            Sambungkan Ke Server
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-sm md:text-base text-slate-400 leading-relaxed font-sans">
            Heavy Craft mendukung koneksi untuk kedua edisi game Minecraft (<span className="text-white font-semibold">Java Edition</span> untuk PC dan <span className="text-white font-semibold">Bedrock Edition</span> untuk HP/Console/Win10). Klik ikon salin di bawah ini untuk menyalin info secara instan.
          </p>
        </div>

        {/* Dynamic Connection Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {/* 1. Java Edition Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-850 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Server size={22} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-cyan-400">PC & Laptop</span>
                  <h3 className="text-base font-bold text-white">Java Edition</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6">
                Gunakan Minecraft Java versi terbaru, lalu tambahkan server baru di daftar multiplayer Anda dengan IP di bawah ini.
              </p>
            </div>

            <div className="w-full">
              <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-2">IP SERVER JAVA</label>
              <button
                onClick={() => handleCopy(siteConfig.server.javaIp, "java")}
                className="w-full p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-cyan-500/30 font-mono text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center justify-between transition-all duration-200 group-hover:bg-slate-950/80 cursor-pointer"
              >
                <span className="truncate">{siteConfig.server.javaIp}</span>
                {copiedJava ? <Check size={14} className="text-emerald-400 shrink-0" /> : <Copy size={14} className="shrink-0" />}
              </button>
            </div>
          </motion.div>

          {/* 2. Bedrock Edition Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-850 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Smartphone size={22} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-cyan-400">Mobile & Console</span>
                  <h3 className="text-base font-bold text-white">Bedrock Edition</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6">
                Gunakan Minecraft PE/Bedrock versi terbaru di smartphone, lalu buat server eksternal baru dengan IP di bawah ini.
              </p>
            </div>

            <div className="w-full">
              <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-2">IP SERVER BEDROCK</label>
              <button
                onClick={() => handleCopy(siteConfig.server.bedrockIp, "bedrock")}
                className="w-full p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-cyan-500/30 font-mono text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center justify-between transition-all duration-200 group-hover:bg-slate-950/80 cursor-pointer"
              >
                <span className="truncate">{siteConfig.server.bedrockIp}</span>
                {copiedBedrock ? <Check size={14} className="text-emerald-400 shrink-0" /> : <Copy size={14} className="shrink-0" />}
              </button>
            </div>
          </motion.div>

          {/* 3. Port Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-850 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <span className="text-xs font-black font-mono">19127</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-cyan-400">Koneksi Bedrock</span>
                  <h3 className="text-base font-bold text-white">Port Server</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6">
                Masukkan nomor port khusus berikut pada isian kolom port saat menambahkan server di versi Bedrock/PE.
              </p>
            </div>

            <div className="w-full">
              <label className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-2">PORT SERVER BEDROCK</label>
              <button
                onClick={() => handleCopy(siteConfig.server.port.toString(), "port")}
                className="w-full p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-cyan-500/30 font-mono text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center justify-between transition-all duration-200 group-hover:bg-slate-950/80 cursor-pointer"
              >
                <span className="truncate">{siteConfig.server.port}</span>
                {copiedPort ? <Check size={14} className="text-emerald-400 shrink-0" /> : <Copy size={14} className="shrink-0" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Step by step help text */}
        <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-850 text-slate-400 text-xs leading-relaxed max-w-4xl mx-auto font-sans grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-2.5">
            <Info size={16} className="text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-200 font-semibold block mb-0.5">Panduan Masuk Java (PC):</span>
              Buka game Minecraft Java → klik <span className="text-cyan-400">Multiplayer</span> → <span className="text-cyan-400">Add Server</span> → Masukkan Nama & IP Server di atas → Klik <span className="text-cyan-400">Done</span> → Selamat Bermain!
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Info size={16} className="text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-200 font-semibold block mb-0.5">Panduan Masuk Bedrock (HP):</span>
              Buka Minecraft PE/HP → Klik <span className="text-cyan-400">Play</span> → Beralih ke tab <span className="text-cyan-400">Servers</span> → Klik <span className="text-cyan-400">Add Server</span> → Masukkan IP & Port di atas → Klik <span className="text-cyan-400">Save/Play</span>!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
