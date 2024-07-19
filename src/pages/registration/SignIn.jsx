import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiArrowRightSLine } from 'react-icons/ri'; // Importing the forward arrow icon

function SignIn() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Email:", email, "Password:", password);
  //   // toast.success("Successfully Logged In!");

  //   // Trigger toast notification after a slight delay
  //   setTimeout(() => {
  //     toast.success("Successfully Logged In!");
  //   }, 1000);

  //   // navigate("/dashboard");
  //   navigate("/dummy");

  //   setEmail("");
  //   setPassword("");
  // };

  // const handleCreate = () => {
  //   navigate("/createaccount");
  // };
  // // const handleReset = () => {
  // //   setName("");
  // //   setEmail("");
  // //   setPassword("");
  // // };
  // const resetForm = () => {
  //   setEmail("");
  //   setPassword("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
    // toast.success("Successfully Logged In!");

    // Trigger toast notification indicating test mode
    setTimeout(() => {
      toast.info("Website is under test mode", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 1000);

    // Reset form fields after showing toast notification
    setTimeout(() => {
      setEmail("");
      setPassword("");
    }, 2000);

    //navigate("/dashboard");
    // navigate("/dummy"); // Comment out navigation as it's in test mode
  };

  const handleCreate = () => {
   // navigate("/createaccount");

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

  return (
    <Layout>
      <div>
        {/* <div className="flex justify-center items-center h-screen  -mt-22">
          <form
            onSubmit={handleSubmit}
            // onReset={handleReset}
            className="bg-white  border-2 rounded border-gray-800 shadow-xl  px-14 pt-6 pb-8  mt-10"
          >
            <div className=" mb-4 -mt-2">
              <h1 className="font-sans text-blue-700 font-normal text-center text-xl ">
                Sign in
              </h1>
            </div>
            <div>
              <label
                for="email"
                className="block text-gray-700 text-xl font-sans font-bold mb-2"
              >
                {" "}
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                required
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border text-lg font-sans rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <br></br>

            <div>
              <label
                for="password"
                className="block text-gray-700 text-xl font-sans font-bold mb-2"
              >
                {" "}
                Passowrd
              </label>
              <input
                type="password"
                placeholder="Enter password"
                minLength={4}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border text-lg font-sans rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <br></br>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 font-sans text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign in
              </button>

              <button
                type="submit"
                onClick={handleCreate}
                className="bg-blue-500 hover:bg-blue-700 text-white font-sans font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Account
              </button>
            </div>
          </form>
        </div> */}

        {/* <div className="flex justify-center items-center h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white border-2 rounded-lg border-gray-300 shadow-xl px-8 py-10 max-w-md w-full"
          >
            <div className="mb-6">
              <h1 className="font-sans text-blue-700 font-semibold text-center text-2xl">
                Sign in
              </h1>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg font-sans font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                required
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-lg font-sans font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                minLength={4}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-sans font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign in
              </button>

              <button
                type="button"
                onClick={handleCreate}
                className="bg-blue-500 hover:bg-blue-700 text-white font-sans font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Account
              </button>
            </div>
          </form>
        </div> */}

        <div className="flex justify-center items-center h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white border-2 rounded-lg border-gray-300 shadow-xl px-8 py-10 max-w-md w-full"
          >
            <div className="mb-6">
              <h1 className="font-sans text-blue-700 font-semibold text-center text-2xl">
                Sign in
              </h1>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg font-sans font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                required
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-lg font-sans font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                minLength={4}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-sans font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign in
              </button>

              <button
                type="button"
                onClick={handleCreate}
                className="bg-blue-500 hover:bg-blue-700 text-white font-sans font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div className="font-sans flex justify-end mb-4">
        <button
                  onClick={() => navigate('/contact')}
                  className="flex items-center text-blue-800 focus:outline-none mt-4"
                >
                  <span className="font-sans text-lg">Go to ContactUs</span>
                  <RiArrowRightSLine className="ml-1" size={20} />
                </button>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default SignIn;
