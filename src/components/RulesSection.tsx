import React from "react";
import { motion } from "motion/react";
import { ShieldAlert, Ban, MessageSquareOff, UserCheck, FlameKindling, Swords } from "lucide-react";

export default function RulesSection() {
  const rules = [
    {
      title: "Anti-Cheat & Exploit",
      text: "Dilarang Cheat, Hack, X-Ray, dan Exploit.",
      desc: "Segala bentuk modifikasi ilegal atau pencurangan sistem akan dikenakan sanksi banned permanen tanpa toleransi.",
      icon: <ShieldAlert className="w-8 h-8 text-red-400" />,
      borderColor: "border-red-500/20 hover:border-red-500/50"
    },
    {
      title: "Etika Chat & Sosial",
      text: "Dilarang Toxic, 18+, SARA, dan Spam Chat.",
      desc: "Ciptakan lingkungan obrolan yang ramah, sopan, dan kekeluargaan. Hindari kata kasar dan ujaran kebencian.",
      icon: <MessageSquareOff className="w-8 h-8 text-red-400" />,
      borderColor: "border-red-500/20 hover:border-red-500/50"
    },
    {
      title: "Anti-Griefing",
      text: "Dilarang Grief atau merusak bangunan pemain lain.",
      desc: "Menghormati hak kepemilikan orang lain. Segala bentuk vandalisme (griefing) atau pencurian akan ditindak tegas.",
      icon: <Ban className="w-8 h-8 text-red-400" />,
      borderColor: "border-red-500/20 hover:border-red-500/50"
    },
    {
      title: "Anti-Scam & Duplication",
      text: "Dilarang Scam dan Dupe Item.",
      desc: "Dilarang menduplikasi item melalui bug apapun atau menipu rekan se-server dalam transaksi dagang.",
      icon: <FlameKindling className="w-8 h-8 text-red-400" />,
      borderColor: "border-red-500/20 hover:border-red-500/50"
    },
    {
      title: "Hormati Rekan Komunitas",
      text: "Hormati sesama pemain dan staff.",
      desc: "Staff bertugas menjaga ketertiban server dengan sukarela. Dengarkan arahan staff dan hargai sesama player.",
      icon: <UserCheck className="w-8 h-8 text-cyan-400" />,
      borderColor: "border-cyan-500/20 hover:border-cyan-400/50"
    },
    {
      title: "Fair Play",
      text: "Bermain dengan fair play.",
      desc: "Mari nikmati keseruan permainan secara jujur, adil, sehat, dan jalin persahabatan yang langgeng di Heavy Craft.",
      icon: <Swords className="w-8 h-8 text-cyan-400" />,
      borderColor: "border-cyan-500/20 hover:border-cyan-400/50"
    }
  ];

  return (
    <section id="peraturan" className="py-20 bg-obsidian relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-red-400 bg-red-950/40 border border-red-850/30 px-3 py-1 rounded-full">
            Keamanan Server
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 mb-6 tracking-tight">
            Peraturan Resmi <span className="text-glow-green text-emerald-400">HEAVY CRAFT</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Demi kenyamanan, keamanan, dan keadilan bersama, seluruh warga server wajib mematuhi panduan hukum berikut. Pelanggaran berat akan dikenakan sanksi tegas oleh staff.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-linear-to-r from-red-500 to-amber-500 rounded-full" />
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`bg-charcoal/50 backdrop-blur-xs p-6 rounded-xl border ${rule.borderColor} transition-all duration-300 hover:shadow-lg hover:shadow-red-950/10`}
            >
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-obsidian border border-slate-850">
                  {rule.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-base text-slate-100 group-hover:text-white mb-2 uppercase tracking-wide">
                    {rule.title}
                  </h3>
                  <p className="text-sm font-semibold text-rose-300 mb-2 leading-snug">
                    {rule.text}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {rule.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Callout */}
        <div className="mt-12 bg-red-950/10 border border-red-900/30 rounded-2xl p-6 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3 text-left">
            <ShieldAlert className="w-8 h-8 text-red-400 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-red-200 text-sm uppercase font-mono">Laporan Pelanggaran</h4>
              <p className="text-xs text-slate-400">Melihat player yang melanggar hukum di atas? Segera laporkan beserta bukti tangkapan layar/video kepada staff kami.</p>
            </div>
          </div>
          <a
            href={`https://wa.me/6285768060891?text=Halo%20Admin%20Heavy%20Craft,%20saya%20ingin%20melaporkan%20indikasi%20pelanggaran%20peraturan.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-900/30 hover:bg-red-900/50 text-red-300 hover:text-red-200 border border-red-500/20 text-xs font-bold px-5 py-2.5 rounded-lg transition-all duration-300 flex-shrink-0 cursor-pointer"
          >
            Lapor ke Admin
          </a>
        </div>

      </div>
    </section>
  );
}
