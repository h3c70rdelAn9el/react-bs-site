import React, { Component } from 'react';

import './About.css';
import profile from '../images/profile_pic.JPG';

export default class About extends Component {
  render() {
    return (
<div className="active" id="about-section">
    <div className="about-dark-overlay">
    <h1>About Me</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-column">
            <img src={profile} alt="profile"/>
          </div>
          <div className="col-md-6 text-center right-column" >
            <p>Just another web developer trying to make his way through this webverse one line of code at a time. 
            <br/>
            <hr className="hr-light"/>
            I come from a private musical teaching career, primarily guitar, some other instruments from time to time.
            <br/>
            It has had provided me with countless experiences over the years that have helped me interact, listen, and help guide my students to their own successes.
            <br/>
            <hr className="hr-light"/>
            I consider myself one of those ‘forever students’, hungry for knowledge, and more than eager to always learn and apply things. I constantly try to look for different solutions for problems, to perhaps try to find different or more insightful ways to a solution. 
            <br/>
            <hr/>
            You can reach me here:
            <p className="contact-icons">
              <a href="mailto:hectordelangel@gmail.com">
                <i class="fas fa-envelope-open" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/hectordelangel/">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/h3c70rdelAn9el">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
             
            </p>
            </p>
          </div>
        </div>
      </div>
    </div>

    </div>

    )
  }
}