import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <div className="mobile-nav" id="toggle">
            <span className="sidebar-item"></span>
            <span className="sidebar-item"></span>
            <span className="sidebar-item"></span>
            <span className="sidebar-item"></span>
            <span className="sidebar-item"></span>
        </div>
        <ul id="">
            <Link to="/main">
                <li>
                <a className="link" id="main-link">Corynne Moody</a>
                </li>
            </Link>
            <section>
            <Link to="/about">
                <li>
                <a className="link">About</a>
                </li>
            </Link>
            <Link to="/projects">
                <li>
                <a className="link">Projects</a>
                </li>
            </Link>
            <Link to="/contact">
                <li>
                <a className="link">Contact</a>
                </li>
            </Link>
            <Link to="/resume">
                <li>
                <a className="link">Download My Resume</a>
                </li>
            </Link>
          </section>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
