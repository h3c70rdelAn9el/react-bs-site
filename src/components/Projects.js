import React, { Component } from 'react';

import './Projects.css';
import money from '../images/sharon-mccutcheon-unsplash.jpg';
import subscription from '../images/chandler-cruttenden-unsplash.jpg';
import helloquence from '../images/helloquence-61189-unsplash.jpg';

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <section id="projects-section">
        <div class="projects-dark-overlay">
        <h1 class="projects-title">Projects</h1>
        <p class="projects-subtitle">Just a few projects made with different libraries, languages, and databases</p>
        <div class="container projects-content">
          <div class="row">

        <div class="col-md-4">
          <div class="card">
            <a href="https://damp-harbor-52522.herokuapp.com/" class="card-img">
              <img src={money} alt=""/>
            </a>
            <div class="card-body">
              <h4 class="card-title">Expense Tracker</h4>
              <p class="card-subtitle">A Personal Expense App</p>
              <hr/>
              <div>
                <p>Utilized:</p>
                  <div class="container card-content">
                    <p>Bootstrap</p>
                    <p>Firebase</p>
                    <p>React</p>
                    <p>Heroku</p>
                  </div>
              </div>
              <a href="https://damp-harbor-52522.herokuapp.com/" class="btn btn-primary">Visit</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <a href="https://quiet-refuge-83664.herokuapp.com/" class="card-img">
              <img src={subscription} alt=""/>
            </a>
            <div class="card-body">
              <h4 class="card-title">Subscription Site</h4>
              <p class="card-subtitle text-center">A subscription based site using RoR</p>
                 <hr/>
              <div>
                <p>Utilized:</p>
                  <div class="container card-content">
                    <p>Bootstrap</p>
                    <p>MYSQL</p>
                    <p>Rails</p>
                    <p>Stripe</p>
                    <p>Heroku</p>
                  </div>
              </div>
              <a href="https://quiet-refuge-83664.herokuapp.com/" class="btn btn-primary">Visit</a>
            </div>
          </div>
        </div>

          <div class="col-md-4">
            <div class="card">
              <a href="/" className="card-img">
                <img src={helloquence} alt="helloquence"/>
              </a>
              <div className="card-body">
                <h4 className="card-title">GitHub</h4>
                <p className="card-subtitle text-center">Misc Projects on Github</p>
                <hr/>
                <div class="card-content third">
                  <p>Rails Projects</p>
                  <p>JS Exercises</p>
                  <p>React</p>
                  <p>MDL practice</p>
                  <p>Chat App</p>
                </div>
                <a href="#" class="btn btn-primary button">Visit</a>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  </section>
      </div>
    )
  }
}
