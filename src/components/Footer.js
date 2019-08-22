import React, { Component } from 'react';
import './Footer.css';


export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="col footer-left">
            <p class="footer-name">Hector del Angel</p>
            <p class="silly">Hardware and instructions included.</p>
            {/* <p class="copyright"><i class="fas fa-copyright" ></i>2019</p> */}
          </div>
          <div className="col footer-right">
            <a href="mailto:hectordelangel@gmail.com">
              <i className="fas fa-envelope" />
            </a>
            <a href="https://github.com/h3c70rdelAn9el">
              <i class="fab fa-github" />
            </a>
            <a href="www.linkedin.com/in/hectordelangel">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
