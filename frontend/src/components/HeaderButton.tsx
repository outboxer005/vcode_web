import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const HeaderButton = ({ url }: { url: string }) => {
  const navigate = useNavigate();
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex h-11 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-[var(--background)] transition-all duration-300 group"
      onClick={() => navigate(url)}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#8b5cf6_50%,#f43f5e_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[var(--card)] px-6 py-2 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 group-hover:bg-[var(--card)]/90">
        Register Now
      </span>
    </motion.button>
  );
};

export default HeaderButton;
