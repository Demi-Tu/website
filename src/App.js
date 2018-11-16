import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './Home';
import { Projects } from './Projects';
import { About } from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Link to="/">Home</Link>
          { ' ' }
          <Link to="/projects">Projects</Link>
          { ' ' }
          <Link to="/about">About</Link>
          <Route exact path="/" component={ Home } />
          <Route path="/projects" component={ Projects } />
          <Route path="/about" component={ About } />
        </div>
      </Router>
    );
  }
}

export default App;