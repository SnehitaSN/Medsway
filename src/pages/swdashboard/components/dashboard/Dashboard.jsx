import React, { useState } from "react";
import DashboardLayout from "../../dashboardlayout/DashboardLayout";

import Modal from "react-modal";
import Barchart from "./Barchart";
import Donutchart from "./Donutchart";
import Horizontalchart from "./Horizontalchart";
import Scatterchart from "./Scatterchart";
import Horizontalchart2 from "./Horizontalchart2";

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
function Dashboard() {
  const [SelectedOption, setSelectedOption] = useState("");

  const [IsOpen, setIsOpen] = useState(false);



  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleReset = () => {
    setSelectedOption(""); // Reset the selected option
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Function to handle the download
  const handleDownload = () => {
    const html = document.documentElement.outerHTML;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "page.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Function to handle printing the current page
  const handlePrint = () => {
    window.print(); // Invoke the browser's print functionality
  };

  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer">
            Dashboard
          </h1>

          <div className="ml-80 -mt-4 mb-15">
            <h2 className="mr-20 text-md  font-bold text-gray-700">
              Choose an Option
            </h2>
            <select
              className=" border-2   border-gray-400 rounded-lg"
              value={SelectedOption}
              onChange={handleSelectChange}
            >
              <option className="text-md px-3 py-2 font-bold text-gray-700">
                Select an option
              </option>
              <option className="text-md  font-normal text-gray-700">
                1 Month
              </option>
              <option className="text-md  font-normal text-gray-700">
                3 Months
              </option>
              <option className="text-md  font-normal text-gray-700">
                6 Months
              </option>
              <option className="text-md  font-normal text-gray-700">
                1 Year
              </option>
            </select>
            <button
              onClick={handleReset}
              className="ml-4 px-3 py-1 rounded-lg bg-gray-200 text-gray-700 hover:bg-blue-300 focus:outline-none"
            >
              Reset
            </button>
            {/* display the selected option */}
            {SelectedOption && <p>You selected : {SelectedOption}</p>}
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
          <div>
            {/* <div>
                        <h2 className='text-gray-700 text-md leading-[17px] font-bold mb-4 mt-2'>Profits for the Period</h2>
                        <h1 className='text-violet-600 text-[20px] leading-[24px] font-bold  mt-[5px] mb-4'>Rs.76000</h1>
                        <h4 className='text-gray-700 text-sm leading-[17px] font-bold'>up <span className='text-green-600 text-sm'>13%</span> YoY</h4>
                    </div> */}
          </div>
          <div className=" h-[100px] mr-6 rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-gray-700 text-md leading-[17px] font-bold mb-4 mt-2">
                Profits for the Period
              </h2>
              <h1 className="text-violet-600 text-[20px] leading-[24px] font-bold  mt-[5px] mb-4">
                Rs.76000
              </h1>
              <h4 className="text-gray-700 text-sm leading-[17px] font-bold">
                up <span className="text-green-600 text-sm">13%</span> YoY
              </h4>
            </div>
          </div>
          <div className=" h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#36B9CC] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-gray-700 text-md leading-[17px] font-bold mb-4 mt-2">
                Payables/Pending Invoices
              </h2>
              <h1 className="text-violet-600 text-[20px] leading-[24px] font-bold  mt-[5px] mb-4">
                Rs.19000
              </h1>
              <h4 className="text-gray-700 text-sm leading-[17px] font-bold">
                down <span className="text-green-600 text-sm">7%</span> YoY
              </h4>
            </div>
          </div>
          <div className=" h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#F6C23E] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-gray-700 text-md leading-[17px] font-bold mb-4 mt-2">
                Total SKU
              </h2>
              <h1 className="text-violet-600 text-[20px] leading-[24px] font-bold  mt-[5px] mb-4">
                156000
              </h1>
              <h4 className="text-gray-700 text-sm leading-[17px] font-bold">
                across 59 brands,up{" "}
                <span className="text-green-600 text-sm">9%</span> YoY
              </h4>
            </div>
          </div>
        </div> <hr className="mt-2 mb-6"/>

        {/* bar chart & donut chart */}
        <div className=" grid grid-cols-2 gap-20 mt-6 mb-6">
          <div className="flex justify-center"><Barchart/></div>
          <div className="flex justify-end"><Donutchart/></div>
        </div><hr  className="mt-2 mb-6"/>

        {/* horizaontal bar,scatter,horizontal bar */}

        <div className=" grid grid-cols-2 gap-20 mt-6 mb-6">
          <div className="flex justify-center"><Horizontalchart/></div>
          <div className="flex justify-end"><Scatterchart/></div>
        </div><hr  className="mt-2 mb-6"/>

        {/* <div className="grid grid-cols-3 gap-10 mt-6 bg-blue-300  mb-4">
          <div className="w-full max-w-md mx-auto ml-64"> 
          <div className=" flex justify-start ml-72"><Horizontalchart/></div></div>
          <div className="flex justify-center">Scatter</div>
          <div className="flex justify-end">Horiz 2</div>
        </div> */}

<div className="mt-2 mb-6">
  <div className="flex justify-center">
    <Horizontalchart2/></div>
</div>
        {/* 3 buttons */}

        <div className="mt-10 mb-18 ">
          <div className="flex flex-1 justify-center space-x-14">
            <div className="text-white font-normal">
              <button
                onClick={handleDownload}
                className="border-1 ml-4 bg-gray-700  rounded-lg px-8 py-2 text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 "
              >
               <h3>Download</h3> 
              </button>
            </div>

            <div>
              <button
                onClick={handlePrint}
                className="border-1 bg-gray-700  rounded-lg px-8 py-2 text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 "
              >
                <h3>Print</h3>
              </button>
            </div>

            <div>
              <button
                onClick={openModal}
                className="border-1 bg-gray-700  rounded-lg px-8 py-2 text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 "
              >
               <h3>  Report here</h3>
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
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
