
import React, { useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingFallback from './components/LoadingFallback';

// Lazy load below-the-fold components
const AIVoiceFeature = lazy(() => import('./components/AIVoiceFeature'));
const Comparison = lazy(() => import('./components/Comparison'));
const Features = lazy(() => import('./components/Features'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions'));

type ViewState = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const mainRef = React.useRef<HTMLElement>(null);

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    setIsScrolled(false);
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 20);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white relative overflow-x-hidden w-full max-w-[100vw]">
      {/* Global Immersive Background Layer */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        {/* Subtle Tech-Grid Surface */}
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} 
        />
        
        {/* Large Strategic Spotlights */}
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[700px] h-[700px] bg-teal-500/5 rounded-full blur-[140px]" />
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col">
        <Navbar onNavigateHome={() => navigateTo('home')} isScrolled={isScrolled} />
        
        <main 
          ref={mainRef}
          className="flex-1 scroll-smooth"
          onScroll={handleScroll}
        >
          {currentView === 'home' && (
            <>
              {/* Hero is at the very top - Synchronous */}
              <Hero />
              
              {/* Lazy loaded below-the-fold content */}
              <Suspense fallback={<LoadingFallback />}>
                {/* AI Voice Feature Section - Flagship Feature */}
                <AIVoiceFeature />
                {/* GlobalTicker moved to Comparison for better snapping */}
                <Comparison />
                <Features />
                <Contact />
              </Suspense>
            </>
          )}
          
          {currentView === 'privacy' && (
            <Suspense fallback={<LoadingFallback />}>
              <PrivacyPolicy onBack={() => navigateTo('home')} />
            </Suspense>
          )}

          {currentView === 'terms' && (
            <Suspense fallback={<LoadingFallback />}>
              <TermsAndConditions onBack={() => navigateTo('home')} />
            </Suspense>
          )}

          <Suspense fallback={null}>
            <Footer 
              onNavigatePrivacy={() => navigateTo('privacy')}
              onNavigateTerms={() => navigateTo('terms')}
            />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default App;
