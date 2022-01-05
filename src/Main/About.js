import React from 'react';
import DarkTurq from "./Circles/DarkTurq";
import SeaFoamL from "./Circles/SeaFoamL";
import SeaFoamS from "./Circles/SeaFoamS";
import DarkBlueL from "./Circles/DarkBlueL";
import DarkBlueS from "./Circles/DarkBlueS";
import LightGreen from "./Circles/LightGreen";
import Beige from "./Circles/Beige";
import uparrow from './assets/uparrow.png';
import downarrow from './assets/downarrow.png';

import './main.css'

const About = () => {

    const darkTurq = {
        marginTop: "",
        marginLeft: ".5em",
        height: '75px',
        width: '150px',
        borderBottomLeftRadius: '200px',
        borderBottomRightRadius: '200px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
      };
    
      const seafoaml = {
        marginTop: "-3em",
        marginLeft: "-5em",
        height: '250px',
        width: '125px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '200px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '200px',
      };
    
      const beige = {
        height: '190px',
        width: '190px',
        marginTop: "-13.7em",
        marginLeft: "-10.5em",
      };
    
      const green = {
        marginTop: "-4.8em",
        float: 'right',
        borderBottomLeftRadius: '150px',
        borderBottomRightRadius: '0px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
      };
    
      const darkBluel = {
        marginTop: "-5em",
        marginBottom: '3em',
        marginLeft: "",
        height: '150px',
        width: '80px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '200px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '200px',
      };
    
      const darkBlues = {
        float: 'right',
        marginTop: "-23em",
        marginLeft: "20em",
      };
    
      const seafoams = {
        float: 'right',
        marginTop: "-13em",
        marginRight: '2em'
      };
    
 


    return(
        <div style={{ height: '120vh'}} id="about">
            <DarkTurq style={darkTurq}/>
            <LightGreen style={green}/>
            <img src={uparrow} className="up" style={{marginTop: '-8vh'}} onClick={() => window.location.assign('http://localhost:3000/')}/>
            <h1 id='title' style={{ marginLeft: '1.7em'}}>About</h1>
            <DarkBlueL style={darkBluel}/>
            <SeaFoamL style={seafoaml}/>
            <SeaFoamS style={seafoams}/>
            <DarkBlueS style={darkBlues}/>
            <Beige style={beige}/>
              
            <h1 id="abt-desc">My name is Corynne Moody and I am a Front End Developer, based in Indiana, working remotely for Eleven Fifty Academy as an Instructor Trainee.
                I specialize in creating and maintaining databases with NodeJs and PostgreSQL and building front end React applications to display the data. My background is in Childcare and Administrative positions 
                
            </h1>

            <img src={downarrow} className="down" onClick={() => window.location.assign("http://localhost:3000/#applications")}/>

        </div>
    )
}


export default About;