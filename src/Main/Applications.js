import React from "react";
import DarkTurq from "./Circles/DarkTurq";
import SeaFoamL from "./Circles/SeaFoamL";
import SeaFoamS from "./Circles/SeaFoamS";
import DarkBlueL from "./Circles/DarkBlueL";
import DarkBlueS from "./Circles/DarkBlueS";
import LightGreen from "./Circles/LightGreen";
import Beige from "./Circles/Beige";
import back from "./assets/back.png";
import SlideShow from "./Carousel";
import URL from "../environment";

import "./main.css";

const About = () => {
  const darkTurq = {
    marginTop: "0px",
    marginLeft: "0px",
  };

  const seafoaml = {
    marginTop: "750px",
    marginLeft: "35px",
  };

  const beige = {
    marginTop: "-190px",
    marginLeft: "215px",
  };

  const green = {
    marginTop: "-240px",
    marginLeft: "-10px",
  };

  const darkBluel = {
    marginTop: "-160px",
    marginLeft: "150px",
  };

  const darkBlues = {
    marginTop: "-530px",
    marginLeft: "-30px",
  };

  const seafoams = {
    height: "100px",
    width: "100px",
    borderRadius: "100px",
    marginTop: "-10px",
    marginLeft: "280px",
  };

  console.log(`${URL}/#about`);

  return (
    <div style={{ height: "100vh" }} id="applications">
      <h1 id="title">Applications</h1>
      <div id="app-circles">
        <div style={{ width: "400px", marginLeft: "-30px" }}>
          <SeaFoamL style={seafoaml} />
        </div>
        <DarkBlueL style={darkBluel} />

        <SeaFoamS style={seafoams} />
        <Beige style={beige} />
        <DarkBlueS style={darkBlues} />
        <DarkTurq style={darkTurq} />
        <LightGreen style={green} />
      </div>

      <div id="splash"></div>
      <img
        src={back}
        style={{
          height: "50px",
          position: "absolute",
          bottom: "0px",
          left: "0px",
          marginLeft: "10px",
        }}
        onClick={() => window.location.assign(`${URL}/`)}
      />
      {/* <SlideShow/> */}
    </div>
  );
};

export default About;
