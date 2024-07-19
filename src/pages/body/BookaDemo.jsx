import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiArrowRightSLine } from "react-icons/ri"; // Importing the forward arrow icon

function BookaDemo() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    bname: "",
    oname: "",
    address: "",
    pnum: "",
    bktm: "",
    demoType: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    // Show the toast notification
    toast.info("Website is under test mode", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Reset the form
    setForm({
      bname: "",
      oname: "",
      address: "",
      pnum: "",
      bktm: "",
      demoType: "",
    });

    // Navigate to another page if needed
    // navigate("/");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center mt-36 mb-14">
        <h2 className="text-2xl font-semibold mb-4 text-center">Book a Demo</h2>
        <div className="max-w-md w-full p-6 bg-gray-50 rounded-lg border-2 border-blue-800 shadow-xl">
          {/* book a demo form */}
          <form onSubmit={handleSubmit}>
            {/* for business name */}
            <div>
              <label
                htmlFor="bname"
                className="block text-gray-700 font-semibold font-sans mb-2"
              >
                Your Business Name:
              </label>
              <input
                type="text"
                id="bname"
                name="bname"
                value={form.bname}
                onChange={handleForm}
                placeholder="Enter Your Business Name"
                className="w-full px-3 py-2 text-md text-gray-900 font-sans border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <br />
            {/* for owner name */}
            <div>
              <label
                htmlFor="oname"
                className="block text-gray-700 font-semibold font-sans mb-2"
              >
                Name of the Owner:
              </label>
              <input
                type="text"
                id="oname"
                name="oname"
                value={form.oname}
                onChange={handleForm}
                placeholder="Enter Owner Name"
                className="w-full px-3 py-2 border rounded-md font-sans focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <br />
            {/* for address */}
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 font-semibold font-sans mb-2"
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleForm}
                placeholder="Enter Address"
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 font-semibold font-sans mb-2"
              >
                Enter a Phone Number:
              </label>
              <input
                type="tel"
                id="pnum"
                name="pnum"
                value={form.pnum}
                onChange={handleForm}
                placeholder="1234567891"
                maxLength={10}
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <br />
            {/* for options */}
            <div>
              <h3 className="block text-gray-700 font-semibold font-sans mb-2">
                Choose Your Options
              </h3>
              <div className="flex items-center mb-2">
                <label className="mr-2 text-gray-700 font-normal font-sans">
                  Web Demo
                </label>
                <input
                  type="radio"
                  name="demoType"
                  id="demoTypeWeb"
                  value="Web Demo"
                  checked={form.demoType === "Web Demo"}
                  onChange={handleForm}
                />
              </div>
              <div className="flex items-center">
                <label className="mr-2 text-gray-700 font-normal font-sans">
                  Physical Demo
                </label>
                <input
                  type="radio"
                  name="demoType"
                  id="demoTypePhysical"
                  value="Physical Demo"
                  checked={form.demoType === "Physical Demo"}
                  onChange={handleForm}
                />
              </div>
            </div>
            <br />
            {/* for Date&time */}
            <div>
              <label
                htmlFor="bktm"
                className="block text-gray-700 font-semibold font-sans mb-2"
              >
                Book Preferred Date & Time:
              </label>
              <input
                type="datetime-local"
                id="bktm"
                name="bktm"
                value={form.bktm}
                onChange={handleForm}
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            {/* submit button */}
            <div className="mt-4 flex flex-col items-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-sans font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-4"
              >
                Submit
              </button>
              <button
                onClick={() => navigate("/product")}
                className="flex items-center text-blue-800 focus:outline-none"
              >
                <span className="font-sans text-lg">Go to Products</span>
                <RiArrowRightSLine className="ml-2" size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default BookaDemo;
