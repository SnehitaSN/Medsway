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
import img1 from "../../assets/img/dashboard.png"
import img2 from '../../assets/img/sales.png'
import img3 from "../../assets/img/rupee.png"


function Home() {

  // const navigate = useNavigate()

  // const handleClick =()=>{
  //   navigate('/getfreetrial')
  // }
  return (
    <Layout>
      <div>
        {/* The best s/w to grow section */}
        <div className="text-center  mt-40  mb-30 px-10 py-20  bg-gradient-to-b from-white to-blue-200">
          <h1 className="text-center font-bold font-body text-gray-600  text-4xl">
            The Best Software to Grow <br></br>your Sales and Services.
          </h1>
          <p className="mt-6 font-body text-center text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            mollitia inventore ex.{" "}
          </p>
          {/* <form className="mt-10 mr-4">
            <input
              type="name"
              placeholder="Enter Your Name"
              className="bg-white text-black px-20 py-6 rounded-lg"
            ></input>
            <button onClick={handleClick}
             className="bg-gray-900 px-10 py-4 mr-2 font-body text-white font-bold rounded-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 ... ">
              Get Free Trial
            </button>
          </form> */}
        </div>

        {/* Dashboard Image */}
        <div className="container w-auto h-auto border-x-8 border-y-8 mt-4 mb-8 mx-auto rounded-3xl">
          {/* <img /> */}
          <p>Image of Dashboard Will  come</p>
        </div>
        {/* High Quality Section */}
        <div className="mt-8 mb-8">
          <h3 className="text-center font-body text-blue-500 text-2xl font-bold">
            High-
            <span className="text-blue-300 font-body font-bold mb-8">quality</span>
          </h3>
          <p className="text-4xl text-gray-600 font-body text-center mb-8 font-bold mt-6">
            We have the best solution <br></br>for your buisness
          </p>
        </div>
        {/* solutions for your buisness section */}
        <div className="container w-auto h-auto border-none mx-auto mb-10 rounded-xl px-10 py-20 bg-slate-100">
          <div className="grid grid-cols-3 gap-4 ">
            <div className="-mt-6">
              <div className="mx-auto flex flex-1 justify-start mr-1 mb-2">
                <IoShieldCheckmarkSharp
                  className="w-16 h-16"
                  style={{ color: "#4338ca" }}
                />
              </div>

              <h2 className="font-bold text-2xl text-gray-600 font-body text-start mb-4">
                High Security to protect<br></br> from piracy
              </h2>
              <p className="text-start font-body  text-gray-600 text-md ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                esse quasi consectetur nihil voluptate quod.
              </p>
            </div>
            <div className="-mt-10">
              <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
                <IoMdThumbsUp className="w-16 h-16" style={{ color: "#4338ca" }} />
              </div>

              <h2 className="font-bold font-body  text-gray-600 text-2xl text-start mb-4">
                Premium Quality <br></br> Performance
              </h2>
              <p className="text-start font-body  text-gray-600 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                esse quasi consectetur nihil voluptate quod.
              </p>
            </div>
            <div className="-mt-10">
              <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
                <MdHeadsetMic className="w-16 h-16" style={{ color: "#4338ca" }} />
              </div>

              <h2 className="font-bold font-body   text-gray-600 text-2xl text-start mb-4">
                Full time Customer <br></br> Support-24/7
              </h2>
              <p className="text-start font-body   text-gray-600 text-md ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                esse quasi consectetur nihil voluptate quod.
              </p>
            </div>
          </div>
        </div>
        {/* why should you work with us */}
        <div>
          <div className="grid grid-cols-2 gap-6 mb-8 mt-12">
            <div className=" ml-20">
              <p className="text-blue-700 text-lg font-body font-bold">
                Why should you
                <span className=" text-tahiti text-lg font-body font-bold">
                  {" "}
                  work with us?
                </span>
              </p>
              <h2 className="text-gray-600 font-body text-4xl font-bold mt-8">
                To upscale your buisness <br></br> to the next level
              </h2>
              <p className="text-gray-600 font-body text-md font-normal mt-6">
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
                  style={{ color: "#4338ca" }}
                />
                <p className="flex flex-1 font-body justify-end -mt-12 text-md font-md text-gray-600 mr-8  mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, mollitia.
                </p>
              </div>

              <div className="mt-3 ml-4">
                <FaArrowCircleRight
                  className="w-10 h-10 mb-4 "
                  style={{ color: "#4338ca" }}
                />
                <p className="flex flex-1 font-body justify-end -mt-12 text-md  text-gray-600 font-md mr-8 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, mollitia.
                </p>
              </div>

              <div className="mt-3 ml-4">
                <FaArrowCircleRight
                  className="w-10 h-10 mb-4 "
                  style={{ color: "#4338ca" }}
                />
                <p className="flex flex-1 font-body justify-end -mt-12 text-md  text-gray-600 font-md mr-8 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* more impressions more conversions need to add font body*/}
        <div className="bg-gradient-to-r mt-12 from-white to-cyan-200">
          <div className="grid grid-cols-2 mb-8 ">
            <div className="ml-20 mt-8">
              <h2 className="text-gray-600 text-3xl font-body font-bold">
                More impressions,more <br></br>
                Conversions
              </h2>
              <p className="text-gray-600  font-body  text-md font-normal mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br></br> Fugit temporibus tenetur dolorem. Pariatur odit iste
                facilis repellat quo expedita,<br></br> necessitatibus deserunt!
                Doloribus tenetur voluptatibus ducimus modi, .
              </p>
              <button className="bg-gray-800 px-7 py-3 mr-2 mt-6  font-body  text-white font-bold rounded-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 ... ">
                Get Free Trial
              </button>
            </div>
            <div className="mt-8 ml-10">
              <div className="mt-8">
                <Card
                  className="max-w-xs mx-auto border-2 border-gray-300 shadow-xl  bg-white rounded-xl "
                  decoration="top"
                  decorationColor="indigo"
                >
                  <Text className="text-medium text-blue-500  font-body  text-center ">
                    New Clients
                  </Text>
                  <Metric className="text-xl  font-body  text-center">324+</Metric>
                </Card>
              </div>
              <div className="mt-8">
                <Card
                  className="max-w-xs mx-auto  border-2 border-gray-300 shadow-xl  bg-white rounded-xl"
                  decoration="top"
                  decorationColor="indigo"
                >
                  <Text className="text-medium b  font-body  text-blue-500 text-center">
                    Sales
                  </Text>
                  <Metric className="text-xl   font-body  text-center">$ 34,743</Metric>
                </Card>
              </div>
            </div>
          </div>
        </div>
        {/* logoipsum */}
        <div className="mt-12 mb-20">
          <div className="grid grid-cols-5 gap-4">
            <div className="flex flex-1 justify-center  ">
              <HiOutlineCash className="w-10 h-10" />
              <p className=" text-xl  font-body  font-bold"> logoipsum</p>
            </div>

            <div className="flex flex-1 justify-center  ">
              <HiOutlineCash className="w-10 h-10" />
              <p className=" text-xl  font-body  font-bold"> logoipsum</p>
            </div>

            <div className="flex flex-1 justify-center  ">
              <HiOutlineCash className="w-10 h-10" />
              <p className=" text-xl  font-body  font-bold"> logoipsum</p>
            </div>

            <div className="flex flex-1 justify-center  ">
              <HiOutlineCash className="w-10 h-10" />
              <p className=" text-xl  font-body  font-bold"> logoipsum</p>
            </div>

            <div className="flex flex-1 justify-center  ">
              <HiOutlineCash className="w-10 h-10" />
              <p className=" text-xl  font-body  font-bold"> logoipsum</p>
            </div>
          </div>
        </div>

        {/* Discovermore section add font body */}
        <div className="mt-12 mb-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="ml-20">
              <p className="text-blue-700  font-body  text-xl font-bold">
                Discover
                <span className=" text-tahiti  font-body  text-lg font-bold"> More</span>
              </p>
              <h2 className=" text-gray-600  font-body  text-4xl font-bold mt-8">
                Analyze your Sales and <br></br> Marketing Leads
              </h2>
              <p className=" text-gray-600  font-body  text-md font-normal mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <br></br>
                Excepturi temporibus eius earum incidunt! Nemo vero<br></br>{" "}
                quis quaerat quam consectetur eos.
              </p>
            </div>
            <div>
              <div className="">
                <div className="flex flex-1 justify-end mr-10">
                  <BsBarChartFill
                    className="w-10 h-10"
                    style={{ color: "#4338ca" }}
                  />
                  <div className="">
                    <h2 className="text-start  font-body  text-xl ml-6 font-bold  text-gray-600">
                      Sales Tracking
                    </h2>
                    <p className="text-start  font-body  text-xl ml-6 font-normal  text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 justify-end mt-4 mr-10 ">
                  <FaUserNinja
                    className="w-10 h-10"
                    style={{ color: "#4338ca" }}
                  />
                  <div className="">
                    <h2 className="text-start text-xl  font-body  ml-6 font-bold  text-gray-600">
                      Project Management
                    </h2>
                    <p className="text-start text-xl  font-body  ml-6 font-normal text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 justify-end mt-4 mr-10 ">
                  <LuActivitySquare
                    className="w-10 h-10"
                    style={{ color: "#4338ca" }}
                  />
                  <div className="">
                    <h2 className="text-start   font-body text-xl ml-6 font-bold  text-gray-600">
                      Activity Report
                    </h2>
                    <p className="text-start text-xl  font-body  ml-6 font-normal  text-gray-600">
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
        <div className="mt-12 mb-20">
          <h1 className="text-3xl text-center font-semibold  text-gray-600 font-body mb-8 ">Features</h1>
          <div className="container w-auto h-auto border-none mx-auto  rounded-xl px-10 py-20 bg-slate-100">
            <div className="grid grid-cols-3 gap-4 ">
              <div className="-mt-6">
                <div className="mx-auto flex flex-1 justify-start mr-1 mb-2">
                 <img src={img1} alt="dashboard " className="w-20 h-auto   "/>
                 </div>

                <h2 className="font-bold text-xl  font-body  text-gray-700 text-start mb-4">
                360 deg Dashboard
                </h2>
                <p className="text-start mr-24 font-body  text-lg ">
                Integrate local and industry <br></br> intelligence. Get all insights to <br></br>monitor pulse of your pharmacy.
                </p>
              </div>
              <div className="-mt-6">
                <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
                <img src={img2} alt="dashboard " className="w-20 h-auto   "/>
                </div>

                <h2 className="font-bold text-xl  font-body  text-start   text-gray-700 mb-4">
                Sales intelligence
                </h2>
                <p className="text-start  mr-24  font-body  text-lg">
                Leverage ML models to know  changes in footfall, near-expiry drugs and more.
                </p>
              </div>
              <div className="-mt-8">
                <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
                <img src={img3} alt="dashboard " className="w-20 h-auto   "/>
                </div>

                <h2 className="font-bold   font-body  text-xl text-start  text-gray-700 mb-4">
                Guaranteed Profits
                </h2>
                <p className="text-start mr-24 font-body  text-lg ">
                Its a promise we won't hesitate to make. Witness marked increase in profits within 3 months or less.
                </p>
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
