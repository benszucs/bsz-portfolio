import React from 'react';
import { Link, HashRouter } from 'react-router-dom';


const ProjectGrid = (props) => (
  <div className="grid">
    {props.projects.projectsArray.map((project, index) => (
      <div className="grid--item">
        <img className="grid--item__image" src={require('../assets/'+project.background)} alt=""/>
        <div className="grid--item__overlay">
          <h2 className="project--link" onClick={() => props.handleProjectIndex(index)}>{project.title}</h2>
          <p>{project.subtitle}</p>
          <div>
            <a href={project.demoLink} target="_blank">Demo</a>
            <a href={project.githubLink} target="_blank">Code</a>
          </div>
          <div>
            {project.tech.map((image) => (
              <img className="grid--item__tech" src={require('../assets/'+image)} alt=""/>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectGrid;