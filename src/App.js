import React, { Component } from 'react';
import defaultState from './data/data.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: defaultState };
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" render={props => (<MainPage {...this.state}/>)}/>
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
