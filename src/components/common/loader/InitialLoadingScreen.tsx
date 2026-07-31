"use client";

import { motion } from "framer-motion";

interface InitialLoadingScreenProps {
  duration?: number; // duration in seconds
}

export default function InitialLoadingScreen({ duration = 2.5 }: InitialLoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#04091B] overflow-hidden text-white"
    >
      {/* Background glow animations */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]"
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Brand Logo Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 shadow-[0_0_50px_rgba(124,58,237,0.5)]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 opacity-50 blur-sm"
          />
          <span className="relative text-3xl font-black tracking-widest text-white">A</span>
        </motion.div>

        {/* Title */}
        <div className="flex flex-col items-center gap-2 text-center">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl text-white"
          >
            ANIMARK
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-slate-400"
          >
            Initializing assets & digital workspace...
          </motion.p>
        </div>

        {/* Animated Loading Bar (Smooth single progress fill matching total screen time) */}
        <div className="relative h-2 w-64 overflow-hidden rounded-full bg-white/10 p-0.5 border border-white/5 backdrop-blur-md">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: duration,
              ease: "easeInOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-400 to-cyan-400 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
          />
        </div>
      </div>
    </motion.div>
  );
}
