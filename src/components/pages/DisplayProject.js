import React, {Component} from 'react';
import { Media } from 'react-breakpoints';


//Components
import Navigation from '../Navigation';
import ProjectGrid from '../ProjectGrid';
import Project from '../Project';
import Sidebar from '../Sidebar';


class DisplayProject extends React.Component {

  render() {
    return(
      <Media>
        {({ breakpoints, currentBreakpoint}) =>
          breakpoints[currentBreakpoint] > breakpoints.mobile ? (
            <div className="view__sidebar">
              <Sidebar projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex}/>
              <Project projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex} projectIndex={this.props.projectIndex}/>
            </div>
          ) : (
            <div>
              <Navigation projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex}/>
              <Project projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex} projectIndex={this.props.projectIndex}/>
            </div>
          )
        }
      </Media>
    );
  }
};

export default DisplayProject;
