import React from 'react';
import { Media } from 'react-breakpoints';


//Components
import Navigation from '../Navigation';
import Project from '../Project';
import Sidebar from '../Sidebar';


class DisplayProject extends React.Component {

  render() {
    return(
      <Media>
        {({ breakpoints, currentBreakpoint}) =>
          breakpoints[currentBreakpoint] > breakpoints.mobile ? (
            <div className="view__sidebar">
              <Sidebar projects={this.props.projects} />
              <Project projects={this.props.projects} projectIndexPassed={this.props.projectIndexPassed}/>
            </div>
          ) : (
            <div>
              <Navigation projects={this.props.projects}/>
              <Project projects={this.props.projects} projectIndexPassed={this.props.projectIndexPassed}/>
            </div>
          )
        }
      </Media>
    );
  }
};

export default DisplayProject;
