import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";

function BookaDemo() {
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target.value, e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      bname: "",
      oname: "",
      address: "",
      pnum: "",
      bktm: "",
      demoType: "",
    });
    navigate("/");

    //     const response = await fetch("http://localhost:7000/demo",{
    //       method:"POST",
    //       body:JSON.stringify(form),
    //       headers:{
    //         'Content-Type':'application/json'
    //       }
    //     })
    //     const data = await response.json()
    //     console.log(form)
    //     console.log(response)
    //     console.log(data)
  };
  return (
    <Layout>
      {" "}
      <div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Book a Demo
          </h2>
          <div className="max-w-md mx-auto mt-20 mb-14 p-10 bg-gray-100 rounded-lg border-2 border-black shadow-xl">
            {/* book a demo form */}
            <form onSubmit={handleSubmit}>
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
                  onChange={handleForm}
                  placeholder="Enter Your Buisness Name"
                  className="w-full px-3 py-2 text-md text-gray-900 font-body border rounded-md focus:outline-none focus:border-blue-500"
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
                  onChange={handleForm}
                  placeholder="Enter Owner Name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
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
                  onChange={handleForm}
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
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
                    onChange={handleForm}
                    placeholder="1234567891"
                    maxLength={10}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
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
                  onChange={handleForm}
                ></input>
                <br></br>
                <label className=" text-gray-700 font-normal font-body mb-2">
                  Physical Demo
                </label>
                <input
                  type="radio"
                  name="demoType"
                  id="demoType"
                  checked={form.demoType === "Physical Demo"}
                  value="Physical Demo"
                  onChange={handleForm}
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
                  onChange={handleForm}
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
      </div>
    </Layout>
  );
}

export default BookaDemo;
