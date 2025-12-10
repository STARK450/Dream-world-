import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* TO CHANGE HERO IMAGE: Update the src below */}
        <img
          src="https://drive.google.com/thumbnail?id=19CjWpe-am7TLBq2n56rxq7UUWkEBYp28&sz=w2000"
          alt="Studio Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Dream World Studio
        </h1>
        <p className="text-xl md:text-2xl text-brand-gold font-serif italic mb-6">
          "Capturing Moments, Creating Memories."
        </p>
        <p className="text-gray-200 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Welcome to Dream World Studio, where your special moments are turned into timeless frames. 
          From weddings and baby shoots to portraits and creative edits, we bring your stories to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-brand-gold text-white rounded-full font-semibold text-lg transition-all hover:bg-yellow-600 hover:shadow-lg flex items-center justify-center gap-2"
          >
            Book a Session
            <ChevronRight size={20} />
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg transition-all hover:bg-white hover:text-brand-dark"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
};