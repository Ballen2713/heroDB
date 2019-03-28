import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Nav from './components/nav.js';
import './App.css';

class App extends Component {
  render() {
    let navBar = [
      {label: 'Home', link: '/Home'},
      {label: 'Submit a Hero', link: '/Submit'},
      {label: 'Current Heroes', link: '/Current'},
      {label: 'Popular Heroes', link: '/Popular'},
    ]
    return (
      <HashRouter>
        <div className="App">
          <Nav navBar={navBar} />
          {
          //<Route path='' component={}></Route>
          //<Route path='' component={}></Route>
          //<Route path='' component={}></Route>
          //<Route path='' component={}></Route>
          }
        </div>
      </HashRouter>
    );
  }
}

export default App;
