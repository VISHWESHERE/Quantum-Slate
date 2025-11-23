import React from 'react';

export function Navbar() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl md:text-2xl tracking-wider text-white font-bold hover:opacity-80 transition-opacity"
        >
          QuantumSlate
        </button>

        {/* Desktop Navigation Links */}
        {!isMobile && (
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
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && isMenuOpen && (
        <div className="backdrop-blur-xl bg-white/5 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors py-3 text-left border-b border-white/10"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('workshops')}
              className="text-gray-300 hover:text-white transition-colors py-3 text-left border-b border-white/10"
            >
              Workshops
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors py-3 text-left border-b border-white/10"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors py-3 text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
