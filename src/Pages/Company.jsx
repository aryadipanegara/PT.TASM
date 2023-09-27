import React from "react";
import { motion } from "framer-motion";
import SmallCompanyBuildingImage from "../Assets/Gedung-Perusahaan.png";
import SmallProductionImage from "../Assets/ProductionImage.png";

const Company = () => {
  document.title = "Company | PT.TASM";
  // Animasi untuk gambar perusahaan
  const companyImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  // Animasi untuk gambar produksi
  const productionImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  // Animasi untuk teks deskripsi
  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  // Animasi untuk informasi perusahaan
  const companyInfoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 1.5 },
    },
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 pt-24 pb-96">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="order-2 md:order-1"
            variants={companyImageVariants} // Animasi untuk gambar perusahaan
            initial="hidden"
            animate="visible"
          >
            <img
              src={SmallCompanyBuildingImage}
              alt="Company Building"
              className="rounded-lg shadow-lg mx-auto w-4/5 h-96"
            />
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            variants={productionImageVariants} // Animasi untuk gambar produksi
            initial="hidden"
            animate="visible"
          >
            <img
              src={SmallProductionImage}
              alt="Production"
              className="rounded-lg shadow-lg mx-auto w-4/5 h-96"
            />
          </motion.div>
        </div>

        <motion.div
          className="text-gray-800 mt-4"
          variants={descriptionVariants} // Animasi untuk teks deskripsi
          initial="hidden"
          animate="visible"
        >
          <p className="text-lg mb-4">
            PT. Tekun Asas Sumber Makmur (PT. TASM) is a manufacturing company
            engaged in Metal Stamping, Deep Drawing, Speaker Grille, and Die
            Making. We have been a leader in this industry since 1992.
          </p>

          <p className="text-lg mb-4">
            We prioritize customer satisfaction and product quality. With the
            support of professional personnel and modern production facilities,
            we continue to grow and innovate to provide the best products at
            competitive prices.
          </p>

          <p className="text-lg">
            In 2012, PT TASM merged with Noguchi Ltd. and became part of the
            Noguchi Group. This allows us to expand our global presence and
            provide better service to our customers worldwide.
          </p>
        </motion.div>

        <motion.div
          className="text-4xl font-bold mt-12 mb-8 text-center"
          variants={companyInfoVariants} // Animasi untuk informasi perusahaan
          initial="hidden"
          animate="visible"
        >
          Company Profile
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <motion.ul
            className="list-disc list-inside text-lg text-gray-800"
            variants={companyInfoVariants} // Animasi untuk informasi perusahaan
            initial="hidden"
            animate="visible"
          >
            <li className="mb-3">
              <span className="font-semibold">Company Name:</span> PT. TEKUN
              ASAS SUMBER MAKMUR
            </li>
            <li className="mb-3">
              <span className="font-semibold">Business:</span> Metal Stamping,
              Deep Drawing, Speaker Grille, and Die Making
            </li>
            <li className="mb-3">
              <span className="font-semibold">Office:</span> Kawasan Industri
              Jababeka JI. Jababeka II Blok C23, Cikarang, Bekasi, West Java
              17530, Indonesia
            </li>
            <li className="mb-3">
              <span className="font-semibold">Phone:</span> +62-21-8934187
            </li>
            <li className="mb-3">
              <span className="font-semibold">Fax:</span> +62-21-8934188
            </li>
            <li className="mb-3">
              <span className="font-semibold">Capitalization:</span> USD 680,000
            </li>
            <li className="mb-3">
              <span className="font-semibold">Established:</span> 1992
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Company;
