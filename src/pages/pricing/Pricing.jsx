import React from "react";
import Layout from "../../components/layout/Layout";

// import { Card } from "@tremor/react";
import { IoArrowForwardCircle } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { RiBillFill } from "react-icons/ri";
// import { FaMinus } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Faqws from "../faqws/Faqws";

function Pricing() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/invoicegen");
  };

  return (
    <Layout>
      <div>
        <div className="text-center  mt-24 font-sans mb-3 px-10 py-20  ">
          <h1 className="text-center font-semibold  text-gray-800  text-3xl">
            Pricing plans that <br></br> suit you
          </h1>
          <p className="mt-6 text-center text-xl font-normal text-gray-600">
            From single general counter pharmacies to multi-store pharmacy
            <br></br> adipisicing elit. chains, we have budget-friendly plans
            for all..{" "}
          </p>
          {/* <Card
            className="max-w-xs mx-auto bg-blue-100 flex flex-1 space-x-2 justify-center mb-6 rounded-3xl mt-8"
            decoration="top"
            decorationColor="indigo"
          >
            <div className="-mt-4 mb-4">
              <button  onClick={handleMonthlyClick}
               className="bg-gray-600  font-body  px-6 mr-5 py-3 mt-8 text-white  text-xl rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 ">
                Monthly
              </button>
              <button
              onClick={handleYearlyClick}
              className=" px-4 py-4 mt-8 text-black font-bold  font-body  text-xl rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 hover:text-white">
                Yearly
              </button>
            </div>
          </Card> */}
        </div>

        <div className="flex justify-center font-sans">
          <plan className="mt-8">
            {/* for regular plan */}
            <div className="flex flex-1 justify-between ml-80 space-x-9 mb-10">
              <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-violet-900">
                <div className="container w-80 h-120  border-2 mr-20 rounded-3xl shadow-2xl   hover:border-violet-900 hover:shadow-2xl">
                  <div className="mt-6 ml-18 mb-4 ">
                    <div className="flex flex-1 space-x-3">
                      <RiBillFill className="w-14 h-14 ml-6" />

                      <h2 className="font-bold text-2xl    text-gray-600">
                        Medsway One <br></br>
                        {/* <div className="-mt-4">
                      <span className=" font-normal mt-4  font-body  text-sm ">
                      For Good Results
                      </span>
                    </div> */}
                      </h2>
                    </div>
                  </div>

                  <hr className="text-bold mb-6"></hr>

                  <ul className="font-sans">
                    <div className="flex flex-1 mb-1  ">
                      <IoArrowForwardCircle className="w-10 h-10  ml-6" />
                      <li className=" text-start font-sans  ml-6 text-lg font-normal text-gray-800">
                        Custom dashboard with all features enabled.
                      </li>
                    </div>
                    <div className="flex flex-1 mb-1">
                      <IoArrowForwardCircle className="w-8 h-8  ml-6" />
                      <li className=" text-start   ml-6 font-sans text-lg font-normal text-gray-800">
                        Inventory management intelligence.
                      </li>
                    </div>
                    <div className="flex flex-1 mb-1 ">
                      <IoArrowForwardCircle className="w-10 h-10  ml-6" />
                      <li className=" text-start  font-sans  ml-6 text-lg font-normal text-gray-800">
                        Alerts and reminders for near-expiry products.
                      </li>
                    </div>
                    <div className="flex flex-1 mb-1 ">
                      <IoArrowForwardCircle className="w-9 h-9  ml-6" />
                      <li className=" text-start  ml-6 text-lg  font-sans font-normal text-gray-800">
                        Exclusive deals and offers from suppliers.
                      </li>
                    </div>
                    <div className="flex flex-1 mb-1">
                      <IoArrowForwardCircle className="w-7 h-7  ml-6" />
                      <li className=" text-start ml-6  font-sans  text-lg font-normal text-gray-800">
                        Upto 2 user logins
                      </li>
                    </div>
                  </ul>
                  {/* <h3 className="text-center text-md  font-body  font-normal mb-6 mt-4">
                Lorem ipsum dolor sit, amet consectetur <br></br> adipisicing
                elit. Dolores voluptatum .
              </h3> */}
                  <hr className="text-bold mt-6"></hr>
                  <div className=" mb-4 font-sans">
                    <h2 className="text-center mt-6  font-sans font-bold text-4xl text-gray-600">
                      INR 2999/yr
                    </h2>
                    <h4 className="text-center font-sans font-normal ">
                      For Limited Period
                    </h4>
                    <div className="-mt-4 text-center font-sans">
                      <button
                        onClick={handleClick}
                        className="bg-gray-700  mb-6   font-sans px-10 py-1 mt-8 text-white  text-lg rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 "
                      >
                        Buy Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* for platinum plan */}
              <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-violet-900">
                <div className="container w-80 h-140 border-2 mr-80 mb-10 rounded-3xl shadow-2xl border-blue-100 hover:border-violet-900 hover:shadow-2xl">
                  <div className="mt-6 ml-18 mb-6">
                    <div className="flex flex-1 space-x-3">
                      <RiBillLine className="w-14 h-14 ml-6" />
                      <h2 className="font-bold text-2xl  font-sans  text-gray-600">
                        Medsway Plus <br></br>
                        {/* <div className="-mt-4">
                        <span className=" font-normal font-body text-sm ">
                          For the best results
                        </span>
                      </div> */}
                      </h2>
                    </div>
                  </div>

                  <hr className="text-bold mb-6"></hr>

                  <ul className="font-sans">
                    <div className="flex flex-1 mb-1 ">
                      <IoArrowForwardCircle className="w-8 h-8  ml-6" />
                      <li className=" text-start font-sans ml-6 text-lg font-normal text-gray-800">
                        All the features of Medsway One plan.
                      </li>
                    </div>
                    <div className="flex flex-1 mb-1">
                      <IoArrowForwardCircle className="w-7 h-7  ml-6" />
                      <li className=" text-start  ml-6 font-sans text-lg font-normal text-gray-800">
                        Local intelligence customization.
                      </li>
                    </div>
                    <div className="flex flex-1 mb-1 ">
                      <IoArrowForwardCircle className="w-8 h-8  ml-6" />
                      <li className=" text-start  ml-6 text-lg font-sans font-normal text-gray-800">
                        Bulk ordering suite with exclusive offers.
                      </li>
                    </div>
                    <div className="flex flex-1 mb-1 ">
                      <IoArrowForwardCircle className="w-9 h-9  ml-6" />
                      <li className=" text-start  ml-6 text-lg font-sans font-normal text-gray-800">
                        Supplier relationship management modules.
                      </li>
                    </div>
                    <div className="flex flex-1 mb-1">
                      <IoArrowForwardCircle className="w-6 h-6  ml-6" />
                      <li className=" text-start  ml-6 text-lg  font-sansfont-normal text-gray-800">
                        Upto 5 user logins.
                      </li>
                    </div>
                  </ul>
                  {/* <h3 className="text-center font-body text-md font-normal mb-6 mt-4">
                  Lorem ipsum dolor sit, amet consectetur <br></br> adipisicing
                  elit. Dolores voluptatum .
                </h3> */}
                  <hr className="text-bold mt-6"></hr>
                  <div className="">
                    <h2 className="text-center mt-6 font-bold font-sans text-4xl text-gray-600">
                      {" "}
                      INR 5999/yr{" "}
                    </h2>
                    <h4 className="text-center  font-normal">
                      For Limited Period
                    </h4>
                    <div className="-mt-4 mr-1 text-center">
                      <button
                        onClick={handleClick}
                        className="bg-gray-700  mb-8  font-sans  px-10 py-1 mt-8 text-white  text-lg rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 "
                      >
                        Buy Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </plan>
        </div>

        {/* for FAQ part */}

        <Faqws/>
      </div>
    </Layout>
  );
}

export default Pricing;
