import React from "react";
import DarkTurq from "./Circles/DarkTurq";
import SeaFoamL from "./Circles/SeaFoamL";
import SeaFoamS from "./Circles/SeaFoamS";
import DarkBlueL from "./Circles/DarkBlueL";
import DarkBlueS from "./Circles/DarkBlueS";
import LightGreen from "./Circles/LightGreen";
import Beige from "./Circles/Beige";
import back from "./assets/back.png";
import downarrow from "./assets/downarrow.png";
import URL from "../environment";

import "./main.css";

const About = () => {
  const darkTurq = {
    marginLeft: ".5em",
    height: "75px",
    width: "150px",
    borderBottomLeftRadius: "200px",
    borderBottomRightRadius: "200px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
  };

  const seafoaml = {
    marginTop: "-3em",
    marginLeft: "-5em",
    height: "250px",
    width: "125px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "200px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "200px",
  };

  const beige = {
    height: "190px",
    width: "190px",
    marginTop: "-13.7em",
    marginLeft: "-10.5em",
  };

  const green = {
    marginTop: "-4.8em",
    float: "right",
    borderBottomLeftRadius: "150px",
    borderBottomRightRadius: "0px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
  };

  const darkBluel = {
    marginTop: "-5em",
    marginBottom: "3em",
    marginLeft: "",
    height: "150px",
    width: "80px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "200px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "200px",
  };

  const darkBlues = {
    float: "right",
    marginTop: "-23em",
    marginLeft: "20em",
  };

  const seafoams = {
    float: "right",
    marginTop: "-13em",
    marginRight: "2em",
  };

  console.log(URL);
  return (
    <div style={{ height: "98vh" }} id="about">
      <DarkTurq style={darkTurq} />
      <LightGreen style={green} />
      <h1 className="title" style={{ marginLeft: "1em", marginTop: "4vh" }}>
        About
      </h1>
      <DarkBlueL style={darkBluel} />
      <SeaFoamL style={seafoaml} />
      <SeaFoamS style={seafoams} />
      <DarkBlueS style={darkBlues} />
      <Beige style={beige} />

      <h1 id="abt-desc">
        My name is Corynne Moody and I am a Front End Developer based in
        Indiana, working remotely for Eleven Fifty Academy as an Instructor
        Trainee. I specialize in creating and maintaining databases with NodeJs
        and PostgreSQL and building front end React applications to display the
        data. My background is in Childcare and Administrative positions
      </h1>
      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: "30px",
          left: "0px",
          marginLeft: "10px",
          color: 'var(--light-green)'
        }}
      >
        <img
          src={back}
          style={{ height: "50px" }}
          onClick={() => window.location.assign(`${URL}/`)}
        />
      </div>
    </div>
  );
};

export default About;
