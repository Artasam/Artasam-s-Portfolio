import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#09090b] pt-32 pb-12 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Artasam Bin Rashid</h3>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-md">
              Building the next generation of autonomous intelligence and scalable ML systems.
            </p>
            
            <div className="flex gap-6 mt-10">
              <a href="https://github.com/Artasam" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/artasam-bin-rashid-46258a315/" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:artasambinrashid@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-bold text-rose-600 uppercase tracking-[0.2em] mb-6">Navigation</h4>
              <ul className="space-y-4">
                {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-sm font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2">
              <h4 className="text-[10px] font-bold text-rose-600 uppercase tracking-[0.2em] mb-6">Contact</h4>
              <p className="text-xl font-bold text-white mb-2">artasambinrashid@gmail.com</p>
              <p className="text-zinc-500 font-medium">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">
            © 2026 ARTASAM BIN RASHID. ALL RIGHTS RESERVED.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="group flex items-center gap-3 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-rose-600 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute bottom-0 left-0 text-[15vw] font-black text-white/[0.02] leading-none select-none pointer-events-none translate-y-1/2">
        ENGINEER
      </div>
    </footer>
  );
}