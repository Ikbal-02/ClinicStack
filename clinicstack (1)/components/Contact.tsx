import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    clinicName: '',
    email: '',
    phone: '',
    patientVolume: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c2d3465e-3658-42f8-92dc-55b2126e9cbe",
          ...formData,
          subject: "New ClinicStack Audit Request"
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormState('success');
        setFormData({
            firstName: '',
            lastName: '',
            clinicName: '',
            email: '',
            phone: '',
            patientVolume: ''
        });
      } else {
        console.error("Form submission failed", result);
        setFormState('idle'); 
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error", error);
      setFormState('idle');
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden bg-white">
        {/* Ambient background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Text Side */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Ready to stop <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                burning leads?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Book a free 15-minute growth audit. We'll show you exactly how many patients you're losing every month and how to fix it.
            </p>
            
            <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">1</div>
                    <div>
                        <h4 className="font-bold text-slate-900">Audit Your Process</h4>
                        <p className="text-sm text-slate-500">We analyze your current booking flow.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">2</div>
                    <div>
                        <h4 className="font-bold text-slate-900">Identify Leaks</h4>
                        <p className="text-sm text-slate-500">We spot where revenue is slipping through cracks.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">3</div>
                    <div>
                        <h4 className="font-bold text-slate-900">Implementation Plan</h4>
                        <p className="text-sm text-slate-500">You get a roadmap to double your retention.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
             {/* Glow effect behind form */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-600/20 blur-2xl -z-10 rounded-3xl"></div>
             
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 border border-slate-200 p-6 md:p-8 rounded-3xl backdrop-blur-xl shadow-xl"
             >
                {formState === 'success' ? (
                    <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Request Received</h3>
                        <p className="text-slate-600">Our team will contact you shortly.</p>
                        <button onClick={() => setFormState('idle')} className="text-blue-600 hover:text-blue-700 font-medium">Send another inquiry</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">First Name</label>
                                <input 
                                    required 
                                    type="text" 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Last Name</label>
                                <input 
                                    required 
                                    type="text" 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Clinic Name</label>
                            <input 
                                required 
                                type="text" 
                                name="clinicName"
                                value={formData.clinicName}
                                onChange={handleChange}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                            <input 
                                required 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Phone Number</label>
                            <input 
                                required 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Monthly Patient Volume</label>
                            <select 
                                name="patientVolume"
                                value={formData.patientVolume}
                                onChange={handleChange}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            >
                                <option value="" className="bg-white">Select Volume...</option>
                                <option value="0-50" className="bg-white">0 - 50 Patients</option>
                                <option value="50-100" className="bg-white">50 - 100 Patients</option>
                                <option value="100-500" className="bg-white">100 - 500 Patients</option>
                                <option value="500+" className="bg-white">500+ Patients</option>
                            </select>
                        </div>

                        <button 
                            type="submit" 
                            disabled={formState === 'submitting'}
                            className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 ${formState === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {formState === 'submitting' ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : (
                                <>
                                    Book My Audit <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                        
                        <p className="text-center text-xs text-slate-500">
                            We respect your privacy. No spam, ever.
                        </p>
                    </form>
                )}
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;