import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (  
      <div className="footer">
        <div className="row">
          <div className="col-6 footer-left">
            <p>Hector del Angel</p>
            <p><i class="fas fa-copyright" ></i> 2019</p>
          </div>
          <div className="col-6 footer-right">
            <a href="mailto:hectordelangel@gmail.com">
              <i className="fas fa-envelope" ></i>
            </a>
            <a href="https://github.com/h3c70rdelAn9el">
              <i class="fab fa-github"></i>
            </a>
            <a href="www.linkedin.com/in/hectordelangel">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>        
      </div>
    )
  }
}
