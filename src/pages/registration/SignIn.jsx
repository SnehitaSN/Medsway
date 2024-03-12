import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);

    navigate("/home");
    setEmail("");
    setPassword("");
  };

  const handleCreate = ()=>{
    navigate('/createaccount')
  }
  // const handleReset = () => {
  //   setName("");
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <Layout>
      <div>
        <div className="flex justify-center items-center h-screen  -mt-22">
          <form
            onSubmit={handleSubmit}
            // onReset={handleReset}
            className="bg-white  border -1 border-gray-800 shadow-xl rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className=" mb-4 -mt-2">
              <h1 className="font-body text-blue-700 font-bold text-center text-3xl ">
                SignIn
              </h1>
            </div>
            <div>
              <label
                for="email"
                className="block text-gray-700 text-xl font-body font-bold mb-2"
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
                className="shadow appearance-none border text-lg font-body rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <br></br>

            <div>
              <label
                for="password"
                className="block text-gray-700 text-xl font-body font-bold mb-2"
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
                className="shadow appearance-none border text-lg font-body rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <br></br>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>

              <button
                type="submit"
                onClick={handleCreate}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
