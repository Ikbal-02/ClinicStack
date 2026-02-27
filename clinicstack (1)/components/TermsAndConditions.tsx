import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsAndConditionsProps {
  onBack: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBack }) => {
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

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">Terms & Conditions</h1>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="backdrop-blur-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using the ClinicStack AI platform, you agree to be bound by these Terms and Conditions. Our services are strictly B2B (Business-to-Business) and intended for registered healthcare practices.
            </p>
          </div>

          {/* Section 2 */}
          <div className="backdrop-blur-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider">2. Service Description</h2>
            <p className="text-slate-600 leading-relaxed">
              ClinicStack AI provides automated lead recovery, patient reactivation, and AI booking services. We ensure high availability but do not guarantee specific financial returns, ROI, or patient conversion rates.
            </p>
          </div>

          {/* Section 3 */}
          <div className="backdrop-blur-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider">3. Client Responsibilities</h2>
            <p className="text-slate-600 leading-relaxed">
              Client clinics represent and warrant that they have obtained all necessary legal consents (under KVKK/GDPR) from their patients to be contacted by our automated AI systems via phone, SMS, or WhatsApp.
            </p>
          </div>

          {/* Section 4 */}
          <div className="backdrop-blur-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider">4. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              In no event shall ClinicStack AI be liable for any indirect, incidental, or consequential damages, lost profits, or medical malpractice claims arising from the use of our software. The clinic assumes full liability for the medical accuracy of the information provided to the AI.
            </p>
          </div>

          {/* Section 5 */}
          <div className="backdrop-blur-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider">5. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the Republic of Turkey. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the Courts of Istanbul.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
