
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="bg-gradient-to-r from-black via-purple-700 to-black text-white shadow-none">
        <div className="container mx-auto flex items-center justify-between p-4 md:p-5">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <div className="flex gap-2 items-center">
              <div className="bg-gradient-to-r from-purple-800 to-black w-10 h-10 md:w-12 md:h-12 rounded-full text-center flex items-center justify-center">
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-white">
                  Q
                </h1>
              </div>
            </div>
            <span className="ml-3 text-xl md:text-2xl font-extrabold text-white">
              Quratulain.Shah
            </span>
          </a>

          {/* Toggle button for small screens on the right side */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none flex items-center justify-center w-8 h-8 md:w-10 md:h-10 ml-auto"
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <FaBars className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </button>

          {/* Navbar links */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full md:static md:flex md:items-center md:gap-8 md:justify-end bg-gradient-to-r from-black via-purple-700 to-black md:bg-transparent`}
          >
            <div className="flex flex-col md:flex-row md:items-center text-base md:gap-8">
              <Link
                href="#home"
                className="text-base md:text-lg font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-gray-300 text-white px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                href="#about"
                className="text-base md:text-lg font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-gray-300 text-white px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="#skills"
                className="text-base md:text-lg font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-gray-300 text-white px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>

              <Link
                href="#project"
                className="text-base md:text-lg font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-gray-300 text-white px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="#contact"
                className="text-base md:text-lg font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-gray-300 text-white px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
