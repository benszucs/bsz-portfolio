import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    return (
      <div className="content--container">
        <h1>{this.props.projects.projectsArray[this.state.projectIndex].title}</h1>
        <div>
          <button onClick={this.handleDecrementProjectIndex} className="arrows">
            <FontAwesomeIcon icon={['fas', 'angle-left']} />
          </button>
          <button onClick={this.handleIncrementProjectIndex} className="arrows">
            <FontAwesomeIcon icon={['fas', 'angle-right']} />
          </button>
        </div>
      </div>
    );
  }
};
