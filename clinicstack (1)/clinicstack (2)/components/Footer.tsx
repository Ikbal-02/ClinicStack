
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigatePrivacy, onNavigateTerms }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Wordmark */}
          <div className="col-span-1">
            <div className="flex items-center mb-6 select-none">
              <span className="text-3xl font-black tracking-tighter text-white font-sans leading-none">
                ClinicStack <span className="text-cyan-400">AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Transforming private clinics into automated growth machines. Stop leaking leads and start scaling predictably.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="group w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Lead Recovery</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Patient Reactivation</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Automated Booking</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" /> clinicstackai@gmail.com</li>
              <li>Global Operations Center</li>
              <li>United Kingdom • UAE • Turkey</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-end items-center gap-4">
          <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <button onClick={onNavigatePrivacy} className="hover:text-white transition-colors">Privacy</button>
            <button onClick={onNavigateTerms} className="hover:text-white transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
