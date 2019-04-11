import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Nav from './components/nav.js';
import Home from './views/homepage';
import './App.css';
import izukuHeader from './lib/Izuku.jpg';
import naruto from './lib/Naruto.png';
import bubble from './lib/bubble.png';
import flash from './lib/Flash.jpg';


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
          <Route path="/home" component={Home}/>
          <div>
            
            {
            // 
            //<Route path='' component={}></Route>
            //<Route path='' component={}></Route>
            //<Route path='' component={}></Route>
            //url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGr7JU5xMNo0oF23TSqkLk1mCbT6wq98Y0tUzjADIS_D2-dzRiA");
            }
          </div>
         
          
        </div>
      </HashRouter>
    );
  }
}

export default App;
