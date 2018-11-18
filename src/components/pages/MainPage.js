import React from 'react';
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
              <Sidebar projects={this.props.projects}/>
              <ProjectGrid projects={this.props.projects} handlePassIndex={this.props.handlePassIndex}/>
            </div>
          ) : (
            <div>
              <Navigation projects={this.props.projects}/>
              <ProjectGrid projects={this.props.projects} handlePassIndex={this.props.handlePassIndex}/>
            </div>
          )
        }
      </Media>
    );
  }
};

export default MainPage;
