import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

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
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        console.error('Form submission error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Have a project in mind or want to discuss AI/ML opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Your Name
                </label>
                <motion.input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    boxShadow: focusedField === 'name' 
                      ? '0 0 0 3px rgba(103, 232, 249, 0.3)' 
                      : '0 0 0 0px rgba(103, 232, 249, 0)',
                  }}
                  className="w-full px-6 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:border-cyan-500/50 focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <motion.input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    boxShadow: focusedField === 'email' 
                      ? '0 0 0 3px rgba(103, 232, 249, 0.3)' 
                      : '0 0 0 0px rgba(103, 232, 249, 0)',
                  }}
                  className="w-full px-6 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:border-cyan-500/50 focus:outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    boxShadow: focusedField === 'message' 
                      ? '0 0 0 3px rgba(103, 232, 249, 0.3)' 
                      : '0 0 0 0px rgba(103, 232, 249, 0)',
                  }}
                  className="w-full px-6 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:border-cyan-500/50 focus:outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </motion.button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-2xl text-green-400 text-center font-semibold"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-400 text-center font-semibold"
                >
                  ✗ Failed to send message. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right - Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email Me</h3>
                  <p className="text-white/60 text-sm">I'll respond within 24 hours</p>
                </div>
              </div>
              <a 
                href="mailto:artasambinrashid@gmail.com" 
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                artasambinrashid@gmail.com
              </a>
            </motion.div>

            {/* Social Links */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/artasam-bin-rashid-46258a315/', color: 'from-blue-600 to-blue-500' },
                  { icon: Github, name: 'GitHub', href: 'https://github.com/Artasam', color: 'from-gray-700 to-gray-600' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center gap-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-cyan-500/50 transition-all group"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-3xl p-8 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-bold text-lg">Available for Projects</span>
              </div>
              <p className="text-white/70 text-sm">
                Currently accepting select freelance and consulting opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}