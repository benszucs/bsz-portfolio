import React, {Component} from 'react';
import { Media } from 'react-breakpoints';


//Components
import Navigation from '../Navigation';
import ProjectGrid from '../ProjectGrid';
import Sidebar from '../Sidebar';


class MainPage extends React.Component {
  render() {
    return(
      <Media>
        {({ breakpoints, currentBreakpoint}) =>
          breakpoints[currentBreakpoint] > breakpoints.mobile ? (
            <div className="view__sidebar">
              <Sidebar projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex}/>
              <ProjectGrid projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex}/>
            </div>
          ) : (
            <div>
              <Navigation projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex} />
              <ProjectGrid projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex}/>
            </div>
          )
        }
      </Media>
    );
  }
};

export default MainPage;
