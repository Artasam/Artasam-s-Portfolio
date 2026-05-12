import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Phishing & DDoS Detection System',
    category: 'Security • AI • Enterprise',
    year: '2024-25',
    description: 'Real-time AI-powered system that detects phishing emails and DDoS attacks using VirusTotal, rule-based analysis, and LLM-driven pattern recognition.',
    tags: ['LLMs', 'VirusTotal', 'Security', 'FastAPI'],
    github: 'https://github.com/Artasam/Phising_and_DDOS_Detection_System',
    impact: '98.5% Detection Accuracy',
  },
  {
    title: 'Rawalpindi Air Quality Index Prediction',
    category: 'MLOps • IoT • Data Science',
    year: '2023-24',
    description: 'ML-based AQI prediction system using real-time API data, Hopsworks Feature Store, and automated CI/CD pipelines for model retraining.',
    tags: ['Python', 'Hopsworks', 'CI/CD', 'GitHub Actions'],
    github: 'https://github.com/Artasam/Air_Quality_index',
    impact: 'Real-time Deployment',
  },
  {
    title: 'AI Virtual Try-On System',
    category: 'Computer Vision • Deep Learning',
    year: '2023',
    description: 'Deep learning-based virtual try-on system using computer vision to digitally overlay outfits on users with realistic garment fitting.',
    tags: ['OpenCV', 'PyTorch', 'React', 'FastAPI'],
    github: 'https://github.com/Artasam/Outfit-Aura',
    impact: 'Final Year Excellence',
  },
  {
    title: 'AI Resume Screening & Matching',
    category: 'NLP • Enterprise • HR Tech',
    year: '2024',
    description: 'Built ML system to predict resume categories and utilized LangChain-generated embeddings for semantic similarity between resumes and job descriptions.',
    tags: ['LangChain', 'NLP', 'Embeddings', 'Streamlit'],
    github: 'https://github.com/Artasam/Resume_Analyzer',
    impact: 'Automated HR Pipeline',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-rose-600 uppercase tracking-widest mb-4">Selected Work</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Engineering solutions that <span className="text-zinc-600">scale.</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-500 font-medium max-w-xs md:text-right">
              A sample of 10+ projects across AI, MLOps, and scalable web architectures.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0d0d12] border border-zinc-800 rounded-3xl p-8 md:p-10 hover:border-rose-600/50 transition-all flex flex-col"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-zinc-600">{project.year}</span>
              </div>

              {/* Title */}
              <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-rose-500 transition-colors leading-tight">
                {project.title}
              </h4>

              {/* Description */}
              <p className="text-zinc-400 mb-8 leading-relaxed text-lg font-medium">
                {project.description}
              </p>

              {/* Impact Tag */}
              <div className="mb-8 flex items-center gap-2 text-rose-500 font-mono text-sm">
                <TerminalIcon className="w-4 h-4" />
                <span className="font-bold">_ {project.impact}</span>
              </div>

              {/* Tech Stack */}
              <div className="mt-auto flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-md uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-rose-500 transition-colors group/link"
                >
                  <Code2 className="w-4 h-4" />
                  View Source Code
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/Artasam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-rose-600 hover:text-white transition-all shadow-2xl shadow-rose-600/10"
          >
            Explore Full Portfolio <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}