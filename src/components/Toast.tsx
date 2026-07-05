import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-brand-cyan/30 bg-brand-charcoal/95 px-5 py-3 shadow-lg shadow-brand-cyan/10 backdrop-blur-xl"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-cyan/20 text-brand-cyan">
            <Check className="h-4 w-4" />
          </div>
          <div>
            <p className="font-medium text-white text-sm">Berhasil Disalin!</p>
            <p className="text-xs text-slate-400">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
