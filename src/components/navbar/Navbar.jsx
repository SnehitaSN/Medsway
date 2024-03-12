import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
  <div className="flex ">
    {/* side Navigation */}
  

 
  
  
  
  
  
  
  
  
   {/* Top navigation */}
    <header className="relative">

      <nav aria-label="Top" className=" px-2 sm:px-4 lg:px-6 fixed top-0 w-full z-10 bg-gray-50 ">
        <div className="ml-4  flex lg:ml-0">
          <div className="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <h1 className=" text-4xl  mt-4 font-bold font-body text-black  px-2 py-1 rounded ">
              <span className="text-5xl font-body text-indigo-700 ">M</span>edsway
            </h1>
          </div>
        </div>

        <div className="ml-auto  flex items-center">
          <div className="flex flex-1 justify-end gap-4 -mt-8 ">
            <Link
              to={"/home"}
              className="text-xl font-bold  text-gray-700 font-body  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            >
              Home
            </Link>
            <Link
              to={"/features"}
              className="text-xl font-bold text-gray-700  font-body transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
            >
              Features
            </Link>
            <Link
              to={"/pricing"}
              className="text-xl font-bold text-gray-700 font-body transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            >
              Pricing
            </Link>
            <Link
              to={"/dashboard"}
              className="text-xl font-bold text-gray-700 font-body transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            >
              Dashboard
            </Link>
            <Link
              to={"/aboutus"}
              className="text-xl font-bold text-gray-700 font-body transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            >
              About Us
            </Link>
            <Link
              to={"/contact"}
              className="text-xl font-bold text-gray-700 font-body transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            >
              Contact Us
            </Link>
            <button className="flex -mt-1.5 bg-gray-600 font-body font-bold text-xl  text-white py-1 px-6 h-13 border-2  rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 ... ">
              <Link to={"/signin"}>SignIn</Link>
            </button>

            {/* <button className="flex -mt-1.5 bg-black font-body font-bold text-xl  text-white py-2 px-10 h-13 border-2  rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 ... ">
              <Link to={"/signup"}>SignUp</Link>
            </button> */}
          </div>
        </div>
      </nav>
     
    </header>
    </div>
  );
}

export default Navbar;
