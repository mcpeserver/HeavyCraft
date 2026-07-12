import { useState } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServerInfo from "./components/ServerInfo";
import RulesSection from "./components/RulesSection";
import RankSection from "./components/RankSection";
import IPAddressCopy from "./components/IPAddressCopy";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Toast from "./components/Toast";
import { useDevConfig } from "./hooks/useDevConfig";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [activePage, setActivePage] = useState("beranda");
  const { config: devConfig } = useDevConfig();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setToastMessage(`${label} (${text})`);
        setToastVisible(true);
        // Reset state after toast animations end
        setTimeout(() => {
          setToastVisible(false);
        }, 3500);
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
      });
  };

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <div className="min-h-screen bg-brand-obsidian text-slate-100 font-sans selection:bg-brand-cyan/30 selection:text-white flex flex-col justify-between">
      <div>
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Sticky Combined Header & Watermark */}
        <Header 
          onCopyIP={(ip) => handleCopy(ip, "IP Server Java")} 
          activePage={activePage}
          setActivePage={setActivePage}
          devConfig={devConfig}
        />

        {/* Main Layout Content with lag-free page transitions */}
        <main className="relative w-full overflow-x-hidden">
          <AnimatePresence mode="wait">
            {activePage === "beranda" && (
              <motion.div
                key="beranda"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                {/* Hero Section */}
                <Hero setActivePage={setActivePage} />
              </motion.div>
            )}

            {activePage === "informasi" && (
              <motion.div
                key="informasi"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                {/* Server Info / About Section */}
                <ServerInfo />
                {/* Connection Copy IP Panel */}
                <IPAddressCopy onCopy={handleCopy} />
              </motion.div>
            )}

            {activePage === "aturan" && (
              <motion.div
                key="aturan"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                {/* Rules Section */}
                <RulesSection />
              </motion.div>
            )}

            {activePage === "rank" && (
              <motion.div
                key="rank"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                {/* Pricing & Rank Cards Section */}
                <RankSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Footer & Watermarks */}
      <Footer devConfig={devConfig} />

      {/* Floating Utilities */}
      <BackToTop />
      
      {/* Copy Feedback Toast Popup */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
