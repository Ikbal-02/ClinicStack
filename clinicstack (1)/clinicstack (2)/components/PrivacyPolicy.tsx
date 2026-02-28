import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements matching App.tsx */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} 
        />
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-12 font-medium"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">Privacy Policy</h1>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="backdrop-blur-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              ClinicStack AI ("we," "us," or "our") provides an AI-powered growth infrastructure and communication platform strictly for private clinics and healthcare practices. This Privacy Policy outlines how we collect, process, and protect data in compliance with the General Data Protection Regulation (GDPR) and the Turkish Personal Data Protection Law (KVKK - Law No. 6698).
            </p>
          </div>

          {/* Section 2 */}
          <div className="backdrop-blur-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider">2. Data Processor vs. Data Controller</h2>
            <p className="text-slate-600 leading-relaxed">
              ClinicStack AI acts solely as a "Data Processor" on behalf of our client clinics ("Data Controllers"). The clinics are responsible for obtaining explicit consent from their patients to process health and contact data before utilizing our AI systems.
            </p>
          </div>

          {/* Section 3 */}
          <div className="backdrop-blur-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider">3. Information We Process</h2>
            <div className="text-slate-600 leading-relaxed space-y-2">
              <p><strong className="text-slate-900">Practice Data:</strong> Clinic names, staff details, and operational workflows.</p>
              <p><strong className="text-slate-900">Patient Interaction Data:</strong> Names, phone numbers, and call/chat transcripts generated during AI communications.</p>
              <p><strong className="text-slate-900">System Data:</strong> IP addresses, usage logs, and analytics for service optimization.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="backdrop-blur-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider">4. No Medical Triage or Advice</h2>
            <p className="text-slate-600 leading-relaxed">
              ClinicStack AI is a technology company. We do not provide medical triage, clinical advice, or diagnosis. Our AI operates strictly within the operational scripts provided by the clinic. All medical responsibility remains solely with the healthcare provider.
            </p>
          </div>

          {/* Section 5 */}
          <div className="backdrop-blur-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider">5. Data Security & Storage</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement bank-grade security measures. All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Data is hosted on secure, ISO 27001-compliant cloud servers. We do not sell, rent, or trade patient data to third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
