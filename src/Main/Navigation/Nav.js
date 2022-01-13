import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navigation = ({style}) => {
  return (
    <div className="nav-wrapper">
      <img/>
      <nav style={style}>
        <Link to='about' className="link"><h5>About</h5></Link>
        <Link to='applications' className="link"><h5>Projects</h5></Link>
        <Link to='contact' className="link"><h5>Contact</h5></Link>
      </nav>
    </div>
  );
};

export default Navigation;
