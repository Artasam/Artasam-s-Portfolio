import { motion } from 'motion/react';
import { Trophy, Target, TrendingUp, Award, Zap, Code2, Brain, GitBranch, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const achievements = [
  {
    icon: Trophy,
    category: 'Academic',
    title: 'BSc Artificial Intelligence',
    metric: '3.0+ CGPA',
    description: 'Specialized in Neural Networks, Agentic AI, and Scalable Systems at NUML University.',
  },
  {
    icon: Brain,
    category: 'Innovation',
    title: 'Agentic AI Architect',
    metric: '4+ Major Systems',
    description: 'Engineered production-grade AI solutions from computer vision to autonomous reasoning agents.',
  },
  {
    icon: Briefcase,
    category: 'Experience',
    title: 'Industry Specialist',
    metric: '2+ Placements',
    description: 'Delivered measurable impact at top-tier firms like 10Pearls and DAM TECHHUB.',
  },
  {
    icon: Code2,
    category: 'Tech Stack',
    title: 'Full-Stack ML Engineer',
    metric: '15+ Tools',
    description: 'Expertise in the modern AI ecosystem: PyTorch, LangChain, MLOps, and Cloud Infrastructure.',
  },
];

const skills = [
  { name: 'Machine Learning', level: 90 },
  { name: 'Agentic AI (LangChain)', level: 85 },
  { name: 'Computer Vision', level: 80 },
  { name: 'Natural Language Processing', level: 88 },
  { name: 'MLOps & CI/CD', level: 82 },
  { name: 'Scalable Architectures', level: 78 },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-20 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-widest mb-3 sm:mb-4">Engineering Excellence</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              measurable <span className="text-zinc-600">impact.</span>
            </h3>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#0d0d12] border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-rose-600/30 transition-all"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-zinc-900 rounded-lg sm:rounded-xl flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all mb-4 sm:mb-6">
                  <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                
                <span className="text-[8px] sm:text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-2 block">
                  {achievement.category}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-rose-500 transition-colors">
                  {achievement.title}
                </h4>
                <div className="text-xl sm:text-2xl font-black text-zinc-600 mb-3 sm:mb-4 group-hover:text-white transition-colors">
                  {achievement.metric}
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
              <Zap className="text-rose-600 w-5 sm:w-6 h-5 sm:h-6" />
              Core Competencies
            </h4>
            <p className="text-zinc-500 text-base sm:text-lg mb-8 sm:mb-10 font-medium max-w-lg">
              Specialized expertise in building the next generation of reasoning-driven AI systems and scalable ML infrastructures.
            </p>
            
            <div className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 rounded-xl sm:rounded-2xl w-fit">
              <ShieldCheck className="text-rose-600 w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-xs sm:text-sm font-bold text-zinc-300 uppercase tracking-widest">Enterprise Ready</span>
            </div>
          </motion.div>

          <div className="space-y-6 sm:space-y-8 bg-[#0d0d12] border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-end gap-4">
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest">{skill.name}</span>
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-500">{skill.level}%</span>
                </div>
                <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-rose-600"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Briefcase({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}