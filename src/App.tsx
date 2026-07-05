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

export default function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

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

  return (
    <div className="min-h-screen bg-brand-obsidian text-slate-100 font-sans selection:bg-brand-cyan/30 selection:text-white">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Combined Header & Watermark */}
      <Header onCopyIP={(ip) => handleCopy(ip, "IP Server Java")} />

      {/* Main Layout Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Server Info / About Section */}
        <ServerInfo />

        {/* Rules Section */}
        <RulesSection />

        {/* Pricing & Rank Cards Section */}
        <RankSection />

        {/* Connection Copy IP Panel */}
        <IPAddressCopy onCopy={handleCopy} />
      </main>

      {/* Footer & Watermarks */}
      <Footer />

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
