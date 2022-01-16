import React from "react";
import DarkTurq from "./Circles/DarkTurq";
import SeaFoamL from "./Circles/SeaFoamL";
import SeaFoamS from "./Circles/SeaFoamS";
import DarkBlueL from "./Circles/DarkBlueL";
import DarkBlueS from "./Circles/DarkBlueS";
import LightGreen from "./Circles/LightGreen";
import Beige from "./Circles/Beige";
import back from "./assets/back.png";
import URL from "../environment";
import "./main.css";

const Contact = () => {
  const darkTurq = {
    marginTop: "-20px",
    marginLeft: "0px",
    opacity: '0.5'
  };

  const seafoaml = {
    marginTop: "750px",
    marginLeft: "35px",
    opacity: '0.6'
  };

  const beige = {
    marginTop: "-180px",
    marginLeft: "218px",
    opacity: '0.5'
  };

  const green = {
    marginTop: "-222px",
    marginLeft: "0px",
    opacity: '0.6'
  };

  const darkBluel = {
    marginTop: "-160px",
    marginLeft: "150px",
    opacity: '0.5'
  };

  const darkBlues = {
    marginTop: "-500px",
    marginLeft: "-10px",
    opacity: '0.6'
  };

  const seafoams = {
    height: "100px",
    width: "100px",
    borderRadius: "100px",
    marginTop: "-40px",
    marginLeft: "280px",
    opacity: '0.5'
  };

  const inputStyles = {
    border: "0px",
    borderRadius: "5px",
    width: "300px",
    marginTop: "10px",
  };

  const flexStyles = {
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontSize: "larger",
  };

  return (
    <div id="contact">

       <h1 className="title" style={{marginLeft: '55px'}}>Contact Me</h1>
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

      <div id="splash">
    
      <form
        action="https://formspree.io/f/xzbodegr"
        method="POST"
        style={{
          width: "300px",
          position: "absolute",
          top: "28%",
          left: "48%",
          margin: "-0px 0 0 -150px",
        }}
      >
        <label style={flexStyles}>
          Your email
          <input type="email" name="_replyto" style={inputStyles} />
        </label>
        <label style={flexStyles}>
          Your message
          <textarea name="message" style={inputStyles}></textarea>
        </label>

        <button type="submit" style={inputStyles}>
          Send
        </button>
      </form>
     </div>
      <img
        src={back}
        style={{
          height: "50px",
          position: "fixed",
          bottom: "0px",
          left: "0px",
          marginLeft: "10px",
        }}
        onClick={() => window.location.assign(`${URL}`)}
      />
    </div>
  );
};

export default Contact;
