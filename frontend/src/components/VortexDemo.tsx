import { motion } from "motion/react";

export function VortexDemo() {
  return (
    <div className="w-full h-full mx-auto flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-sm sm:text-base mb-4 font-semibold text-white/80 tracking-[0.2em] uppercase"
      >
        Department of CSE
      </motion.p>
      <div className="flex items-center justify-center w-full text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-vcode-hero text-white tracking-tight">
        {["V", "C", "O", "D", "E"].map((letter, i) => (
          <motion.span
            key={letter}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: [0, -12, 0, 6, 0],
              scale: [1, 1.05, 1, 1.02, 1],
            }}
            transition={{
              opacity: { duration: 0.5, delay: i * 0.08 },
              y: {
                delay: 0.5 + i * 0.1,
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              },
              scale: {
                delay: 0.5 + i * 0.1,
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            className="mx-0.5 sm:mx-1 md:mx-2 inline-block bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f43f5e] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="text-lg sm:text-xl mt-4 font-extrabold text-[#06b6d4] tracking-[0.3em] uppercase font-mono"
      >
        VCODE 2026
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex justify-center mt-6 sm:mt-10"
      >
        <p className="text-base sm:text-xl md:text-2xl font-bold text-white/95 text-center px-4 md:px-16 lg:px-32 leading-relaxed max-w-3xl">
          Participate, enhance your skills, and earn certificates to add value
          to your work and life.
        </p>
      </motion.div>
    </div>
  );
}
