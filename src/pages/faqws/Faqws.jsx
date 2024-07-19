import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Card } from "@tremor/react";
import { BsQuestion } from "react-icons/bs";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import "./Faqws.css"; // Import the custom CSS file

function Faqws() {
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
      <div className="mt-40 mb-20">
        <section className="mt-20 mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-12 bg-blue-200 rounded-2xl">
            <div className="text-center mt-20 px-6 md:px-0">
              <h2 className="mt-4 text-xl text-gray-800 font-sans font-semibold mb-2">
                Frequently Asked Questions
              </h2>
              <p className="mt-1 text-lg font-sans font-normal ml-2 text-gray-700">
                Read through the FAQs and get your concerns addressed instantly.{" "}
                <br />
                More questions? You can always reach out to us at
                <a
                  href="mailto:support@medsway.in"
                  className="text-blue-800 underline"
                >
                  {" "}
                  support@medsway.in{" "}
                </a>
                and <br /> we will respond in the shortest possible time.
              </p>
            </div>

            <div className="mr-8 px-6 md:px-0">
              {faqData.map((faq, index) => (
                <div key={index} className="mb-6">
                  <Card
                    className={`max-w-full mx-auto mt-4 px-8 py-4 bg-white flex items-center justify-between rounded-2xl cursor-pointer ${
                      expandedCard === index ? "border border-indigo-500" : ""
                    }`}
                    decoration="top"
                    decorationColor="indigo"
                    onClick={() => handleToggleAnswer(index)}
                  >
                    <div className="text-lg font-sans font-semibold text-gray-700">
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
                        className="font-sans text-lg text-gray-700 text-left"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></div>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Faqws;
