import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from 'react';


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import HomeScreen from './screen/HomeScreen';
import AboutScreen from './screen/AboutScreen';
import MapScreen from './screen/MapScreen';
import StoryScreen from './screen/StoryScreen';
import HelpScreen from './screen/HelpScreen';

function App() {
  return ( 
    <div class="App">
      <Router>
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div class="container fluid">
          <Link to={'/'}>
            <a class="navbar-brand">#STOPAAPIHATE @ NYC</a>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarResponsive">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to={'/about'}>
                  <a class="nav-link" href="#">About</a>
                </Link>
              </li>
              <li class="nav-item active">
                <Link to={'/map'}>
                  <a class="nav-link">Map</a>
                </Link>
              </li>
              <li class="nav-item active">
                <Link to={'/story'}>
                  <a class="nav-link">Story</a>
                </Link>
              </li> <li class="nav-item active">
                <Link to={'/help'}>
                  <a class="nav-link">Help</a>
                </Link>
              </li>    
            </ul>
          </div>
        </div>
        </nav>
    
        <div>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/about' component={AboutScreen} exact></Route>
          <Route path='/map' component={MapScreen} exact></Route>
          <Route path='/story' component={StoryScreen} exact></Route>
          <Route path='/help' component={HelpScreen} exact></Route>
        </div>
      </Router>
    </div>



  );
}

export default App;



const data = { username: 'example' };
