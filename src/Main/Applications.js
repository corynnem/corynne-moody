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
        marginTop: "10em",
        marginLeft: ".5em",
      };
    
      const seafoaml = {
        marginTop: "-3em",
        marginLeft: "41em",

      };
    
      const beige = {
        height: '190px',
        width: '190px',
        marginTop: "-13.7em",
        marginLeft: "55em",
      };
    
      const green = {
        marginTop: "-4.7em",
        float: 'right',

      };
    
      const darkBluel = {
        marginTop: "-5em",
        marginBottom: '3em',
        marginLeft: "",
   
      };
    
      const darkBlues = {
        float: 'right',
        marginTop: "-23em",
        marginLeft: "20em",
      };
    
      const seafoams = {
        float: 'right',
        marginTop: "-16em",
        marginRight: '2.5em'
      };
    
 


    return(
        <div style={{ height: '90vh'}} id="applications">
{/*             
            <LightGreen style={green}/>
            <img src={uparrow} className="up" style={{marginTop: '-8vh'}} onClick={() => window.location.assign('http://localhost:3000/')}/>
            <h1 id='title' style={{ marginLeft: '1.7em'}}>Applications</h1>
            <DarkBlueL style={darkBluel}/>

            <SeaFoamL style={seafoaml}/>
            <SeaFoamS style={seafoams}/>
            <DarkBlueS style={darkBlues}/>
            <DarkTurq style={darkTurq}/>
            <Beige style={beige}/>
           

            <img src={downarrow} className="down" style={{marginLeft: '25em'}} onClick={() => window.location.assign("http://localhost:3000/#applications")}/> */}

        </div>
    )
}


export default About;