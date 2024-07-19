import React from "react";
import Layout from "../../components/layout/Layout";

function Aboutus() {
  return (
    <Layout>
      <div>
        {/* About us section */}
        <div className="mt-10 md:mt-40 flex flex-col md:flex-row justify-between items-center">
          {/* Left Content */}
          <div className="w-full mt-10 md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl text-blue-800 font-bold text-center mb-4">
              About
            </h1>
            <p className="text-gray-700 text-xl text-center px-4 md:ml-8">
              Medsway is on a mission to empower India's pharmaceutical
              distribution network with technology and intelligence to deliver
              affordable medicines to 140 billion people.
            </p>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.linkedin.com/company/medsway"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-800"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1572596654/photo/star-shape-and-hands-of-business-people-with-peace-team-building-motivation-and-below-support.webp?b=1&s=170667a&w=0&k=20&c=hiP9ARTq_QoILSvfT5P_E2RBP9QNBvDhLYHh0xIrIko="
              alt="aboutus"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Our goals & visions section */}
        <div className="bg-blue-50 mt-20 md:mt-12 mb-12 px-4 md:px-0">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Goals Section */}
              <div className="mb-10 md:ml-16 md:mr-8">
                <div className="mt-4">
                  <h3 className="text-2xl text-blue-600 font-bold text-center md:text-start mb-4">
                    Our
                    <span className="text-blue-500 font-bold"> Goals</span>
                  </h3>
                </div>
                <div className="mt-4">
                  <h2 className="text-3xl font-normal text-gray-800 text-center md:text-start mb-4">
                    To Upscale your business <br />
                    to the next level
                  </h2>
                </div>
                <div className="mt-4">
                  <p className="text-lg text-gray-700 font-normal text-center md:text-start">
                    <span className="text-3xl font-extrabold mt-1"> &#8226;</span>{" "}
                    Establish a connected network of pharmacies and distributors
                    in India and other emerging economies. <br />
                    <span className="text-3xl font-extrabold mt-1"> &#8226;</span>{" "}
                    Improve the accessibility to life-saving medicines such as
                    TB drugs, retroviral therapies and orphan drugs.
                  </p>
                </div>
              </div>

              {/* Vision Section */}
              <div className="mb-10 md:ml-8 md:mr-16">
                <div className="mt-4">
                  <h3 className="text-2xl text-blue-600 font-bold text-center md:text-start mb-4">
                    Our
                    <span className="text-blue-500 font-bold"> Vision</span>
                  </h3>
                </div>
                <div className="mt-4">
                  <h2 className="text-3xl font-normal text-gray-800 text-center md:text-start mb-4">
                    To Provide Solutions for <br />
                    growing companies
                  </h2>
                </div>
                <div className="mt-4">
                  <p className="text-lg text-gray-700 font-normal text-center md:text-start">
                    <span className="text-3xl font-extrabold mt-1"> &#8226;</span>{" "}
                    Redefine the pharmaceutical distribution ecosystem. <br />
                    <span className="text-3xl font-extrabold mt-1"> &#8226;</span>{" "}
                    Leverage AI and cutting-edge technologies to empower
                    suppliers, retailers and patients. <br />
                    <span className="text-3xl font-extrabold mt-1"> &#8226;</span>{" "}
                    Ensure the accessibility of life-saving medicines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our team section */}
        <div className="flex flex-col mb-6 md:flex-row">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="mt-4">
              <h2 className="text-4xl font-normal text-gray-700 text-center md:text-left mb-4">
                Our Team
              </h2>
              <p className="text-lg font-normal text-gray-700 text-center md:text-left mb-4">
                We are a small team of professionals with over 12 years
                of industry experience, all sharing a common{" "}
                <span className="text-blue-800">vision to make India's healthcare ecosystem future ready.</span>
              </p>
              <p className="text-lg font-normal text-gray-700 text-center md:text-left">
                Our executive team consists of seasoned healthcare
                professionals <span className="text-blue-800">(yes, doctors!),</span> product managers,
                engineers and designers from premier Indian institutions.
                Backed by serial entrepreneurs.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <div className="mt-4">
              <h2 className="text-4xl font-normal text-gray-700 text-center md:text-left mb-4">
                We are hiring
              </h2>
              <p className="text-lg font-normal text-gray-700 text-center md:text-left mb-4">
                We are currently looking for software engineers,
                interns, database developers and UX designers to join our team.
                If you share our vision and are skilled in any of these areas,
                write to us at <span className="text-blue-600">team@medsway.in</span> and we
                will get back to you within a week.
                <br /><br />
                <span className="text-blue-600">Note:</span> We are a remote-first company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Aboutus;

