import React from "react";
import Layout from "../../components/layout/Layout";
import dashimage1 from "../../assets/img/dashimage1.png";
import {
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineTrendingUp,
} from "react-icons/hi";

function Product() {
  return (
    <Layout>
      <div>
        {/* Dashboard Image */}
        <div className="mt-20 flex flex-col lg:flex-row">
          {/* Left side content */}
          <div className="bg-gray-600 text-white p-4 rounded-lg w-full lg:w-1/2">
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold font-sans mb-2 mt-20">
                Unlock the Potential of Medsway
              </h1>
            </div>
            <div className="mt-4 lg:mt-8">
              <p className="text-lg lg:text-xl font-sans">
                You need more than just a dashboard…
              </p>
              <p className="text-lg lg:text-xl font-sans mt-2">
                Transform your core operations with Medsway and unlock:
              </p>
              <ul className="list-disc font-sans text-lg lg:text-xl list-inside mt-2">
                <li>Vast supplier network</li>
                <li>Net positive cashflows</li>
                <li>Satisfied customers</li>
              </ul>
              <button
                className="bg-gray-700 text-white border border-white font-bold py-2 px-20 md:px-32 lg:px-40 mt-4 rounded transition duration-300 hover:bg-blue-800"
                onClick={() => (window.location.href = "/pricing")}
              >
                <p className="text-left">Get Started</p>
              </button>

              <p className="mt-2">
                <a href="/signin" className="text-blue-400 underline">
                  Already have an account? Sign in here
                </a>
              </p>
            </div>
          </div>
          {/* Right side content */}
          <div className="flex-1 flex justify-center mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={dashimage1}
                className="object-cover object-center w-full h-auto transform transition-transform duration-300 hover:scale-110"
                alt="dashboard"
              />
            </div>
          </div>
        </div>

        {/* Additional div elements */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {/* Left Content */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-4">
              <HiOutlineClipboardList className="text-4xl lg:text-5xl text-blue-600 mr-2" />
              <h2 className="text-xl lg:text-2xl font-sans font-semibold">
                Medsway: Revolutionizing Operations
              </h2>
            </div>
            <div>
              <p className="text-lg lg:text-xl font-sans text-gray-800">
                Medsway provides an intuitive and powerful solution to automate
                your workflows, whether you're a pharmaceutical supplier,
                distributor, pharmacy, or healthcare practitioner. Our platform
                simplifies tracking inventories, monitoring near-expiry
                products, managing patient billing and accounts, and handling
                IPD medical supplies.
              </p>
            </div>
          </div>

          {/* Center Content */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-4">
              <HiOutlineCog className="text-4xl lg:text-5xl text-blue-600 mr-2" />
              <h2 className="text-xl lg:text-2xl font-sans font-semibold">
                Automate Workflows with Medsway
              </h2>
            </div>
            <div>
              <p className="text-lg lg:text-xl font-sans text-gray-800">
                With Medsway's suite of automation tools, you can manage every
                task with just a few clicks. Our customizable dashboard offers a
                comprehensive overview, allowing you to track operational KPIs,
                financial metrics, marketing metrics, and more. Powered by
                advanced AI, Medsway guarantees your entire operation maintains
                a positive cash flow.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-4">
              <HiOutlineTrendingUp className="text-4xl lg:text-5xl text-blue-600 mr-2" />
              <h2 className="text-xl lg:text-2xl font-sans font-semibold">
                Drive Growth with Medsway
              </h2>
            </div>
            <div>
              <p className="text-lg lg:text-xl font-sans text-gray-800">
                Discover the power of Medsway and transform your business
                operations today. With our innovative solutions and advanced
                technology, you can streamline processes, improve efficiency,
                and drive growth like never before. <br />
                Explore Medsway today and unlock new possibilities for your
                business success.
              </p>
            </div>
          </div>
        </div>

        <hr className="mt-10" />
        <div className="mt-4 mb-6 text-center">
          <p className="text-lg lg:text-xl font-sans text-gray-800 mt-2">
            Join the Medsway community and unlock new possibilities for your
            business success.
          </p>
          <p className="text-md lg:text-lg font-sans text-gray-800 mt-2">
            * Terms & conditions apply
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
