'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaLink, FaTimes } from 'react-icons/fa';

const portfolioItems = [
  { id: 1, image: '/Imeobi.png', link: 'https://imeobionitsha.org', title: 'Imeobi Onitsha', },
  { id: 2, image: '/Ofala.png', link: 'https://ofala.org/', title: 'Ofala' },
  { id: 3, image: '/nnpg.png', link: 'https://newnigeriaproject.org/', title: 'New Nigeria Project', },
  { id: 4, image: '/Cardio.png', link: 'https://thecardioinitiative.org/', title: 'The Cardio Initiative', },
  { id: 5, image: '/vanrentals.png', link: 'https://vanrentalsng.com/', title: 'Institute for Addiction Treatment', },
  { id: 6, image: '/Golibe.png', link: 'https://thegolibefestival.com/', title: 'Golibe Festival', },
  { id: 7, image: '/Nevieon.mp4', link: 'https://nevieon.com/', title: 'Nevieon', },
  { id: 8, image: '/Kulture.png', link: 'https://kulturemagazine.com.ng/', title: 'Kulture Magazine', },
  { id: 9, image: '/Cibnp.png', link: 'https://cibnp.com/', title: 'California Institute of Behavioral Neurosciences', },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <section id="portfolio" className="w-full bg-white text-black px-6 md:px-10 py-20 relative">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-[#bc1823] text-5xl md:text-7xl font-extrabold font-poppins">PORTFOLIO</h2>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioItems.map(item => (
          <div
            key={item.id}
            className="relative group overflow-hidden border border-[#bc1823] rounded-md cursor-pointer"
            onClick={() => openModal(item)}
          >
            {item.image.endsWith('.mp4') ? (
              <video
                src={item.image}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            ) : (
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <FaLink className="text-[#bc1823] text-3xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-white">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl hover:text-[#bc1823] transition"
          >
            <FaTimes />
          </button>
          <div className="max-w-4xl w-full flex flex-col items-center space-y-6">
            {selectedItem.image.endsWith('.mp4') ? (
              <video
                src={selectedItem.image}
                autoPlay
                muted
                loop
                controls
                className="w-full object-contain rounded"
              />
            ) : (
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={1000}
                height={600}
                className="w-full object-contain rounded"
              />
            )}
            <h3 className="text-2xl md:text-4xl font-bold">{selectedItem.title}</h3>
            <p className="text-white/80 text-center">{selectedItem.description}</p>
            <a
              href={selectedItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bc1823] hover:underline text-lg font-semibold"
            >
              Visit Site
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
