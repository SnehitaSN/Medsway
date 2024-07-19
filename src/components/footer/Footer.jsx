import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* company */}
          <div className="lg:w-1/4 md:w-1/2 w-full -mt-12 px-3 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-white mb-3 font-sans text-lg">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2.5">
                <Link
                  smooth
                  to="/aboutus#top"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  About
                </Link>
              </li>
              <li className="mb-2.5">
                <Link
                  smooth
                  to="/features"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  Why Choose Us
                </Link>
              </li>
              <li className="mb-2.5">
                <Link
                  smooth
                  to="/pricing"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2.5">
                <Link
                  smooth
                  to="/faqws"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  FAQ's
                </Link>
              </li>
            </nav>
          </div>
          {/* resources */}
          <div className="lg:w-1/4 md:w-1/2 w-full -mt-12 px-3 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-white mb-3 text-lg font-sans">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2.5">
                <Link
                  to="/privacy"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2.5">
                <Link
                  to="/terms"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2.5">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </nav>
          </div>
          {/* product */}
          <div className="lg:w-1/4 md:w-1/2 w-full -mt-12 px-3 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-white mb-3 text-lg font-sans">
              Product
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2.5">
                <Link
                  to="/product"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  Revenue Management
                </Link>
              </li>
              <li className="mb-2.5">
                <Link
                  to="/product"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  Cashflow Management
                </Link>
              </li>
              <li className="mb-2.5">
                <Link
                  to="/product"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  Inventory Management
                </Link>
              </li>
              <li className="mb-2.5">
                <Link
                  to="/product"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  Billing & CRM
                </Link>
              </li>
              <li className="mb-2.5">
                <Link
                  to="/product"
                  onClick={scrollToTop}
                  className="text-gray-400 text-medium hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
            </nav>
          </div>
          {/* subscription */}
          <div className="lg:w-1/4 md:w-1/2 w-full  -mt-12 px-3">
            <h2 className="title-font font-medium text-white mb-3 text-4xl font-sans">
              Medsway
            </h2>
            <p className="text-lg text-white mb-6 font-sans">
              Subscribe to our News Letter
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="name"
                placeholder="Enter Your Name"
                className="bg-gray-600 text-black px-3 py-2 rounded-lg mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
              />
              <button className="bg-white px-3 py-2 text-black rounded-lg font-sans w-full sm:w-auto">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* copyright */}
        <div className="mt-8">
          <p className="text-center text-sm text-gray-400 font-sans mb-2">
            &copy; Copyright Medsway 2024 --- www.medsway.in
          </p>
          <hr className="text-gray-400" />
          <div className="flex justify-center mt-4">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/home?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
