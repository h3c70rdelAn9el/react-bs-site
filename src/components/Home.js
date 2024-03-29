import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div id="home">
       <header id="home-section">
        <div className="dark-overlay">
          <div className="home-inner">
            <div className="container">
              <div className="head-titles">
                <h1 className="main-title">Hector del Angel</h1>
                <h3 >Junior Full Stack Developer</h3>
                <div className="container icons">
                  <p>Hey! Thanks for stopping by, look around, or</p> 
                  <p>just reach me here:</p>
                  <div className="container page-icons">
                    <a href="mailto:hectordelangel@gmail.com">
                    <i className="fas fa-envelope" ></i>
                  </a>
                  <a href="https://github.com/h3c70rdelAn9el">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="www.linkedin.com/in/hectordelangel">
                    <i className="fab fa-linkedin"></i>
                  </a> 
                  <a href="https://docs.google.com/document/d/1UkCqNfI5W23ePYFpyD8KhO3vMqCiMPDt8eMecbB3evw/edit?usp=sharing">             
                    <i className="fas fa-file"></i>
                  </a> 
                  </div>                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    )
  }
}
