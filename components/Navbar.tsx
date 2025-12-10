import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Instagram } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center gap-8 md:gap-12">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group shrink-0">
          <div className={`p-2 rounded-full border-2 transition-colors ${scrolled ? 'border-brand-gold text-brand-gold' : 'border-white text-white'}`}>
            <Camera size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-bold tracking-wider ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
              DREAM WORLD
            </span>
            <span className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>
              Studio
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-brand-gold ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Social Icon */}
          <a 
            href="https://www.instagram.com/dreamworldstudio_kakinada?igsh=MXJpaHlyOGFoaHdmbg==" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-colors hover:scale-110 transform duration-200 ${scrolled ? 'text-brand-dark hover:text-brand-gold' : 'text-white hover:text-brand-gold'}`}
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          <a 
            href="#contact"
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105 ${scrolled ? 'bg-brand-gold text-white' : 'bg-white text-brand-dark'}`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className={scrolled ? 'text-brand-dark' : 'text-white'} />
          ) : (
            <Menu size={28} className={scrolled ? 'text-brand-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 text-lg font-medium hover:text-brand-gold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
             href="#contact"
             className="px-6 py-2 bg-brand-gold text-white rounded-full font-semibold"
             onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};