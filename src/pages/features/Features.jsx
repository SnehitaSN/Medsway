import React from "react";
import { SiSoundcharts } from "react-icons/si";
import {
  GiArtificialIntelligence,
  GiCrystalGrowth,
  GiWavyChains,
} from "react-icons/gi";
import { FaStackOverflow } from "react-icons/fa";
import { LiaUsersSolid } from "react-icons/lia";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import mimg from "../../../src/assets/img/mimg.png";

function Features() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/bookademo");
  };

  return (
    <Layout>
      <div className="mt-8 mb-8 font-sans bg-cover bg-center">
        {/* heading */}
        <div className="mt-40 mb-8 font-sans text-center">
          <h1 className="text-4xl text-gray-700 font-bold mb-8">
            We have the best solution <br /> for your business
          </h1>
        </div>
        {/* features 1 */}
        <div className="mt-16 mb-2">
          <div className="container mx-auto rounded-xl px-4 sm:px-10 py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <GiArtificialIntelligence className="w-16 h-16 text-blue-800" />
                </div>
                <h2 className="font-semibold text-2xl text-gray-700 mb-2">
                  AI Powered
                </h2>
                <p className="text-center text-md">
                  Let our cutting-edge, data-driven algorithms guide you in
                  making critical buy and sell decisions. Leverage the power of
                  AI to enhance transparency.
                </p>
              </div>

              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <GiCrystalGrowth className="w-16 h-16 text-blue-800" />
                </div>
                <h2 className="font-semibold text-2xl text-gray-700 mb-2">
                  Profits Growth
                </h2>
                <p className="text-center text-md">
                  Medsway stands for growth! Our workflows are designed to
                  provide you with opportunities at every turn to increase
                  profitability.
                </p>
              </div>

              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <SiSoundcharts className="w-16 h-16 text-blue-800" />
                </div>
                <h2 className="font-semibold text-2xl text-gray-700 mb-2">
                  Insights hub
                </h2>
                <p className="text-center text-md">
                  Monitor the pulse of your business with single click
                  dashboards. Discover hidden insights and prepare for
                  uncertainties in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* features 2 */}
        <div className="mt-16 mb-2">
          <div className="container mx-auto rounded-xl px-4 sm:px-10 py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <FaStackOverflow className="w-16 h-16 text-blue-800" />
                </div>
                <h2 className="font-semibold text-2xl text-gray-700 mb-2">
                  Stock flow optimizer
                </h2>
                <p className="text-center text-md">
                  Effective inventory management is the cornerstone of a
                  successful supply chain network. With Medsway's predictive
                  analytics, you can build an effective stock management
                  strategy for any store size.
                </p>
              </div>

              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <GiWavyChains className="w-16 h-16 text-blue-800" />
                </div>
                <h2 className="font-semibold text-2xl text-gray-700 mb-2">
                  Supply chain nexus
                </h2>
                <p className="text-center text-md">
                  One size doesn't fit all! With Medsway platform, you can
                  leverage the vast network of suppliers to get the best deals
                  on a range of products.
                </p>
              </div>

              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <LiaUsersSolid className="w-16 h-16 text-blue-800" />
                </div>
                <h2 className="font-semibold text-2xl text-gray-700 mb-2">
                  Customer experience catalyst
                </h2>
                <p className="text-center text-md">
                  Discover the exponential potential of customer satisfaction in
                  enriching your sales journey. Enhance customer experience and
                  expand your loyalty nexus with Medsway functionalities.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* guarantee  growth */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-white to-cyan-200 p-6 shadow-lg rounded-lg width-full max-w-none mx-auto my-8">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl md:text-4xl font-bold text-gray-800">
              Guaranteed top line and <br />
              bottom line growth.
            </h2>
            <p className="mt-4 text-gray-700 text-lg">
              With several segment-first features, Medsway delivers unique
              insights to you,
              <br />
              enabling successful operations and discovery of hidden
              <br />
              opportunities in your pharmacy business.
            </p>
            <button
              onClick={handleClick}
              className="mt-6 px-4 py-2 bg-gray-600  text-white rounded hover:bg-blue-800 transition duration-300"
            >
              Book a Demo
            </button>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 flex justify-center  p-4 rounded-lg shadow-md">
            <img
              src={mimg}
              alt="Good Medicines"
              className="w-3/4 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
        {/* button faq */}
        <div className="font-sans flex justify-end mb-4 mr-6">
          <button
            onClick={() => navigate("/faqws")}
            className="flex items-center text-blue-800 focus:outline-none mt-4"
          >
            <span className="text-lg">Go to FAQ's</span>
            <RiArrowRightSLine className="ml-1" size={20} />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Features;
