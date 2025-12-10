import React from 'react';
import { Check } from 'lucide-react';
import { PricingPackage } from '../types';

const packages: PricingPackage[] = [
  {
    title: "Mini Session",
    subtitle: "Ideal for quick portraits",
    features: [
      "45-minute session",
      "10 edited photos",
      "Studio-only",
      "Online Gallery"
    ],
    isPopular: false
  },
  {
    title: "Classic Studio",
    subtitle: "Perfect for family & baby",
    features: [
      "1.5-hour session",
      "20 edited photos",
      "2 outfit changes",
      "Studio or Outdoor (nearby)",
      "3 Prints included"
    ],
    isPopular: true
  },
  {
    title: "Wedding Package",
    subtitle: "Full wedding coverage",
    features: [
      "Full-day coverage",
      "Candid + Traditional",
      "Unlimited soft copies",
      "Premium Photo Album",
      "Drone Coverage (Optional)"
    ],
    isPopular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Packages</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Simple & Transparent Pricing</h2>
          <p className="text-gray-400 mt-4">Flexible packages to match your budget and requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl p-8 border ${
                pkg.isPopular 
                  ? 'border-brand-gold bg-gray-800 transform md:-translate-y-4 shadow-2xl shadow-brand-gold/20' 
                  : 'border-gray-700 bg-gray-800/50'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-black text-xs font-bold uppercase px-4 py-1 rounded-full tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 font-serif">{pkg.title}</h3>
              <p className="text-gray-400 text-sm mb-8">{pkg.subtitle}</p>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-brand-gold/20 text-brand-gold">
                      <Check size={14} />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact"
                className={`block text-center w-full py-3 rounded-lg font-semibold transition-colors ${
                  pkg.isPopular 
                    ? 'bg-brand-gold text-black hover:bg-yellow-500' 
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};