import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


//components
import MainPage from './components/pages/MainPage';
import DisplayProject from './components/pages/DisplayProject';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import NotFound from './components/NotFound';


//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faAngleLeft, faAngleRight, faIdCard } from '@fortawesome/free-solid-svg-icons';
library.add(faBars, faTimes, faAngleLeft, faAngleRight, faIdCard);
library.add(faGithubAlt, faLinkedinIn);



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      projectIndexPassed: null,
    };
  }

  componentWillMount() {
    let projects = require('./data/data.json');
    this.setState({ projects: projects});
  }
  
  handlePassIndex = (index) => {
    this.setState({ projectIndexPassed: index});
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Switch>
              <Route exact path="/" render={props => (<MainPage {...this.state} handlePassIndex={this.handlePassIndex} />)}/>
              <Route path="/projects" render={props => (<DisplayProject {...this.state} projectIndexPassed={this.state.projectIndexPassed}/>)}/>
              <Route path="/about" render={props => (<AboutPage {...this.state}/>)}/>
              <Route path="/contact" render={props => (<ContactPage {...this.state}/>)}/>
              <Route path="/notfound" render={props => (<NotFound {...this.state}/>)}/>
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
