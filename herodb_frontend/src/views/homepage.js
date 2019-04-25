import React, { Component } from 'react';
import '../css/homepage.css';
import izukuHeader from '../lib/Izuku.jpg';
import naruto from '../lib/Naruto.png';
import flash from '../lib/Flash.jpg';
import popular from '../lib/Popular.png';
import widow from '../lib/blackwidow.jpg';
import goku from '../lib/goku.jpg';
import iron from '../lib/ironman.jpg';
import izuku2 from '../lib/Izuku.png';
import sora from '../lib/sora.jpg';
import gwen from '../lib/SPWGWEN.jpg';
import supergirl from '../lib/supergirl.jpg';
import wonder from '../lib/wonderwoman.jpg';


const bubblePStyle = {
  fontWeight: "bold",
  fontSize: "1.2vw",
  textAlign: "right",
  padding: "25% 30% 19%",
  margin: 0
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
        <div style={{
          marginTop: "15%",
        }}>
          <div className="popularHeroes1"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              width: "100%",
            }}>
            <div id="slots" style={{
              position: "relative",
              overflow: "hidden",
              width: "calc((160vw - 10.5rem) / 7)",
              height: "calc((160vw - 10.5rem) / 7)",
              borderStyle: "solid",
              transform: "rotate(45deg)",
              justifySelf: "center"
            }}>
              <img alt='goku' src={goku}
                style={{
                  width: "167%",
                  transform: "rotate(-45deg)",
                  zIndex: "-1",
                  top: "-52%",
                  left: "28%",
                  position: "absolute"
                }} />
            </div>

            <div id="slots" style={{
              position: "relative",
              overflow: "hidden",
              width: "calc((160vw - 10.5rem) / 7)",
              height: "calc((160vw - 10.5rem) / 7)",
              borderStyle: "solid",
              transform: "rotate(45deg)",
              justifySelf: "center"
            }}>
              <img alt='wonder-woman' src={wonder}
                style={{
                  width: "228%",
                  transform: "rotate(-45deg)",
                  zIndex: "-1",
                  top: "-26%",
                  left: "-59%",
                  position: "absolute"
                }} />
            </div>

            <div id="slots" style={{
              position: "relative",
              overflow: "hidden",
              width: "calc((160vw - 10.5rem) / 7)",
              height: "calc((160vw - 10.5rem) / 7)",
              borderStyle: "solid",
              transform: "rotate(45deg)",
              justifySelf: "center"
            }}>
              <img alt='iron-man' src={iron}
                style={{
                  width: "254%",
                  transform: "rotate(-45deg)",
                  zIndex: "-1",
                  top: "-18%",
                  left: "-83%",
                  position: "absolute"
                }} />
            </div>
          </div>

          <div className="popularHeroes2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              width: "100%",
            }}>
            <div id="slots" style={{
              position: "relative",
              overflow: "hidden",
              width: "calc((160vw - 10.5rem) / 7)",
              height: "calc((160vw - 10.5rem) / 7)",
              borderStyle: "solid",
              transform: "rotate(45deg)",
              justifySelf: "right",
              marginRight: "14%"
            }}>
              <img alt='sora' src={sora}
                style={{
                  width: "214%",
                  transform: "rotate(-45deg)",
                  zIndex: "-1",
                  top: "-21%",
                  left: "-59%",
                  position: "absolute"
                }} />
            </div>

            <div id="slots" style={{
              position: "relative",
              overflow: "hidden",
              width: "calc((160vw - 10.5rem) / 7)",
              height: "calc((160vw - 10.5rem) / 7)",
              borderStyle: "solid",
              transform: "rotate(45deg)",
              justifySelf: "left",
              marginLeft: "14%"
            }}>
              <img alt='spider-woman' src={gwen}
                style={{
                  width: "161%",
                  transform: "rotate(-45deg)",
                  zIndex: "-1",
                  top: "-38%",
                  left: "10%",
                  position: "absolute"
                }} />
            </div>
          </div>

          <div className="popularHeroes3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              width: "100%",
            }}>
            <div id="slots" style={{
              position: "relative",
              overflow: "hidden",
              width: "calc((160vw - 10.5rem) / 7)",
              height: "calc((160vw - 10.5rem) / 7)",
              borderStyle: "solid",
              transform: "rotate(45deg)",
              justifySelf: "center"
            }}>
              <img alt='super-girl' src={supergirl}
                style={{
                  width: "221%",
                  transform: "rotate(-45deg)",
                  zIndex: "-1",
                  top: "-38%",
                  left: "-58%",
                  position: "absolute"
                }} />
            </div>

            <div id="slots" style={{
              position: "relative",
              overflow: "hidden",
              width: "calc((160vw - 10.5rem) / 7)",
              height: "calc((160vw - 10.5rem) / 7)",
              borderStyle: "solid",
              transform: "rotate(45deg)",
              justifySelf: "center"
            }}>
              <img alt='izuku' src={izuku2}
                style={{
                  width: "221%",
                  height: "145%",
                  transform: "rotate(-45deg)",
                  zIndex: "-1",
                  top: "-22%",
                  left: "-60%",
                  position: "absolute"
                }} />
            </div>

            <div id="slots" style={{
              position: "relative",
              overflow: "hidden",
              width: "calc((160vw - 10.5rem) / 7)",
              height: "calc((160vw - 10.5rem) / 7)",
              borderStyle: "solid",
              transform: "rotate(45deg)",
              justifySelf: "center"
            }}>
              <img alt='black-widow' src={widow}
                style={{
                  width: "221%",
                  transform: "rotate(-45deg)",
                  zIndex: "-1",
                  top: "-49%",
                  left: "-31%",
                  position: "absolute"
                }} />
            </div>

          </div>
        </div>
        <div style={{
          textAlign: "center", 
          textTransform: "uppercase",
          marginTop: "20%",
          borderStyle: "solid"
          }}>
          <h3 style={{
            fontSize: "3.5vw",
            marginBlockStart: "0", 
            marginBlockEnd: "0"}}>
            Thanks for visiting! ~herodb dev team
            </h3>
        </div>
      </div>
    );
  }
}

export default Home;