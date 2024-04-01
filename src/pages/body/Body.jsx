import React from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";

function Body() {
  //state to handle navigation
  const navigate = useNavigate();

  const handleClick = () => {
    //navigate to book ademo page
    navigate("/bookademo");
  };

  return (
    <Layout>
      <div className="text-center mt-24 mb-30 px-10 py-20 bg-gradient-to-b from-white to-blue-200">
        {/* Animated heading */}
        <div className="font-sans  font font-normal text-3xl text-gray-800 text-center">
          <div className="-mt-8 ">
            <h1 className=" text-center animate-slide-in ">
              <span className="text-blue-800">M</span>odernizing the
              pharmaceutical supply chain
            </h1>{" "}
          </div>

          <br />

          <div className=" -mt-6 mb-4 mr-20">
            <h1 className=" text-center mr-30 -mt-4 animate-slide-in1">
              <span className="text-blue-800">E</span>mpowering the distribution
              network
            </h1>{" "}
          </div>

          <br />

          <div>
            <h1 className=" text-center   -mt-10  mr-10 animate-slide-in2">
              <span className="text-blue-800">D</span>isrupting the pharma
              market intelligence
            </h1>
          </div>
        </div>

        <div >
          <div className="flex justify-between">
            <div className="">
              <div className="flex flex-1 justify-start mt-4 mb-1 items-start">
                <p className="mt-6 font-sans text-gray-600 text-lg text-left">
                  Medsway is on a mission to empower India's pharmaceutical
                  <br />
                  distribution network with technology and intelligence to
                  deliver
                  <br />
                  affordable medicines to 1.4 billion people.
                </p>
              </div>

              <div className="flex flex-1 justify-start -mt-4 items-start">
                <p className="mt-6 font-sans text-gray-600 text-lg text-left">
                  Whether you run a single general counter pharmacy, multi-chain
                  , <br></br> pharmacy a wholesale distribution , or C&F agency,
                  <br />
                  discover how Medsway can transform your business.
                  <br />
                </p>
              </div>
            </div>
            <div className="mr-80 mt-28">
              <button
                onClick={handleClick}
                className="bg-gray-700 px-6 py-2 text-center -mt-50  text-white font-sans text-xl rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300"
              >
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
        <div className="-mt-2">
          {/* Static heading */}
          {/* <div className="flex flex-1 justify-start mt-4 mb-1 items-start">
            <p className="mt-6 font-sans text-gray-600 text-lg text-left">
              Medsway is on a mission to empower India's pharmaceutical
              <br />
              distribution network with technology and intelligence to deliver
              <br />
              affordable medicines to 1.4 billion people.
            </p>
          </div> */}

          {/* <div className="flex flex-1 justify-start -mt-4 items-start">
            <p className="mt-6 font-sans text-gray-600 text-lg text-left">
              Whether you run a single general counter pharmacy, multi-chain ,{" "}
              <br></br> pharmacy a wholesale distribution , or C&F agency,
              <br />
              discover how Medsway can transform your business.
              <br />
            </p>
          </div> */}
        </div>
        {/* Static button */}
        {/* <div>
          <button
            onClick={handleClick}
            className="bg-gray-700 px-7 py-2 text-center -mt-50  text-white font-sans text-xl rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300"
          >
            Book Free Demo
          </button>
        </div> */}
      </div>
    </Layout>
  );
}

export default Body;
