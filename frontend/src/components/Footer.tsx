import React from "react";
import { Calendar, MapPin, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import VcodeLogo from "../../download.png";

const Footer: React.FC = () => {
  const location = useLocation();

  if (location.pathname.startsWith("/register")) {
    return null;
  }

  return (
    <footer className="bg-[var(--card)] text-white/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Event Info */}
          <div className="space-y-4">
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                Department of CSE
              </p>
              <div className="flex items-center group">
                <img
                  src={VcodeLogo}
                  alt="VCode Logo"
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">
              Join us for the most exciting technical event of the year.
              Showcase your skills, learn from experts, and connect with fellow
              developers.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <Calendar className="w-5 h-5 text-[#06b6d4] shrink-0" />
              <span>VCODE Day 11th April 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="w-5 h-5 text-[#06b6d4] shrink-0" />
              <span>Near H-block</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/register/typingtest"
                  className="text-white/60 hover:text-[#06b6d4] transition-colors duration-300"
                >
                  Register Now
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white/60 hover:text-[#06b6d4] transition-colors duration-300"
                >
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white/60 hover:text-[#06b6d4] transition-colors duration-300"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white/60 hover:text-[#06b6d4] transition-colors duration-300"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white/60 hover:text-[#06b6d4] transition-colors duration-300"
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Connect With Us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/vcode.cse/"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/10 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white/80" />
              </a>
            </div>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex px-6 py-2.5 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:opacity-90 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#06b6d4]/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © 2026 VCode Fest. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/50 hover:text-[#06b6d4] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-[#06b6d4] transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-[#06b6d4] transition-colors duration-300"
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
