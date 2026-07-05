import { siteConfig } from "../config/site";
import { Copy, Terminal, Smartphone, Laptop } from "lucide-react";
import { motion } from "motion/react";

interface IPAddressCopyProps {
  onCopy: (text: string, label: string) => void;
}

export default function IPAddressCopy({ onCopy }: IPAddressCopyProps) {
  const javaIp = siteConfig.server.javaIp;
  const bedrockIp = siteConfig.server.bedrockIp;
  const port = siteConfig.server.port.toString();

  return (
    <section id="koneksi" className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-brand-obsidian">
      <div className="absolute inset-0 grid-bg opacity-5"></div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">
            INFORMASI KONEKSI
          </h2>
          <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Mari Bergabung & Main Bersama
          </p>
          <p className="mt-4 text-base text-slate-400">
            Server kami mendukung permainan lintas platform! Anda bisa bermain menggunakan Java Edition (PC) maupun Bedrock Edition (HP / Console). Salin detail di bawah ini dan masukkan ke daftar server Anda.
          </p>
        </div>

        {/* Connection Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Java Connection Box */}
          <motion.div
            whileHover={{ y: -4 }}
            className="flex flex-col rounded-2xl border border-white/5 bg-brand-charcoal p-8 relative overflow-hidden group hover:border-brand-cyan/20 transition-all duration-300 shadow-xl"
          >
            <div className="absolute top-0 right-0 h-24 w-24 bg-brand-cyan/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-3.5 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                <Laptop className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-lg">Minecraft Java Edition</h4>
                <p className="text-xs text-slate-400">Khusus PC / Laptop players</p>
              </div>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="rounded-xl bg-brand-obsidian/60 border border-white/5 p-4 flex flex-col gap-1.5 relative">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Server Address (IP)</span>
                <span className="text-sm font-mono text-white font-medium break-all">{javaIp}</span>
              </div>
            </div>

            <button
              onClick={() => onCopy(javaIp, "IP Java Server")}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-cyan text-brand-obsidian py-3 px-4 text-xs font-bold hover:shadow-lg hover:shadow-brand-cyan/20 transition-all cursor-pointer"
            >
              <Copy className="h-4 w-4" />
              Salin IP Java
            </button>
          </motion.div>

          {/* Bedrock Connection Box */}
          <motion.div
            whileHover={{ y: -4 }}
            className="flex flex-col rounded-2xl border border-white/5 bg-brand-charcoal p-8 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-300 shadow-xl"
          >
            <div className="absolute top-0 right-0 h-24 w-24 bg-emerald-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

            <div className="flex items-center gap-3.5 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-lg">Minecraft Bedrock Edition</h4>
                <p className="text-xs text-slate-400">Khusus HP / Android / iOS players</p>
              </div>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-brand-obsidian/60 border border-white/5 p-4 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Server IP (Host)</span>
                  <span className="text-sm font-mono text-white font-medium break-all">{bedrockIp}</span>
                </div>
                <div className="rounded-xl bg-brand-obsidian/60 border border-white/5 p-4 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Port</span>
                  <span className="text-sm font-mono text-white font-medium">{port}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onCopy(bedrockIp, "IP Bedrock Server")}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3 px-4 text-xs font-bold transition-all cursor-pointer"
              >
                <Copy className="h-4 w-4" />
                Salin IP Bedrock
              </button>
              <button
                onClick={() => onCopy(port, "Port Server Bedrock")}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3 px-4 text-xs font-bold transition-all cursor-pointer"
              >
                <Copy className="h-4 w-4" />
                Salin Port
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
