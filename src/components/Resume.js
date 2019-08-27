import React, { Component } from 'react';
import './Resume.css';

export default class Resume extends Component {
  render() {
    return (
      <div className="active" id="resume">
        <div className="resume-section">
          <h1>Resume</h1>
          <div className="resume-title container">
            <a className="btn btn-primary" href="https://docs.google.com/document/d/193azpHYKOEbwjxHJ2SoAlaTqSo0Xy_UmrQAc7eW_nEk/edit?usp=sharing">
              View
            </a>
          </div>

        </div>
      </div>
    )
  }
}
