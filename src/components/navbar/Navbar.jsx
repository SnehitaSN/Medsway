import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {
  FaProductHunt,
  FaListAlt,
  FaTags,
  FaInfo,
  FaPhone,
  FaSignInAlt,
} from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex">
      <header className="relative w-full">
        <nav
          aria-label="Top"
          className="px-2 sm:px-4 lg:px-6 fixed top-0 w-full z-10 bg-gray-50 mb-6"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <h1 className="font-medium text-4xl mt-4 text-gray-700 px-2 py-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                  <span className="font-medium text-5xl text-blue-800">M</span>
                  edsway
                </h1>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 p-2 rounded-md focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-8 w-8" />
                ) : (
                  <IoMenu className="h-8 w-8" />
                )}
              </button>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <Link
                to="/product"
                className="text-gray-700 font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              >
                Product
              </Link>
              <Link
                to="/features"
                className="text-gray-700 font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              >
                Pricing
              </Link>
              <Link
                to="/aboutus"
                className="text-gray-700 font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              >
                Contact
              </Link>
              <button className="bg-blue-800 text-white font-medium text-normal py-1 px-6 h-13 border-3 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300">
                <Link to="/signin">Sign in</Link>
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-20">
              <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-30">
                <div className="flex items-center justify-between p-4">
                  <h1 className="font-medium text-4xl mt-4 text-gray-700 px-2 py-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <span className="font-medium text-5xl text-blue-800">
                      M
                    </span>
                    edsway
                  </h1>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-gray-700 p-2 rounded-md focus:outline-none"
                  >
                    <RxCross2 className="h-6 w-6" />
                  </button>
                </div>
                <nav className="flex flex-col space-y-4 p-4">
                  <Link
                    to="/product"
                    className="flex items-center text-gray-700 font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                    onClick={toggleMobileMenu}
                  >
                    <FaProductHunt className="mr-2" /> Product
                  </Link>
                  <Link
                    to="/features"
                    className="flex items-center text-gray-700 font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                    onClick={toggleMobileMenu}
                  >
                    <FaListAlt className="mr-2" /> Features
                  </Link>
                  <Link
                    to="/pricing"
                    className="flex items-center text-gray-700 font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                    onClick={toggleMobileMenu}
                  >
                    <FaTags className="mr-2" /> Pricing
                  </Link>
                  <Link
                    to="/aboutus"
                    className="flex items-center text-gray-700 font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                    onClick={toggleMobileMenu}
                  >
                    <FaInfo className="mr-2" /> About
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center text-gray-700 font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                    onClick={toggleMobileMenu}
                  >
                    <FaPhone className="mr-2" /> Contact
                  </Link>
                  <button className="flex items-center bg-gray-700 text-white font-medium text-normal py-1 px-4 h-13 border-3 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300">
                    <Link to="/signin" onClick={toggleMobileMenu}>
                      <FaSignInAlt className="mr-2" /> Sign in
                    </Link>
                  </button>
                </nav>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
