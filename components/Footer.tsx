import React from 'react';
import { Instagram, Facebook, Youtube, Camera } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col items-start">
             <div className="flex items-center gap-2 mb-4">
              <div className="p-1 rounded-full border border-brand-gold text-brand-gold">
                <Camera size={20} />
              </div>
              <span className="text-xl font-bold tracking-wider text-white">
                DREAM WORLD
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Capturing moments, creating memories. We are dedicated to turning your special days into timeless art.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a href="#pricing" className="hover:text-brand-gold transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Newsletter (Simplified) */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and updates.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-none rounded px-4 py-3 text-sm focus:ring-1 focus:ring-brand-gold outline-none"
              />
              <button className="bg-brand-gold text-gray-900 font-bold py-2 rounded hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dream World Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};