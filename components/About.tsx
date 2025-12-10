import React from 'react';
import { Camera, Heart, Sun } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              {/* TO CHANGE ABOUT IMAGE: Update the src below */}
              <img 
                src="https://picsum.photos/id/338/800/1000" 
                alt="Photographer at work" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative pattern */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/20 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-brand-gold/30 z-0"></div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Every Picture Tells a Story</h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              At Dream World Studio, we believe every picture should tell a story. We are a passionate photo studio dedicated to capturing real emotions, vibrant colors, and unforgettable memories.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              With professional lighting, modern equipment, and a creative eye, we specialize in Wedding & Engagement Photography, Baby & Kids Shoots, Portrait & Portfolio Sessions, and more. Whether it’s a big celebration or a simple portrait, we make sure you feel comfortable, confident, and camera-ready.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Heart className="text-brand-gold mb-3" size={32} />
                <h4 className="font-semibold text-gray-900">Passion</h4>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Camera className="text-brand-gold mb-3" size={32} />
                <h4 className="font-semibold text-gray-900">Quality</h4>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Sun className="text-brand-gold mb-3" size={32} />
                <h4 className="font-semibold text-gray-900">Creativity</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};