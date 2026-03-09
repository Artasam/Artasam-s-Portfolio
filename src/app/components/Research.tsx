import { motion } from 'motion/react';
import { FileText, ExternalLink, Award } from 'lucide-react';

const publications = [
  {
    title: 'LangChain For LLM Applications',
    venue: 'DeepLearning.ai Certification',
    type: 'Professional Certificate',
    abstract: 'Completed comprehensive certification in building LLM applications using LangChain framework. Covered prompt engineering, vector databases, agents, and production deployment strategies for large language models...',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Computer Operator Certificate',
    venue: 'National Institute of Electronics (NIE)',
    type: 'Professional Certificate',
    abstract: 'Certified in computer operations and systems management by the National Institute of Electronics, demonstrating proficiency in computer systems, operations, and technical fundamentals...',
    color: 'from-blue-500 to-cyan-500',
  },
];

export function Research() {
  return (
    <section id="research" className="relative py-32 bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in AI/ML technologies and computer operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all" />
              
              <div className="relative">
                {/* Paper Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${paper.color} mb-4 shadow-lg`}>
                  <FileText className="w-7 h-7 text-white" />
                </div>

                {/* Venue Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${paper.color} text-white`}>
                    {paper.venue}
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-xl bg-white/10 text-white/80 border border-white/20">
                    {paper.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                  {paper.title}
                </h3>

                {/* Abstract */}
                <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {paper.abstract}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}