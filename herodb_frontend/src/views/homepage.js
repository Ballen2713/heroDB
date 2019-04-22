import React, { Component } from 'react';
import '../css/homepage.css';
import izukuHeader from '../lib/Izuku.jpg';
import naruto from '../lib/Naruto.png';
import flash from '../lib/Flash.jpg';
import popular from '../lib/Popular.png';


const bubblePStyle = {
  fontWeight: "bold",
  fontSize: "1.2vw",
  textAlign: "right",
  padding: "25% 30% 19%"
};

const splitStyle = {
  position: "relative",
  borderStyle: "solid",
  borderWidth: "thick",
  textAlign: "right",
};

class Home extends Component {

  render() {

    return (
      <div className="homepage">
        <div className="header-bg" >
          <img alt='izuku' src={izukuHeader} />
          <h1>Welcome to the Hero Mania!<br></br>
            This is a site dedicated to awesome heroes we all love and grew up with!
            </h1>
        </div>
        <div className="quotes">
          <div id="naruto">
            <img alt='naruto' src={naruto} />
          </div>
          <div id="bubble1">
            <p style={bubblePStyle}>
              “Don’t underestimate me! I don’t quit and I don’t run.” <br></br>~ Naruto
            </p>
          </div>
          <div id="bubble2">
            <p style={bubblePStyle}>
              Life doesn’t give us purpose. We give life purpose <br></br>~The Flash
            </p>
          </div>
          <div id="flash">
            <img alt='flash' src={flash} />
          </div>
          <br clear="all" />
        </div>
        <div style={splitStyle}>
          <h2 style={{ marginRight: "2em", fontSize: "2vw" }}>
            Those who are always aiming for the top,
            and those who aren’t.
            That slight difference in attitudes
            will have a big impact once you go out into society
          <br></br><br></br>-Toshiniori Yagi “All Might” (Boku No Hero Academia)
          </h2>
        </div>
        <div style={{ backgroundColor: "black", marginTop: "0.25em" }}>
          <img alt='Popular Heroes' src={popular} style={{ width: "100%" }} />
        </div>
        <div >
          Images
          <div className="popularHeroes">
            <div id="slots" style={{
              display: "inline-block",
              position: "relative",
              overflow: "hidden",
              width: "150px",
              height: "150px",
              borderStyle: "solid",
              transform: "rotate(45deg)",
              margin: "3em"
            }}>
              <img alt='izuku' src={izukuHeader} 
              style={{
                width: "221%",
                transform: "rotate(-45deg)",
                zIndex: "-1",
                top: "-11%",
                left: "-67%",
                position: "absolute"
              }}/>
            </div>
            
              

          </div>
        </div>
        <div>
          Footer
        </div>
      </div>
    );
  }
}

export default Home;