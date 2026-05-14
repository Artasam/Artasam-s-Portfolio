import { motion } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-6"
    >
      <div className="w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0d0d12]/80 backdrop-blur-md sm:backdrop-blur-xl border border-zinc-800 rounded-2xl sm:rounded-full shadow-2xl shadow-rose-900/10">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
          <Logo />
          <div className="flex flex-col">
            <span className="font-black text-white uppercase tracking-tighter leading-none text-sm sm:text-base group-hover:text-rose-500 transition-colors">Artasam</span>
            <span className="text-[6px] sm:text-[7px] font-black text-rose-600 uppercase tracking-[0.2em] mt-0.5 opacity-80">Engineering</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 sm:gap-8">
          <div className="h-4 w-px bg-zinc-800" />
          <div className="flex items-center gap-4 sm:gap-8">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[9px] sm:text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="#contact"
            className="px-3 sm:px-4 py-2 bg-rose-600 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-zinc-500 hover:text-white transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-20 left-4 right-4 bg-[#0d0d12]/90 backdrop-blur-lg border border-zinc-800 rounded-2xl p-6 lg:hidden z-40 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-base font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors py-3 border-b border-zinc-800/50 last:border-0"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-4 bg-rose-600 text-white text-sm font-black uppercase tracking-widest rounded-xl hover:bg-rose-700 transition-all text-center mt-4"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
