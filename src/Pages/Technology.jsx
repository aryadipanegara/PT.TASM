import React from "react";
import { motion } from "framer-motion";

const Technology = () => {
  document.title = "Technology | PT.TASM";
  // Animasi untuk judul "Technology"
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  // Animasi untuk teks konten
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  return (
    <div className="bg-gray-100 pb-64">
      <div className="container mx-auto px-4 py-12 pb-96 pt-24">
        <motion.h2
          className="text-4xl mb-8 text-center"
          variants={titleVariants} // Animasi untuk judul "Technology"
          initial="hidden"
          animate="visible"
        >
          Technology
        </motion.h2>

        <motion.div
          className="text-gray-800 text-lg flex justify-center items-center h-48"
          variants={contentVariants} // Animasi untuk teks konten
          initial="hidden"
          animate="visible"
        >
          <p className="text-center">
            We are a one-stop solution company that can meet all your needs.
            Just provide us with your product drawings, and we will take care of
            the rest. Our services include die design, stamping, finishing
            touches such as wet painting, powder coating, and other metal
            finishing treatments. We are committed to providing the best
            solutions available in the industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
