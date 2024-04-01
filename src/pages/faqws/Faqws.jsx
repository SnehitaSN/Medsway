import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Card } from "@tremor/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function Faqws() {
  const questions = [
    "How do I grow my Business?",
    "Can I cancel my subscription?",
    "How do I contact the support?",
    "Is a credit card required?",
  ];

  //   const [showAnswer, setShowAnswer] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  //   const handleToggleAnswer = (index) => {
  //     setShowAnswer(showAnswer === index ? null : index);
  //   };

  const handleToggleAnswer = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <Layout>
      <div className="mt-40 mb-20">
        <sectionf className="mt-20 mb-5">
          <div className="grid grid-cols-2 gap-6 mb-8 mt-12 bg-blue-200 rounded-2xl">
            <div className=" text-center mt-20">
              <h2 className="mt-4 text-xl text-gray-800 font-sans font-semibold  mb-2">
                Frequently Asked <br></br> Questions
              </h2>
              <p className="mt-1 text-lg font-sans font-semibold ml-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing<br></br>{" "}
                elit. Esse,similique! Fugiat architecto cum vero quidem.
              </p>
            </div>

            <div className="mr-8">
              {questions.map((question, index) => (
                <div key={index}>
                  <Card
                    className={`max-w-xs mx-auto px-6 py-4 bg-white flex flex-1 space-x-2 justify-center mb-6 rounded-3xl mt-8 cursor-pointer ${
                      expandedCard === index ? "border border-indigo-500" : ""
                    }`}
                    decoration="top"
                    decorationColor="indigo"
                    onClick={() => handleToggleAnswer(index)}
                  >
                    <div className="flex flex-1 justify-center space-x-6">
                      <h2 className="text-md font-sans font-semibold text-gray-700">
                        {question}
                      </h2>
                      {expandedCard === index ? (
                        <FaMinus className="mt-1 w-6 h-6 text-blue-800" />
                      ) : (
                        <FaPlus className="mt-1 w-6 h-6 text-blue-800" />
                      )}
                    </div>
                  </Card>
                  {expandedCard === index && (
                    <div className="text-center mt-2 font-sans  text-gray-700">
                      This is the answer to {question}.
                    </div>
                  )}
                </div>
              ))}

              {/* card 01 */}
              {/* <Card
                className="max-w-xs mx-auto px-6 py-4 cursor-pointer bg-white flex flex-1 space-x-2 justify-center mb-6 rounded-3xl mt-8"
                decoration="top"
                decorationColor="indigo"
                onClick={() => handleToggleAnswer(1)}
              >
                <div className="flex flex-1 justify-center space-x-6">
                  <h2 className="text-md font-body font-semibold text-black">
                    How do i grow my Buisness?
                  </h2>
                  <FaMinus className="mt-1 w-6 h-6" />
                </div>
              </Card>
              {showAnswer === 1 && (
                <div className="text-center mt-2 text-gray-700">
                  This is the answer to the question "How do i grow my
                  Buisness?"
                </div>
              )} */}
              {/* card 02 */}
              {/* <Card
                className="max-w-xs mx-auto px-8 py-6 cursor-pointer bg-white flex flex-1 space-x-2 justify-center mb-6 rounded-3xl mt-8"
                decoration="top"
                decorationColor="indigo"
                onClick={() => handleToggleAnswer(1)}
              >
                <div className="flex flex-1 justify-center space-x-6">
                  <h2 className="text-md font-body font-semibold text-black">
                    Can i cancel my subscription?
                  </h2>
                  <FaPlus className="mt-1 w-6 h-6" />
                </div>
              </Card>
              {showAnswer === 1 && (
                <div className="text-center mt-2 text-gray-700">
                  This is the answer to the question "Can i cancel my
                  subscription?"
                </div>
              )} */}
              {/* card 03 */}
              {/* <Card
                className="max-w-xs mx-auto px-8 py-6 cursor-pointer bg-white flex flex-1 space-x-2 justify-center mb-6 rounded-3xl mt-8"
                decoration="top"
                decorationColor="indigo"
                onClick={() => handleToggleAnswer(1)}
              >
                <div className="flex flex-1 justify-center space-x-6">
                  <h2 className="text-md font-body font-semibold text-black">
                    How do i contact the support?
                  </h2>
                  <FaPlus className="mt-1 w-6 h-6" />
                </div>
              </Card>

              {showAnswer === 1 && (
                <div className="text-center mt-2 text-gray-700">
                  This is the answer to the question "How do i contact the
                  support?"
                </div>
              )} */}

              {/* card 04 */}
              {/* <Card
                className="max-w-xs mx-auto px-8 py-6 cursor-pointer bg-white flex flex-1 space-x-2 justify-center mb-6 rounded-3xl mt-8"
                decoration="top"
                decorationColor="indigo"
                onClick={() => handleToggleAnswer(1)}
              >
                <div className="flex flex-1 justify-center space-x-6">
                  <h2 className="text-md font-semibold font-body mr-2 text-black">
                    Is a credit card required ?
                  </h2>
                  <FaPlus className="mt-1 w-6 h-6" />
                </div>
              </Card>

              {showAnswer === 1 && (
                <div className="text-center mt-2 text-gray-700">
                  This is the answer to the question "Is a credit card required
                  ?"
                </div>
              )} */}
            </div>
          </div>
        </sectionf>
      </div>
    </Layout>
  );
}

export default Faqws;
