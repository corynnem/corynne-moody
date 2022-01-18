import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Main/Navigation/Nav";
import Splash from "./Main/Splash";
import About from "./Main/About";
import Applications from "./Main/Applications";
import Contact from './Main/Contact'
import "./App.css";
import NoDeploy from "./Main/assets/noDeploy";

const abt = {
  marginTop: '5vh',
  marginRight: '2vw'
}


function App() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#52796F"

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Navigation />
              <Splash/>
            </div>
         } />
          <Route path="about" element={
            <div>
              <About/>
            </div>
         } />
          <Route path="applications" element={
            <div>
              <Applications/>
            </div>
         } />
         <Route path="contact" element={
            <div>
              <Contact/>
            </div>
         } />
          <Route path="notdeployed" element={
            <div>
              <NoDeploy/>
            </div>
         } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
