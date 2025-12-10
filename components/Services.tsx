import React from 'react';
import { HeartHandshake, Baby, User, Users, Wand2 } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesList: ServiceItem[] = [
  {
    id: 1,
    title: "Wedding & Engagement",
    description: "From the haldi to the reception, we capture every ritual, smile, and candid moment with cinematic style.",
    icon: HeartHandshake
  },
  {
    id: 2,
    title: "Baby & Kids",
    description: "Soft, playful, and adorable – we create cute themes, props, and setups to freeze your child’s sweetest moments.",
    icon: Baby
  },
  {
    id: 3,
    title: "Portrait & Portfolio",
    description: "Perfect for models, influencers, or professionals wanting stunning portraits for personal branding.",
    icon: User
  },
  {
    id: 4,
    title: "Family & Couple",
    description: "Celebrate love and togetherness with beautifully posed and candid family or couple sessions.",
    icon: Users
  },
  {
    id: 5,
    title: "Editing & Retouching",
    description: "Professional color correction, skin retouching, and creative edits for a polished, studio-quality finish.",
    icon: Wand2
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Professional Services</h2>
          <p className="text-gray-600 mt-4">
            We offer a wide range of photography services tailored to meet your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-gold group"
            >
              <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                <service.icon className="text-brand-gold group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};