import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES } from "../constants";

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="certificates" className="border-b border-neutral-900 pb-4 text-white flex flex-col items-center">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Certificates
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-screen-lg w-full">
        {CERTIFICATES.map((certificate) => (
          <motion.div 
            key={certificate.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleImageClick(certificate.image)}
            className="cursor-pointer flex justify-center"
          >
            <img
              src={certificate.image}
              width={150}
              height={150}
              alt={certificate.title}
              className="mb-6 rounded object-cover shadow-md"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.img 
              src={selectedImage} 
              alt="Selected Certificate"
              className="w-3/4 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Certificate;
