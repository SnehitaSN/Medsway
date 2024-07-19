import React from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";

function Body() {
  //state to handle navigation
  const navigate = useNavigate();

  const handleClick = () => {
    //navigate to book a demo page
    navigate("/bookademo");
  };

  return (
    <Layout>
      <div className="text-center mt-24 mb-30 px-10 py-20 bg-gradient-to-b from-white to-blue-200">
        {/* Animated heading */}
        <div className="font-sans font-normal text-3xl text-gray-800">
          <div className="-mt-8">
            <h1 className="animate-slide-in">
              <span className="text-blue-800">M</span>odernizing the
              pharmaceutical supply chain
            </h1>
          </div>

          <br />

          <div className="-mt-6 mb-4">
            <h1 className="animate-slide-in1">
              <span className="text-blue-800">E</span>mpowering the distribution
              network
            </h1>
          </div>

          <br />

          <div>
            <h1 className="-mt-10 animate-slide-in2">
              <span className="text-blue-800">D</span>isrupting the pharma
              market intelligence
            </h1>
          </div>
        </div>

        <div>
          <div className="md:flex justify-between">
            <div className="md:w-1/2">
              <div className="mt-4 mb-1">
                <p className="mt-6 font-sans text-gray-600 text-lg text-left">
                  Medsway is on a mission to empower India's pharmaceutical
                  <br />
                  distribution network with technology and intelligence to
                  deliver
                  <br />
                  affordable medicines to 1.4 billion people.
                </p>
              </div>

              <div className="-mt-4">
                <p className="mt-6 font-sans text-gray-600 text-lg text-left">
                  Whether you run a single general counter pharmacy, multi-chain
                  , <br /> pharmacy a wholesale distribution, or C&F agency,
                  <br />
                  discover how Medsway can transform your business.
                  <br />
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/3">
              <button
                onClick={handleClick}
                className="bg-gray-600 px-6 py-2 text-center text-white font-sans text-xl rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300"
              >
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Body;
