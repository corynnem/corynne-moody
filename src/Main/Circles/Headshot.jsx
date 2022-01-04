import React, { useState } from 'react';
import headshot from '../assets/headshot.jpg'
import './circles.css'


const Headshot = ({style}) => {


    return (
        <div id="headshot-circle">
            <img id="headshot" src={headshot} style={style}/>
        </div>
    )
}
export default Headshot;