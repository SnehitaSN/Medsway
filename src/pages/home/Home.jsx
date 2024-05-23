import React from "react";
import Layout from "../../components/layout/Layout";
import Testimonial from "../testimonial/Testimonial";
import { IoMdThumbsUp } from "react-icons/io";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdHeadsetMic } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { Card, Metric, Text } from "@tremor/react";
import { HiOutlineCash } from "react-icons/hi";
import { BsBarChartFill } from "react-icons/bs";
import { FaUserNinja } from "react-icons/fa";
import { LuActivitySquare } from "react-icons/lu";
// import { useNavigate } from "react-router-dom";
import { SiSoundcharts } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GiCrystalGrowth } from "react-icons/gi";
import dashimage1 from "../../assets/img/dashimage1.png";

function Home() {
  return (
    <Layout>
      <div>
        {/* Dashboard Image */}
        <div className="bg-blue-400 mt-20 flex">
          {/* Left side content */}
          <div className="grid grid-cols-2 grid-rows-2">
            {/* Paragraph 1 */}
            <div className="p-4">Paragraph 1</div>
            {/* Paragraph 2 */}
            <div className="p-4">Paragraph 2</div>
            {/* Paragraph 3 */}
            <div className="p-4">Paragraph 3</div>
            {/* Paragraph 4 */}
            <div className="p-4">Paragraph 4</div>
          </div>
          {/* Right side content */}
          <div className="flex-1 flex justify-center">
            <div className="flex flex-1 justify-end mt-0.5 " style={{ width: "65%", height: "60%" }}>
              <img
                src={dashimage1}
                className="object-cover object-center "
                alt="dashboard"
              />
            </div>
          </div>
        </div>
        {/* Additional div elements */}
        <div className="bg-violet-400 p-4">Additional Div 1</div>
        <div className="bg-violet-600 p-4">Additional Div 2</div>

        {/* High Quality Section */}
        <div className="mt-8 mb-8 font-sans bg-cover bg-center ml-40">
          {/* <img
            src={dashimage}
            className="object-cover object-center -ml-20 mt-30  "
            alt="dashboard"
          />{" "} */}
          {/* SVG image */}
          <div className="mt-8 mb-8  font-sans mr-60">
            <p className="text-4xl text-gray-700 font-extrabold text-center mb-8  mt-6 ">
              We have the best solution <br></br>for your buisness
            </p>
          </div>
          {/* solutions for your buisness section */}
          <div className="container w-auto h-auto border-none mx-auto mb-10 rounded-xl px-10 py-20 bg-cover bg-center ">
            <div className="grid grid-cols-3 gap-4 font-sans mr-20 ">
              <div className="-mt-6 ">
                <div className="mx-auto flex flex-1 justify-start mr-1 mb-2">
                  <IoShieldCheckmarkSharp
                    className="w-16 h-16"
                    style={{ color: "#1e40af" }}
                  />
                </div>
                <h2 className="font-bold text-2xl text-gray-800  text-start mb-4">
                  High Security to protect<br></br> from piracy
                </h2>
                <p className="text-start  text-gray-700 text-md font-semibold ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, esse quasi consectetur nihil voluptate quod.
                </p>
              </div>

              <div className="-mt-10">
                <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
                  <IoMdThumbsUp
                    className="w-16 h-16"
                    style={{ color: "#1e40af" }}
                  />
                </div>

                <h2 className="font-bold   text-gray-800 text-2xl text-start mb-4">
                  Premium Quality <br></br> Performance
                </h2>
                <p className="text-start   text-gray-700 text-md font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, esse quasi consectetur nihil voluptate quod.
                </p>
              </div>

              <div className="-mt-10">
                <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
                  <MdHeadsetMic
                    className="w-16 h-16"
                    style={{ color: "#1e40af" }}
                  />
                </div>

                <h2 className="font-bold   text-gray-800 text-2xl text-start mb-4">
                  Full time Customer <br></br> Support-24/7
                </h2>
                <p className="text-start   text-gray-700 text-md font-semibold ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, esse quasi consectetur nihil voluptate quod.
                </p>
              </div>
            </div>
          </div>
          {/* why should you work with us */}
          <div className="mr-10">
            <div className="grid grid-cols-2 gap-6 mb-8 mt-12 font-sans">
              <div className=" ml-20">
                <p className="text-blue-700 text-lg  font-semibold">
                  Why should you
                  <span className=" text-tahiti text-lg font-semibold">
                    {" "}
                    work with us?
                  </span>
                </p>
                <h2 className="text-gray-800  text-4xl font-extrabold mt-8">
                  To upscale your buisness <br></br> to the next level
                </h2>
                <p className="text-gray-700  text-md font-semibold mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br></br>
                  Excepturi temporibus eius earum incidunt! Nemo vero<br></br>{" "}
                  quis quaerat quam consectetur eos.
                </p>
              </div>
              <div>
                <div className=" ml-4 mt-6 ">
                  <FaArrowCircleRight
                    className="w-10 h-10 mb-4 "
                    style={{ color: "#1e40af" }}
                  />
                  <p className="flex flex-1   -mt-12 text-md font-semibold text-gray-700 ml-12 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, mollitia.
                  </p>
                </div>

                <div className="mt-3 ml-4">
                  <FaArrowCircleRight
                    className="w-10 h-10 mb-4 "
                    style={{ color: "#1e40af" }}
                  />
                  <p className="flex flex-1   -mt-12 text-md  text-gray-700 font-semibold ml-12 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, mollitia.
                  </p>
                </div>

                <div className="mt-3 ml-4">
                  <FaArrowCircleRight
                    className="w-10 h-10 mb-4 "
                    style={{ color: "#1e40af" }}
                  />
                  <p className="flex flex-1   -mt-12 text-md  text-gray-700 font-semibold ml-12 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, mollitia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* more impressions more conversions need to add font body*/}
        <div className="bg-gradient-to-r mt-12 from-white to-cyan-200">
          <div className="grid grid-cols-2 mb-8 font-sans ">
            <div className="ml-20 mt-8">
              <h2 className="text-gray-800 text-3xl  font-normal">
                More impressions,more <br></br>
                Conversions
              </h2>
              <p className="text-gray-700   text-md font-normal mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br></br> Fugit temporibus tenetur dolorem. Pariatur odit iste
                facilis repellat quo expedita,<br></br> necessitatibus deserunt!
                Doloribus tenetur voluptatibus ducimus modi, .
              </p>
              <button className="bg-gray-500 px-7 py-3 mr-2 mt-6    text-white font-semibold rounded-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 ... ">
                Get Free Trial
              </button>
            </div>
            <div className="mt-8 ml-10">
              <div className="mt-8 font-sans ">
                <Card
                  className="max-w-xs mx-auto   border-2 border-gray-300 shadow-xl  bg-white rounded-xl "
                  decoration="top"
                  decorationColor="indigo"
                >
                  <Text className="text-medium text-blue-800  font-sans  text-center ">
                    New Clients
                  </Text>
                  <Metric className="text-3xl animate-bounce  text-center">
                    324+
                  </Metric>
                </Card>
              </div>
              <div className="mt-8 font-sans ">
                <Card
                  className="max-w-xs mx-auto  border-2 border-gray-300 shadow-xl  bg-white rounded-xl"
                  decoration="top"
                  decorationColor="indigo"
                >
                  <Text className="text-medium  font-sans  text-blue-800 text-center">
                    Sales
                  </Text>
                  <Metric className="text-3xl  animate-bounce text-center">
                    $ 34,743
                  </Metric>
                </Card>
              </div>
            </div>
          </div>
        </div>
        {/* logoipsum */}
        <div className="mt-12 mb-20">
          <div className="grid grid-cols-5 gap-4 font-sans">
            <div className="flex flex-1 justify-center  ">
              <HiOutlineCash className="w-10 h-10" />
              <p className=" text-xl    font-bold"> logoipsum</p>
            </div>

            <div className="flex flex-1 justify-center  ">
              <HiOutlineCash className="w-10 h-10" />
              <p className=" text-xl   font-bold"> logoipsum</p>
            </div>

            <div className="flex flex-1 justify-center  ">
              <HiOutlineCash className="w-10 h-10" />
              <p className=" text-xl  font-bold"> logoipsum</p>
            </div>

            <div className="flex flex-1 justify-center  ">
              <HiOutlineCash className="w-10 h-10" />
              <p className=" text-xl   font-bold"> logoipsum</p>
            </div>

            <div className="flex flex-1 justify-center  ">
              <HiOutlineCash className="w-10 h-10" />
              <p className=" text-xl    font-bold"> logoipsum</p>
            </div>
          </div>
        </div>

        {/* Discovermore section add font body */}
        <div className="mt-12 mb-20">
          <div className="grid grid-cols-2 gap-4 font-sans">
            <div className="ml-20">
              <p className="text-blue-700   text-xl font-bold">
                Discover
                <span className=" text-tahiti   text-lg font-bold"> More</span>
              </p>
              <h2 className=" text-gray-800    text-4xl font-normal mt-8">
                Analyze your Sales and <br></br> Marketing Leads
              </h2>
              <p className=" text-gray-700   text-md font-normal mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <br></br>
                Excepturi temporibus eius earum incidunt! Nemo vero<br></br>{" "}
                quis quaerat quam consectetur eos.
              </p>
            </div>
            <div>
              <div className="font-sans">
                <div className="flex flex-1 justify-end mr-10">
                  <BsBarChartFill
                    className="w-10 h-10"
                    style={{ color: "#1e40af" }}
                  />
                  <div className="">
                    <h2 className="text-start   text-2xl ml-6 font-normal  text-gray-800">
                      Sales Tracking
                    </h2>
                    <p className="text-start    text-xl ml-6 font-normal  text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 justify-end mt-4 mr-10 ">
                  <FaUserNinja
                    className="w-10 h-10"
                    style={{ color: "#1e40af" }}
                  />
                  <div className="">
                    <h2 className="text-start text-2xl   ml-6 font-normal  text-gray-800">
                      Project Management
                    </h2>
                    <p className="text-start text-xl    ml-6 font-normal text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 justify-end mt-4 mr-10 ">
                  <LuActivitySquare
                    className="w-10 h-10"
                    style={{ color: "#1e40af" }}
                  />
                  <div className="">
                    <h2 className="text-start  text-2xl ml-6 font-normal  text-gray-800">
                      Activity Report
                    </h2>
                    <p className="text-start text-xl  ml-6 font-normal  text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features section add font-body
         */}
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
      <Testimonial />
    </Layout>
  );
}

export default Home;
