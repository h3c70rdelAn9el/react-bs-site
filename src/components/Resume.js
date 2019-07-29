import React, { Component } from 'react';
import './Resume.css';

export default class Resume extends Component {
  render() {
    return (
      <div className="active" id="resume">
        <div className="resume-section">
          <h1>Resume</h1>
          <div className="resume-title">
            <p><a href="#">Download</a></p>
          </div>
        </div>
      </div>
    )
  }
}
