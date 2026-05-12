import { motion } from 'motion/react';

const techs = [
  "Machine Learning",
  "LLM & RAG",
  "Cloud & DevOps",
  "Custom Software",
  "SaaS Platforms",
  "IoT Systems",
  "Next.js",
  "React",
  "Flutter",
  "PyTorch",
  "TensorFlow",
  "Agentic AI",
  "Data Engineering",
  "MLOps"
];

export function TechMarquee() {
  return (
    <div className="relative py-4 sm:py-8 bg-[#09090b] border-y border-zinc-800/50 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-6 sm:gap-12 pr-6 sm:pr-12"
        >
          {/* First set of techs */}
          {techs.map((tech, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-rose-600 shadow-[0_0_8px_rgba(225,29,72,0.6)]" />
              <span className="text-xs sm:text-sm font-bold text-zinc-500 uppercase tracking-widest">{tech}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {techs.map((tech, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-rose-600 shadow-[0_0_8px_rgba(225,29,72,0.6)]" />
              <span className="text-xs sm:text-sm font-bold text-zinc-500 uppercase tracking-widest">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
