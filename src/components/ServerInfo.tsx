import { siteConfig } from "../config/site";
import { Compass, Shield, Users, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function ServerInfo() {
  const features = [
    {
      icon: Compass,
      title: "Survival Mode",
      desc: "Jelajahi dunia tanpa batas, kumpulkan sumber daya, buat markas megah, dan bertahan hidup bersama teman-teman terbaik Anda.",
      color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
    },
    {
      icon: Users,
      title: "Dynamic Economy",
      desc: "Berdagang secara adil dengan pemain lain, bangun toko impian Anda, kumpulkan kekayaan, dan pimpin pasar finansial server.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Heart,
      title: "Solid Community",
      desc: "Menawarkan ruang bertualang yang ramah, sehat, dan kooperatif. Jalin pertemanan erat, kolaborasi membangun kota, dan tumbuh bersama.",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="tentang" className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-brand-charcoal/40">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">
            TENTANG SERVER
          </h2>
          <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Selamat Datang di Dunia {siteConfig.name}
          </p>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            {siteConfig.description} Di sini, kami menggabungkan keseruan bertahan hidup klasis dengan integrasi ekonomi yang seru dan interaksi sosial yang ramah. Jadilah bagian dari legenda kami sekarang juga!
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col h-full rounded-2xl border border-white/5 bg-brand-charcoal/80 p-6 sm:p-8 hover:border-brand-cyan/20 transition-all shadow-md hover:shadow-lg hover:shadow-brand-cyan/5"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${item.color} mb-6 shadow-sm`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
