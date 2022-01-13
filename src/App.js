import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Main/Navigation/Nav";
import Splash from "./Main/Splash";
import About from "./Main/About";
import Applications from "./Main/Applications";
import "./App.css";

const abt = {
  marginTop: '5vh',
  marginRight: '2vw'
}
const applications = {

}

function App() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#52796F";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
