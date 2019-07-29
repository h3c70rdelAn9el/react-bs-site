import React, { Component } from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

// export default class Nav extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       menu: false
//     };
//     this.toggleMenu = this.toggleMenu.bind(this);
//   }

//   toggleMenu(){
//     this.setState({ menu: !this.state.menu })
//   }

//   render() {

//     const show = (this.state.menu) ? "show" : "" ;

//     return (

//       <nav className="navbar navbar-expand-md navbar-dark">
//         <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={"collapse navbar-collapse " + show}>
//           <div className="navbar-nav">
//             <a className="nav-item nav-link navitem" href="/">Home</a>
//             <a className="nav-item nav-link" href="/about">About</a>
//             <a className="nav-item nav-link" href="/skills">Skills</a>
//             <a className="nav-item nav-link" href="/projects">Projects</a>
//             <a className="nav-item nav-link" href="/#">Resume</a>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }



export default class Navbar extends Component {




  state = {};
  render() {


    return (
      <nav className="navbar" id="navbar" >




        <div className="nav-content">
          <ul className="nav-items">
            <Link
              className="link" 
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              className = "link"

              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              className = "link"

              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
            <Link
              className = "link"

              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className = "link"

              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Resume
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}
