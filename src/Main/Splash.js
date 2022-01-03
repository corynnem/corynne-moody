import React from "react";
import DarkTurq from "./Circles/DarkTurq";
import SeaFoamL from "./Circles/SeaFoamL";
import SeaFoamS from "./Circles/SeaFoamS";
import DarkBlueL from "./Circles/DarkBlueL";
import DarkBlueS from "./Circles/DarkBlueS";
import LightGreen from "./Circles/LightGreen";
import Beige from "./Circles/Beige";
import Headshot from "./Circles/Headshot";

const Splash = ({darkTurq, seafoaml, beige, green, darkBluel, darkBlues, seafoams, headshotStyles }) => {
 
  return (
    <div>
      <Beige style={beige} />
      <div style={{ width: "400px", marginTop: "-340px", marginLeft: '-30px' }}>
        <Headshot style={headshotStyles} />
        <SeaFoamL style={seafoaml} />
      </div>

      <LightGreen style={green} />
      <DarkBlueS style={darkBlues} />
      <SeaFoamS style={seafoams} />
      <DarkBlueL style={darkBluel} />
      <DarkTurq style={darkTurq} />
      <div style={{marginTop: '24em'}}>
        <h1>Corynne Moody</h1>
        <p><b>Indianapolis based web dev experienced in building, and teaching, user interfaces and servers</b></p>
      </div>
      
    </div>
  );
};

export default Splash;
