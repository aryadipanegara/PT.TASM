import React from "react";
import { motion } from "framer-motion";
import Tasm from "../Assets/pt.tasm.png";

const Home = () => {
  document.title = "PT.TASM";
  // Animasi untuk gambar
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  // Animasi untuk judul teks
  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  // Animasi untuk teks deskripsi
  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <motion.img
          src={Tasm}
          alt="Company Building"
          className="w-full max-w-screen-lg mx-auto rounded-lg shadow-lg p-4 md:p-0"
          style={{ maxWidth: "90%" }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.h2
          className="text-2xl mt-4 text-gray-700 font-semibold"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Achieving Lower Costs and Quick Delivery
        </motion.h2>
        <motion.p
          className="text-lg mt-2 text-gray-600"
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
        >
          Through TASM's total production system from tool and die design to
          press processing and coating.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
