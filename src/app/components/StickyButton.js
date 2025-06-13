'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaCommentDots } from 'react-icons/fa';
import { HiOutlineX } from 'react-icons/hi';

export default function StickyChat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);

      // Play pop sound
      const audio = new Audio('/notification.mp3'); // Make sure this file exists in public folder
      audio.play().catch(() => {});
    }, 5000); // show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed z-50 right-4 md:right-10 bottom-6 transition-all duration-300 ${
        isVisible ? 'block' : 'hidden'
      } animate-bounce`}
    >
      {/* Floating Chat Icon */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#bc1823] hover:bg-[#a7141e] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold"
        >
          <FaCommentDots size={20} /> Chat With Us
        </button>

        {/* Chat Options */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white text-black rounded-xl shadow-lg w-60 p-4 space-y-4 animate-fadeIn">
            <button
              onClick={() =>
                window.open(
                  'https://wa.me/2348162015339?text=I%20need%20a%20website%2C%20how%20do%20I%20get%20started%3F',
                  '_blank'
                )
              }
              className="flex items-center gap-3 w-full text-left hover:bg-gray-100 p-2 rounded-md font-medium"
            >
              <FaWhatsapp className="text-[#25D366]" /> WhatsApp Message
            </button>
            <button
              onClick={() => window.open('https://calendly.com/venon/15min', '_blank')}
              className="flex items-center gap-3 w-full text-left hover:bg-gray-100 p-2 rounded-md font-medium"
            >
              <FaCalendarAlt className="text-[#bc1823]" /> Book Consultation
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-[#bc1823]"
            >
              <HiOutlineX size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
