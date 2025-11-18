import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { IndustryServicesSection } from './components/IndustryServicesSection';
import { ContactSection } from './components/ContactSection';
import { AdminPage } from './components/AdminPage';

export default function App() {
  // Check if we're on the admin page
  const isAdminPage = window.location.pathname === '/adminrayanqs';

  if (isAdminPage) {
    return <AdminPage />;
  }

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <WorkshopsSection />
        <IndustryServicesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Quantum Slate. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Pioneering aerospace innovation through education and technology
          </p>
        </div>
      </footer>
    </div>
  );
}
