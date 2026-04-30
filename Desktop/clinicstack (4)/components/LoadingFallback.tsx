import React from 'react';

const LoadingFallback: React.FC = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center bg-white/50 backdrop-blur-sm">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-4 bg-blue-600/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingFallback;
