import React, {Component} from 'react';
import '../css/homepage.css';
import izukuHeader from '../lib/Izuku.jpg';
import naruto from '../lib/Naruto.png';
import bubble from '../lib/bubble.png';
import flash from '../lib/Flash.jpg';

class Home extends Component{
 
  render(){
    
    return(
      <div className="homepage">
        <div className="header-bg" >
            <img alt='izuku' src={izukuHeader} />
            <h1>Welcome to the Hero Mania!<br></br>
              This is a site dedicated to awesome heroes we all love and grew up with!
            </h1>
        </div>
        <div className="quotes">
          <div id="naruto">
            <img alt='naruto' src={naruto}/>
          </div>
          <div id="bubble1">
            <img alt='bubble' src={bubble}/>
          </div>
          <div id="bubble2">
            <img alt='bubble2' src={bubble}/>
          </div>
          <div id="flash">
            <img alt='flash' src={flash}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;