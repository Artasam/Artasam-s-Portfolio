import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'Phishing & DDoS Detection System',
    description: 'Real-time AI-powered system that detects phishing emails and DDoS attacks using VirusTotal, rule-based analysis, and LLM-driven pattern recognition',
    image: 'https://images.unsplash.com/photo-1614064642261-3ccbfafa481b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcGhpc2hpbmclMjBkZXRlY3Rpb258ZW58MXx8fHwxNzcyOTY2MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: [
      { name: 'LLMs', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
      { name: 'VirusTotal', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
      { name: 'Security', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    ],
    impact: 'Real-time detection',
    github: 'https://github.com/Artasam/Phising_and_DDOS_Detection_System', // Replace with actual repo URL
  },

  {
    title: 'Air Quality Index Prediction (Rawalpindi)',
    description: 'ML-based AQI prediction system for Islamabad using real-time API data, CI/CD pipelines, and Hopsworks Feature Store for automated data processing and model retraining',
    image: 'https://images.unsplash.com/photo-1674307130741-bed3d812b680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBxdWFsaXR5JTIwcG9sbHV0aW9uJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NzI5NjYyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: [
      { name: 'Machine Learning', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
      { name: 'CI/CD', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
      { name: 'Hopsworks', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    ],
    impact: 'Real-time API integration',
    github: 'https://github.com/Artasam/Air_Quality_index', // Replace with actual repo URL
  },
  {
    title: 'AI Virtual Try-On System',
    description: 'Deep learning-based virtual try-on system using computer vision to digitally overlay outfits on users, enabling realistic garment fitting and visualization',
    image: 'https://tse1.mm.bing.net/th/id/OIP.6OiivNLFirU-Jon6IJx2FwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
    tags: [
      { name: 'Computer Vision', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
      { name: 'Deep Learning', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
      { name: 'Python', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    ],
    impact: 'Final Year Project' 
  },
  {
    title: 'AI Resume Screening & Matching System',
    description: 'Built ML system to predict resume categories and utilized LangChain-generated embeddings for semantic similarity between resumes and job descriptions',
    image: 'https://images.unsplash.com/photo-1653038417332-6db0ff9d4bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN1bWUlMjBzY3JlZW5pbmclMjByZWNydWl0bWVudCUyMEFJfGVufDF8fHx8MTc3Mjk2NjIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: [
      { name: 'LangChain', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
      { name: 'NLP', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      { name: 'Embeddings', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    ],
    impact: 'Accurate candidate matching',
    github: 'https://github.com/Artasam/Resume_Analyzer', // Replace with actual repo URL
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-32 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A selection of production-grade AI systems that have delivered measurable impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-teal-500/10 transition-all duration-500" />
              
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/30 transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full mb-6">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                  <span className="text-teal-400 text-sm font-semibold">{project.impact}</span>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-xl ${tag.color}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* View On Github Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold group/btn"
                >
                  <Github className="w-4 h-4" />
                  View On Github
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Artasam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full hover:border-cyan-500/50 transition-all text-white font-semibold group"
          >
            <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
            View More on GitHub
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}