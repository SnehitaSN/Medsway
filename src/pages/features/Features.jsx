import React from "react";
import img1 from "../../assets/img/dashboard.png"
import img2 from '../../assets/img/sales.png'
import img3 from "../../assets/img/rupee.png"
import img4 from "../../assets/img/cost cutting.png"
import img5 from "../../assets/img/inventory.png"
import img6 from "../../assets/img/customer manage.png"

import Layout from "../../components/layout/Layout";

function Features() {
  return (
    <Layout>
      <div className="mt-16 mb-20">
        <div className="mt-36" >
        <h1 className="text-2xl text-center  font-body  font-semibold text-gray-600 mb-8 ">Features</h1>
        </div>
       
        <div className="container w-auto h-auto border-none mx-auto  rounded-xl px-10 py-20 bg-slate-100">
          <div className="grid grid-cols-3 gap-4 ">
            <div className="-mt-6">
              <div className="mx-auto flex flex-1 justify-start mr-1 mb-2">
              <img src={img1} alt="dashboard " className="w-20 h-auto   "/>
              </div>

              <h2 className="font-bold text-xl  font-body  text-gray-700 text-start mb-4">
              360 deg Dashboard
              </h2>
              <p className="text-start  font-body  text-md ">
              Integrate local and industry <br></br> intelligence. Get all insights to <br></br>monitor pulse of your pharmacy.
              </p>
            </div>
            <div className="-mt-6">
              <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
              <img src={img2} alt="dashboard " className="w-20 h-auto   "/>
              </div>

              <h2 className="font-bold text-xl  font-body  text-start   text-gray-700 mb-4">
              Sales intelligence
              </h2>
              <p className="text-start  font-body  text-md">
              Leverage ML models to know <br></br> changes in footfall, near-expiry <br></br>drugs and more.
              </p>
            </div>
            <div className="-mt-10">
              <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
              <img src={img3} alt="dashboard " className="w-20 h-auto   "/>
              </div>

              <h2 className="font-bold  font-body  text-xl text-start  text-gray-700 mb-4">
              Guaranteed Profits
              </h2>
              <p className="text-start  font-body  text-md ">
              Its a promise we won't hesitate to make. Witness marked increase in profits within 3 months or less.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-20">
        {/* <h1 className="text-5xl text-center   font-body  font-bold mb-8 ">Features</h1> */}
        <div className="container w-auto h-auto border-none mx-auto  rounded-xl px-10 py-20 bg-slate-100">
          <div className="grid grid-cols-3 gap-4 ">
            <div className="-mt-6">
              <div className="mx-auto flex flex-1 justify-start mr-1 mb-2">
              <img src={img4} alt="dashboard " className="w-20 h-auto   "/>
              </div>

              <h2 className="font-bold text-xl  font-body  text-gray-700 text-start mb-4">
              Cost cutting
              </h2>
              <p className="text-start  font-body  text-md ">
              Tighter controls on inventory <br/>
               with zero wastage and timely <br/> payments to ensure efficient  <br/>budgeting and growth.
              </p>
            </div>
            <div className="-mt-10">
              <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
              <img src={img5} alt="dashboard " className="w-20 h-auto   "/>
              </div>

              <h2 className="font-bold text-xl  font-body  text-start   text-gray-700 mb-4">
              Inventory management
              </h2>
              <p className="text-start  font-body  text-md">
              Get timely and assured supplies.<br/> Maintain sufficient inventories <br/> with vast network of suppliers.
              </p>
            </div>
            <div className="-mt-10">
              <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
              <img src={img6} alt="dashboard " className="w-20 h-auto   "/>
              </div>

              <h2 className="font-bold text-xl  font-body  text-start  text-gray-700 mb-4">
              Customer relationship
              </h2>
              <p className="text-start  font-body  text-md ">
              Enhanced customer relationship,<br/> going beyond with personalized <br/>solutions and exclusive offers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-12 mb-20">
        <h1 className="text-5xl text-center  font-body  font-bold mb-8 ">Features</h1>
        <div className="container w-auto h-auto border-none mx-auto  rounded-xl px-10 py-20 bg-slate-100">
          <div className="grid grid-cols-3 gap-4 ">
            <div className="-mt-6">
              <div className="mx-auto flex flex-1 justify-start mr-1 mb-2">
                <GiHobbitDoor className="w-16 h-16" style={{ color: "blue" }} />
              </div>

              <h2 className="font-bold  font-body  text-3xl text-gray-700 text-start mb-4">
                Advance 256-bit<br></br>encryption
              </h2>
              <p className="text-start  font-body  text-md ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                esse quasi consectetur nihil voluptate quod.
              </p>
            </div>
            <div className="-mt-6">
              <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
                <FcCollaboration
                  className="w-16 h-16 -mt-3"
                  style={{ color: "blue" }}
                />
              </div>

              <h2 className="font-bold  font-body  text-3xl text-start   text-gray-700 mb-4">
                Simple Collaboration<br></br> tools
              </h2>
              <p className="text-start  font-body  text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                esse quasi consectetur nihil voluptate quod.
              </p>
            </div>
            <div className="-mt-10">
              <div className="mx-auto flex flex-1 justify-start mr-12 mb-4">
                <FaRobot className="w-16 h-16" style={{ color: "blue" }} />
              </div>

              <h2 className="font-bold text-3xl  font-body  text-start  text-gray-700 mb-4">
                Customizable AI<br></br> features
              </h2>
              <p className="text-start  font-body  text-md ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                esse quasi consectetur nihil voluptate quod.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default Features;
