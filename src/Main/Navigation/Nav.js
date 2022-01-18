import React from "react";
import { Link } from "react-router-dom";
import menuIcon from '../assets/menu.png'
import cancelIcon from '../assets/cancel.png'
import resume from '../assets/Corynne_Moody_Resume.pdf'
import "./nav.css";

const Navigation = ({style}) => {
 
// When I move each set of DOM var's to the top of the component, I run into timing errors? 
// menu, main, and mi all seem to be null onClick of the hamburger, but work fine inside of the open and 
// close func. Weird.
  const menuOpen = () => {
    let menu = document.getElementById('menu')
    let main = document.querySelector('#main')
    let mi = document.querySelector('#menuIcon')
  console.log(menu)
   menu.style.width = '250px'
   menu.style.display = 'block'   
   main.style.display = 'none'
   main.style.opacity = '0.1'
   mi.style.display = 'none'
  }
  
  const menuClose = () => {
    let menu = document.getElementById('menu')
    let main = document.querySelector('#main')
    let mi = document.querySelector('#menuIcon')
    menu.style.width = '0px'
    main.style.opacity = '1'
    menu.style.display = 'none'
    main.style.display = 'block'
    mi.style.display = 'block'
   }



  return (
    <div className="nav-wrapper">
      <img id="menuIcon" onClick={() => menuOpen()} src={menuIcon} style={{height: '50px', position: "absolute", top: '20px', right: '20px'}}/>
      <nav style={style} id="menu" >
      <img id="cancelIcon" onClick={() => menuClose()} src={cancelIcon} style={{height: '30px', position: "absolute", top: '20px', right: '20px', position: 'fixed'}}/>
        <Link to='about' className="link"><h5 className="link-tags">About</h5></Link>
        <Link to='applications' className="link"><h5 className="link-tags">Projects</h5></Link>
        <Link to='contact' className="link"><h5 className="link-tags">Contact</h5></Link>
        <a className="link" href={resume} download={resume} target="_blank"><h5 className="link-tags">Download Resume</h5></a>
      </nav>
    </div>
  );
};

export default Navigation;
