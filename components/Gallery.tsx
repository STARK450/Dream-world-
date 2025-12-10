import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// ==========================================
// TO CHANGE IMAGES:
// Replace the 'url' values below with your own image URLs.
// You can use links from Unsplash, or import local images.
// ==========================================
const galleryImages = [
  { 
    id: 1, 
    // Using Google Drive Thumbnail API for better reliability in img tags
    // ID: 1VKEswQ5VHRaHAr5K18h04pVEy68NG577
    url: "https://drive.google.com/thumbnail?id=1VKEswQ5VHRaHAr5K18h04pVEy68NG577&sz=w1000", 
    title: "Wedding Bliss" 
  },
  { id: 2, url: "https://drive.google.com/thumbnail?id=1bPs0BC7KEUIHElhmmhSG_VlqW_14p7Fa&sz=w2000", title: "Portrait Mode" },
  { id: 3, url: "https://drive.google.com/thumbnail?id=1WKDIwbAwXt9ybL3OaUiOBvE9kcX117Kb&sz=w2000", title: "Nature & Love" },
  { id: 4, url: "https://drive.google.com/thumbnail?id=15rGM_xWThY9ABw2qcPgisy4C3RtVlR5L&sz=w2000", title: "Baby & Kids" },
  { id: 5, url: "https://drive.google.com/thumbnail?id=1LG98T959_pyoH0BLXf33DMOb1Bl0EWva&sz=w2000", title: "Candid Moments" },
  { id: 6, url: "https://picsum.photos/id/250/600/600", title: "Studio Art" },
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const openLightbox = (img: typeof galleryImages[0]) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
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
              className="relative group overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all"
              onClick={() => openLightbox(img)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-serif font-medium border-b-2 border-brand-gold pb-1 inline-block">
                    {img.title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-2 text-center">Click to view</p>
                </div>
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
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <div 
            className="flex flex-col items-center max-w-6xl w-full max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="max-h-[85vh] max-w-full object-contain rounded shadow-2xl"
            />
            <h3 className="text-white text-2xl font-serif mt-4 font-medium tracking-wide">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};