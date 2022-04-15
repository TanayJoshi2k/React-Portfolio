import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Timeline from "./Components/Timeline/Timeline";
import SNP from "./Components/SNP/SNP";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/exp' exact element={<Timeline/>}/>
          <Route path='/snp' exact element={<SNP/>}/>
          <Route path='/resume' exact element={<Resume/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;
