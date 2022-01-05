import React, { useState } from "react";
import Splash from "./Main/Splash";
import About from "./Main/About";
import Applications from './Main/Applications'
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <Splash/>
      <About/>
      <Applications/>
    </div>
  );
}

export default App;
