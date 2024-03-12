import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function InvoiceGen() {
  const navigate = useNavigate();
  const [loading2,setLoading2]=useState(false)

  const [form,setForm] = useState({})
  const handleForm = (e) =>{
      e.preventDefault()
      console.log(e.target.value,e.target.name)
      setForm({
          ...form,[e.target.name]:e.target.value
      })
  }


  const data ={
    name:'',
    number:'',
    amount:"",
    MUID: "MUID" + Date.now(),
    transactionId: 'T' + Date.now(),
  }

  const handlePayment = (e)=>{
    e.preventDefault();
    setLoading2(true)
    axios.post('api/phonepe/payment',{...data}).then(res =>{
        setTimeout(()=>{
          setLoading2(false)
        },1500)
        .catch(error=>{
          setLoading2(false)
          console.log(error)
        })
    })

  }
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      
      InvoiceGen
      <div className="flex justify-center mt-4">
      <h2 className="font-body text-lg text-gray-600 font-semibold">Payment Gateway</h2>
      </div>
      
      <div className="max-w-md mx-auto mt-8 p-10 bg-gray-100 rounded-lg border-2 border-black shadow-xl">
        <form onSubmit={handlePayment}>
          <div className="mb-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            className="w-full px-3 py-2 text-md text-gray-900 font-body border rounded-md focus:outline-none focus:border-blue-500"
            required
            onChange={handleForm}
          ></input>{" "}
         
          </div> <br></br>

       <div className="mb-2">
       <label htmlFor="name">Number:</label>
          <input
            type="number"
            id="num"
            name="num"
            placeholder="Enter Number"
            className="w-full px-3 py-2 text-md text-gray-900 font-body border rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleForm}
            required
          ></input>{" "}
          
       </div><br></br>


       <div className="mb-2">
       <label htmlFor="name">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            className="w-full px-3 py-2 text-md text-gray-900 font-body border rounded-md focus:outline-none focus:border-blue-500"
            required
            onChange={handleForm}
          ></input>{" "}
          <br></br>
       </div>

       {!loading2 
       ?
        <div className="flex justify-start">
          <button type="submit"
           className="px-4 py-2 ml-30 mt-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Pay Now
            </button>
         </div>
        :
        <div className='col-12 center'>
        <button className='w-100 text-center' type="submit">
        <div className="spinner-border" role="status">
            <span className="visually-hidden ">Wait...</span>
        </div>
        </button>
    </div>
        }
         
         
         
        </form>
      </div>
      <div className="flex justify-end ">
      <button type="submit"
      className="px-4 py-2 mr-8 mt-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
       onClick={handleClick}>
        Go Back
        </button>
      </div>
     
    </div>
  );
}

export default InvoiceGen;
