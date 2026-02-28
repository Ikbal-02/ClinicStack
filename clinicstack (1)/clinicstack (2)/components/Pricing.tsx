import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/mo',
      description: 'Perfect for solo practitioners starting automation.',
      features: ['300 WhatsApp Conversations', 'Basic Appointment Scheduling', 'Patient Database (up to 500)', 'Email Support'],
      cta: 'Start Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$249',
      period: '/mo',
      description: 'Ideal for growing clinics with multiple staff.',
      features: ['Unlimited WhatsApp & SMS', 'Advanced AI Voice Agent', 'Full Analytics Dashboard', 'Payment Gateway Integration', 'Priority 24/7 Support'],
      cta: 'Get Professional',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For hospital chains and large networks.',
      features: ['Custom API Integrations', 'Dedicated Account Manager', 'Multi-Location Support', 'White-labeling Options', 'SLA Guarantees'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-cyan-500/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-xl text-slate-400">No hidden fees. Scale as your clinic grows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 400px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 border backdrop-blur-xl flex flex-col transform-gpu will-change-transform ${
                tier.popular
                  ? 'bg-slate-800/40 border-cyan-500/50 shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] z-10 md:-mt-4 md:mb-4 min-h-[600px]'
                  : 'bg-slate-900/40 border-white/10 hover:border-white/20 min-h-[550px]'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-slate-200'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-400">{tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Check className={`w-5 h-5 flex-shrink-0 ${tier.popular ? 'text-cyan-400' : 'text-slate-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;