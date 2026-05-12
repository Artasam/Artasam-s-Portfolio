import { motion } from 'motion/react';
import { FileText, Award, ShieldCheck } from 'lucide-react';

const publications = [
  {
    title: 'Data Analysis using PartyRock',
    venue: 'AWS / PartyRock',
    type: 'Professional Credential',
    abstract: 'Mastered end-to-end data analysis workflows and application building using AWS PartyRock, leveraging generative AI to transform raw data into actionable business intelligence.',
  },
  {
    title: 'AWS AI Practitioner Challenge',
    venue: 'Amazon Web Services',
    type: 'Certification Challenge',
    abstract: 'Successfully completed the AWS AI Practitioner Challenge, demonstrating proficiency in core AI/ML concepts, AWS AI services, and responsible AI implementation on the AWS cloud.',
  },
  {
    title: 'LangChain For LLM Applications',
    venue: 'DeepLearning.ai Certification',
    type: 'Professional Certificate',
    abstract: 'Completed comprehensive certification in building LLM applications using LangChain framework. Covered prompt engineering, vector databases, agents, and production deployment strategies for large language models.',
  },
  {
    title: 'Computer Operator Certificate',
    venue: 'National Institute of Electronics (NIE)',
    type: 'Professional Certificate',
    abstract: 'Certified in computer operations and systems management by the National Institute of Electronics, demonstrating proficiency in computer systems, operations, and technical fundamentals.',
  },
];

export function Research() {
  return (
    <section id="research" className="relative py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-rose-600 uppercase tracking-widest mb-4">Credentials</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white leading-tight">
              verified <span className="text-zinc-600">expertise.</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0d0d12] border border-zinc-800 rounded-3xl p-8 md:p-12 hover:border-rose-600/30 transition-all overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all mb-8">
                  <Award className="w-7 h-7" />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 text-[10px] font-bold text-rose-500 bg-rose-500/5 border border-rose-500/20 rounded-md uppercase tracking-wider">
                    {paper.venue}
                  </span>
                  <span className="px-3 py-1.5 text-[10px] font-bold text-zinc-500 bg-zinc-900 border border-zinc-800 rounded-md uppercase tracking-wider">
                    {paper.type}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-500 transition-colors">
                  {paper.title}
                </h4>
                
                <p className="text-zinc-500 leading-relaxed font-medium">
                  {paper.abstract}
                </p>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="w-32 h-32 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}