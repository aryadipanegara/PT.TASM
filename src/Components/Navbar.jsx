import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || null
  );
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 500);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const handleLinkClick = (link) => {
    localStorage.setItem("activeLink", link);
    setActiveLink(link);
  };

  const link = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "Company",
    },
    {
      id: 3,
      link: "Product",
    },
    {
      id: 4,
      link: "Technology",
    },
    {
      id: 5,
      link: "Contact us",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  };

  return (
    <div>
      <AnimatePresence>
        {pageLoaded && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gray-200 fixed z-50">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-red-500">TASM</h1>
                <p className="text-sm text-red-500">Noguchi Company</p>
              </div>

              <ul className="hidden md:flex space-x-4">
                {link.map(({ id, link }) => (
                  <motion.li
                    key={id}
                    className="cursor-pointer capitalize font-medium hover:scale-105 duration-200"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={`/${link}`}
                      onClick={() => {
                        closeNav();
                        handleLinkClick(link);
                      }}
                      className={`${
                        activeLink === link
                          ? "text-red-500 pb-1 border-b-2 border-red-600 transition duration-300 ease-in-out"
                          : "text-black"
                      }`}
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Mobile navigation toggle button */}
            <div
              onClick={toggleNav}
              className={`cursor-pointer pr-4 text-gray-500 fixed right-4 top-4 md:hidden z-100`}
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
              <div className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-200 to-gray-400 z-50">
                <ul className="text-white">
                  {link.map(({ id, link }) => (
                    <motion.li
                      key={id}
                      className="cursor-pointer py-4 text-center hover:bg-gray-600 capitalize"
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={`/${link}`}
                        onClick={() => {
                          closeNav();
                          handleLinkClick(link);
                        }}
                        className={`${
                          activeLink === link
                            ? "text-red-500 pb-1 border-b-2 border-red-500 transition duration-300 ease-in-out"
                            : "text-gray-500"
                        }`}
                      >
                        {link}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
