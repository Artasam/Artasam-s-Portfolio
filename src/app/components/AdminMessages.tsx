import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, User, RefreshCw, Terminal, ShieldCheck } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: string;
}

const SUPABASE_PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-1fed1eb5/contact/messages`,
        {
          headers: {
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
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
    <div className="min-h-screen bg-[#09090b] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-rose-600 uppercase tracking-widest mb-4">Command Center</h2>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
              contact <span className="text-zinc-600">transmissions.</span>
            </h1>
          </motion.div>

          <motion.button
            onClick={fetchMessages}
            whileHover={{ y: -5 }}
            className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-rose-600/30 transition-all text-white font-bold uppercase tracking-widest text-xs flex items-center gap-3"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Sync Messages
          </motion.button>
        </div>

        {loading && messages.length === 0 && (
          <div className="text-center py-32">
            <div className="w-12 h-12 border-2 border-rose-600/20 border-t-rose-600 rounded-full animate-spin mx-auto mb-6" />
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Accessing Database...</p>
          </div>
        )}

        {error && (
          <div className="p-8 bg-rose-600/5 border border-rose-600/20 rounded-3xl text-rose-500 text-center font-bold uppercase tracking-widest text-xs">
            {error}
          </div>
        )}

        {!loading && messages.length === 0 && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32 bg-[#0d0d12] border border-zinc-800 rounded-3xl"
          >
            <Terminal className="w-16 h-16 text-zinc-800 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">No active transmissions</h3>
            <p className="text-zinc-500 font-medium">All systems clear. No messages received yet.</p>
          </motion.div>
        )}

        <div className="space-y-8">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-[#0d0d12] border border-zinc-800 rounded-3xl p-8 md:p-12 hover:border-rose-600/30 transition-all overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-6 mb-10 pb-10 border-b border-zinc-800/50">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all">
                      <User className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-rose-500 transition-colors">{message.name}</h3>
                      <a 
                        href={`mailto:${message.email}`}
                        className="text-zinc-500 hover:text-white transition-colors font-medium underline decoration-zinc-800 underline-offset-4"
                      >
                        {message.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-600 font-mono text-xs uppercase tracking-widest bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800">
                    <Calendar className="w-4 h-4" />
                    {new Date(message.timestamp).toLocaleString()}
                  </div>
                </div>

                <div className="pl-0 md:pl-22">
                  <p className="text-zinc-400 leading-relaxed text-lg font-medium whitespace-pre-wrap">
                    {message.message}
                  </p>
                  
                  <div className="mt-10">
                    <a
                      href={`mailto:${message.email}?subject=Re: Your message from portfolio`}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-xl shadow-rose-600/5"
                    >
                      <Mail className="w-4 h-4" />
                      Initialize Reply
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="w-48 h-48 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}