import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Arrow from './components/Arrow';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>      
          <MyNavbar />
            <Arrow />
            
            <Home 
              id="home"
            />
            <About 
              id="about-section"
            />
            <Skills
              id="skills"
             />
            <Projects 
              id="projects"
            />
            <Resume 
              id="resume"
            />

        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default App;
