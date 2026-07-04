import React, { useState } from "react";
import { motion } from "motion/react";
import { Monitor, Smartphone, Copy, Check, ExternalLink, HelpCircle } from "lucide-react";
import { siteConfig } from "../config/site";

interface ConnectionProps {
  onShowToast: (message: string) => void;
}

export default function ConnectionSection({ onShowToast }: ConnectionProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      onShowToast(`${fieldName} berhasil disalin ke clipboard!`);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      onShowToast("Gagal menyalin, silakan ketik manual.");
    }
  };

  return (
    <section id="koneksi" className="py-20 bg-charcoal/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-full">
            Koneksi Server
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 mb-6 tracking-tight">
            Cara Bergabung ke <span className="text-glow-cyan text-cyan-400">HEAVY CRAFT</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Dukung permainan lintas platform! Anda bisa bermain menggunakan Minecraft Java (PC) maupun Minecraft Bedrock (Android, iOS, Console) secara bersamaan.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full" />
          </div>
        </div>

        {/* Platforms Connection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* JAVA EDITION CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-obsidian/80 backdrop-blur-xs rounded-2xl border border-slate-800 p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-all" />
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Java Edition</h3>
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Untuk PC / MAC / Laptop</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                Gunakan launcher resmi atau pihak ketiga favorit Anda, masuk ke menu <strong>Multiplayer</strong>, klik <strong>Add Server</strong>, dan masukkan detail koneksi di bawah ini.
              </p>

              {/* Java Credentials Details */}
              <div className="space-y-4 mb-8">
                {/* Server IP */}
                <div className="bg-charcoal/60 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Alamat Server (Server Address)</span>
                    <span className="text-sm md:text-base font-mono font-semibold text-white tracking-wide">
                      {siteConfig.server.javaIp.split(":")[0]}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(siteConfig.server.javaIp.split(":")[0], "IP Server Java")}
                    className="p-2 bg-obsidian border border-slate-800 hover:border-cyan-400 rounded-lg hover:bg-cyan-950/20 text-slate-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                    title="Salin Alamat"
                  >
                    {copiedField === "IP Server Java" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Server Port */}
                <div className="bg-charcoal/60 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Port Java (Default)</span>
                    <span className="text-sm md:text-base font-mono font-semibold text-white tracking-wide">
                      {siteConfig.server.javaIp.split(":")[1] || "25565"}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(siteConfig.server.javaIp.split(":")[1] || "25565", "Port Server Java")}
                    className="p-2 bg-obsidian border border-slate-800 hover:border-cyan-400 rounded-lg hover:bg-cyan-950/20 text-slate-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                    title="Salin Port"
                  >
                    {copiedField === "Port Server Java" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Kompatibel untuk versi 1.20+ (Rekomendasi terbaru)</span>
            </div>
          </motion.div>

          {/* BEDROCK EDITION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-obsidian/80 backdrop-blur-xs rounded-2xl border border-slate-800 p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-blue-500/10 transition-all" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Bedrock / Pocket Edition</h3>
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Untuk Android / iOS / Nintendo Switch</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                Gunakan Minecraft versi mobile (PE) atau konsol Anda, buka tab <strong>Servers</strong>, scroll ke paling bawah, klik <strong>Add Server</strong>, lalu masukkan informasi berikut.
              </p>

              {/* Bedrock Credentials Details */}
              <div className="space-y-4 mb-8">
                {/* Server IP */}
                <div className="bg-charcoal/60 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Alamat Server (Server Address)</span>
                    <span className="text-sm md:text-base font-mono font-semibold text-white tracking-wide">
                      {siteConfig.server.bedrockIp}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(siteConfig.server.bedrockIp, "IP Server Bedrock")}
                    className="p-2 bg-obsidian border border-slate-800 hover:border-blue-400 rounded-lg hover:bg-blue-950/20 text-slate-300 hover:text-blue-400 transition-all duration-300 cursor-pointer"
                    title="Salin Alamat"
                  >
                    {copiedField === "IP Server Bedrock" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Server Port */}
                <div className="bg-charcoal/60 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Port Bedrock (Wajib Diisi)</span>
                    <span className="text-sm md:text-base font-mono font-semibold text-white tracking-wide">
                      {siteConfig.server.port}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(String(siteConfig.server.port), "Port Server Bedrock")}
                    className="p-2 bg-obsidian border border-slate-800 hover:border-blue-400 rounded-lg hover:bg-blue-950/20 text-slate-300 hover:text-blue-400 transition-all duration-300 cursor-pointer"
                    title="Salin Port"
                  >
                    {copiedField === "Port Server Bedrock" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
              <span>Gunakan port {siteConfig.server.port} agar tidak terhubung ke server Bedrock lain</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
