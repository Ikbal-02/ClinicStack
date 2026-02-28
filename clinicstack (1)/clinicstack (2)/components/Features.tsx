
import React from 'react';
import { MessageCircle, Database, LayoutDashboard, Calendar, Workflow, Sparkles, Bot, Clock, CheckCircle2, UserCheck, Grab, Instagram, Smartphone, Send, Wallet, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const SmartphoneMockup = () => (
  <div className="relative w-[180px] md:w-[240px] aspect-[9/16] rotate-[-2deg] transition-all duration-700 ease-out mx-auto">
    {/* Phone Frame */}
    <div className="absolute inset-0 bg-slate-900 rounded-[2.5rem] p-[2px] shadow-xl shadow-slate-300 ring-1 ring-white/10">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2.5rem]"></div>
      
      {/* Screen Container */}
      <div className="relative w-full h-full bg-slate-50 rounded-[2.35rem] overflow-hidden border-[3px] border-slate-800">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-black rounded-full z-20 border border-white/5"></div>
        
        {/* Screen Background - Light Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>

        {/* Status Bar */}
        <div className="absolute top-2.5 inset-x-5 flex justify-between items-center z-10">
           <span className="text-[8px] font-bold text-slate-600">9:41</span>
           <div className="flex gap-1 items-center">
             <div className="w-2.5 h-1 border border-slate-400 rounded-[1px]"></div>
           </div>
        </div>

        {/* Notification Banner */}
        <div className="absolute top-9 inset-x-2 z-30">
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 border border-slate-200 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-5 h-5 bg-[#25D366] rounded-md flex items-center justify-center shadow-inner">
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.395 0 .01 5.388 0 12.044c0 2.129.559 4.207 1.617 6.039L0 24l6.105-1.602a11.834 11.834 0 005.937 1.604h.005c6.654 0 12.04-5.39 12.045-12.047 0-3.227-1.256-6.261-3.536-8.542" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                   <span className="text-[10px] font-bold text-slate-900 truncate">Clinic Assistant</span>
                </div>
              </div>
            </div>
            <p className="text-[9px] leading-[1.3] text-slate-600">
              Hi! 👋 We missed your call due to high volume. Let us help you right here...
            </p>
          </motion.div>
        </div>
        
        {/* Subtle glowing elements on screen */}
        <div className="absolute bottom-[-10%] left-[-10%] w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
      </div>
    </div>
  </div>
);

const CalendarMockup = () => (
  <div className="relative w-full max-w-[480px] h-[340px] bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200 overflow-hidden shadow-2xl transition-colors mx-auto">
    <div className="bg-slate-50 px-6 py-4 flex justify-between items-center border-b border-slate-200">
      <div className="text-[12px] font-bold text-slate-600 uppercase tracking-widest">July 2025 • Daily View</div>
      <div className="flex gap-2">
         <div className="w-2 h-2 rounded-full bg-slate-300"></div>
         <div className="w-2 h-2 rounded-full bg-slate-300"></div>
      </div>
    </div>
    <div className="p-6 grid grid-cols-[60px_1fr] gap-6 h-full relative">
       <div className="space-y-10 pt-2">
         {['09:00', '10:00', '11:00', '12:00', '13:00'].map(time => (
           <div key={time} className="text-[10px] font-mono text-slate-400">{time}</div>
         ))}
       </div>
       <div className="relative border-l border-slate-200 pl-4 space-y-6 pt-1">
          <div className="bg-slate-100 border-l-2 border-slate-300 rounded-r p-3 mr-4">
             <div className="text-[11px] font-bold text-slate-900">John Smith</div>
             <div className="text-[9px] text-slate-500 italic">Manual Entry • Check-up</div>
          </div>
          <motion.div 
             initial={{ x: -10, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="bg-blue-50 border-l-2 border-blue-500 rounded-r p-3 ml-8 relative shadow-[0_0_30px_rgba(37,99,235,0.1)]"
          >
             <div className="flex justify-between items-start">
               <div>
                  <div className="text-[11px] font-bold text-blue-900 flex items-center gap-1">
                    <Bot className="w-3 h-3" /> Emily Davis
                  </div>
                  <div className="text-[9px] text-blue-600 font-bold uppercase tracking-tighter">AI AUTO-BOOKED</div>
               </div>
               <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
             </div>
          </motion.div>
       </div>
    </div>
  </div>
);

const TimelineMockup = () => (
  <div className="relative w-full max-w-[400px] h-[400px] flex flex-col justify-between py-10 mx-auto">
    <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-slate-200 via-blue-500 to-green-500 shadow-[0_0_15px_rgba(37,99,235,0.2)]"></div>
    <div className="relative flex items-center gap-6">
      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center relative z-10 shadow-lg">
        <MessageCircle className="w-6 h-6 text-slate-400" />
      </div>
      <div>
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Day 1</p>
        <p className="text-sm font-bold text-slate-900">Initial Inquiry</p>
      </div>
    </div>
    <div className="relative flex items-center gap-6 md:translate-x-8">
      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center relative z-10 shadow-lg">
        <Bot className="w-6 h-6 text-blue-600" />
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xl max-w-[200px]">
        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Day 2 • Bot</p>
        <p className="text-xs text-slate-600 italic leading-relaxed">"Are you still interested?"</p>
      </div>
    </div>
    <div className="relative flex items-center gap-6">
      <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
        <CheckCircle2 className="w-7 h-7 text-green-600" />
      </div>
      <div>
        <p className="text-[11px] font-bold text-green-600 uppercase tracking-widest mb-1">Day 3</p>
        <p className="text-sm font-bold text-slate-900">Patient Replied</p>
        <p className="text-xs text-slate-400 mt-1">"Yes, let's book an appointment"</p>
      </div>
    </div>
  </div>
);

const KanbanMockup = () => (
  <div className="relative w-full max-w-[500px] h-[240px] bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200 overflow-hidden shadow-2xl flex flex-col p-6 gap-6 mx-auto">
    <div className="flex justify-between items-center px-2">
      <div className="flex gap-6">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">New Leads</span>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Contacted</span>
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border-b border-blue-500 pb-1">Booked</span>
      </div>
      <Sparkles className="w-4 h-4 text-blue-600" />
    </div>
    <div className="flex-1 grid grid-cols-3 gap-4">
      <div className="space-y-3 border-r border-slate-100 pr-2">
        <div className="bg-slate-50 border border-slate-100 p-2 rounded-xl flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-slate-300 flex-shrink-0" />
          <span className="text-[10px] font-medium text-slate-600">Sarah M.</span>
        </div>
      </div>
      <div className="space-y-3 border-r border-slate-100 px-2">
        <div className="bg-slate-50 border border-slate-100 p-2 rounded-xl flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-slate-300 flex-shrink-0" />
          <span className="text-[10px] font-medium text-slate-600">Hans L.</span>
        </div>
      </div>
      <div className="relative bg-green-50 rounded-xl p-3 border border-green-200">
        <motion.div 
          initial={{ y: 20, x: -60, rotate: -5, opacity: 0 }}
          animate={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
          className="bg-green-100 border border-green-200 p-3 rounded-xl flex items-center gap-3 shadow-xl z-20 relative backdrop-blur-sm"
        >
          <div className="w-6 h-6 rounded-full bg-green-200 flex-shrink-0 flex items-center justify-center">
            <UserCheck className="w-3.5 h-3.5 text-green-700" />
          </div>
          <span className="text-[10px] font-bold text-green-900">Patient Booked</span>
        </motion.div>
      </div>
    </div>
  </div>
);

const InboxMockup = () => (
  <div className="relative w-full max-w-[500px] h-[240px] bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200 overflow-hidden shadow-2xl flex mx-auto">
    <div className="w-[100px] border-r border-slate-200 flex flex-col pt-4 bg-slate-50">
       {[
         { icon: <MessageCircle className="w-3 h-3 text-white" />, color: 'bg-green-500' },
         { icon: <Instagram className="w-3 h-3 text-white" />, color: 'bg-pink-500' },
         { icon: <Smartphone className="w-3 h-3 text-white" />, color: 'bg-blue-500' },
       ].map((chat, i) => (
         <div key={i} className={`flex items-center gap-3 px-4 py-3 ${i === 0 ? 'bg-white' : ''}`}>
           <div className="relative">
             <div className="w-7 h-7 rounded-full bg-slate-200" />
             <div className={`absolute -right-1 -bottom-1 w-4 h-4 ${chat.color} rounded-full flex items-center justify-center ring-2 ring-white`}>
                {chat.icon}
             </div>
           </div>
         </div>
       ))}
    </div>
    <div className="flex-1 flex flex-col">
       <div className="h-10 border-b border-slate-200 flex items-center px-4 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-slate-300" />
            <span className="text-[10px] font-bold text-slate-700">Selin Yilmaz</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
       </div>
       <div className="flex-1 p-4 space-y-4">
          <div className="bg-slate-100 p-2.5 rounded-xl rounded-tl-none text-[10px] text-slate-700 max-w-[80%]">
             I wanted to book an appointment.
          </div>
          <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-xl rounded-tr-none text-[10px] text-blue-900 self-end ml-auto max-w-[80%]">
             Of course, Selin! Is tomorrow at 11:00 AM good for you?
          </div>
       </div>
    </div>
  </div>
);

const CampaignROIMockup = () => (
  <div className="w-full max-w-[440px] bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200 p-8 shadow-2xl relative overflow-hidden mx-auto">
    <div className="flex justify-between items-center mb-10">
       <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Campaign Name</span>
          <span className="text-sm font-bold text-slate-700">6-Month Recall</span>
       </div>
       <div className="flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Live</span>
       </div>
    </div>
    <div className="text-center mb-10">
       <span className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Estimated Revenue</span>
       <span className="text-5xl font-black text-green-600 drop-shadow-[0_0_20px_rgba(74,222,128,0.3)] tracking-tighter">
         €12,450.00
       </span>
    </div>
    <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
       <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
             <Users className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex flex-col">
             <span className="text-[9px] text-slate-500 font-bold uppercase">Reactivated</span>
             <span className="text-sm font-bold text-slate-900">42 Patients</span>
          </div>
       </div>
       <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
             <Wallet className="w-5 h-5 text-slate-500" />
          </div>
          <div className="flex flex-col">
             <span className="text-[9px] text-slate-500 font-bold uppercase">Direct Cost</span>
             <span className="text-sm font-bold text-green-600">€0.00</span>
          </div>
       </div>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden bg-slate-50">
      {/* Vertical Data Stream Connector (Desktop Only) */}
      <div className="hidden lg:block absolute left-1/2 top-48 bottom-48 w-px -translate-x-1/2 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.1)]"></div>
        {/* Animated Data Dots */}
        {[10, 30, 50, 70, 90].map((pos) => (
          <motion.div
            key={pos}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            animate={{ top: ['0%', '100%'] }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              delay: pos / 10, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16 md:mb-32 relative">
            {/* Spotlight behind title */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
            <h2 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-8 tracking-tight">We turn your patient database <br/> into a <span className="text-blue-600">gold mine.</span></h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto font-medium">Our growth features are designed for one thing: keeping patients in your ecosystem.</p>
        </div>

        <div className="space-y-32 md:space-y-64">
          
          {/* Section 1: Lead CRM Pipeline (Moved to TOP per request) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 400px 0px" }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center relative transform-gpu will-change-transform"
          >
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-blue-500/5 blur-[150px] rounded-full scale-150 -z-10"></div>
              <KanbanMockup />
            </div>
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 md:mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <LayoutDashboard className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">Lead CRM Pipeline</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
                Visualize exactly where every potential patient is in the buying journey. Drag, drop, and convert with ease. No more messy spreadsheets or lost sticky notes.
              </p>
              <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 inline-block">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Infrastructure Status: READY v4.0</span>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Missed Call Rescue (Pattern swapped to Text LEFT, Image RIGHT) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 400px 0px" }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative transform-gpu will-change-transform"
          >
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-600 text-[10px] font-bold tracking-[0.2em] uppercase">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(74,222,128,1)]"></div>
                Real-time Rescue Protocol
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Missed Call Rescue</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                62% of calls to clinics go unanswered. Our system instantly triggers a personalized WhatsApp reply, ensuring every potential patient is engaged the moment they reach out.
              </p>
              <div className="flex items-center gap-8 pt-6 border-t border-slate-200">
                <span className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest"><Workflow className="w-5 h-5" /> 100% Automated</span>
                <span className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest"><MessageCircle className="w-5 h-5" /> Instant Engagement</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-green-500/5 blur-[150px] rounded-full scale-150 -z-10 group-hover:bg-green-500/10 transition-all duration-700"></div>
              <SmartphoneMockup />
            </div>
          </motion.div>

          {/* Section 3: Smart Scheduling Engine (Pattern swapped to Image LEFT, Text RIGHT) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 400px 0px" }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative transform-gpu will-change-transform"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/5 blur-[150px] rounded-full scale-150 -z-10"></div>
              <CalendarMockup />
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Smart Scheduling Engine</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Say goodbye to manual coordination. Our AI engine identifies schedule gaps and secures appointments the instant a patient confirms their interest.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <span className="px-5 py-2.5 rounded-xl bg-blue-50 border border-blue-100 text-[11px] font-bold text-blue-600 uppercase tracking-widest">Autonomous Syncing</span>
                <span className="px-5 py-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-[11px] font-bold text-indigo-600 uppercase tracking-widest">Real-Time Confirmation</span>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Automated Follow-Up (Pattern swapped to Text LEFT, Image RIGHT) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 400px 0px" }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative transform-gpu will-change-transform"
          >
            <div className="order-2 lg:order-1 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                <Workflow className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Persistence Without Friction</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Unbooked leads aren't lost leads. Our system maintains a professional follow-up sequence for 14 days, converting hesitant inquiries into loyal patients.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-10 border-t border-slate-200">
                <div>
                  <span className="text-4xl font-black text-slate-900">14 Days</span>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">Active Window</p>
                </div>
                <div>
                  <span className="text-4xl font-black text-blue-600">+28%</span>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">Booking Conversion</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-orange-500/5 blur-[150px] rounded-full scale-150 -z-10"></div>
              <TimelineMockup />
            </div>
          </motion.div>

          {/* Section 5: Database Reactivation (Pattern swapped to Image LEFT, Text RIGHT) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 400px 0px" }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative transform-gpu will-change-transform"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/5 blur-[150px] rounded-full scale-150 -z-10"></div>
              <CampaignROIMockup />
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Database Reactivation</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Stop chasing new ads. We scan your existing patient history to re-engage past clients with hyper-personalized offers that fill seats instantly.
              </p>
              <div className="flex items-center gap-3 text-green-600 font-bold tracking-tighter text-lg pt-4">
                <TrendingUp className="w-6 h-6" /> Zero Acquisition Cost
              </div>
            </div>
          </motion.div>

          {/* Section 6: Unified Inbox (Pattern swapped to Text LEFT, Image RIGHT) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 400px 0px" }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative transform-gpu will-change-transform"
          >
            <div className="order-2 lg:order-1 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Unified Inbox</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Instagram DMs, Facebook messages, WhatsApp, and SMS all in one single conversation view. Respond to every platform without ever leaving your growth dashboard.
              </p>
              <div className="flex -space-x-2 pt-6">
                 <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center ring-4 ring-slate-50">
                    <MessageCircle className="w-5 h-5 text-white" />
                 </div>
                 <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center ring-4 ring-slate-50">
                    <Instagram className="w-5 h-5 text-white" />
                 </div>
                 <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center ring-4 ring-slate-50">
                    <Smartphone className="w-5 h-5 text-white" />
                 </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-purple-500/5 blur-[150px] rounded-full scale-150 -z-10"></div>
              <InboxMockup />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
