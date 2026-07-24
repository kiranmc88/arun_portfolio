import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX } from 'react-icons/fi';

import img1 from '../assets/gallery1.jpg.jpeg';
import img2 from '../assets/gallery2.jpg.jpeg';
import img3 from '../assets/gallery3.jpg.jpeg';
import img4 from '../assets/gallery4.jpg.jpeg';
import img5 from '../assets/gallery5.jpg.jpeg';
import img6 from '../assets/gallery6.jpg.jpeg';

const galleryImages = [
  { id: 1, src: img1, title: 'Academic Life', desc: 'Focus and dedication in the classroom.' },
  { id: 2, src: img2, title: 'Scientific Curiosity', desc: 'Exploring theories in chemistry and biology.' },
  { id: 3, src: img3, title: 'Smart Learning', desc: 'Structuring thoughts and problems digitally.' },
  { id: 4, src: img4, title: 'Conceptual Thinking', desc: 'Applying logic and mathematical foundations.' },
  { id: 5, src: img5, title: 'Innovative Mindset', desc: 'Visualizing technology and AI concepts.' },
  { id: 6, src: img6, title: 'Future Horizons', desc: 'Broadening engineering and coding knowledge.' }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-indigo-500 dark:text-indigo-400 uppercase">
            Visual Story
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Moments &amp; Visual Gallery
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedImg(image)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-slate-200 dark:border-white/5 bg-slate-900"
            >
              {/* Image element */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                loading="lazy"
              />

              {/* Hover overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <FiMaximize2 className="absolute top-4 right-4 text-white w-5 h-5 bg-white/10 p-1.5 rounded-full backdrop-blur-sm transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300" />
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                  {image.title}
                </span>
                <h4 className="text-base font-bold text-white mt-1">
                  {image.desc}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
          >
            {/* Close trigger overlay */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedImg(null)} />

            {/* Modal Content container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-w-4xl max-h-[85vh] z-10 flex flex-col items-center bg-[#0d0d15] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/15 transition-all duration-300 z-20 cursor-pointer focus:outline-none"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="w-full h-full overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  className="max-h-[60vh] max-w-full object-contain select-none"
                />
              </div>

              {/* Description bar */}
              <div className="w-full p-6 text-left border-t border-white/5">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  {selectedImg.title}
                </span>
                <p className="text-lg font-semibold text-white mt-1">
                  {selectedImg.desc}
                </p>
                <p className="text-xs text-slate-400 font-light mt-2">
                  M C Arun Kumar Portfolio Gallery
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
