import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Nav from './components/nav.js';
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
          {
          //<Route path='' component={}></Route>
          //<Route path='' component={}></Route>
          //<Route path='' component={}></Route>
          //<Route path='' component={}></Route>
          //url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGr7JU5xMNo0oF23TSqkLk1mCbT6wq98Y0tUzjADIS_D2-dzRiA");
          }
          <div className="homepage">
            <div className="header-bg" >
                <img alt='hero' 
                  src={izukuHeader}
                  style={{width: '100%', opacity: '.3', height: 'auto', position: 'absolute', left: '0', top: '0'}} />
                <h1 style={{position: 'relative', padding: "10%"}}>Welcome to the Hero Mania!<br></br>
                This is a site dedicated to awesome heroes we all love and grew up with!
                </h1>
            </div>
            <div className="quotes" 
              style={{display: 'grid'}}>
              <img alt='Naruto'
                src={naruto}
                style={{position: 'absolute', left: 0, width: '60%'}}
              />
              <img alt='bubble'
                src={bubble}
                style={{position: 'absolute', right: 0, width: '38%'}}
              />
              <img alt='bubble'
                src={bubble}
                style={{position: 'absolute', left: '0', width: '38%'}}
              />
              <img alt='Naruto'
                src={naruto}
                style={{position: 'absolute', left: 0, width: '60%'}}
              />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
