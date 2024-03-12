import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    bname: "",
    oname: "",
    address: "",
    pnum: "",
    bktm: "",
    demoType: "",
  });

  //function to collect the data
  function collectData(event) {
    // console.log(event.target.name)
    // console.log(event.target.value)

    let enteredData = event.target.value;

    if (enteredData) {
      setData({ ...data, [event.target.name]: enteredData });
    }
  }

  //function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    // reset the form data after sumbission
    setData({
      bname: "",
      oname: "",
      address: "",
      pnum: "",
      bktm: "",
      demoType: "",
    });
    navigate("/");
  };
  // const handleClick = () => {
  //   navigate("/");
  // };

  return (
    <div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Book a Demo</h2>
        <div className="max-w-md mx-auto mt-8 p-10 bg-gray-100 rounded-lg border-2 border-black shadow-xl">
          {/* book a demo form */}
          <form method=" POST" onSubmit={handleSubmit}>
            {/* for buisness name */}
            <div className="">
              <label
                for="bname"
                className="block text-gray-700 font-semibold font-body mb-2"
              >
                Your Buisness Name:
              </label>
              <input
                type="text"
                id="bname"
                name="bname"
                value={data.bname}
                placeholder="Enter Your Buisness Name"
                className="w-full px-3 py-2 text-md text-gray-900 font-body border rounded-md focus:outline-none focus:border-blue-500"
                onChange={collectData}
                required
              />
            </div>
            <br></br>
            {/* for owner name */}
            <div>
              <label
                for="oname"
                className="block text-gray-700 font-semibold font-body mb-2"
              >
                Name of the Owner:
              </label>
              <input
                type="text"
                id="oname"
                name="oname"
                placeholder="Enter Owner Name"
                value={data.oname}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onChange={collectData}
                required
              />
            </div>{" "}
            <br></br>
            {/* for address */}
            <div>
              <label
                for="address"
                className="block text-gray-700 font-semibold font-body mb-2"
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
                value={data.address}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onChange={collectData}
                required
              />
            </div>
            <br></br>
            <div>
              <label
                for="phoneNumber"
                className="block text-gray-700 font-semibold font-body mb-2"
              >
                Enter a Phone Number:
              </label>
              <strong>
                <input
                  type="tel"
                  id="pnum"
                  name="pnum"
                  placeholder="1234567891"
                  maxLength={10}
                  value={data.pnum}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  onChange={collectData}
                  required
                />
              </strong>
            </div>{" "}
            <br></br>
            {/* for options */}
            <div>
              <h3 className="block text-gray-700 font-semibold font-body mb-2">
                <p> Choose Your Options</p>
              </h3>
              <br></br>
              <label className=" text-gray-700 font-normal font-body mb-2">
                Web Demo
              </label>{" "}
              <input
                type="radio"
                name="demoType"
                id="demoType"
                value="Web Demo"
                checked={data.demoType === "web Demo"}
                onChange={collectData}
              ></input>
              <br></br>
              <label className=" text-gray-700 font-normal font-body mb-2">
                Physical Demo
              </label>
              <input
                type="radio"
                name="demoType"
                id="demoType"
                checked={data.demoType === "Physical Demo"}
                value="Physical Demo"
                onChange={collectData}
              ></input>
            </div>
            <br></br>
            {/* for Date&time */}
            <div>
              <label
                for="bktm"
                className="block text-gray-700 font-semibold font-body mb-2"
              >
                Book Prefered Date & Time:
              </label>
              <input
                type="datetime-local"
                id="bktm"
                name="bktm"
                value={data.bktm}
                onChange={collectData}
                required
              />
            </div>
            {/* submit button */}
            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 ml-30 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="max-w-md mt-6 mb-10">
        <button
          onClick={handleClick}
          className="px-4 py-2 ml-30 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Go Back
        </button>
      </div> */}
    </div>
  );
}

export default Booking;
