import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, User, RefreshCw } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: string;
}

export function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-1fed1eb5/contact/messages`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      const data = await response.json();
      setMessages(data.messages || []);
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#050505] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
              Contact <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Messages</span>
            </h1>
            <p className="text-white/70">View all messages from your portfolio contact form</p>
          </div>

          <motion.button
            onClick={fetchMessages}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all text-white font-semibold flex items-center gap-2"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </motion.button>
        </div>

        {/* Loading State */}
        {loading && messages.length === 0 && (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white/70">Loading messages...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-6 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-400 text-center font-semibold">
            {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && messages.length === 0 && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl"
          >
            <Mail className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No messages yet</h3>
            <p className="text-white/60">Messages from your contact form will appear here</p>
          </motion.div>
        )}

        {/* Messages List */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all"
            >
              {/* Message Header */}
              <div className="flex items-start justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{message.name}</h3>
                    <a 
                      href={`mailto:${message.email}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      {message.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Calendar className="w-4 h-4" />
                  {new Date(message.timestamp).toLocaleString()}
                </div>
              </div>

              {/* Message Content */}
              <div className="pl-16">
                <p className="text-white/80 leading-relaxed whitespace-pre-wrap">
                  {message.message}
                </p>
              </div>

              {/* Action Button */}
              <div className="pl-16 mt-6">
                <a
                  href={`mailto:${message.email}?subject=Re: Your message from portfolio`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Reply via Email
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
