'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = isScrolled
    ? '/Venon Digital New Logo (250 x 150 px) (450 x 150 px) (855 x 310 px) (3).png'
    : '/VDS logo.png';
  const iconColor = isScrolled ? 'text-black' : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2">
            <Image src={logoSrc} alt="Venon DS Logo" width={120} height={120} />
          </a>

          {/* Hamburger */}
          <div className={iconColor}>
            <Hamburger onClick={() => setMenuOpen(true)} isScrolled={isScrolled} />
          </div>
        </div>
      </header>

      {/* Slide-in menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
