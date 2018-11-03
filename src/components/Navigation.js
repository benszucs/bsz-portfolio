import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => (
  <div className="navbar">
    <h1>Ben Szucs</h1>
    <span>
      <FontAwesomeIcon icon={['fas', 'bars']} />
    </span>
  </div>
);

export default Navigation;
