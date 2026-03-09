import { motion } from 'motion/react';
import { Briefcase, Calendar, TrendingUp } from 'lucide-react';

const experiences = [
  {
    company: '10Pearls Pakistan',
    role: 'Data Science Intern',
    period: 'Dec 2025 – Feb 2026',
    logo: '📊',
    achievements: [
      'Developing Air Quality Index prediction system using real-time API data and machine learning',
      'Implementing CI/CD pipelines for continuous integration, model retraining, and deployment',
      'Building automated data processing workflows for environmental monitoring',
      'Deploying scalable ML models for production use with monitoring and alerts',
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    company: 'DAM TECHHUB',
    role: 'AI/ML Intern',
    period: 'July 2025 – September 2025',
    logo: '🤖',
    achievements: [
      'Built AI-Based Resume Screening and Matching System using advanced NLP techniques',
      'Developed ML system to predict resume categories with high accuracy',
      'Utilized LangChain-generated embeddings for semantic similarity computation',
      'Achieved accurate candidate-job matching through advanced embedding techniques',
    ],
    color: 'from-purple-500 to-pink-500',
  },
];

export function Experience() {
  return (
    <section className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Experience <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Building production AI systems and driving measurable business impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-teal-500 transform -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all" />
                      
                      <div className="relative">
                        {/* Company Logo */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} text-3xl mb-4 shadow-lg`}>
                          {exp.logo}
                        </div>

                        {/* Role and Company */}
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-2 text-purple-400">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/60">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>

                        {/* Achievements */}
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-white/70"
                            >
                              <TrendingUp className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot (Desktop Only) */}
                  <div className="hidden md:block relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative z-10"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} shadow-lg shadow-cyan-500/50`}>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 to-transparent animate-pulse" />
                      </div>
                      {/* Glow ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} blur-xl opacity-50 animate-pulse`} />
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}