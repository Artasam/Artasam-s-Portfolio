import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!projectId || !publicAnonKey) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-1fed1eb5/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-rose-600 uppercase tracking-widest mb-6">Contact</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
              Let's build something <span className="text-zinc-600">extraordinary.</span>
            </h3>
            
            <p className="text-zinc-400 text-lg mb-12 font-medium leading-relaxed max-w-lg">
              Whether you have a specific project in mind or just want to explore how AI can transform your business, I'm here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-[#0d0d12] border border-zinc-800 rounded-2xl group hover:border-rose-600/30 transition-all">
                <div className="w-12 h-12 bg-rose-600/10 border border-rose-600/20 rounded-xl flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:artasambinrashid@gmail.com" className="text-lg font-bold text-white hover:text-rose-500 transition-colors">
                    artasambinrashid@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-[#0d0d12] border border-zinc-800 rounded-2xl group hover:border-rose-600/30 transition-all">
                <div className="w-12 h-12 bg-rose-600/10 border border-rose-600/20 rounded-xl flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Social</p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/artasam-bin-rashid-46258a315/" target="_blank" className="text-white hover:text-rose-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/Artasam" target="_blank" className="text-white hover:text-rose-500 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-rose-600 rounded-3xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-black text-white mb-2">Ready for deployment?</h4>
                <p className="text-rose-100 font-medium">Currently accepting high-impact AI/ML opportunities.</p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                <Send className="w-20 h-20 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0d0d12] border border-zinc-800 rounded-3xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-rose-600 transition-colors placeholder:text-zinc-700"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-rose-600 transition-colors placeholder:text-zinc-700"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-rose-600 transition-colors placeholder:text-zinc-700 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-black uppercase tracking-widest py-5 rounded-xl hover:bg-rose-600 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? 'Sending...' : 'Initialize Contact'}
                <Send className="w-5 h-5" />
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center font-bold text-sm uppercase tracking-widest">✓ Transmission Received Successfully</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-rose-500 text-center font-bold text-sm uppercase tracking-widest">✗ System Error: Please try again</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}