import React from 'react';
import { Media } from 'react-breakpoints';


//Components
import Navigation from '../Navigation';
import Contact from '../Contact';
import Sidebar from '../Sidebar';


class ContactPage extends React.Component {
  render() {
    return(
      <Media>
        {({ breakpoints, currentBreakpoint}) =>
          breakpoints[currentBreakpoint] > breakpoints.mobile ? (
            <div className="view__sidebar">
              <Sidebar projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex}/>
              <Contact env={this.props.env}/>
            </div>
          ) : (
            <div>
              <Navigation projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex}/>
              <Contact env={this.props.env}/>
            </div>
          )
        }
      </Media>
    );
  }
};

export default ContactPage;
