import { motion } from 'motion/react';
import { Brain, Code2, Database, Sparkles, Cpu, Cloud, GitBranch, Terminal } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal, color: 'from-blue-500 to-yellow-500' },
  { name: 'TensorFlow', icon: Sparkles, color: 'from-orange-400 to-yellow-500' },
  { name: 'PyTorch', icon: Brain, color: 'from-orange-500 to-red-500' },
  { name: 'Scikit-Learn', icon: Code2, color: 'from-purple-500 to-pink-500' },
  { name: 'SQL', icon: Database, color: 'from-blue-600 to-blue-400' },
  { name: 'LangChain', icon: GitBranch, color: 'from-green-500 to-emerald-500' },
  { name: 'Docker', icon: Database, color: 'from-blue-500 to-indigo-500' },
  { name: 'Git', icon: GitBranch, color: 'from-orange-500 to-red-500' },
  { name: 'MLflow', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
  { name: 'Streamlit', icon: Sparkles, color: 'from-red-500 to-pink-500' },
  { name: 'FlaskAPI', icon: Code2, color: 'from-green-500 to-teal-500' },
  { name: 'GitHub Actions', icon: Cpu, color: 'from-gray-600 to-gray-400' },
];

export function About() {
  return (
    <section id="about" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              AI/ML Engineer with expertise in machine learning, deep learning, computer vision, and natural language processing. 
              Experienced in developing data-driven solutions and deploying production-ready AI systems.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Previously worked as a <span className="text-cyan-400 font-semibold">Data Science Intern at 10Pearls Pakistan</span>, where I developed an 
              Air Quality Index prediction system using real-time API data and implemented <span className="text-purple-400 font-semibold">CI/CD pipelines</span> for 
              automated model retraining and continuous integration.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Earlier, as an <span className="text-teal-400 font-semibold">AI/ML Intern at DAM TECHHUB</span>, I built an AI-powered Resume Screening System 
              that leveraged LangChain-generated embeddings to compute semantic similarity between resumes and job descriptions for more accurate candidate-job matching.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              My work focuses on <span className="text-purple-400 font-semibold">Generative AI</span> and <span className="text-cyan-400 font-semibold">Agentic AI</span>, 
              utilizing LLMs and LangChain to build intelligent, autonomous systems capable of reasoning and decision-making. I have developed multiple AI solutions 
              including an AI Virtual Try-On System, Phishing Detection System, and real-time Air Quality prediction models.
            </p>
          </motion.div>

          {/* Right - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technical Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all cursor-pointer"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all" />
                    
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-semibold text-sm">{skill.name}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Additional Skills Section */}
            <div className="mt-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <h4 className="text-white font-bold mb-4">Domain Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Generative AI', 'LLMs', 'Prompt Engineering', 'Model Deployment', 'Data Preprocessing'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400">
                    {skill}
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