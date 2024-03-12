import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <div>
      <div className='flex'>
     
      <Navbar/>
    </div>
      
        <div className='content'>
            {children}
        </div>
        <div>
        <Footer/>
        </div>
       
    </div>
  )
}

export default Layout