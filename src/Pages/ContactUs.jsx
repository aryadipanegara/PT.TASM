import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  document.title = "Contact Us | PT.TASM";

  // Animasi untuk teks konten
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <div className="bg-gray-100 pb-72">
      <div className="container mx-auto px-4 py-12 pb-72 pt-24">
        <motion.h2
          className="text-4xl mb-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        >
          Contact Us
        </motion.h2>

        <motion.div
          className="text-gray-800 text-lg flex justify-center items-center h-48"
          variants={contentVariants} // Animasi untuk teks konten
          initial="hidden"
          animate="visible"
        >
          <p className="text-center">
            If you have any inquiries or need to reach us, please feel free to
            contact us via email at{" "}
            <a
              href="mailto:inquiry@tasm.co.id"
              className="text-blue-500 hover:underline"
            >
              inquiry@tasm.co.id
            </a>
            . We are here to assist you.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
