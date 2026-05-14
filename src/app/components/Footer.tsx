import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#09090b] pt-16 sm:pt-32 pb-8 sm:pb-12 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-12 md:mb-20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter">Artasam Bin Rashid</h3>
            <p className="text-zinc-500 text-base sm:text-lg font-medium leading-relaxed max-w-md">
              Building the next generation of autonomous intelligence and scalable ML systems.
            </p>

            <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-10">
              <a href="https://github.com/Artasam" target="_blank" className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-900 rounded-lg">
                <Github className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/artasam-bin-rashid-46258a315/" target="_blank" className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-900 rounded-lg">
                <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
              <a href="mailto:artasambinrashid@gmail.com" className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-900 rounded-lg">
                <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <h4 className="text-[8px] sm:text-[10px] font-bold text-rose-600 uppercase tracking-[0.2em] mb-4 sm:mb-6">Navigation</h4>
              <ul className="space-y-2 sm:space-y-4">
                {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-xs sm:text-sm font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2">
              <h4 className="text-[8px] sm:text-[10px] font-bold text-rose-600 uppercase tracking-[0.2em] mb-4 sm:mb-6">Contact</h4>
              <p className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 break-all text-sm sm:text-base">artasambinrashid@gmail.com</p>
              <p className="text-zinc-500 font-medium text-xs sm:text-sm">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-12 border-t border-zinc-900 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 sm:gap-8">
          <p className="text-[8px] sm:text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] text-center sm:text-left">
            © 2026 ARTASAM BIN RASHID. ALL RIGHTS RESERVED.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-[8px] sm:text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-rose-600 transition-colors">
              <ArrowUp className="w-3 sm:w-4 h-3 sm:h-4" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute bottom-0 left-0 text-[12vw] sm:text-[15vw] font-black text-white/[0.02] leading-none select-none pointer-events-none translate-y-1/2">
        ENGINEER
      </div>
    </footer>
  );
}