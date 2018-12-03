import React from 'react';
import ben from '../assets/images/ben.png';

const About = () => (
  <div className="page--container">
    <h1 className="page--title">ABOUT</h1>
    <div className="about-grid">
      <div className="about-grid-item">
        <img
          className="about-image"
          src={ben}
          alt="Photo of Ben"
        />
      </div>

      <div className="about-grid-item">
        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
      </div>

      <div className="about-grid-item">
        <div className="about-skills-container">
          <h3 className="about-skills-title">SKILLS</h3>
          <div className="about-skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>Sass</span>
            <span>JavaScript</span>
            <span>ES6+</span>
            <span>Git</span>
            <span>React</span>
            <span>Redux</span>
            <span>Command Line</span>
            <span>npm/yarn</span>
            <span>Webpack</span>
            <span>Babel</span>
            <span>JSON</span>
            <span>AJAX</span>
            <span>XML</span>
            <span>Bootstrap</span>
            <span>jQuery</span>
            <span>Heroku</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>Mobile First</span>
            <span>Cross Browser</span>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default About;
