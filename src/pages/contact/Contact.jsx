import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import { FaSalesforce } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <Layout>
      <div>
        <div className="mt-40 mb-10">
          <h1 className="text-3xl font-boldfont-sans text-center text-gray-800">
            Get in touch with us
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-blue-100 rounded-3xl border-1 mb-6">
          <div className="ml-20 mt-8">
            <h2 className="text-2xl font-bold font-sans mr-4 mb-4 text-gray-800">
              Drop us a message
            </h2>
            <p className="text-lg font-sansfont-normal text-gray-700">
              We will get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-sans font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full font-sans border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium font-sans text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full font-sans border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-sans font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full font-sans border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-sans font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full font-sans border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-sans font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full font-sans border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  className="w-full flex justify-center font-sans py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* for enquiry */}

          <div className="mt-6">
            <div className="flex flex-1 justify-center space-x-4">
              <div className="mt-6 ml-2 ">
                <FaPhone
                  className="w-10 h-10 mt-3 "
                  style={{ color: "#1e40af" }}
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-sans font-semibold text-gray-800 mr-14 ">
                  + 1800 145 276
                </h3>
                <p className="text-lg font-normal font-sans ml-6 text-gray-700">
                  Free Support
                </p>
              </div>
            </div>

            <div className="flex flex-1 justify-center space-x-4">
              <div className="mt-4 ml-2">
                <MdEmail
                  className="w-10 h-10 mt-3"
                  style={{ color: "#1e40af" }}
                />
              </div>
              <div className="mt-6 ">
                <h3 className="text-xl font-sans font-semibold text-gray-800 ml-4 ">
               team@medsway.in
                </h3>
                <p className="text-lg font-normal font-sans ml-6 text-gray-700">
                  Help Email Support
                </p>
              </div>
            </div>
            {/* 
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
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
