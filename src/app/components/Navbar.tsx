import { motion } from 'motion/react';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex items-center gap-8 px-6 py-3 bg-[#0d0d12]/80 backdrop-blur-xl border border-zinc-800 rounded-full shadow-2xl shadow-rose-900/10">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Logo />
          <div className="flex flex-col">
            <span className="font-black text-white uppercase tracking-tighter leading-none text-base group-hover:text-rose-500 transition-colors">Artasam</span>
            <span className="text-[7px] font-black text-rose-600 uppercase tracking-[0.2em] mt-1 opacity-80">Engineering</span>
          </div>
        </div>
        
        <div className="h-4 w-px bg-zinc-800" />
        
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a 
          href="#contact"
          className="hidden md:block px-4 py-2 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
