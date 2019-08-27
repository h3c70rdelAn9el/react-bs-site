import React, { Component } from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {

  state = {};
  render() {
    return (
      <nav className="navbar" id="navbar" >
        <div className="nav-content">
          <ul className="nav-items">
            <Link
              className="link" 
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>

            <Link
              className = "link"

              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>

            <Link
              className = "link"

              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>

            <Link
              className = "link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            
            <Link
              className = "link"
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Resume
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}
