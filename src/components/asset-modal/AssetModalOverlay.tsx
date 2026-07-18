"use client";

import { motion, AnimatePresence } from "framer-motion";

interface AssetModalOverlayProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const AssetModalOverlay = ({
  open,
  onClose,
  children,
}: AssetModalOverlayProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 24,
            }}
            className="fixed left-1/2 top-1/2 z-[9999] h-[min(850px,90vh)] w-[92vw] max-w-7xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[18px] border border-white/10 bg-[#08101F]"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
