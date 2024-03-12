import React from 'react'
import {useNavigate} from 'react-router-dom'

function Getfreetrial() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/home')
    }
  return (
    <div>  
        <div>
    Getfreetrial
    </div>
    <button onClick={handleClick}
    className='px-6 py-4 bg-blue-400 rounded-xl'
    
    >Go Back</button>
    </div>
   
  )
}

export default Getfreetrial