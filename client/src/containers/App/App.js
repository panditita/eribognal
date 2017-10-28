import React, { Component } from 'react';
import './App.css';
import About from '../../components/About/About';
import Home from '../../components/Home/Home';
import PlacesList from '../PlaceList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/about">About </Link></li>
            <li><Link to="/place">Place </Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/place" component={PlacesList} />          
        </div>
      </Router>
    );
  }
}

export default App;

