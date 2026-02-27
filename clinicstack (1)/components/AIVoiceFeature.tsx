import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, TrendingUp, Globe, Mic, Wifi, Battery, Signal } from 'lucide-react';

const AIVoiceFeature: React.FC = () => {
  const [activeLang, setActiveLang] = useState(0);
  const languages = [
    { code: 'EN', flag: '🇺🇸', label: 'English' },
    { code: 'DE', flag: '🇩🇪', label: 'Deutsch' },
    { code: 'TR', flag: '🇹🇷', label: 'Türkçe' },
    { code: 'AR', flag: '🇸🇦', label: 'العربية' },
    { code: 'FR', flag: '🇫🇷', label: 'Français' },
    { code: 'ES', flag: '🇪🇸', label: 'Español' },
    { code: 'RU', flag: '🇷🇺', label: 'Русский' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLang((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center py-8 lg:py-20 relative bg-slate-50 overflow-hidden">
      {/* Ambient Background Glows - Subtle & Premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-4 md:mb-6 font-sans"
          >
            The Voice of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Perfection.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Experience the world's most advanced medical AI receptionist. <br className="hidden md:block" />
            Indistinguishable from a human, available instantly, 24/7.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-12 md:mb-16">
          
          {/* 1. Hero Centerpiece (Span 2 cols, Span 2 rows) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 relative bg-white/80 backdrop-blur-2xl border-2 border-blue-100 rounded-[2.5rem] overflow-hidden group min-h-[500px] md:min-h-auto shadow-[0_0_50px_-12px_rgba(37,99,235,0.25)] ring-1 ring-blue-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-50/30 opacity-100 pointer-events-none" />
            
            <div className="p-6 md:p-12 h-full flex flex-col items-center justify-center relative z-10">
              {/* iPhone Mockup - Responsive Scaling - SHRUNK */}
              <div className="relative w-full max-w-[220px] sm:max-w-[260px] mx-auto lg:max-w-[280px] h-auto aspect-[9/19] bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] border-[6px] border-slate-800 shadow-2xl shadow-slate-400/20 overflow-hidden ring-1 ring-white/10 shrink-0 transform transition-transform duration-700 hover:scale-[1.02]">
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 flex items-center justify-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                    <div className="w-8 h-0.5 rounded-full bg-white/20" />
                </div>

                {/* Status Bar */}
                <div className="absolute top-2.5 px-4 w-full flex justify-between text-[8px] text-white font-medium z-10">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <Signal className="w-2.5 h-2.5" />
                        <Wifi className="w-2.5 h-2.5" />
                        <Battery className="w-2.5 h-2.5" />
                    </div>
                </div>

                {/* Screen Content */}
                <div className="h-full w-full bg-slate-50 relative flex flex-col items-center pt-16 pb-8 px-4 overflow-hidden">
                    
                    {/* Foreground UI */}
                    <div className="relative z-10 flex flex-col items-center w-full h-full">
                        {/* Spacer to maintain layout stability */}
                        <div className="h-12 md:h-16 mb-2 md:mb-4" />
                        
                        {/* Caller Info */}
                        <h3 className="text-slate-900 text-xl md:text-2xl font-bold mb-0.5 tracking-tight">Hope</h3>
                        <p className="text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">Medical AI Assistant</p>
                        
                        {/* Active Waveform */}
                        <div className="w-full flex items-center justify-center gap-1 h-10 md:h-12 mb-6 md:mb-8">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 md:w-1.5 bg-gradient-to-t from-blue-600 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                                    animate={{ height: [8, 32, 8] }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>

                        {/* Call Controls */}
                        <div className="mt-auto grid grid-cols-3 gap-2 md:gap-3 w-full">
                            {[
                                { icon: Mic, label: 'Mute' },
                                { icon: Phone, label: 'Keypad' },
                                { icon: Phone, label: 'Speaker' } 
                            ].map((btn, i) => (
                                <div key={i} className="flex flex-col items-center gap-1.5 group/btn cursor-pointer">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg shadow-slate-200/50 border border-slate-100 flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300">
                                        <btn.icon className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
                                    </div>
                                    <span className="text-[8px] md:text-[9px] text-slate-600 font-bold">{btn.label}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* End Call Button */}
                        <div className="mt-4 md:mt-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-500 flex items-center justify-center shadow-xl shadow-red-500/30 border-4 border-white/20 hover:scale-105 transition-transform cursor-pointer">
                            <Phone className="w-6 h-6 md:w-7 md:h-7 text-white fill-current rotate-[135deg]" />
                        </div>
                    </div>
                </div>
              </div>

              {/* Glassmorphism Text Card - Layered Over Phone */}
              <div className="relative z-20 -mt-12 lg:-mt-20 mx-auto max-w-md bg-white/70 backdrop-blur-md border border-white/60 shadow-2xl rounded-3xl p-6 lg:p-8 text-center ring-1 ring-slate-900/5">
                 <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight drop-shadow-sm">
                   24/7 Live <br/>
                   <span className="text-blue-600">AI Voice Assistant</span>
                 </h3>
                 <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed mb-4">
                   Your digital workforce that never sleeps, never misses a call, and books appointments instantly.
                 </p>
                 
                 {/* Trust Element Moved Here */}
                 <div className="flex flex-col items-center gap-1 pt-4 border-t border-slate-100">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-xs text-amber-500 drop-shadow-sm">⭐</span>
                        ))}
                    </div>
                    <span className="text-[11px] text-slate-600 font-bold mt-1">4.9/5 Patient Satisfaction</span>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Top Right Card (Inbound Triage) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-white border border-blue-100 rounded-[2rem] p-8 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-xl w-full"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Instant Response & Human-Level Empathy</h3>
                <ul className="space-y-3">
                    {['Zero missed calls, 24/7 global coverage.', 'Detects patient emotion/tone and adjusts responses appropriately.', 'Hyper-realistic voice quality—indistinguishable from human staff.'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </motion.div>

          {/* 3. Bottom Right Card (Outbound Closer) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative bg-white border border-blue-100 rounded-[2rem] p-8 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden shadow-xl w-full"
          >
            {/* Background Chart Graphic */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 80L30 60L60 70L100 30L150 10" stroke="#2563eb" strokeWidth="2" />
                    <path d="M0 80L30 60L60 70L100 30L150 10V80H0Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="75" y1="10" x2="75" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2563eb" />
                            <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 relative z-10 shadow-sm">
                <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Conversion-Driven Dialogue Engine</h3>
                <ul className="space-y-3">
                    {['Trained specifically to handle price objections and secure bookings.', 'Native fluency in 7+ languages (auto-detect).', 'Follows up proactively to close pending leads.'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </motion.div>

          {/* 4. Bottom Left Card (Multi-Language) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-3 lg:col-span-3 bg-white border border-blue-100 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-xl w-full"
          >
             <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-3xl shadow-sm">
                    <Globe className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Native-Level Fluency in 7+ Languages</h3>
                    <p className="text-slate-600 text-base font-medium">Automatically detects and adapts to the patient's preferred language.</p>
                </div>
             </div>
             
             {/* Language Ticker - Infinite Auto-Scroll */}
             <div className="w-full overflow-hidden whitespace-nowrap relative bg-slate-50 border-y border-slate-100 py-3 mt-8">
                <div className="flex flex-nowrap animate-ticker">
                    {/* First Set */}
                    {languages.map((lang) => (
                        <div key={`first-${lang.code}`} className="flex items-center gap-2 px-6 flex-shrink-0 text-sm md:text-base text-slate-600 font-medium">
                            <span className="text-xl drop-shadow-sm">{lang.flag}</span>
                            <span>{lang.label}</span>
                        </div>
                    ))}
                    {/* Duplicate Set for Seamless Loop */}
                    {languages.map((lang) => (
                        <div key={`second-${lang.code}`} className="flex items-center gap-2 px-6 flex-shrink-0 text-sm md:text-base text-slate-600 font-medium">
                            <span className="text-xl drop-shadow-sm">{lang.flag}</span>
                            <span>{lang.label}</span>
                        </div>
                    ))}
                </div>
                
                {/* Gradient Masks for Smooth Fade In/Out */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
             </div>
          </motion.div>

        </div>

        {/* 5. CTA Area */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-semibold text-lg tracking-tight shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.5)] transition-all duration-300"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Talk Live with Our AI Assistant Now</span>
            <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/40 transition-all" />
          </motion.button>
          <p className="mt-6 text-slate-500 text-sm font-medium tracking-wide uppercase opacity-80">
            No Setup Required • Instant Demo
          </p>
        </div>

      </div>
    </section>
  );
};

export default AIVoiceFeature;
