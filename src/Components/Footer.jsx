import React from "react";
import { FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-2 sm:py-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">PT. TASM</p>
        <p className="text-sm">
          Kawasan Industri Jababeka JI. Jababeka II Block C23, Cikarang -
          Bekasi, Jawa Barat
        </p>
        <p className="text-sm">17530 INDONESIA</p>
        <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 justify-center">
          <div className="flex items-center space-x-2">
            <FiMail size={18} />
            <a href="mailto:inquiry@tasm.co.id" className="text-blue-600">
              inquiry@tasm.co.id
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone size={18} />
            <a href="tel:+62-21-8934187" className="text-blue-600">
              +62-21-8934187
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FiMessageSquare size={18} />
            <a href="sms:+62-21-8934188" className="text-blue-600">
              +62-21-8934188
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
