import { motion } from 'motion/react';
import { Trophy, Target, TrendingUp, Award, Zap, Code2, Brain, GitBranch } from 'lucide-react';
import { useState } from 'react';

const achievements = [
  {
    icon: Trophy,
    category: 'Academic Excellence',
    title: 'Consistent High Performance',
    metric: '3.0+ CGPA',
    description: 'Maintained strong academic standing throughout BSc in Artificial Intelligence program at NUML University, demonstrating deep understanding of ML fundamentals, neural networks, and AI systems.',
    color: 'from-yellow-500 to-orange-500',
    bgGlow: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    icon: Brain,
    category: 'Technical Expertise',
    title: 'Production-Ready AI Systems',
    metric: '4+ Major Projects',
    description: 'Delivered end-to-end AI/ML solutions from research to deployment, including computer vision, NLP, and real-time prediction systems with CI/CD pipelines and MLOps best practices.',
    color: 'from-cyan-500 to-blue-500',
    bgGlow: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Code2,
    category: 'Industry Experience',
    title: 'Professional Development',
    metric: '2 Internships',
    description: 'Gained real-world experience at 10Pearls Pakistan and DAM TECHHUB, working on enterprise-level ML projects, collaborating with cross-functional teams, and following industry-standard development practices.',
    color: 'from-purple-500 to-pink-500',
    bgGlow: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: GitBranch,
    category: 'Technical Stack',
    title: 'Modern AI/ML Ecosystem',
    metric: '15+ Technologies',
    description: 'Expert proficiency in Python, TensorFlow, PyTorch, LangChain, scikit-learn, Hopsworks, VirusTotal API, and full-stack development with modern tools for building scalable AI applications.',
    color: 'from-green-500 to-teal-500',
    bgGlow: 'from-green-500/20 to-teal-500/20',
  },
];

const skills = [
  { name: 'Machine Learning', level: 75, color: 'bg-cyan-500' },
  { name: 'Deep Learning', level: 68, color: 'bg-purple-500' },
  { name: 'Computer Vision', level: 65, color: 'bg-blue-500' },
  { name: 'Natural Language Processing', level: 72, color: 'bg-green-500' },
  { name: 'Python & Frameworks', level: 83, color: 'bg-orange-500' },
  { name: 'MLOps & CI/CD', level: 70, color: 'bg-pink-500' },
];

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Proven track record of delivering impactful AI/ML solutions with measurable results
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGlow} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500`} />
                
                <div className="relative">
                  {/* Icon and Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-bold rounded-full backdrop-blur-xl bg-white/10 text-white/80 border border-white/20">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Title and Metric */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${achievement.color} text-white font-black text-lg mb-4`}>
                    {achievement.metric}
                  </div>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Animated corner accent */}
                <motion.div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-3xl transition-all duration-500`}
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredIndex === index ? Infinity : 0,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Skills Proficiency Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Core Competencies</h3>
              <p className="text-white/60 text-sm">Expertise levels across key AI/ML domains</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`h-full ${skill.color} rounded-full relative`}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">
              Ready to bring cutting-edge AI/ML expertise to your team
            </span>
            <TrendingUp className="w-5 h-5 text-purple-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}