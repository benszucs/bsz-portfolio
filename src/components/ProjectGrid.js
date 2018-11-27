import React from 'react';
import { Link } from 'react-router-dom';
//
// import Project from './pages/Project';


const ProjectGrid = (props) => (
  <div className="grid">
    {props.projects.projectsArray.map((project, index) => (

      <div key={index} className="grid--item">

        <img className="grid--item__image" src={require('../assets/images/'+project.background)} alt=""/>

        <div className="grid__overlay">
          <h2 onClick={() => props.handlePassIndex(index)} className="grid__overlay--content">
            <Link className="title__color-trans" to={`/projects`}>{project.title}</Link>
          </h2>

          <div className="grid__overlay--content">
            <a href={project.demoLink} rel="noopener noreferrer" target="_blank">Demo</a>
            <a href={project.githubLink} rel="noopener noreferrer" target="_blank">Code</a>
          </div>
        </div>

      </div>

    ))}
  </div>
);

export default ProjectGrid;
