import React from "react";
import Layout from "../../components/layout/Layout";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSalesforce } from "react-icons/fa6";

function Contact() {
  return (
    <Layout>
      <div>
        <div className="mt-40 mb-10">
          <h1 className="text-3xl font-bold font-body text-center text-gray-600">
            Get in touch with us
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-blue-100 rounded-3xl border-1">
          <div className="ml-20 mt-8">
            <h2 className="text-2xl font-bold font-body mr-4 mb-4 text-gray-700">
              Drop us a message
            </h2>
            <p className="text-lg font-body font-normal text-gray-700">
              We will get back to you as soon as possible
            </p>
            
            
           
                <form className="mr-36 mt-6">
              <div className="flex flex-1 justify-center space-x-5 ml-12 ">
                <div className="-ml-2">
                  {" "}
                  <input
                    type="name"
                    placeholder="FullName "
                    className="px-6 py-5 font-body ml-6 rounded-xl"
                  ></input>
                </div>
                <div>
                  <input
                    type="name"
                    placeholder="CompanyName "
                    className="px-6 py-5 font-body ml-4 rounded-xl"
                  ></input>
                </div>
              </div>
            </form>
           

            <form>
              <input
                type="email"
                placeholder="Work Email "
                className="px-40 py-4 mt-4 font-body rounded-xl border-none"
              ></input>
              <input
                type="subject"
                placeholder="Subject "
                className="px-40 py-4 mt-4 font-body rounded-xl"
              ></input>
              <textarea
                type="text"
                placeholder="Message"
                className="px-40 py-4 mt-4 font-body rounded-xl border-none"
              ></textarea>
              <button className="bg-gray-700 px-40 py-4  font-body rounded-xl text-white font-bold ml-10 mt-4 text-xl mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 ">
                Send
              </button>
            </form>
          </div>
          

          {/* for enquiry */}

          <div className="mt-6">
            <div className="flex flex-1 justify-center space-x-4">
              <div className="mt-6 ">
                <FaPhone
                  className="w-10 h-10 mt-3 mr-16"
                  style={{ color: "#4338ca" }}
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-body font-semibold mr-14 ">
                  + 1800 145 276
                </h3>
                <p className="text-lg font-normal ml-6 text-gray-600">
                  Free Support
                </p>
              </div>
            </div>

            <div className="flex flex-1 justify-center space-x-4">
              <div className="mt-4 ml-2">
                <MdEmail className="w-10 h-10 mt-3" style={{ color: "#4338ca" }} />
              </div>
              <div className="mt-6 ">
                <h3 className="text-2xl font-body font-semibold ml-8 ">
                  medsway@gmail.com
                </h3>
                <p className="text-lg font-normal font-body ml-8 text-gray-600">
                  Help Email Support
                </p>
              </div>
            </div>

            <div className="flex flex-1 justify-center space-x-4">
              <div className="mt-4">
                <FaSalesforce
                  className="w-12 h-12 mt-3"
                  style={{ color: "#4338ca" }}
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-body font-semibold ml-8 ">
                  sales@medsway.com
                </h3>
                <p className="text-lg font-normal font-body ml-8 text-gray-600">
                  Sales Enquiry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
