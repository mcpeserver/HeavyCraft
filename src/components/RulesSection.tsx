import { AlertTriangle, MessageSquareOff, Eye, Trash2, HeartHandshake, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function RulesSection() {
  const rules = [
    {
      icon: AlertTriangle,
      title: "Dilarang Cheat & Hack",
      text: "Dilarang Cheat, Hack, X-Ray, dan Exploit.",
      tag: "Strict Prohibited",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
      borderColor: "hover:border-red-500/30",
    },
    {
      icon: MessageSquareOff,
      title: "Jaga Chat & Sikap",
      text: "Dilarang Toxic, 18+, SARA, dan Spam Chat.",
      tag: "Strict Prohibited",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
      borderColor: "hover:border-red-500/30",
    },
    {
      icon: Trash2,
      title: "Anti-Griefing",
      text: "Dilarang Grief atau merusak bangunan pemain lain.",
      tag: "Strict Prohibited",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
      borderColor: "hover:border-red-500/30",
    },
    {
      icon: Eye,
      title: "No Scam & No Dupe",
      text: "Dilarang Scam dan Dupe Item.",
      tag: "Strict Prohibited",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
      borderColor: "hover:border-red-500/30",
    },
    {
      icon: HeartHandshake,
      title: "Saling Menghormati",
      text: "Hormati sesama pemain dan staff.",
      tag: "Community Policy",
      badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      borderColor: "hover:border-yellow-500/30",
    },
    {
      icon: ShieldCheck,
      title: "Fair Play",
      text: "Bermain dengan fair play.",
      tag: "Community Policy",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      borderColor: "hover:border-emerald-500/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="aturan" className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-brand-obsidian">
      <div className="absolute inset-0 grid-bg opacity-5"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">
            PERATURAN KOMUNITAS
          </h2>
          <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Aturan Bermain di Heavy Craft
          </p>
          <p className="mt-4 text-base text-slate-400">
            Demi menjaga kenyamanan bersama, seluruh player diharapkan membaca, memahami, dan mematuhi aturan berikut secara adil. Pelanggaran berat dapat berujung pada sanksi banned permanen.
          </p>
        </div>

        {/* Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className={`rounded-2xl border border-white/5 bg-brand-charcoal p-6 transition-all duration-300 ${rule.borderColor}`}
            >
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-white/5 p-3 text-slate-300">
                  <rule.icon className="h-6 w-6 text-brand-cyan" />
                </div>
                <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${rule.badgeColor}`}>
                  {rule.tag}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {rule.title}
              </h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                {rule.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
