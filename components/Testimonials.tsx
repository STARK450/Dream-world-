import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Mike",
    role: "Wedding Clients",
    text: "Dream World Studio made our wedding day unforgettable. Every moment was beautifully captured. Highly recommended!"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Baby Shoot",
    text: "Our baby’s first photoshoot was so smooth and fun. The team was patient and the pictures came out adorable!"
  },
  {
    id: 3,
    name: "John Doe",
    role: "Model",
    text: "Professional, friendly, and creative. They guided me with poses and I loved my portfolio shots. The editing was top notch."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gold/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-xl shadow-sm relative">
              <Quote className="absolute top-6 right-6 text-brand-gold/20" size={40} />
              <p className="text-gray-600 italic mb-6 leading-relaxed relative z-10">
                "{item.text}"
              </p>
              <div className="border-t pt-4 border-gray-100">
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <p className="text-xs text-brand-gold uppercase tracking-wide">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};