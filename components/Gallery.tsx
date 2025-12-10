import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, url: "https://picsum.photos/id/1011/600/800", title: "Wedding Bliss" },
  { id: 2, url: "https://picsum.photos/id/1027/600/600", title: "Portrait Mode" },
  { id: 3, url: "https://picsum.photos/id/823/600/800", title: "Nature & Love" },
  { id: 4, url: "https://picsum.photos/id/349/600/600", title: "Urban Style" },
  { id: 5, url: "https://picsum.photos/id/64/600/800", title: "Candid Moments" },
  { id: 6, url: "https://picsum.photos/id/250/600/600", title: "Studio Art" },
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const openLightbox = (img: typeof galleryImages[0]) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Work, Your Memories</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Take a look at some of our favorite shots. Each image reflects our style – clean, vibrant, and full of emotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(img)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-serif font-medium border-b-2 border-brand-gold pb-1">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="#contact" className="text-brand-gold font-semibold hover:underline underline-offset-4">
             View Full Portfolio on Instagram &rarr;
           </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={40} />
          </button>
          
          <div 
            className="flex flex-col items-center max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="max-h-[80vh] max-w-full object-contain rounded-sm shadow-2xl"
            />
            <h3 className="text-white text-2xl font-serif mt-6 font-medium tracking-wide">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};