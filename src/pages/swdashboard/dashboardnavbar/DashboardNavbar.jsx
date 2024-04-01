import React from "react";
//  import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { GrMagic } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function DashboardNavbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("Logging Out.....");
    try {
      // Display confirmation popup
      const confirmLogout = window.confirm("Are you sure you want to log out?");

      // If user confirms, proceed with logout
      if (confirmLogout) {
        // Display loading message
        toast.loading("Logging out...");

        // Simulate asynchronous logout action (can be replaced with actual logout logic)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Navigate to homepage after successful logout
        navigate("/");

        // Display success message
        toast.success("You have been logged out successfully.");
      } else {
        // If user cancels, display a cancellation message
        toast.error("Logout canceled. You are still logged in.");
      }
    } catch (error) {
      // If an error occurs, display the error message
      toast.error("An error occurred while logging out.");
    }
  };
  return (
    <header>
      <nav className=" bg-gray-700 flex  justify-between  px-4 py-3  ml-64">
        {/* for left side */}
        <div className="flex items-center text-xl">
          <span className="text-lg text-white -ml-2 ">Welcome,Ankush!</span>
        </div>

        {/* for rightside */}
        <div className="flex items-center gap-x-5">
          {/* search icon */}
          {/* <div className="relative md:w-65">
            <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
              <button className="p-1 focus:outline-none text-white md:text-black">
                <IoIosSearch />
              </button>
            </span>
            <input
              type="text"
              className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
            />
          </div> */}

          {/* magic icon */}
          <div className="text-white ml-3">
            <button>
              <GrMagic className="w-6 h-6" />
            </button>
          </div>

          {/* notification icon */}
          <div className="text-white ml-3">
            <button>
              <FaBell className="w-6 h-6 " />
            </button>
          </div>

          {/* user profile */}
          <div className="relative ml-3">
            <button className="text-white group">
              <FaUser className="w-6 h-6 -mt-1 " />
              <div className="z-10 hidden absolute rounded-lg bg-white shadow w-32 group-focus:block top-full right-0">
                {/* <ul className="py-2 text-sm text-gray-950 mt-2">
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">settings</a>
                  </li>
                  <li>
                    <a href="#">logout</a>
                  </li>
                </ul> */}
              </div>
            </button>
          </div>

          {/* logout */}
          <div className="text-white ml-3">
            <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                // Define default options
                className: "",
                duration: 2000,
                style: {
                  background: "#363636",
                  color: "#fff",
                },

                // Default options for specific types
                success: {
                  duration: 3000,
                  theme: {
                    primary: "green",
                    secondary: "black",
                  },
                },
              }}
            />
            <button onClick={handleLogout}>
              <IoMdLogOut className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default DashboardNavbar;
