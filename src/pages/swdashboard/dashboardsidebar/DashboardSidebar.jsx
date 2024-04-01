import React from "react";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineInventory } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LiaArchiveSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

function DashboardSidebar() {
  return (
    <div className="h-full w-64 bg-gray-700 fixed text-white flex flex-col px-4 py-2">
      <div className="my-2 mb-3 ml-2 ">
        <h1 className="text-2xl text-white ">Medsway</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white  font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to={"/dashboard"} className="px-3">
            <TbLayoutDashboard className="inline-block w-6 h-6 mr-2 -mt-2" />
            Dashboard
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to={"/inventory"} className="px-3">
            <MdOutlineInventory className="inline-block w-6 h-6 mr-2 -mt-2" />
            Inventory
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to={"/billing"} className="px-3">
            <LiaFileInvoiceDollarSolid className="inline-block w-6 h-6 mr-2 -mt-2" />
            Billing
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to={"/archives"} className="px-3">
            <LiaArchiveSolid className="inline-block w-6 h-6 mr-2 -mt-2" />
            Archives
          </Link>
        </li><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to={"/support"} className="px-3">
            <MdOutlineSupportAgent className="inline-block w-6 h-6 mr-2 -mt-2" />
            Get Support
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to={"/faq"} className="px-3">
            <FaQuestion className="inline-block w-6 h-6 mr-2 -mt-2" />
            FAQ's
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;
