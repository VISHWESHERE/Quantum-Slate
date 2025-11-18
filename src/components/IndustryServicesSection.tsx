import React from 'react';
import { Zap, Shield, Target, Cog } from 'lucide-react';

export function IndustryServicesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick turnaround for mission-critical UAV solutions',
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Robust designs engineered for demanding environments',
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Custom-built UAVs tailored to your exact specifications',
    },
    {
      icon: Cog,
      title: 'Full Support',
      description: 'End-to-end assistance from design to deployment',
    },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl mb-4 text-white font-bold">
            Industry Services
          </h2>
          <p className="text-3xl text-white font-bold mb-6">
            Custom Precision UAV Solutions
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver bespoke unmanned aerial vehicle solutions designed for professional and industrial applications. From concept to deployment, our team ensures your project meets the highest standards.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 w-fit group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl mb-2 text-white font-bold">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Request a Custom Solution
          </a>
        </div>
      </div>
    </section>
  );
}
