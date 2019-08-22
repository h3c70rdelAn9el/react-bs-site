import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './Skills.css';
import misty from '../images/mistylaptop.JPG';



export default class Skills extends Component {
  render() {
    return (
      <div className="skills-section" id="skills">
        <div className="dark-overlay">
        <h1 classname="skills-title">Skills</h1>

        <div id="skills-section" class="py-5">
        <ScrollAnimation animateIn="fadeIn">;
    <div className="container skills-content">
      <div className="row">
        <div className="col-md-6">
        <hr/>
          <h3 className="text-center">Programming</h3>
          <hr width="35%" />
          <div className="align-items-center">
            <ul className="skills-list text-center list-unstyled">
              <li>HTML5</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>Wordpress</li>
              <li>RoR</li>
              <li>React</li>
            </ul>
          </div>
          <hr/>
          <h3 className="text-center">Personal</h3>
          <hr width="35%" />
          <div className="align-items-center">
            <ul className="skills-list text-center list-unstyled ">
              <li>Fast Learner</li>
              <li>Passionate Worker</li>
              <li>Teamworker</li>
              <li>Guitarist</li>
              <li>Cat-like reflexes</li>
              <li>Longboarder</li>
            </ul>
          </div>
          <hr/>
        </div>

      <div className="col-md-6">
        <div className="misty-image">
          <img src={misty} alt="Misty"/>

        </div>

      </div>

      </div>



    </div>
    </ScrollAnimation>

          </div>
          </div>
          </div>
  

    

    )
  }
}
