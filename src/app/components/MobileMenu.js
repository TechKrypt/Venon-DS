'use client';

import { GiScissors } from 'react-icons/gi';
import { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col md:flex-row transform transition-transform duration-300 bg-white ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } overflow-y-auto md:overflow-hidden`}
    >
      {/* Right Panel – White Nav (first on mobile) */}
      <div className="w-full md:w-1/2 bg-white text-black flex flex-col justify-between p-4 md:p-16 order-1 md:order-2 min-h-screen">
        {/* Close Button */}
        <div className="flex justify-end">
            <button
               onClick={onClose}
               className="text-4xl text-[#bc1823] hover:text-black transition-transform duration-300 transform hover:rotate-12"
               aria-label="Close menu"
               >
                <GiScissors />
            </button>

        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-end gap-4 text-5xl sm:text-3xl md:text-6xl font-extrabold font-poppins mt-6 md:mt-0">
          <a href="#hero" onClick={onClose} className="hover:text-[#bc1823]">Home</a>
          <a href="#about" onClick={onClose} className="hover:text-[#bc1823]">About</a>
          <a href="#services" onClick={onClose} className="hover:text-[#bc1823]">Services</a>
          <a href="#portfolio" onClick={onClose} className="hover:text-[#bc1823]">Portfolio</a>
          <a href="#process" onClick={onClose} className="hover:text-[#bc1823]">The Process</a>
          <a href="#contact" onClick={onClose} className="hover:text-[#bc1823]">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-end gap-6 pt-6">
          <a href="#" className="text-black hover:text-[#bc1823]"><FaFacebookF size={30} /></a>
          <a href="#" className="text-black hover:text-[#bc1823]"><FaInstagram size={30} /></a>
          <a href="#" className="text-black hover:text-[#bc1823]"><FaXTwitter size={30} /></a>
          <a href="#" className="text-black hover:text-[#bc1823]"><FaLinkedinIn size={30} /></a>
        </div>
      </div>

      {/* Left Panel – Black CTA (Hidden on mobile) */}
      <div className="hidden md:flex w-full md:w-1/2 bg-black text-white flex-col justify-center p-4 md:p-16 space-y-4 order-2 md:order-1 min-h-screen">
        <h2 className="text-2xl md:text-7xl font-extrabold font-poppins text-left leading-tight">
          Let’s talk about <br /> your website <br /> goals
        </h2>

        <a
          href="https://calendly.com/venon/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#bc1823] text-white text-lg md:text-2xl px-6 py-4 w-3/5 font-bold hover:bg-[#a7141e] transition text-left text-center rounded"
        >
          Schedule A Consultation
        </a>

        <p className="text-sm text-white/90 text-left font-medium mt-2">
          Want to talk now? <br />
          Call us on <span className="font-semibold">+234 816 201 5339</span>
        </p>
      </div>
    </div>
  );
}
