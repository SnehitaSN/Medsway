import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white mb-3 font-body -mt-8 text-lg">
              Company
            </h2>
            <nav className="list-none -mt-1">
              <div className="mb-2.5">
                <li>
                  <Link to={"/aboutus"} className="text-gray-400 text-medium font-body ">
                    About Us
                  </Link>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <Link to={"/aboutus"} className="text-gray-400 text-medium font-body ">
                    Why Choose Us
                  </Link>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <Link to={"/pricing"} className="text-gray-400 text-medium font-body ">
                    Pricing
                  </Link>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <Link
                    to={"/aboutus"}
                    className="text-gray-400 text-medium font-body "
                  >
                    Testimonial
                  </Link>
                </li>
              </div>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white mb-3 -mt-8 text-lg font-body">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium font-body">
                    {" "}
                    Privacy Policy
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium font-body">
                    Terms & Conditions
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <Link to={"/contact"} className="text-gray-400 text-medium font-body">
                    Contact Us
                  </Link>
                </li>
              </div>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white mb-3 -mt-8 text-lg font-body">
              Product
            </h2>
            <nav className="list-none mb-10">
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium font-body">
                    Project Management
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium font-body">
                    Time Tracker
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium font-body">
                    Time Schedule
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium font-body">
                    Lead Generator
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium font-body">
                    Remote Collaboration
                  </a>
                </li>
              </div>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  font-medium text-white mb-3 -mt-8 text-4xl font-body">
              Medsway
            </h2>
            <p className="text-lg text-white mb-6 font-body">
              Subscribe to our News Letter
            </p>
            <form>
              <input
                type="name"
                placeholder="Enter Your Name"
                className="bg-gray-600 text-black px-1 py-2 rounded-lg"
              ></input>
              <button className="bg-white px-1 py-2 mr-2 text-black rounded-lg font-body ">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="">
          <p className="text-center text-sm mb-2 text-gray-400">
            {" "}
            &copy;Copyright Medsway 2024 ---www.medsway.in
            </p>
            
            <hr className="text-gray-400"></hr>
            <div className="flex flex-1 justify-center mt-4 gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaFacebook className="w-6 h-6 " />
              </a>
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaTwitter className="w-6 h-6  " />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="w-6 h-6 " />
              </a>
              <a
                href="https://www.linkedin.com/home?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
        
          
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
