import React from 'react';
import { Link } from 'react-router-dom';
import ben from '../assets/images/ben.png';
import Tilt from 'react-tilt';


const About = () => (
  <div className="page--container">
    <h1 className="page--title">ABOUT</h1>
    <div className="about-grid">
      <div className="about-grid-item">
        <Tilt className="Tilt" options={{ max: 15, scale: 1.05 }} style={{ height: "80%", width: "80%" }}>
          <img
            className="about-image Tilt-inner"
            src={ben}
            alt="Ben"
          />
        </Tilt>
      </div>

      <div className="about-grid-item about-me">
        <p>Hi I'm Ben. Front-End Developer, UX Enthusiast and Professional Googler.</p>
        <p>I started my journey as a self-taught developer shortly after graduating from University, when I stumbled upon HTML & CSS. What started out as a hobby, turned into a full-time obsession.</p>
        <p>In Front-End Development I have found a field that I am truly passionate about, where I can utilise my creativity and problem solving skills to synthesise design and development, bringing innovative concepts to life.</p>
        <p>I enjoy spending my free time increasing my knowledge of Web Development and building new and challenging projects.</p>
        <p>Confident in my ability to learn new technologies quickly, which is possibly the most valuable thing I can provide any company.</p>
      </div>

      <Link
        className="link__color-trans"
        to="/contact"
      >
        <button className="button about-button">
          Mould me to your stack
        </button>
      </Link>


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
            <span>Garsby.js</span>
            <span>GraphQl</span>
            <span>Command Line</span>
            <span>npm/yarn</span>
            <span>Webpack</span>
            {/* <span>Babel</span>
            <span>JSON</span>
            <span>AJAX</span>
            <span>XML</span> */}
            <span>Bootstrap</span>
            <span>jQuery</span>
            <span>Heroku</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>Adobe Illustrator</span>
            <span>Adobe Photoshop</span>
            <span>Mobile First</span>
            <span>Cross Browser</span>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default About;
