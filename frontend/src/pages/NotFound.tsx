import { Link } from "react-router-dom";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-white px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-8xl font-black mb-4 bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f43f5e] bg-clip-text text-transparent"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-xl text-white/70 mb-8 max-w-md"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <Link
          to="/"
          className="inline-flex px-8 py-3 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
