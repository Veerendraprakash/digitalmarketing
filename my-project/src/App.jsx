import React from "react";
import Index from "./assets/Component/Index.jsx";

import Pricing from "./assets/Component/Pricing.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./assets/Component/Signup.jsx";
import Signin from "./assets/Component/Signin.jsx";
import Services from "./assets/Component/Services.jsx";
import Features from "./assets/Component/Features.jsx";
import BService from "./assets/Component/BService.jsx";

import Contact from "./assets/Component/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/BService" element={<BService />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
