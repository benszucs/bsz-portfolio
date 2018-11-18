import React from 'react';
import { Link } from 'react-router-dom';
//
// import Project from './pages/Project';


const ProjectGrid = (props) => (
  <div className="grid">
    {props.projects.projectsArray.map((project, index) => (
      <div key={index} className="grid--item">
        <img className="grid--item__image" src={require('../assets/'+project.background)} alt=""/>
        <div className="grid--item__overlay">
          <h2 onClick={() => props.handlePassIndex(index)} className="project--link">
            <Link className="title__color-trans" to={`/projects`}>{project.title}</Link>
          </h2>
          <p>{project.subtitle}</p>
          <div>
            <a href={project.demoLink} rel="noopener noreferrer" target="_blank">Demo</a>
            <a href={project.githubLink} rel="noopener noreferrer" target="_blank">Code</a>
          </div>
          <div>
            {project.tech.map((image, index) => (
              <img key={index} className="grid--item__tech" src={require('../assets/'+image)} alt=""/>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectGrid;
