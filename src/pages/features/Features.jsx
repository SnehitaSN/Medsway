import React from "react";

import { SiSoundcharts } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GiCrystalGrowth } from "react-icons/gi";
import { FaStackOverflow } from "react-icons/fa";

import Layout from "../../components/layout/Layout";
import { GiWavyChains } from "react-icons/gi";
import { LiaUsersSolid } from "react-icons/lia";

function Features() {
  return (
    <Layout>
      <div>
        <div className="mt-16 mb-2">
          <div className="container w-auto h-auto border-none mx-auto  rounded-xl px-10 py-20">
            <div className="grid grid-cols-3 gap-4  font-sans">
              <div className="flex flex-col items-center">
                <div className="-mt-8 text-center">
                  <div className="mx-auto -mt-2 mb-2 flex justify-center">
                    <GiArtificialIntelligence className="w-16 h-16 text-blue-800" />
                  </div>
                  <h2 className="font-bold text-xl  text-center  text-gray-700  mb-2">
                    AI Powered:
                  </h2>
                  <p className="text-center  font-sans  text-md ">
                    Let our cutting-edge, data-driven algorithms <br />
                    guide you in making critical buy and sell <br />
                    decisions. Leverage the power of AI to <br />
                    enhance transparency.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center font-sans">
                <div className="-mt-6 text-center">
                  <div className="mx-auto flex justify-center mb-2">
                    <GiCrystalGrowth className="w-12 h-12 text-blue-800" />
                  </div>
                  <h2 className="font-bold text-xl    text-gray-700 text-center mb-2">
                    Profits Growth:
                  </h2>
                  <p className="text-center  font-sans  text-md ">
                    Medsway stands for growth!
                    <br />
                    Our workflows are designed <br />
                    to provide you with opportunities
                    <br />
                    at every turn to increase profitability
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="-mt-6">
                  <div className="mx-auto  mb-2 flex justify-center">
                    <SiSoundcharts className="w-16 h-16 text-blue-800 " />
                  </div>
                  <div>
                    <h2 className="font-bold text-xl  font-sans  text-gray-700 text-center mb-2">
                      Insights hub:
                    </h2>
                  </div>
                  <div className="flex justify-center">
                    <p className="  text-center font-sanstext-md  ">
                      Monitor the pulse of your business <br />
                      with single click dashboards.
                      <br />
                      Discover hidden insights and prepare <br />
                      for uncertainties in advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" -mt-12">
          <div className="container w-auto h-auto border-none mx-auto  rounded-xl px-10 py-20">
            <div className="grid grid-cols-3 gap-4  font-sans">
              <div className="flex flex-col items-center">
                <div className="-mt-8 text-center">
                  <div className="mx-auto  mb-2 flex justify-center">
                    <FaStackOverflow className="w-16 h-16 text-blue-800" />
                  </div>
                  <h2 className="font-bold text-xl  text-center  text-gray-800  mb-2">
                    Stock flow optimizer:
                  </h2>
                  <p className="text-center  font-sans  text-md ">
                    Effective inventory management is <br />
                    the cornerstone of successful supply
                    <br />
                    chain network. With Medsway's predictive <br />
                    analytics you can build an effective stock
                    <br />
                    management strategy for any store size.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center font-sans">
                <div className="-mt-6 text-center">
                  <div className="mx-auto flex justify-center mb-2">
                    <GiWavyChains className="w-12 h-12 text-blue-800" />
                  </div>
                  <h2 className="font-bold text-xl    text-gray-800 text-center mb-2">
                    Supply chain nexus:
                  </h2>
                  <p className="text-center  font-sans  text-md ">
                    The adage goes like one <br/>
                    size doesn't fit all...! <br/>
                    With Medsway platform you can <br/>
                    everage the vast network of <br/>
                    suppliers to get the best deals <br/>
                    on range of products.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="-mt-6">
                  <div className="mx-auto  mb-2 flex justify-center">
                    <LiaUsersSolid className="w-16 h-16 text-blue-800 " />
                  </div>
                  <div>
                    <h2 className="font-bold text-xl  font-sans  text-gray-800 text-center mb-2">
                      Customer experience catalyst:
                    </h2>
                  </div>
                  <div className="flex justify-center">
                    <p className="  text-center font-sanstext-md  ">
                      Discover the exponential potential <br />
                      of customer satisfaction in <br />
                      enriching  your sales journey.<br/>
                      Plug-in Medsway functionalities<br />
                      to enhance customer experience <br/>
                      and expanding your loyalty nexus.
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="font-sans flex justify-end ">
          <a
            href="/faqws"
            target="_blank"
            className="mr-10 mb-4 text-gray-900 font-bold border-2 w-50 h-50 bg-slate-300 px-2 py-2"
          >
            FAQ's
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Features;
