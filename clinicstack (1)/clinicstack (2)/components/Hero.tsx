
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 relative">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      {/* Background Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Stop Patient Churn Today
          </motion.div>

          {/* Headlines */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Your Clinic is Leaking Leads. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              We Build The Growth Engine.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium"
          >
            You focus on the patients. We focus on the pipeline. <br className="hidden md:block" />
            AI-powered growth infrastructure for modern clinics.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Book Growth Audit <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => { document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 border border-slate-200 text-slate-700 font-semibold text-lg hover:bg-white hover:border-slate-300 transition-all backdrop-blur-md flex items-center justify-center gap-2 group shadow-sm"
            >
              <TrendingUp className="w-5 h-5 text-blue-600" />
              How it works
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
