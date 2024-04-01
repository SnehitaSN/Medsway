import React, { useState,useRef } from "react";
import { Card, Metric, Text } from "@tremor/react";
import Areachart from "./Areachart";
import Donutchart from "./Donutchart";
import Barchart from "./Barchart";
import Linechart from "./Linechart";
import Modal from "react-modal";
import { useReactToPrint } from 'react-to-print';
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../swdashboard/dashboardlayout/DashboardLayout"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Kpi() {
  //state to manage selectd option
  const [SelectedOption, setSelectedOption] = useState("");
  //modal for modal popup
  const [IsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const PrintRef = useRef()

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //function to handle changes in the select dropdown
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleClick = () => {
  //   // navigate to error form page
  //   navigate("");
  // };

  const handleClick = () => {
    navigate("/invoicegen");
  };
  
  //handle Print
  const handlePrint = useReactToPrint({
    content: () => PrintRef.current,
  });
  

  // Function to handle the download
  const handleDownload = () => {
    const html = document.documentElement.outerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <DashboardLayout>
    <div ref={PrintRef}>
      <div  className=" mt-40 mb-20 ml-40">
        <div className="grid grid-cols-2  gap-10">
          {/* cards about sku,amount billed,profit */}
          <div className="flex flex-1 justify-center space-x-10">
            <div>
              <Card className="mx-auto w-52   h-22 pl-2 pr-2  border-2   border-gray-400 rounded-lg">
                <Text className="text-xl font-body  text-black">
                  Total Amount Billed
                </Text>
                <Metric className="text-md font-body font-md text-gray-900">
                  &#8377; 12,000
                </Metric>
              </Card>
            </div>
            <div>
              <Card className="mx-auto w-48   h-22 pl-2 pr-2  border-2   border-gray-400 rounded-lg">
                <Text className="text-xl font-body  text-black">
                  Total Brands Unit
                </Text>
                <Metric className="text-md font-body font-md text-gray-900">
                  100 SKU
                </Metric>
              </Card>
            </div>
            <div>
              <Card className="mx-auto w-48   h-22 pl-2 pr-2   border-2   border-gray-400 rounded-lg">
                <Text className="text-xl font-body text-black">
                  Profit% for Period
                </Text>
                <Metric className="text-md font-body font-md text-gray-900">
                  20%
                </Metric>
              </Card>
            </div>
          </div>
          {/* select months */}
          <div className="ml-80 -mt-4 mb-15">
            <h2 className="mr-20 text-lg font-body font-bold text-gray-700">
              Choose an Option
            </h2>
            <select
              className=" border-2   border-gray-400 rounded-lg"
              value={SelectedOption}
              onChange={handleSelectChange}
            >
              <option className="text-md font-body font-bold text-gray-700">
                Select an option
              </option>
              <option className="text-md font-body font-bold text-gray-700">
                1 Month
              </option>
              <option className="text-md font-body font-bold text-gray-700">
                3 Months
              </option>
              <option className="text-md font-body font-bold text-gray-700">
                6 Months
              </option>
              <option className="text-md font-body font-bold text-gray-700">
                1 Year
              </option>
            </select>
            {/* display the selected option */}
            {SelectedOption && <p>You selected : {SelectedOption}</p>}
          </div>
        </div>
      </div>
      {/* Area/donut charts */}
      <div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <Areachart />
          </div>
          <div>
            <Donutchart />
          </div>
        </div>
      </div>
      {/* Bar/line charts */}
      <div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <Barchart />
          </div>
          <div className="mt-8">
            <Linechart />
          </div>
        </div>
      </div>

      {/* 3 buttons */}

      <div className="mt-10 mb-16">
        <div className="flex flex-1 justify-center space-x-14">
          <div className="">
            <button onClick={handleDownload}
            className="border-1 ml-4 bg-gray-700  rounded-lg px-8 py-2 text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 ">
              Download
            </button>
          </div>

          <div>
            <button onClick={handlePrint}
             className="border-1 bg-gray-700  rounded-lg px-8 py-2 text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 ">
              Print
            </button>
          </div>

          <div>
            <button
              onClick={openModal}
              className="border-1 bg-gray-700  rounded-lg px-8 py-2 text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 "
            >
              Report here
            </button>
            <Modal isOpen={IsOpen} style={customStyles}>
              <div className="flex flex1 justify-center  space-x-28">
                <div className="mr-30">
                  <h1 className="mb-4 mt-2 font-body">
                    Please Fill Error Details Below
                  </h1>
                  <form>
                    <div className="mb-4">
                      <label for="text "></label>
                      <input type="text" placeholder="Enter here" />
                    </div>
                    <br></br>

                    <div className="mb-2">
                      <label for="text "></label>
                      <input type="text" placeholder="Enter here" />
                    </div>
                    <br></br>
                    <div className="mb-4">
                      <button className="bg-blue-400 border-1 rounded-lg px-6 py-2">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                <button onClick={closeModal} className="ml-60  -mt-60">
                  ❌
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <button type="submit"
      className="px-4 py-2 mr-8 mt-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
       onClick={handleClick}>
        Go Back
        </button>
    </div>
    </DashboardLayout>
  );
}

export default Kpi;
