import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-tilt'

//ICONS
import Icon from './Icon'
import { FaGithubAlt } from 'react-icons/fa'
import { FaDesktop } from 'react-icons/fa'


export default class ProjectGrid extends Component {

  render() {
    return (
      <div className="grid">
        {this.props.projects.projectsArray.map((project, index) => (
          <div className="grid--item-container">
            <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }} style={{ height: "80%", width: "80%" }}>
              <div key={index} className="grid--item Tilt-inner animateOnHover">
                
              <Link to="/projects" className="grid--icon">
                <Icon index={index} />
              </Link>

              <div className="grid--title-container">

                <div className="grid--title anim-title">
                  <h3>{project.title}</h3>
                </div>

                <div className="grid--title anim-links">

                  <a
                    className="title__dark-to-light"
                    href={project.demoLink}
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <h3><FaDesktop /></h3>
                  </a>

                  <a
                    className="title__dark-to-light"
                    href={project.githubLink}
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <h3><FaGithubAlt /></h3>
                  </a>
                  
                </div>

                <div className="grid--title anim-title-appear">
                  <Link to='/projects' className="title__color-trans">
                    <h3 className="title__dark-to-light">{project.title}</h3>
                  </Link>
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
