import React from 'react';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-orange-500/20 animate-pulse" style={{ animationDuration: '8s' }}></div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/50 to-gray-900"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 w-full mx-auto overflow-x-hidden">
        <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] mb-6 md:mb-8 text-white font-bold">
          <span className="inline-block max-w-full break-words md:whitespace-nowrap md:max-w-none md:break-normal">QuantumSlate</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Pioneering the future of aerospace innovation through hands-on workshops and cutting-edge UAV solutions
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}
