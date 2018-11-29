import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Eiffel from './icons/Eiffel.js';

// import Project from './pages/Project';


export default class ProjectGrid extends Component {
  changeSVGFillonHover
  render() {
    return (
      <div className="grid">
        {this.props.projects.projectsArray.map((project, index) => (

          <div key={index} className="grid--item">
          <div className="grid--icon">
            <Eiffel className="svg" fill="hsl(0, 0%, 13%)" />
            <div className="moon"></div>
          </div>

          <div className="grid--title-container">
            <div className="grid--title anim-title">
              <Link
                className="title__color-trans"
                to={`/projects`}
              >
                <h3>{project.title}</h3>
              </Link>
            </div>

            <div className="grid--title anim-links">
              <a
                className="title__color-trans"
                href={project.demoLink}
                rel="noopener noreferrer"
              >
                <h3>Demo</h3>
              </a>
              <a
                className="title__color-trans"
                href={project.githubLink}
                rel="noopener noreferrer"
              >
                <h3>Code</h3>
              </a>
            </div>
          </div>


          </div>

        ))}
      </div>
    );
  }
}
