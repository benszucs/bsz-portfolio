import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';

const Sidebar = (props) => (
  <div className="sidebar">
    <div className="sidebar--title">
      <Link className="title__dark-to-light" to="/">
        <h2>BEN</h2>
        <h2>SZUCS</h2>
      </Link>
    </div>
    <Links projects={props.projects}/>
  </div>
);

export default Sidebar;
