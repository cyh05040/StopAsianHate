import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import HomeScreen from './screen/HomeScreen';
import MapScreen from './screen/MapScreen';
import SigninScreen from './screen/SigninScreen';
import StoryScreen from './screen/StoryScreen';



function App() {
  return ( 
    <div class="App">
      <Router>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/map' component={MapScreen} exact></Route>
          <Route path='/signin' component={SigninScreen} exact></Route>
          <Route path='/story' component={StoryScreen} exact></Route>
      </Router>
    </div>
  );
}

export default App;



const data = { username: 'example' };
