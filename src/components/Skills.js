import React, { Component } from 'react';

import './Skills.css';
import misty from '../images/mistylaptop.JPG';

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-section">
        <div className="dark-overlay">
        <h1>Skills</h1>

        <div id="skills-section" class="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <hr/>
          <h3 className="text-center">Programming</h3>
          <hr width="35%" />
          <div className="align-items-center">
            <ul className="skills-list text-center list-unstyled">
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
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

          </div>
          </div>
          </div>
  

    

    )
  }
}
