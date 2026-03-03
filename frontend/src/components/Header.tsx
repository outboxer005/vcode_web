import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import HeaderButton from "./HeaderButton";
import VcodeLogo from "../../download.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Teams" },
  { to: "/contact", label: "Contact us" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-auto px-4 py-3 bg-[var(--background)]/80 backdrop-blur-xl text-white flex items-center justify-between sticky top-0 z-50 border-b border-white/5"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center justify-center group">
        <img
          src={VcodeLogo}
          alt="VCode Logo"
          className="h-10 w-auto md:h-11 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-3">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="group relative px-5 py-3 rounded-lg text-white/80 hover:text-white transition-all duration-300"
          >
            <span className="relative z-10 text-sm lg:text-base font-semibold tracking-[0.22em] uppercase">
              {link.label}
            </span>
            <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] group-hover:w-3/4 transition-all duration-300 rounded-full" />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white transition-all duration-300"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 bg-[var(--card)]/95 backdrop-blur-xl p-4 rounded-xl shadow-2xl flex flex-col gap-1 md:hidden border border-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-semibold tracking-[0.22em] uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call-to-Action Button */}
      <div className="hidden md:block">
        <HeaderButton url="/events" />
      </div>
    </motion.nav>
  );
};

export default Header;
