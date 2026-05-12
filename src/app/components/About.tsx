import { motion } from 'motion/react';
import { Brain, Code2, Database, Sparkles, Cpu, Cloud, GitBranch, Terminal, Layers, Search, ShieldCheck, Zap } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal },
  { name: 'TensorFlow', icon: Sparkles },
  { name: 'PyTorch', icon: Brain },
  { name: 'Scikit-Learn', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'LangChain', icon: GitBranch },
  { name: 'Docker', icon: Layers },
  { name: 'Git', icon: GitBranch },
  { name: 'MLflow', icon: Cloud },
  { name: 'Streamlit', icon: Search },
  { name: 'FastAPI', icon: Zap },
  { name: 'GitHub Actions', icon: Cpu },
];

export function About() {
  return (
    <section id="about" className="relative py-32 bg-[#09090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-widest mb-4 sm:mb-6">About the Engineer</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-10 leading-tight">
              Solving complex problems with <span className="text-zinc-600">intelligence.</span>
            </h3>
            
            <div className="space-y-4 sm:space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed font-medium">
              <p>
                I am an AI/ML Engineer dedicated to building scalable, production-grade intelligence. 
                My expertise lies at the intersection of deep learning, computer vision, and autonomous agentic systems.
              </p>
              
              <p>
                During my tenure at <span className="text-white font-bold underline decoration-rose-600 underline-offset-4">10Pearls Pakistan</span>, I engineered 
                real-time AQI prediction systems and implemented robust MLOps pipelines that automated model lifecycle management.
              </p>
              
              <p>
                At <span className="text-white font-bold underline decoration-rose-600 underline-offset-4">DAM TECHHUB</span>, I pioneered AI-driven HR solutions, 
                leveraging semantic embeddings to transform candidate screening into a precise, automated workflow.
              </p>

              <p>
                As a <span className="text-white font-bold underline decoration-rose-600 underline-offset-4">GenAI Analytics Associate</span> at Tata Group (via Forage), 
                I designed AI-powered frameworks for financial risk assessment, optimizing collections strategies through predictive modeling and automated EDA.
              </p>
              
              <p>
                Current focus: <span className="text-rose-500 font-bold">Generative & Agentic AI</span>. I build reasoning-driven systems using 
                LLMs and LangChain to solve enterprise challenges that traditional software cannot touch.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-8 border-t border-zinc-800 pt-6 sm:pt-10">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">5+</p>
                <p className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Production Systems</p>
              </div>
              <div className="w-px h-10 bg-zinc-800 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">3+</p>
                <p className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Experience Programs</p>
              </div>
              <div className="w-px h-10 bg-zinc-800 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">100%</p>
                <p className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Automated Workflows</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0d0d12] border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
          >
            <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-10 flex items-center gap-3">
              <ShieldCheck className="text-rose-600 w-6 h-6" />
              Technical Stack
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="w-full aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center gap-3 group-hover:border-rose-600/30 group-hover:bg-rose-600/5 transition-all">
                      <Icon className="w-8 h-8 text-zinc-500 group-hover:text-rose-500 transition-colors" />
                      <p className="text-[10px] font-bold text-zinc-500 group-hover:text-white uppercase tracking-widest transition-colors">{skill.name}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-10 pt-10 border-t border-zinc-800">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Advanced Domains</p>
              <div className="flex flex-wrap gap-2">
                {['Generative AI', 'Agentic Systems', 'Computer Vision', 'NLP Architecture', 'MLOps Engineering', 'Vector Databases'].map((domain) => (
                  <span key={domain} className="px-3 py-1.5 text-[10px] font-bold text-white bg-zinc-900 border border-zinc-800 rounded-md uppercase tracking-wider">
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}