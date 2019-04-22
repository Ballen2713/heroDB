import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Nav from './components/nav.js';
import Home from './views/homepage';
import './App.css';
import {UserForm} from './components/form/UserForm'

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
          <div style={{top: '2.5em', position: 'relative'}}>
            <Route exact path="/" component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path='/Submit' component={UserForm}/>

            {
            // 
            //<Route path='' component={}></Route>
            //<Route path='' component={}></Route>
            }
          </div>
         
          
        </div>
      </HashRouter>
    );
  }
}

export default App;
