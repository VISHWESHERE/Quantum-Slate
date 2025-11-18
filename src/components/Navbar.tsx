import React from 'react';

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl tracking-wider text-white font-bold hover:opacity-80 transition-opacity"
        >
          QuantumSlate
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('workshops')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Workshops
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
