import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";
import { motion } from "motion/react";

export default function Events() {
  return (
    <section className="min-h-screen bg-[var(--background)] py-16 md:py-20">
      <div className="text-center mb-12 md:mb-16 px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[#06b6d4] font-mono text-sm uppercase tracking-[0.3em] mb-2 font-semibold"
        >
          Department of CSE
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2"
        >
          <span className="bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f43f5e] bg-clip-text text-transparent">
            VCODE
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[#8b5cf6] text-2xl md:text-3xl font-bold mb-4"
        >
          2026
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-white/70 mt-4 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          Eight thrilling events. Compete, collaborate, and showcase your
          technical skills. Register now and join the biggest technical
          celebration of the year!
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto px-2">
        <GlowingEffectDemo />
      </div>
    </section>
  );
}
