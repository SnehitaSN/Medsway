import React from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate} from 'react-router-dom'

function Body() {
//state to handle navigation
  const navigate = useNavigate()

  const handleClick = ()=>{
    //navigate to book ademo page
    navigate('/bookademo')
  }
  
  return (
    <Layout>

      <div className='text-center  mt-24  mb-30 px-10 py-20  bg-gradient-to-b from-white to-blue-200'>
        <h1 className='text-center font-extrabold font-body text-gray-800  text-3xl'>
          Are You Ready to Grow Your <br></br> Buisness With Us?</h1>
          <h2 className='mt-6 font-body text-center text-gray-600  text-xl'>
          Pinnacle of pharmacy intelligence </h2>
          <div className='flex flex-1 justify-center'>
          <p className='mt-4 font-body text-start text-lg text-gray-900'>
          leverage the real-time data analytics and machine learning<br></br>
           capabilities using a combination of local and macro-level<br></br> 
           intelligence empowering you to grow your business in toughest<br></br>
            competitive conditions
          </p>
          </div>
        
          <button
          onClick={handleClick}
          className='bg-black px-4 py-6 mt-8 text-white font-body text-xl rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300 '>
        Book a Free Demo
      </button>
      </div>
      
    </Layout>
  )
}

export default Body