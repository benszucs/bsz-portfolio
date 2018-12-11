import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// haven't managed to figure out how to stop page reset when state gets updated by link with onClick handler
const Links = (props) => (
  <div>
    <ul>
      <li><Link className="link__color-trans" to="/">projects</Link></li>
      {false && props.projects.projectsArray.map((project, index) => (
        <li key={index}>
          <Link to="/projects">{project.title}</Link>
        </li>
      ))}
      <li><Link className="link__color-trans" to="/about">about</Link></li>
      <li><Link className="link__color-trans" to="/contact">contact</Link></li>
    </ul>
    <div className="link--social-container">
      <a href="https://github.com/benszucs/">
        <FontAwesomeIcon className="link__color-trans" icon={['fab', 'github-alt']} />
      </a>
      {/* <a href="https://www.instagram.com/">
        <FontAwesomeIcon className="link__color-trans" icon={['fab', 'linkedin-in']} />
      </a> */}
      <a href="/">
        <FontAwesomeIcon className="link__color-trans" icon={['fas', 'id-card']} />
      </a>
    </div>
  </div>
);

export default Links;
