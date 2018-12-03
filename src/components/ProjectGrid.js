import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Tilt from 'react-tilt';

//ICONS
import BSZLogo from './icons/BSZLogo.js';
import YellowMoon from './icons/YellowMoon.js';
import BlueMoon from './icons/BlueMoon.js';
import ToDoIcon from './icons/ToDoIcon';
import QuoteGenIcon from './icons/QuoteGenIcon';
import MovieIcon from './icons/MovieIcon';


export default class ProjectGrid extends Component {

  render() {
    return (
      <div className="grid">
        {this.props.projects.projectsArray.map((project, index) => (
          <div className="grid--item-container">
            <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }} style={{ height: "80%", width: "80%" }}>
              <div key={index} className="grid--item Tilt-inner">

                {index === 0 &&
                  <div className="grid--icon">
                    <div className="bsz-logo"><BSZLogo /></div>
                    <div className="bsz-yellow-moon"><YellowMoon /></div>
                    <div className="bsz-blue-moon"><BlueMoon /></div>
                  </div>
                }

                {index === 1 &&
                  <div className="grid--icon">
                    <ToDoIcon />
                  </div>
                }

                {index === 2 &&
                  <div className="grid--icon">
                    <QuoteGenIcon />
                  </div>
                }

                {index === 3 &&
                  <div className="grid--icon">
                    <MovieIcon />
                  </div>
                }


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

                <div className="grid--title anim-title-appear">
                  <h3>{project.title}</h3>
                </div>
              </div>


              </div>
            </Tilt>
          </div>
        ))}
      </div>
    );
  }
}
