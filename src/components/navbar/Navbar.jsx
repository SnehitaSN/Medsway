import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex ">
      {/* side Navigation */}
      <header className="relative">
        <nav
          aria-label="Top"
          className=" px-2 sm:px-4 lg:px-6 fixed top-0 w-full z-10 bg-gray-50 "
        >
          <div className="ml-4 font-sans flex lg:ml-0">
            <div className="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Link to="/">
              <h1 className="font-medium text-4xl  mt-4  text-gray-700  px-2 py-1 rounded  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                <span className=" font-medium text-5xl  text-blue-800 ">M</span>
                edsway
              </h1>
              </Link>
             
            </div>
          </div>

          <div className="ml-auto font-sans flex items-center">
            <div className="flex flex-1 justify-end gap-10 -mt-8 ">
              <Link
                to={"/home"}
                className=" text-gray-700 font-sans font-medium text-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
              >
                Product
              </Link>
              <Link
                to={"/features"}
                className=" text-gray-700 font-sans font-medium text-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
              >
                Features
              </Link>
              <Link
                to={"/pricing"}
                className=" text-gray-700 font-sans font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
              >
                Pricing
              </Link>

              <Link
                to={"/aboutus"}
                className=" text-gray-700  font-sans font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
              >
                About Us
              </Link>
              <Link
                to={"/contact"}
                className=" text-gray-700 font-sans font-medium text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
              >
                Contact Us
              </Link>
              <button className="flex -mt-1.5 bg-gray-500 font-sans font-medium text-xl  text-white py-1 px-6 h-13 border-2  rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300 ">
                <Link to={"/signin"}>SignIn</Link>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
