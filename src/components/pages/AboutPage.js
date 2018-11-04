import React, {Component} from 'react';
import { Media } from 'react-breakpoints';


//Components
import Navigation from '../Navigation';
import About from '../About';
import Sidebar from '../Sidebar';


class AboutPage extends React.Component {
  render() {
    return(
      <Media>
        {({ breakpoints, currentBreakpoint}) =>
          breakpoints[currentBreakpoint] > breakpoints.mobile ? (
            <div className="view__sidebar">
              <Sidebar projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex}/>
              <About />
            </div>
          ) : (
            <div>
              <Navigation projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex}/>
              <About />
            </div>
          )
        }
      </Media>
    );
  }
};

export default AboutPage;
