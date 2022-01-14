import React from "react";
import DarkTurq from "./Circles/DarkTurq";
import SeaFoamL from "./Circles/SeaFoamL";
import SeaFoamS from "./Circles/SeaFoamS";
import DarkBlueL from "./Circles/DarkBlueL";
import DarkBlueS from "./Circles/DarkBlueS";
import LightGreen from "./Circles/LightGreen";
import Beige from "./Circles/Beige";
import Headshot from "./Circles/Headshot";
import downarrow from './assets/downarrow.png';
import URL from '../environment'
import "./main.css";

const Splash = () => {
  const darkTurq = {
    marginTop: "-500px",
    marginLeft: "-30px",
    zIndex: "300",
  };

  const seafoaml = {
    marginTop: "-332px",
    marginLeft: "35px",
  };

  const beige = {
    marginTop: "250px",
    marginLeft: "-60px",
  };

  const green = {
    marginTop: "-380px",
    marginLeft: "200px",
  };

  const darkBluel = {
    marginTop: "-220px",
    marginLeft: "150px",
  };

  const darkBlues = {
    marginTop: "200px",
    marginLeft: "20px",
  };

  const seafoams = {
    marginTop: "-30px",
    marginLeft: "60px",
  };

  const headshotStyles = {
    zIndex: "-100",
    marginLeft: "20px",
  };

  return (
    <div style={{ height: "90vh" }} id="main">
      <Beige style={beige} />
      <div style={{ width: "400px", marginTop: "-340px", marginLeft: "-30px" }}>
        <Headshot style={headshotStyles} />
        <SeaFoamL style={seafoaml} />
      </div>
      <LightGreen style={green} />
      <DarkBlueS style={darkBlues} />
      <SeaFoamS style={seafoams} />
      <DarkBlueL style={darkBluel} />
      <DarkTurq style={darkTurq} />
      <div id="splash">
        <h1 id="name">Corynne Moody</h1>

        <p style={{marginBottom: '-3em', marginTop: '3em',  fontFamily: 'Quicksand'}}>
          <b>
            Indianapolis based web dev experienced in building, and teaching,
            user interfaces and servers
          </b>
        </p>
      </div>
    </div>
  );
};

export default Splash;
