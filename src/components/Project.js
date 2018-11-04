import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    return (
      <div className="content--container">
        <h1>{this.props.projects.projectsArray[this.props.projectIndex].title}</h1>
      </div>
    );
  }
};
