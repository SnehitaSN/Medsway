import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Body from './pages/body/Body';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Pricing from './pages/pricing/Pricing';
import Aboutus from './pages/aboutus/Aboutus';
import Contact from './pages/contact/Contact';
import SignIn from './pages/registration/SignIn';
import SignUp from './pages/registration/SignUp';
import Dashboard from './pages/admin/dashboard/Dashboard'
import Features from './pages/features/Features';
import Error from './pages/admin/dashboard/Error';
import BookaDemo from './pages/body/BookaDemo';
import Getfreetrial from './pages/home/Getfreetrial';
import InvoiceGen from './pages/invoice/InvoiceGen';
import CreateAccount from './pages/registration/CreateAccount';




function App() {
  return (
 <Router>
  <Routes>
    <Route path='/' element={<Body/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/features'element={<Features/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/error' element={<Error/>}/>
    <Route path='/bookademo' element={<BookaDemo/>}/>
    <Route path='/getfreetrial' element={<Getfreetrial/>}/>
    <Route path ='/invoicegen'element={<InvoiceGen/>}/>
    <Route path = '/createaccount'element={<CreateAccount/>}/>


   
   
    
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
 </Router>
  );
}

export default App;
