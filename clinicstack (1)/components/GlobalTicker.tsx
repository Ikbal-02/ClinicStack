
import React from 'react';
import { motion } from 'framer-motion';

const GlobalTicker: React.FC = () => {
  const tickerText = "UNITED KINGDOM • GERMANY • NETHERLANDS • TURKEY • UAE • SWITZERLAND • ";
  
  return (
    <div className="w-full bg-slate-900/60 border-y border-white/10 py-8 relative overflow-hidden flex items-center shadow-[0_0_50px_rgba(0,0,0,0.5)] my-16">
      {/* Heavy Fade Gradients for Premium Feel */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-8 text-slate-300 font-black text-3xl md:text-5xl tracking-tighter uppercase select-none opacity-75"
        >
          {/* Doubling the text to create a seamless loop with significant visual weight, now in muted silver-grey */}
          <span className="flex items-center gap-8">
            {tickerText}{tickerText}{tickerText}
          </span>
          <span className="flex items-center gap-8">
            {tickerText}{tickerText}{tickerText}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalTicker;
