import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import pdf from '../docs/my_resume.pdf';

import './About.css';
import profile from '../images/profile_pic.JPG';

export default class About extends Component {
  render() {
    return (
      <div className="active" id="about-section">
        <div className="about-dark-overlay">
        <h1>About Me</h1>
          <div className="container about-content">
            <div className="row">
              <div className="col-md-6 left-column">
              <ScrollAnimation animateIn="fadeIn">
                <img src={profile} alt="profile"/>

              </ScrollAnimation>
              </div>
              <div className="col-md-6 text-center right-column" >

                <ScrollAnimation animateIn="fadeIn">
                  <p>Just another web developer trying to make his way through this webverse one line of code at a time. </p> 

                </ScrollAnimation>         
                <br/>
                <hr className="hr-light"/>
                <ScrollAnimation animateIn="fadeIn">
                <p>I come from a private musical teaching career, primarily guitar, some other instruments from time to time.</p>
                      <br/>
                      It has had provided me with countless experiences over the years, which have helped me interact, listen, and help guide my students and clients.
                      <br/>
                      </ScrollAnimation>

                      <hr className="hr-light"/>
                <ScrollAnimation animateIn="fadeIn">
                    <p>
                      I constantly try to look for different solutions for problems, to perhaps try to find different or more insightful ways to a solution.
                      </p> 
                      <br/>
                      </ScrollAnimation>
                      <hr className="hr-light"/>
                      You can reach me here:
                      <div className="contact-icons">
                    
                        <a href="mailto:hectordelangel@gmail.com">
                              <i className="fas fa-envelope fa-fw" ></i>
                            </a>
                        <a href="https://www.linkedin.com/in/hectordelangel/">
                          <i className="fab fa-linkedin fa-fw" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/h3c70rdelAn9el">
                          <i className="fab fa-github fa-fw" aria-hidden="true"></i>
                        </a>
                        <a href={pdf}>
                          <i className="fas fa-file fa-fw"></i>
                        </a>
                      
                      </div>
                    </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}