import React, { Component } from 'react';
import './Navbar.css';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {

    const show = (this.state.menu) ? "show" : "" ;

    return (

      <nav className="navbar navbar-expand-md navbar-dark">
        <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <div className="navbar-nav">
            <a className="nav-item nav-link navitem" href="/">Home</a>
            <a className="nav-item nav-link" href="/about">About</a>
            <a className="nav-item nav-link" href="/skills">Skills</a>
            <a className="nav-item nav-link" href="/projects">Projects</a>
            <a className="nav-item nav-link" href="/#">Resume</a>
          </div>
        </div>
      </nav>
    );
  }
}
