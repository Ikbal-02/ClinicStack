import React from 'react';
import { ShieldCheck, Zap, Activity, Clock, Cpu, X, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import GlobalTicker from './GlobalTicker';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden bg-slate-50">
      <GlobalTicker />
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/40 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-slate-500 text-[11px] font-medium tracking-wider uppercase mb-6 backdrop-blur-md shadow-sm"
            >
              <Activity className="w-3.5 h-3.5 text-blue-500" /> 
              <span>System Diagnostics</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6 font-sans"
            >
              The Cost of <span className="text-slate-400">Inaction.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Why modern clinics are switching from manual processes to automated infrastructure.
            </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative items-stretch">
          
          {/* Left Side: Traditional (Legacy) - Matte, Dim, Inactive */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative h-full"
          >
             <div className="relative bg-white border border-slate-200 rounded-[2rem] p-6 md:p-10 h-full backdrop-blur-xl overflow-hidden flex flex-col shadow-sm">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-10 opacity-60 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100">
                   <div>
                      <div className="flex items-center gap-2 text-slate-400 mb-3">
                         <Clock className="w-4 h-4" />
                         <span className="text-[10px] font-bold uppercase tracking-widest">Legacy Mode</span>
                      </div>
                      <h3 className="text-2xl font-medium text-slate-400 tracking-tight">Traditional Clinic</h3>
                   </div>
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                      <X className="w-6 h-6 text-slate-400" />
                   </div>
                </div>

                {/* List Items */}
                <div className="space-y-6 flex-1">
                  {[
                    "Reception misses ~30% of calls",
                    "Leads reply hours (or days) later",
                    "No system for hesitant patients",
                    "No-shows are 'part of business'",
                    "Revenue leaks at every step"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group/item">
                      <div className="mt-1 w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center shrink-0">
                         <X className="w-3 h-3 text-slate-400 group-hover/item:text-slate-500 transition-colors" />
                      </div>
                      <p className="text-slate-500 font-sans text-sm font-medium leading-relaxed group-hover/item:text-slate-600 transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Background Icon */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
                   <Clock className="w-64 h-64 text-slate-900 rotate-12" />
                </div>
             </div>
          </motion.div>

          {/* Right Side: ClinicStack AI (Future) - Bright, Glowing, Premium */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="group relative h-full"
          >
             {/* Glowing Border/Backdrop */}
             <div className="absolute -inset-[1px] bg-gradient-to-b from-blue-500/20 to-indigo-600/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             <div className="relative bg-white border border-blue-200 rounded-[2rem] p-6 md:p-10 h-full backdrop-blur-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(37,99,235,0.15)] flex flex-col">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-10">
                   <div>
                      <div className="flex items-center gap-2 text-blue-600 mb-3">
                         <Zap className="w-4 h-4 fill-current" />
                         <span className="text-[10px] font-bold uppercase tracking-widest shadow-blue-500/50 drop-shadow-[0_0_8px_rgba(37,99,235,0.2)]">Optimized Active</span>
                      </div>
                      <h3 className="text-2xl font-medium text-slate-900 tracking-tight">ClinicStack Engine</h3>
                   </div>
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                      <Cpu className="w-6 h-6 text-blue-600" />
                   </div>
                </div>

                {/* List Items */}
                <div className="space-y-6 flex-1">
                  {[
                    "Missed calls get instant AI reply",
                    "Leads contacted in < 30 seconds",
                    "AI nurtures leads 24/7",
                    "Deposits eliminate no-shows",
                    "Pipeline is 100% automated"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group/item">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.1)]">
                         <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <p className="text-slate-700 font-sans text-sm font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Background Icon */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.05] pointer-events-none">
                   <Zap className="w-64 h-64 text-blue-600 -rotate-12" />
                </div>
                
                {/* Scanline Effect */}
                <motion.div 
                   animate={{ top: ['0%', '100%', '0%'] }}
                   transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                   className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent pointer-events-none z-20"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
