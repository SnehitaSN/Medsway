import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Body from "./pages/body/Body";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Pricing from "./pages/pricing/Pricing";
import Aboutus from "./pages/aboutus/Aboutus";
import Contact from "./pages/contact/Contact";
import SignIn from "./pages/registration/SignIn";
import SignUp from "./pages/registration/SignUp";
//  import Dashboard from './pages/admin/dashboard/Dashboard'
import Features from "./pages/features/Features";
import Error from "./pages/admin/dashboard/Error";
import BookaDemo from "./pages/body/BookaDemo";
import Getfreetrial from "./pages/home/Getfreetrial";
import InvoiceGen from "./pages/invoice/InvoiceGen";
import CreateAccount from "./pages/registration/CreateAccount";
import DashboardLayout from "./pages/swdashboard/dashboardlayout/DashboardLayout";
import Dashboard from "./pages/swdashboard/components/dashboard/Dashboard";
import Inventory from "./pages/swdashboard/components/inventory/Inventory";
import Billing from "./pages/swdashboard/components/billing/Billing";
import Getsupport from "./pages/swdashboard/components/getsupport/Getsupport";
import Archives from "./pages/swdashboard/components/archives/Archives";
import Faq from "./pages/swdashboard/components/faq/Faq";
import Invoice from "./pages/swdashboard/components/billing/Invoice";
import Faqws from "./pages/faqws/Faqws";
import toast from "react-hot-toast";
import Dummy from "./pages/dummy/Dummy";

// Define a custom hook for authentication
function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  // Method to authenticate user
  const authenticate = (email, password) => {
    if (email === "abc@gmail.com" && password === "12345") {
      setAuthenticated(true);
      toast.success("Successfully Logged In!");
    } else {
      setAuthenticated(false);
      toast.error("Incorrect email or password!");
    }
  };

  return { authenticated, authenticate };
}

function App() {
  const { authenticated, authenticate } = useAuth();

  // Protected route component
  // const ProtectedRoute = ({ element, ...rest }) => {
  //   return authenticated ? element : <Navigate to="/signin" replace />;
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" 
          element={<Body/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/signin"
          element={<SignIn authenticate={authenticate}  />}
        />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/error" element={<Error />} />
        <Route path="/bookademo" element={<BookaDemo />} />
        <Route path="/getfreetrial" element={<Getfreetrial />} />
        <Route path="/invoicegen" element={<InvoiceGen />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboardlayout"
          element={
            authenticated ? <DashboardLayout /> : <Navigate to="/" replace />
          }
        />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/support" element={<Getsupport />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/faqws" element={<Faqws />} />
        <Route path="/dummy" element={<Dummy/>}/>
      </Routes>
    </Router>
  );
}

export default App;
