import React from "react";
import { motion } from "framer-motion";
import Product1 from "../Assets/Product1.jpg";
import Product2 from "../Assets/Product2.jpg";
import Product3 from "../Assets/Product3.jpg";
import Product4 from "../Assets/Product4.jpg";

const Product = () => {
  document.title = "Product | PT.TASM";
  // Animasi untuk judul "Products"
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  // Animasi untuk teks produk
  const productTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  // Animasi untuk gambar produk
  const productImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  // Animasi untuk teks deskripsi
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 pb-24 sm:pb-72 pt-24">
        <motion.h2
          className="text-4xl mb-8 text-center"
          variants={titleVariants} // Animasi untuk judul "Products"
          initial="hidden"
          animate="visible"
        >
          Products
        </motion.h2>

        <h4 className="text-1xl mb-4">TASM Product</h4>
        <ul className="list-disc list-inside text-lg text-gray-800 mb-8">
          <li>Electronics Parts</li>
          <li>Speaker Grille</li>
          <li>Automotive Parts</li>
          <li>Heatsink</li>
          <li>
            Metal stamping and speaker grille finishing by powder coating, wet
            painting, and plating
          </li>
        </ul>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
        >
          {/* Gambar 1 */}
          <motion.div
            className="w-full"
            variants={productImageVariants} // Animasi untuk gambar produk
          >
            <img
              src={Product1}
              alt="Product 1"
              className="rounded-lg shadow-lg h-60 w-72 mx-auto"
            />
            <motion.p
              className="text-lg font-semibold mb-2 text-center"
              variants={productTextVariants} // Animasi untuk teks produk
            >
              Example Product 1
            </motion.p>
          </motion.div>

          {/* Gambar 2 */}
          <motion.div
            className="w-full"
            variants={productImageVariants} // Animasi untuk gambar produk
          >
            <img
              src={Product2}
              alt="Product 2"
              className="rounded-lg shadow-lg h-60 w-72 mx-auto"
            />
            <motion.p
              className="text-lg font-semibold mb-2 text-center"
              variants={productTextVariants} // Animasi untuk teks produk
            >
              Example Product 2
            </motion.p>
          </motion.div>

          {/* Gambar 3 */}
          <motion.div
            className="w-full"
            variants={productImageVariants} // Animasi untuk gambar produk
          >
            <img
              src={Product3}
              alt="Product 3"
              className="rounded-lg shadow-lg h-60 w-72 mx-auto"
            />
            <motion.p
              className="text-lg font-semibold mb-2 text-center"
              variants={productTextVariants} // Animasi untuk teks produk
            >
              Example Product 3
            </motion.p>
          </motion.div>

          {/* Gambar 4 */}
          <motion.div
            className="w-full"
            variants={productImageVariants} // Animasi untuk gambar produk
          >
            <img
              src={Product4}
              alt="Product 4"
              className="rounded-lg shadow-lg h-60 w-72 mx-auto"
            />
            <motion.p
              className="text-lg font-semibold mb-2 text-center"
              variants={productTextVariants} // Animasi untuk teks produk
            >
              Example Product 4
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-gray-800 mt-4"
          variants={descriptionVariants} // Animasi untuk teks deskripsi
        >
          <p className="text-lg">
            Besides producing high-quality products, PT. TASM also manufactures
            Tools & Dies such as complicated progressive and forming dies that
            are supported by a team of highly motivated and capable engineers.
          </p>

          <p className="text-lg mt-4">
            If you have any inquiry related to your problem in getting stamping
            parts, tools, and dies, do not hesitate to contact us. We provide
            the best solution and free consultation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
