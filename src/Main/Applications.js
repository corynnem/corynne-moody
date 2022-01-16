import React from "react";

import back from "./assets/back.png";
import Grid from "./Grid/Grid";
import URL from "../environment";

import "./main.css";

const About = () => {
  

  console.log(`${URL}/#about`);

  return (
    <div style={{ height: "100vh" }} id="applications">
      <h1 className="title" style={{marginLeft: '30px'}}>Applications</h1>
      <Grid/>
      <img
        src={back}
        style={{
          height: "50px",
          position: "fixed",
          bottom: "60px",
          left: "0px",
          marginLeft: "10px",
        }}
        onClick={() => window.location.assign(`${URL}/`)}
      /> 
    </div>
  );
};

export default About;
