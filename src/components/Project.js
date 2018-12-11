import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from './Icon'
import Tilt from 'react-tilt'

import { FaGithubAlt } from 'react-icons/fa'
import { FaDesktop } from 'react-icons/fa'

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      onProjectsView: false,
      projectIndex: this.props.projectIndexPassed || 0,
    };
  }
  handleProjectIndex = (index) => {
    this.setState({ projectIndex: index });
  }
  handleIncrementProjectIndex = () => {
    if (this.state.projectIndex !== this.props.projects.projectsArray.length-1) {
      this.setState((prevState) => ({
        projectIndex: prevState.projectIndex + 1
      }));
    }
  }
  handleDecrementProjectIndex = () => {
    if (this.state.projectIndex > 0) {
      this.setState((prevState) => ({
        projectIndex: prevState.projectIndex - 1
      }));
    }
  }
  render() {
    const { projectIndex } = this.state
    const project = this.props.projects.projectsArray[projectIndex]
    console.log(project)
    return (
      <div className="content--container project-container">
        <h2>
          {project.title}
        </h2>
        
          {/* The card with the arrows */}
          <div>
            <Tilt className="Tilt" options={{ max: 15, scale: 1.05 }} style={{ height: "100%", width: "100%" }}>
              <div className="animateOnHover project-icon-container Tilt-inner">

                <div onClick={this.handleDecrementProjectIndex} className="arrows title__dark-to-light">
                  <FontAwesomeIcon icon={['fas', 'angle-left']} />
                </div>

                <div className="project-icon">
                  <Icon index={projectIndex}/>
                </div>

                <div onClick={this.handleIncrementProjectIndex} className="arrows title__dark-to-light">
                  <FontAwesomeIcon icon={['fas', 'angle-right']} />
                </div>

              </div>
            </Tilt>
          </div>
          {/* The card with the arrows */}

          <div className="project-icons">

            <a
              className="link__color-trans"
              href={project.demoLink}
              target='_blank'
              rel="noopener noreferrer"
            >
              <h2><FaDesktop /></h2>
            </a>

            <a
              className="link__color-trans"
              href={project.githubLink}
              target='_blank'
              rel="noopener noreferrer"
            >
              <h2><FaGithubAlt /></h2>
            </a>

          </div>

          
          <main className={`project-content ${ projectIndex === 0 ? "bsz-content" : ""}`}>
            <article className="project-user-stories">
              <h4>User Stories</h4>
              <ol>
                {project.userStories.map((story, index) => (
                  <li key={index}>{story}</li>
                ))}
              </ol>
            </article>
            <aside className="project-skills about-skills">
              <h4>Stack</h4>
              <div>
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </aside>
            <footer className="project-description">
              { projectIndex === 0 ? <h4>Description</h4>: ""}
              {project.description.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </footer>
          </main>
        
      </div>
    );
  }
};
