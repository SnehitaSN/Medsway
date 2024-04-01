import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white mb-3 font-sans -mt-8 text-lg">
              Company
            </h2>
            <nav className="list-none -mt-1">
              <div className="mb-2.5 font-sans">
                <li>
                  <Link
                    to={"/aboutus"}
                    className="text-gray-400 text-medium  "
                  >
                    About Us
                  </Link>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <Link
                    to={"/features"}
                    className="text-gray-400 text-medium font-sans "
                  >
                    Why Choose Us
                  </Link>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <Link
                    to={"/pricing"}
                    className="text-gray-400 text-medium font-sans "
                  >
                    Pricing
                  </Link>
                </li>
              </div>

              <div className="mb-2.5">
                <li>
                  <Link
                    to={"/faqws"}
                    className="text-gray-400 text-medium font-sans "
                  >
                    FAQ's
                  </Link>
                </li>
              </div>
             
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white mb-3 -mt-8 text-lg font-sans">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium font-sans">
                    {" "}
                    Privacy Policy
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium font-sans">
                    Terms & Conditions
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-400 text-medium  font-sans"
                  >
                    Contact Us
                  </Link>
                </li>
              </div>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white mb-3 -mt-8 text-lg  font-sans">
              Product
            </h2>
            <nav className="list-none mb-10">
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium  font-sans">
                    Project Management
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium  font-sans">
                    Time Tracker
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium  font-sans">
                    Time Schedule
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium  font-sans">
                    Lead Generator
                  </a>
                </li>
              </div>
              <div className="mb-2.5">
                <li>
                  <a href="#" className="text-gray-400 text-medium  font-sans">
                    Remote Collaboration
                  </a>
                </li>
              </div>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  font-medium text-white mb-3 -mt-8 text-4xl  font-sans">
              Medsway
            </h2>
            <p className="text-lg text-white mb-6  font-sans">
              Subscribe to our News Letter
            </p>
            <form>
              <input
                type="name"
                placeholder="Enter Your Name"
                className="bg-gray-600 text-black px-1 py-2 rounded-lg"
              ></input>
              <button className="bg-white px-1 py-2 mr-2 text-black rounded-lg  font-sans ">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="">
          <p className="text-center text-sm mb-2  font-sans text-gray-400">
            {" "}
            &copy; Copyright Medsway 2024 ---www.medsway.in
          </p>

          <hr className="text-gray-400"></hr>
          <div className="flex flex-1 justify-center mt-4 ">
            <div className="flex justify-center -mt-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="mx-2"
              >
                {" "}
                <FaFacebook className="w-6 h-6 " />
              </a>

              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noreferrer"
                className="mx-2"
              >
                {" "}
                <FaTwitter className="w-6 h-6  " />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="mx-2"
              >
                <FaInstagram className="w-6 h-6 " />
              </a>

              <a
                href="https://www.linkedin.com/home?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
                className="mx-2"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>

            {/* <div className="text-center -mt-2 text-gray-400 ">
              <h5 className=" text-sm">
                {" "}
                &copy; Copyright Medsway 2024  ---www.medsway.in
              </h5>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
