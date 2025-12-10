import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Wedding',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({
      name: '',
      phone: '',
      email: '',
      type: 'Wedding',
      date: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 shadow-2xl rounded-2xl overflow-hidden bg-white">
          
          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-8 md:p-12">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Your Session</h2>
            <p className="text-gray-600 mb-8">Ready to create beautiful memories? Fill out the form below or message us directly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                    placeholder="123-456-7890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type of Shoot</label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Baby">Baby & Kids</option>
                    <option value="Portrait">Portrait</option>
                    <option value="Family">Family</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-gold text-white font-bold py-4 rounded-lg hover:bg-yellow-600 transition-colors shadow-md"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Info & Map Section */}
          <div className="w-full lg:w-1/2 bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-between">
            <div className="mb-12">
              <h3 className="text-2xl font-serif mb-6">Studio Info</h3>
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <MapPin className="text-brand-gold mt-1" />
                   <div>
                     <h4 className="font-semibold text-lg">Location</h4>
                     <a 
                       href="https://maps.app.goo.gl/3tZPtYHubmjUGBgF9" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-gray-400 hover:text-brand-gold transition-colors block"
                     >
                       Dream World Studio<br/>
                       Kakinada, Andhra Pradesh
                     </a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Phone className="text-brand-gold mt-1" />
                   <div>
                     <h4 className="font-semibold text-lg">Phone</h4>
                     <a href="tel:+919705252424" className="text-gray-400 hover:text-brand-gold transition-colors">
                       +91 97052 52424
                     </a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Mail className="text-brand-gold mt-1" />
                   <div>
                     <h4 className="font-semibold text-lg">Email</h4>
                     <a href="mailto:hello@dreamworldstudio.com" className="text-gray-400 hover:text-brand-gold transition-colors">
                       hello@dreamworldstudio.com
                     </a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Clock className="text-brand-gold mt-1" />
                   <div>
                     <h4 className="font-semibold text-lg">Hours</h4>
                     <p className="text-gray-400">Mon - Sat: 10:00 AM - 9:00 PM<br/>Sun: By Appointment Only</p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden relative border border-gray-700">
               <iframe 
                title="map"
                src="https://maps.google.com/maps?q=Dream%20World%20Studio%20Kakinada&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(1) contrast(1.2) opacity(0.7)'}} 
                allowFullScreen={false}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};