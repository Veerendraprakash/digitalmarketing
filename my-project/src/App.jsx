import React from "react";
// import Hero from "./assets/Component/Hero.jsx"; 
import Index from "./assets/Component/Index.jsx";
import About from "./assets/Component/About.jsx";
import Footer from "./assets/Component/Footer.jsx";

import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Signup from "./assets/Component/Signup.jsx";
import Signin from "./assets/Component/Signin.jsx";

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
        {/* <Route path="/" element={<Hero/>} /> */}
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
