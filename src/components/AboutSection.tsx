import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden py-20">
      {/* Gradient background on the left third */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-500/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Text content - one third */}
          <div className="md:col-span-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-5xl mb-6 text-white font-bold">
              About Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Quantum Slate is at the forefront of aerospace education and innovation. We specialize in delivering immersive offline workshops that transform theoretical knowledge into practical expertise.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to empower the next generation of aerospace engineers and enthusiasts through hands-on learning experiences in drone technology, RC aviation, and rocketry.
            </p>
          </div>

          {/* Empty space with subtle gradient effects */}
          <div className="md:col-span-2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="grid grid-cols-2 gap-6 p-8">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-3xl mb-2 text-white font-bold">500+</h3>
                <p className="text-gray-400">Workshop Participants</p>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-3xl mb-2 text-white font-bold">50+</h3>
                <p className="text-gray-400">Successful Events</p>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-3xl mb-2 text-white font-bold">3</h3>
                <p className="text-gray-400">Core Workshops</p>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-3xl mb-2 text-white font-bold">100%</h3>
                <p className="text-gray-400">Hands-On Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
