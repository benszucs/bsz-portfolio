import React, {Component} from 'react';
import { Media } from 'react-breakpoints';


//Components
import Navigation from './Navigation';
import ProjectGrid from './ProjectGrid';
import Project from './pages/Project';
import Sidebar from './Sidebar';


class DisplayProject extends React.Component {
  render() {
    return(
      <Media>
        {({ breakpoints, currentBreakpoint}) =>
          breakpoints[currentBreakpoint] > breakpoints.mobile ? (
            <div className="view__sidebar">
              <Sidebar />
              {this.props.projectIndex === null ?
                  <ProjectGrid
                    projects={this.props.projects}
                    handleProjectIndex={this.props.handleProjectIndex}
                  />
                :
                  <Project />
              }
            </div>
          ) : (
            <div>
              <Navigation />
              {this.props.projectIndex === null ?
                  <ProjectGrid
                    projects={this.props.projects}
                    handleProjectIndex={this.props.handleProjectIndex}
                  />
                :
                  <Project />
              }
            </div>
          )
        }
      </Media>
    );
  }
};

export default DisplayProject;
