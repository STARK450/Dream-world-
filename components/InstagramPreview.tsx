import React from 'react';
import { Instagram } from 'lucide-react';

export const InstagramPreview: React.FC = () => {
  // Placeholder images - in a real app, these could be fetched from an API
  // or you can manually update these URLs with your best shots.
  const posts = [
    { id: 1, url: "https://drive.google.com/thumbnail?id=1giwBc-V8MzRKFrkBVdn9gqL7dEP_XHwZ&sz=w2000" },
    { id: 2, url: "https://drive.google.com/thumbnail?id=1SM9Nm1mfYBlzeactuG5sf2ZXeulmxGag&sz=w2000" },
    { id: 3, url: "https://drive.google.com/thumbnail?id=1kyg0sC4duRKoYzDul41LpJQcz6AC9RbR&sz=w2000" },
    { id: 4, url: "https://drive.google.com/thumbnail?id=15GkyrCZDGAuDFR3JoT-KyiNrEDBNSvP4&sz=w2000" },
    { id: 5, url: "https://drive.google.com/thumbnail?id=11SaUqv4FS5IQyKpDbOSGKyCex3-5rVjn&sz=w2000" },
    { id: 6, url: "https://drive.google.com/thumbnail?id=1YZSTV636RhqGTDXOHouF8L3kem3RJmlC&sz=w2000" },
  ];

  const instagramLink = "https://www.instagram.com/dreamworldstudio_kakinada?igsh=MXJpaHlyOGFoaHdmbg==";

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-brand-gold/10 rounded-full text-brand-gold mb-4 animate-bounce">
          <Instagram size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Follow on Instagram</h2>
        <a 
          href={instagramLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 mt-2 text-lg hover:text-brand-gold transition-colors inline-block"
        >
          @dreamworldstudio_kakinada
        </a>
      </div>
      
      {/* Grid Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2">
        {posts.map((post) => (
          <a 
            href={instagramLink}
            target="_blank" 
            rel="noopener noreferrer"
            key={post.id} 
            className="group relative aspect-square overflow-hidden bg-gray-100"
          >
            <img 
              src={post.url} 
              alt="Instagram post" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-gold/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white drop-shadow-md" size={32} />
            </div>
          </a>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href={instagramLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-brand-dark text-white rounded-full font-semibold hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
        >
          <Instagram size={20} />
          Follow @dreamworldstudio_kakinada
        </a>
      </div>
    </section>
  );
};