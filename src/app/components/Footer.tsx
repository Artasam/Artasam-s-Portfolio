import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Scroll to Top Button */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Branding */}
          <div>
            <h3 className="text-2xl font-black text-white mb-2">Artasam Bin Rashid</h3>
            <p className="text-white/60 text-sm">
              AI/ML Engineer building intelligent systems that matter.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Work', 'Research', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <p className="text-white/60 text-sm mb-2">artasambinrashid@gmail.com</p>
            <p className="text-white/60 text-sm">Islamabad, Pakistan</p>
            <p className="text-white/60 text-sm">+92 3322357593</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2026 Artasam Bin Rashid. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}