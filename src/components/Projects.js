import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


import './Projects.css';
import money from '../images/sharon-mccutcheon-unsplash.jpg';
import subscription from '../images/chandler-cruttenden-unsplash.jpg';
import helloquence from '../images/helloquence-61189-unsplash.jpg';

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="mb-4">
        <section id="projects-section">
        <div class="projects-dark-overlay">
        <h1 class="projects-title">Projects</h1>
        <ScrollAnimation animateIn="fadeIn">

          <p class="projects-subtitle">Just a few personal projects made with different libraries, languages, and databases</p>
        </ScrollAnimation>       
        <div class="container projects-content">
          <div class="row">
            <div class="col-md-4">
              <ScrollAnimation animateIn="fadeIn">

              <div class="card">
                <a href="https://damp-harbor-52522.herokuapp.com/" class="card-img">
                  <img src={money} alt="money"/>
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
                  <a href="https://damp-harbor-52522.herokuapp.com/" class="btn btn-primary first">Visit</a>
                </div>
              </div>
              </ScrollAnimation>
            </div> 

            <div class="col-md-4">
            <ScrollAnimation animateIn="fadeIn">
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
                  <a href="https://quiet-refuge-83664.herokuapp.com/" class="btn btn-primary second">Visit</a>
                </div>
              </div>
              </ScrollAnimation>
            </div>
            

          <div class="col-md-4">
          <ScrollAnimation animateIn="fadeIn">   
            <div class="card">
              <a href="/" className="card-img">
                <img src={helloquence} alt="helloquence"/>
              </a>
              <div className="card-body third">
                <h4 className="card-title third">GitHub</h4>
                <p className="card-subtitle text-center">Misc Projects on Github</p>
                <hr/>
                <div class="container card-content third">
                  <p>Rails Projects</p>
                  <p>JS Exercises</p>
                  <p>React</p>
                  <p>MDL practice</p>
                  <p>Chat App</p>
                  <p>This site</p>
                </div>
                <a href="https://github.com/h3c70rdelAn9el" class="btn btn-primary button third">Visit</a>
              </div>
            </div>
            </ScrollAnimation> 
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
  )
  }
}
