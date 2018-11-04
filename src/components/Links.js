import React from 'react';
import { Link } from 'react-router-dom';

const Links = (props) => (
  <div>
    <ul>
      <li><Link to="/" onClick={props.resetProjectIndex}>projects</Link></li>
      {props.projects.projectsArray.map((project, index) => (
        <li>
          <Link onClick={() => props.handleProjectIndex(index)} to="/projects">{project.title}</Link>
        </li>
      ))}
      <li><Link to="/about">about</Link></li>
      <li><Link to="/contact">contact</Link></li>
    </ul>
  </div>
);

export default Links;
