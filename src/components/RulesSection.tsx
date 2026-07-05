import React from "react";
import { ShieldAlert, ShieldCheck, Ban, MessageSquareOff, Trash2, Shuffle, Heart, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

export default function RulesSection() {
  const rules = [
    {
      id: 1,
      icon: <Ban className="text-rose-500" size={24} />,
      type: "Dilarang keras",
      title: "Dilarang Cheat, Hack, X-Ray, dan Exploit.",
      description: "Penggunaan klien modifikasi ilegal, cheat, hack, xray, atau eksploitasi bug sistem akan langsung berakibat pada hukuman BAN permanen tanpa kompromi."
    },
    {
      id: 2,
      icon: <MessageSquareOff className="text-rose-500" size={24} />,
      type: "Dilarang keras",
      title: "Dilarang Toxic, 18+, SARA, dan Spam Chat.",
      description: "Jagalah etika mengobrol. Tindakan rasisme (SARA), pesan tidak senonoh (18+), berkata kasar secara toxic, atau melakukan spam chat sangat dilarang."
    },
    {
      id: 3,
      icon: <Trash2 className="text-rose-500" size={24} />,
      type: "Dilarang keras",
      title: "Dilarang Grief atau merusak bangunan pemain lain.",
      description: "Hormati karya pemain lain. Dilarang merusak, mencuri, membakar, atau memodifikasi bangunan milik pemain lain tanpa izin tertulis."
    },
    {
      id: 4,
      icon: <Shuffle className="text-rose-500" size={24} />,
      type: "Dilarang keras",
      title: "Dilarang Scam dan Dupe Item.",
      description: "Segala bentuk penipuan perdagangan sesama player (scam) maupun penggandaan item (duplication glitch) akan ditindak tegas dengan hapus data akun."
    },
    {
      id: 5,
      icon: <Heart className="text-emerald-400" size={24} />,
      type: "Sangat Dianjurkan",
      title: "Hormati sesama pemain dan staff.",
      description: "Heavy Craft adalah rumah bersama. Hargai staff yang bertugas menjaga server dan bersikaplah sopan dalam menyambut pemain baru."
    },
    {
      id: 6,
      icon: <ShieldCheck className="text-emerald-400" size={24} />,
      type: "Sangat Dianjurkan",
      title: "Bermain dengan fair play.",
      description: "Ikuti seluruh event, bangun peradaban, dan lakukan petualangan secara jujur. Nikmati keindahan survival Minecraft sesungguhnya."
    }
  ];

  return (
    <section id="rules" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-b border-slate-900">
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-rose-950/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-rose-500 font-mono font-bold block mb-3">
            Aturan & Regulasi Komunitas
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white mb-4">
            Peraturan Server <span className="text-rose-500">HEAVY CRAFT</span>
          </h2>
          <div className="w-16 h-1 bg-rose-500 mx-auto rounded-full mb-6" />
          <p className="text-sm md:text-base text-slate-400 leading-relaxed font-sans">
            Demi kenyamanan, keamanan, dan keadilan bermain seluruh player, mohon patuhi peraturan komunitas berikut. Pelanggaran berat dapat mengakibatkan sanksi pemblokiran permanen dari server.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => {
            const isStrict = rule.id <= 4;
            return (
              <motion.div
                key={rule.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl bg-slate-900/40 border transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between ${
                  isStrict
                    ? "border-rose-950/20 hover:border-rose-500/25 shadow-sm hover:shadow-rose-950/10"
                    : "border-emerald-950/20 hover:border-emerald-500/25 shadow-sm hover:shadow-emerald-950/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Security Badge Shield */}
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-slate-950 border ${isStrict ? 'border-rose-900/20' : 'border-emerald-900/20'}`}>
                        {rule.icon}
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-mono font-bold ${isStrict ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {rule.type}
                      </span>
                    </div>
                    {/* Red X-Mark or Green Shield */}
                    <div className="text-slate-700 font-mono text-xs font-bold">
                      {isStrict ? (
                        <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 border border-rose-500/20">LARANGAN</span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">REKOMENDASI</span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 font-sans mb-3 leading-snug">
                    {rule.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                    {rule.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Warning Callout Bar */}
        <div className="mt-12 p-5 rounded-xl bg-slate-900/30 border border-slate-850 text-center max-w-3xl mx-auto flex items-center justify-center gap-3">
          <ShieldAlert className="text-amber-500 shrink-0" size={18} />
          <p className="text-xs text-slate-400 leading-relaxed text-left font-sans">
            <span className="text-amber-500 font-bold">Catatan Penting:</span> Staff kami tidak akan pernah meminta kata sandi akun Anda atau memungut biaya administrasi apa pun di luar daftar rank resmi. Laporkan segala bentuk kecurangan langsung ke Admin via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
