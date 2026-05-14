import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import { Download, Terminal as TerminalIcon, Cpu, Layers, Globe, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import photo from "../../assets/photo.jpeg";

function TypewriterLine({ text, color, delay, onComplete }: { text: string; color: string; delay: number; onComplete?: () => void }) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 20);
    return () => clearInterval(interval);
  }, [started, text, onComplete]);

  return <span className={color}>{displayText}{started && displayText.length < text.length && <span className="inline-block w-2 h-4 bg-rose-500 ml-1 translate-y-0.5 animate-pulse" />}</span>;
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 100, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const terminalLines = [
    { text: "stack = ['PyTorch', 'TensorFlow', 'LangChain']", color: "text-rose-400" },
    { text: "ai = init_agentic_ai(model='gpt-4o', tools=True)", color: "text-rose-400" },
    { text: "deploy(target='mlops-cloud', region='global')", color: "text-rose-400" },
    { text: "# Artasam.Dev — shipping scalable AI since 2021", color: "text-zinc-500" },
    { text: "$ status: Ready to build.", color: "text-rose-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Background Mesh/Blobs - Simplified for Mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] sm:w-[50%] h-[70%] sm:h-[50%] bg-rose-900/10 sm:bg-rose-900/20 rounded-full blur-[80px] sm:blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60%] sm:w-[40%] h-[60%] sm:h-[40%] bg-rose-600/5 sm:bg-rose-600/10 rounded-full blur-[80px] sm:blur-[120px]"
        />
      </div>

      {/* Interactive Spotlight - Desktop Only for performance */}
      <div className="hidden lg:block">
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-50"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${cursorX}px ${cursorY}px,
                rgba(225, 29, 72, 0.15),
                transparent 80%
              )
            `,
          }}
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.07]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
        {/* Left Side - Text */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 py-1 bg-rose-600/10 border border-rose-600/20 rounded-full text-rose-500 text-xs font-bold uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            AI/ML Solutions & Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[1]"
          >
            {["Building", "the", "Future", "of", "AI"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`inline-block mr-4 ${word === "Future" ? "text-rose-600" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-10 leading-relaxed max-w-xl"
          >
            Specializing in scalable machine learning systems, agentic AI solutions, and end-to-end MLOps pipelines. We deliver enterprise-grade intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-rose-600 text-white font-bold rounded-lg sm:rounded-xl flex items-center justify-center sm:justify-start gap-2 hover:bg-rose-700 transition-all shadow-xl shadow-rose-600/20 min-h-12"
            >
              Start a Project <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/Artasam_Bin_Rashid_Resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold rounded-lg sm:rounded-xl flex items-center justify-center sm:justify-start gap-2 hover:border-rose-600/50 hover:bg-rose-600/5 hover:text-white transition-all group min-h-12"
            >
              <Download className="w-5 h-5 group-hover:text-rose-500 transition-colors" /> <span className="hidden sm:inline">Download Resume</span><span className="sm:hidden">Resume</span>
            </motion.a>
            <motion.a
              href="/Artasam_CV.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold rounded-lg sm:rounded-xl flex items-center justify-center sm:justify-start gap-2 hover:border-rose-600/50 hover:bg-rose-600/5 hover:text-white transition-all group min-h-12"
            >
              <Download className="w-5 h-5 group-hover:text-rose-500 transition-colors" /> <span className="hidden sm:inline">Download CV</span><span className="sm:hidden">CV</span>
            </motion.a>
          </motion.div>

          {/* Engineering Capabilities Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-zinc-800"
          >
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 sm:mb-6">Core Capabilities</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">
              {[
                { icon: <Layers className="w-5 h-5" />, label: "ML Pipelines" },
                { icon: <Cpu className="w-5 h-5" />, label: "Agentic AI" },
                { icon: <Globe className="w-5 h-5" />, label: "Scalable Systems" },
              ].map((cap, i) => (
                <div key={i} className="flex items-center gap-2 text-zinc-400 group cursor-default">
                  <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-rose-600/10 group-hover:text-rose-500 transition-colors">
                    {cap.icon}
                  </div>
                  <span className="text-sm font-semibold">{cap.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Terminal UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Terminal Window */}
          <div className="w-full bg-[#0d0d12]/80 backdrop-blur-xl rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                <TerminalIcon className="w-3 h-3" />
                <span>artasam.py — python3</span>
              </div>
              <div className="w-12" />
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm leading-relaxed min-h-[300px]">
              {terminalLines.map((line, i) => (
                <div key={i} className="mb-3 flex gap-3">
                  <span className="text-zinc-700">{i + 1}</span>
                  <TypewriterLine
                    text={line.text}
                    color={line.color}
                    delay={1.5 + (i * 1.2)}
                  />
                </div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 8 }}
                className="inline-block w-2 h-5 bg-rose-500 ml-1 translate-y-1"
              />
            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="lg:absolute lg:bottom-12 lg:-right-8 mt-12 lg:mt-0 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl shadow-2xl flex items-center gap-4 w-fit mx-auto lg:mx-0 z-30 lg:rotate-1"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-rose-600">
            <img src={photo} alt="Artasam" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">Artasam Bin Rashid</p>
            <p className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Expert Engineer</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-12 bg-gradient-to-b from-rose-600 to-transparent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}