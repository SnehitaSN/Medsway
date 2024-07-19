import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
      <div className="container mx-auto px-4">
        <div className="md:mt-40 mb-10 mt-24">
          <h1 className="text-4xl text-gray-700 font-bold font-sans text-center">
            Get in touch with us
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-100 rounded-3xl p-8 border-1 mb-8 mt-2">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold font-sans mb-4 text-gray-800">
              Drop us a message
            </h2>
            <p className="text-lg font-sans font-normal text-gray-700 mb-6">
              We will get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="flex flex-col justify-center items-center md:items-start py-8">
            <div className="flex items-center space-x-4 mb-4">
              <a href="tel:+9986177461" className="flex items-center space-x-4">
                <FaPhone className="w-10 h-10 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    +9986177461
                  </h3>
                  <p className="text-lg font-normal text-gray-700">
                    Free Support
                  </p>
                </div>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="mailto:team@medsway.in"
                className="flex items-center space-x-4"
              >
                <MdEmail className="w-10 h-10 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    team@medsway.in
                  </h3>
                  <p className="text-lg font-normal text-gray-700">
                    Help Email Support
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

