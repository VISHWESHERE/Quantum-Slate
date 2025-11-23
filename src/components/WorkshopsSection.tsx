import React from 'react';
import { Rocket, Plane, Cpu } from 'lucide-react';

export function WorkshopsSection() {
  const workshops = [
    {
      title: 'Drone',
      icon: Cpu,
      description: 'Master the art of drone technology with hands-on building and flying experience',
      gradient: 'from-cyan-500/20 to-blue-600/20',
    },
    {
      title: 'RC Plane',
      icon: Plane,
      description: 'Learn the fundamentals of aerodynamics and RC aircraft construction',
      gradient: 'from-blue-500/20 to-purple-600/20',
    },
    {
      title: 'Rockets',
      icon: Rocket,
      description: 'Explore rocketry principles and build your own model rocket',
      gradient: 'from-purple-500/20 to-pink-600/20',
    },
  ];

  return (
    <section id="workshops" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <h2 className="text-6xl mb-4 text-center text-white font-bold">
          Our Workshops
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Immersive learning experiences designed to ignite your passion for aerospace
        </p>

        {/* Horizontal cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => {
            const Icon = workshop.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                {/* Card background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${workshop.gradient}`}></div>

                {/* Content */}
                <div className="relative p-8 min-h-[320px] flex flex-col">
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 backdrop-blur-xl w-fit">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>

                  <h3 className="text-3xl mb-4 text-white font-bold">
                    {workshop.title}
                  </h3>

                  <p className="text-gray-300 flex-grow">
                    {workshop.description}
                  </p>

                  {/* Progressive blur at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent backdrop-blur-sm"></div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
