import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-[#1b2025] border border-white/10 text-sm font-medium shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-[#dfe3e9] backdrop-blur-xl"
        >
          {type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#2fd9f4]" />}
          {type === 'error' && <AlertCircle className="w-5 h-5 text-[#ffb4ab]" />}
          {type === 'info' && <Info className="w-5 h-5 text-[#adc6ff]" />}
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
