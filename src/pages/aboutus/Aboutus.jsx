import React from "react";
import Testimonial from "../testimonial/Testimonial";

import Layout from "../../components/layout/Layout";

function Aboutus() {
  return (
    <Layout>
      <div>
        {/* proud products section */}
        <div className=" mt-40 mb-14 bg-gradient-to-r from-blue-50 to-white">
          <div className="mt-10">
            <h1 className="text-3xl font-bold font-body mb-8 mt-12 text-center text-gray-600">
              We are proud of our Products
            </h1>
            <p className="text-center text-lg font-body font-normal mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ipsa
              aspernatur necessitatibus esse harum, voluptates providen{" "}
              <br></br>
              asperiores commodi itaque dolorum nemo?
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-18 mt-10 mb-10">
              <div className="">
                <img
                  alt="ourproducts"
                  className="ml-10 w-64 h-64 border-1 shadow-white border-zinc-100 rounded-xl"
                  src="https://images.unsplash.com/photo-1618044733300-9472054094ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaCUyMGZsb3d8ZW58MHx8MHx8fDA%3D"
                />
              </div>
              <div>
                <img
                  alt="ourproducts"
                  className="ml-10 w-64 h-64 border-1 shadow-white border-zinc-100 rounded-xl"
                  src="https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNpbmVzfGVufDB8fDB8fHww"
                />
              </div>
              <div>
                <img
                  alt="ourproducts"
                  className="ml-10 w-64 h-64 border-1 shadow-white border-zinc-100 rounded-xl"
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbnNhY3Rpb25zfGVufDB8fDB8fHww"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About us section */}
        <div className="mt-8 mb-16">
          <div>
            <h3 className="text-center font-body text-blue-500 text-2xl font-bold">
              About
              <span className="text-blue-300 font-body font-bold mb-8">Us</span>
            </h3>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-body font-bold text-gray-600 text-center">
              We're a team of Medicine Analysts
            </h2>
          </div>
          <div className="mt-4">
            <p className="text-center font-body text-gray-600 text-lg font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur debitis officia unde mollitia voluptate <br></br>
              Veniam mollitia molestiae officia aperiam fugiat sit
              laudantium?Veniam mollitia molestiae officia aperiam fugiat sit
              laudantium?<br></br>
            </p>
          </div>
        </div>

        {/* our goals & visions section */}
        <div className="bg-blue-50 mt-20 mb-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <div className="mt-4">
                  <h3 className="text-start ml-32 font-body text-blue-600 text-2xl font-extrabold">
                    Our
                    <span className="text-blue-500 font-body font-bold mb-8">
                      {" "}
                      Goals
                    </span>
                  </h3>
                </div>
                <div className="mt-4">
                  <h2 className="text-3xl  font-bold font-body text-gray-600 text-start ml-32">
                    To Upscale your business <br></br>
                    <span className="text-3xl font-bold font-body text-gray-600 text-start mr-32">
                      to the next level.
                    </span>
                  </h2>
                </div>
                <div className="mt-6">
                  <p className="text-start ml-32 font-body text-gray-600 text-lg font-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur debitis officia unde mollitia
                    voluptateconsectetur adipisicing elit <br></br>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <br></br>
                  </p>
                </div>
              </div>

              <div>
                <div className="mt-4">
                  <h3 className="text-start ml-32 font-body text-blue-600 text-2xl font-extrabold">
                    Our
                    <span className="text-blue-500 font-body font-bold mb-8">
                      {" "}
                      Vision
                    </span>
                  </h3>
                </div>
                <div className="mt-4">
                  <h2 className="text-3xl ml-32 font-bold font-body text-gray-600 text-start">
                    To Provide Solutions for <br></br>
                    <span className="text-3xl font-bold font-body text-start text-gray-600 mr-20">
                      growing companies
                    </span>
                  </h2>
                </div>
                <div className="mt-6">
                  <p className="text-start ml-32 font-body text-gray-600 text-lg font-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur debitis officia unde mollitia
                    voluptateconsectetur adipisicing elit <br></br>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our team section */}
        <div className="flex ">
          <div className="w-1/2  ">
            <div className="mt-4 mb-6">
              <h2 className="text-4xl font-bold font-body text-gray-600 text-center mt-4">
                Our Team
              </h2>
              <p className="text-md font-normal font-body text-gray-600 text-center mt-4 mb-4">
                We are a small team of professionals with over 12 years
                <br />
                of industry experience, all sharing a common <br></br>
                <span className="text-md font-bold font-body text-blue-600 text-center mt-2">
                  vision to make India's healthcare ecosystem future ready.
                </span>
                <br />
              </p>

              <p className="text-md font-normal font-body text-gray-600 text-center">
                Our executive team consists of seasoned healthcare <br />
                professionals{" "}
                <span className="text-blue-600">(yes, doctors!),</span> product
                managers,
                <br />
                engineers and designers from premier Indian institutions.
                <br />
                Backed by serial entrepreneurs.
              </p>
            </div>
          </div>
          <div className="w-1/2  p-4 ">
            <div className="mt-4 mb-6">
              <h2 className="text-4xl font-bold font-body text-gray-600 text-center mt-4 mb-4">
                We are hiring
              </h2>
              <p className="text-md font-normal font-body text-gray-600 text-center">
                We are currently looking for software engineers,
                <br />
                interns, database developers and UX designers to join <br />
                our team. If you share our vision and are skilled in any <br />
                of these areas, write to us at{" "}
                <span className="text-blue-600">team@medsway.in</span> and we{" "}
                <br />
                will get back to you within a week.
                <br /> <br />
                <span className="text-blue-600 ">Note:</span> We are a remote
                first company.
              </p>
            </div>
          </div>
        </div>

        <Testimonial />
      </div>
    </Layout>
  );
}

export default Aboutus;
