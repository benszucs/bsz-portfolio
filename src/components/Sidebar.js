import React from 'react';

import Links from './Links';

const Sidebar = (props) => (
  <div className="sidebar">
    <h1>Ben Szucs</h1>
    <Links projects={props.projects} handleProjectIndex={props.handleProjectIndex}/>
  </div>
);

export default Sidebar;
