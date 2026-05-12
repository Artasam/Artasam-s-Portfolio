import { motion } from 'motion/react';

export function Logo() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center justify-center group"
    >
      <div className="relative w-10 h-10">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-rose-600/20 blur-xl rounded-full group-hover:bg-rose-600/30 transition-colors" />
        
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(225,29,72,0.5)]">
          {/* Main "A" geometric structure */}
          <motion.path
            d="M50 15 L85 85 H70 L50 40 L30 85 H15 L50 15Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-rose-600"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Inner accent paths (Neural/Circuit vibes) */}
          <motion.path
            d="M35 70 H65"
            stroke="currentColor"
            strokeWidth="4"
            className="text-rose-500"
            strokeLinecap="round"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
          
          {/* Data Nodes */}
          {[
            { cx: 50, cy: 15 },
            { cx: 15, cy: 85 },
            { cx: 85, cy: 85 },
            { cx: 50, cy: 40 }
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r="3.5"
              className="fill-white"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ 
                delay: 1.5 + (i * 0.1), 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Pulse connection */}
          <motion.path
            d="M50 15 L50 40"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-rose-400/50"
            strokeDasharray="2 4"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </motion.div>
  );
}
