import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//components
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import Project from './components/pages/Project';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/NotFound';


//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      projectIndex: null
    };
  }
  componentWillMount() {
    let projects = require('./data/data.json');
    this.setState({ projects: projects});
  }
  handleProjectIndex = (index) => {
    this.setState({ projectIndex: index});
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={props => (
              <MainPage
                {...this.state}
                handleProjectIndex={this.handleProjectIndex}
              />
            )}/>
            <Route path="/about" render={props => (<About {...this.state}/>)}/>
            <Route path="/contact" render={props => (<Contact {...this.state}/>)}/>
            <Route path="/notfound" render={props => (<NotFound {...this.state}/>)}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
