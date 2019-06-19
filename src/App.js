import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>      
          <MyNavbar />
{/* 
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} /> */}

            {/* New Stuff */}
            
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

        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default App;
