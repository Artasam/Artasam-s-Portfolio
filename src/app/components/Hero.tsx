import { motion } from 'motion/react';
import { ArrowRight, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import photo from "../../assets/photo.jpeg";

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-teal-500/10" />
        {/* Subtle particle dots */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="2"
              fill="#67E8F9"
              opacity="0.2"
              filter="url(#glow)"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between backdrop-blur-xl bg-white/5 rounded-full px-8 py-4 border border-white/10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-black text-white tracking-tight"
            >
              Artasam.Dev
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'About', href: '#about' },
                { label: 'Work', href: '#work' },
                { label: 'Certifications', href: '#research' },
                { label: 'Contact', href: '#contact' },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-white/80 hover:text-cyan-400 transition-colors font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 overflow-hidden"
            >
              {[
                { label: 'About', href: '#about' },
                { label: 'Work', href: '#work' },
                { label: 'Certifications', href: '#research' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-8 py-4 text-white/80 hover:text-cyan-400 hover:bg-white/5 transition-all border-b border-white/10 last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
          >
            Available for new opportunities
          </motion.div>
          
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none">
            Artasam Bin
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Rashid
            </span>
          </h1>
          
          <p className="text-2xl text-white/90 font-medium mb-4">
            AI/ML Engineer | Building scalable ML systems
          </p>
          
          <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
            Skilled in building scalable machine learning systems and deploying end-to-end pipelines using MLOps tools. Experienced in Generative and Agentic AI, leveraging LLMs and LangChain to develop autonomous, reasoning-driven AI solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            
            <motion.a
              href="/Artasam_Bin_Rashid_Resume.pdf"
              download="Artasam_Bin_Rashid_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-full flex items-center gap-2 hover:bg-purple-500/10 transition-all"
            >
              <Download className="w-5 h-5" />
              Download Résumé
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50">
              <img
                src={photo}
                alt="Artasam Bin Rashhid"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}