import React from "react";

function Testimonial() {
  return (
    <div>
      {/* <section className="text-gray-600 font-sans mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-4xl mb-10   font-bold text-gray-800' >The Stunning Results our <br></br>
                    Customers have experienced
                    </h1>
                    
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fHww" />
                                <p  className="leading-relaxed   ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4" />
                                <h2  className="text-gray-900   font-medium title-font tracking-wider text-sm uppercase">Andrew Matthew</h2>
                                <p className="text-gray-500   ">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.istockphoto.com/id/1279844456/photo/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=yFtE_NkazT64oWCk4hPdlLAzZ_iWJBEsi-KjV-0OS2s=" />
                                <p  className="leading-relaxed   ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4" />
                                <h2  className="text-gray-900    font-medium title-font tracking-wider text-sm uppercase">Lisa Madona</h2>
                                <p  className="text-gray-500   ">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" />
                                <p  className="leading-relaxed   ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4" />
                                <h2  className="text-gray-900   font-medium title-font tracking-wider text-sm uppercase">Arundhati Joshi</h2>
                                <p  className="text-gray-500   ">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      <section className="text-gray-600 font-sans mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-center text-4xl mb-10 font-bold text-gray-800">
            The Stunning Results our <br />
            Customers have experienced
          </h1>

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* User icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-800"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0h24v24H0z" stroke="none" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M12 11c-2 0-3.5 1-5 2" />
                    <path d="M12 11c2 0 3.5 1 5 2" />
                    <path d="M15 20H9a2 2 0 0 1-2-2l1-5h8l1 5a2 2 0 0 1-2 2z" />
                  </svg>
                </div>
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <p className="text-gray-900 font-medium mb-1 mt-4">Andrew Matthew</p>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* User icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-800"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0h24v24H0z" stroke="none" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M12 11c-2 0-3.5 1-5 2" />
                    <path d="M12 11c2 0 3.5 1 5 2" />
                    <path d="M15 20H9a2 2 0 0 1-2-2l1-5h8l1 5a2 2 0 0 1-2 2z" />
                  </svg>
                </div>
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <p className="text-gray-900 font-medium mb-1 mt-4">Andrew Matthew</p>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* User icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-800"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0h24v24H0z" stroke="none" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M12 11c-2 0-3.5 1-5 2" />
                    <path d="M12 11c2 0 3.5 1 5 2" />
                    <path d="M15 20H9a2 2 0 0 1-2-2l1-5h8l1 5a2 2 0 0 1-2 2z" />
                  </svg>
                </div>
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <p className="text-gray-900 font-medium mb-1 mt-4">Andrew Matthew</p>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
