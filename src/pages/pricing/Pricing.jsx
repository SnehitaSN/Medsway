import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { IoArrowForwardCircle } from "react-icons/io5";
import { RiBillLine, RiBillFill } from "react-icons/ri";
import { Card } from "@tremor/react";
import { BsQuestion } from "react-icons/bs";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import "./Pricing.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Pricing() {
  // const navigate = useNavigate();

  const handleClick = () => {
    //  navigate("/invoicegen");
    // Show toast notification
    toast.info("Website is under test mode", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const faqData = [
    {
      question: "Who is eligible to access Medsway platform and services?",
      answer: `
        Medsway platform is built for the pharmaceutical supply chain:
        <ul>
          <li> A.If you run a pharmacy</li>
          <li> B.a distribution center</li>
          <li> C.an agency</li>
          <li> D.a pharmaceutical manufacturer</li>
          <li> E.a healthcare practitioner</li>
        </ul>
        you can create an account and subscribe to suitable plans for accessing the Medsway platform.
      `,
    },
    {
      question: "What is the process for onboarding to Medsway?",
      answer: `
        The onboarding process includes:
        <ul>
          <li> A.Create an account if you are among the eligible groups.</li>
          <li> B.Submit KYC documents after creating the account.</li>
          <li> C.Upon verification, your account will be activated within 24-72 hrs.</li>
        </ul>
      `,
    },
    {
      question:
        "I am currently using an inventory management and billing solution. How can I still use Medsway?",
      answer: `
        You can avail Medsway intelligence platform in two ways:
        <ul>
          <li> A.One [recommended] way is to migrate your data and account to the Medsway platform. This can be done instantly and our ground staff will assist you with migration upon receiving request.</li>
          <li> B.The second option is to avail our API endpoints which can be integrated with your existing tools to provide you with necessary data and support.
           <li> C.Our API endpoint services are a part of customized solutions.</li>
           Please write to us at <a href="mailto:support@medsway.in" className="text-blue-800 underline">support@medsway.in</a> for more details.</li>
        </ul>
      `,
    },
    {
      question: "Is a credit card required?",
      answer: `
        No, a credit card is not mandatory:
        <ul>
          <li>An active bank account is necessary to avail all the services offered by the Medsway platform.</li>
        </ul>
      `,
    },
  ];
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggleAnswer = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Layout>
      <div>
        <div className="text-center mt-24 font-sans mb-3 px-4 md:px-10 py-20">
          <h1 className="text-4xl text-gray-700 font-bold font-sans text-center">
            Pricing plans that suit you
          </h1>
          <p className="mt-4 text-center text-xl font-normal text-gray-600">
            From single general counter pharmacies to multi-store pharmacy
            <br className="hidden md:block"></br> chains, we have
            budget-friendly plans for all..
          </p>
        </div>

        {/* pricing plans regular & platinum plan */}
        <div className="flex flex-col md:flex-row justify-center items-center font-sans space-y-4 md:space-y-0 md:space-x-9">
          {/* Regular Plan */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-violet-900">
            <div className="container w-80 h-120 border-2 rounded-3xl shadow-2xl hover:border-violet-900 hover:shadow-2xl">
              <div className="mt-6 mb-4 px-6">
                <div className="flex space-x-3">
                  <RiBillFill className="w-14 h-14" />
                  <h2 className="font-bold text-2xl text-gray-600">
                    Medsway One
                  </h2>
                </div>
              </div>
              <hr className="mb-6" />
              <ul className="font-sans px-6">
                <div className="flex mb-1">
                  <IoArrowForwardCircle className="w-10 h-10" />
                  <li className="ml-6 text-lg font-normal text-gray-800">
                    Custom dashboard with all features enabled.
                  </li>
                </div>
                <div className="flex mb-1">
                  <IoArrowForwardCircle className="w-8 h-8" />
                  <li className="ml-6 text-lg font-normal text-gray-800">
                    Inventory management intelligence.
                  </li>
                </div>
                <div className="flex mb-1">
                  <IoArrowForwardCircle className="w-10 h-10" />
                  <li className="ml-6 text-lg font-normal text-gray-800">
                    Alerts and reminders for near-expiry products.
                  </li>
                </div>
                <div className="flex mb-1">
                  <IoArrowForwardCircle className="w-9 h-9" />
                  <li className="ml-6 text-lg font-normal text-gray-800">
                    Exclusive deals and offers from suppliers.
                  </li>
                </div>
                <div className="flex mb-1">
                  <IoArrowForwardCircle className="w-7 h-7" />
                  <li className="ml-6 text-lg font-normal text-gray-800">
                    Upto 2 user logins
                  </li>
                </div>
              </ul>
              <hr className="mt-6" />
              <div className="text-center px-6">
                <h2 className="mt-6 font-bold text-4xl text-gray-600">
                  INR 2999/yr
                </h2>
                <h4 className="font-normal">For Limited Period</h4>
                <button
                  onClick={handleClick}
                  className="bg-gray-600 mb-6 mt-4 px-10 py-2 text-white text-lg rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300"
                >
                  Buy Plan
                </button>
              </div>
            </div>
          </div>

          {/* Platinum Plan */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-violet-900">
            <div className="container w-80 h-140 border-2 rounded-3xl shadow-2xl hover:border-violet-900 hover:shadow-2xl">
              <div className="mt-6 mb-6 px-6">
                <div className="flex space-x-3">
                  <RiBillLine className="w-14 h-14" />
                  <h2 className="font-bold text-2xl text-gray-600">
                    Medsway Plus
                  </h2>
                </div>
              </div>
              <hr className="mb-6" />
              <ul className="font-sans px-6">
                <div className="flex mb-1">
                  <IoArrowForwardCircle className="w-8 h-8" />
                  <li className="ml-6 text-lg font-normal text-gray-800">
                    All the features of Medsway One plan.
                  </li>
                </div>
                <div className="flex mb-1">
                  <IoArrowForwardCircle className="w-7 h-7" />
                  <li className="ml-6 text-lg font-normal text-gray-800">
                    Local intelligence customization.
                  </li>
                </div>
                <div className="flex mb-1">
                  <IoArrowForwardCircle className="w-8 h-8" />
                  <li className="ml-6 text-lg font-normal text-gray-800">
                    Bulk ordering suite with exclusive offers.
                  </li>
                </div>
                <div className="flex mb-1">
                  <IoArrowForwardCircle className="w-9 h-9" />
                  <li className="ml-6 text-lg font-normal text-gray-800">
                    Supplier relationship management modules.
                  </li>
                </div>
                <div className="flex mb-1">
                  <IoArrowForwardCircle className="w-6 h-6" />
                  <li className="ml-6 text-lg font-normal text-gray-800">
                    Upto 5 user logins.
                  </li>
                </div>
              </ul>
              <hr className="mt-6" />
              <div className="text-center px-6">
                <h2 className="mt-6 font-bold text-4xl text-gray-600">
                  INR 5999/yr
                </h2>
                <h4 className="font-normal">For Limited Period</h4>
                <button
                  onClick={handleClick}
                  className="bg-gray-600 mb-8 mt-4 px-10 py-2 text-white text-lg rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300"
                >
                  Buy Plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

        {/* FAQ Section */}
        <div className="mt-20 mb-20 px-4 md:px-10">
          <section className="bg-blue-200 rounded-2xl p-6">
            <div className="text-center mt-4">
              <h2 className="text-xl text-gray-800 font-semibold mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700">
                Read through the FAQs and get your concerns addressed instantly.
                <br />
                More questions? You can always reach out to us at
                <a
                  href="mailto:support@medsway.in"
                  className="text-blue-800 underline"
                >
                  {" "}
                  support@medsway.in{" "}
                </a>
                and we will respond in the shortest possible time.
              </p>
            </div>
            <div className="mt-6">
              {faqData.map((faq, index) => (
                <div key={index} className="mb-6">
                  <Card
                    className={`max-w-full mx-auto px-8 py-4 bg-white flex items-center justify-between rounded-2xl cursor-pointer ${
                      expandedCard === index ? "border border-indigo-500" : ""
                    }`}
                    decoration="top"
                    decorationColor="indigo"
                    onClick={() => handleToggleAnswer(index)}
                  >
                    <div className="text-lg font-semibold text-gray-700">
                      {faq.question}
                    </div>
                    <div>
                      {expandedCard === index ? (
                        <MdOutlineQuestionAnswer
                          className="text-blue-800"
                          size={34}
                        />
                      ) : (
                        <BsQuestion className="text-blue-800" size={34} />
                      )}
                    </div>
                  </Card>
                  {expandedCard === index && (
                    <Card className="max-w-full mx-auto px-4 py-4 bg-white mt-2 rounded-2xl overflow-y-auto max-h-40 custom-scroll">
                      <div
                        className="text-lg text-gray-700 text-left"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></div>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Pricing;
