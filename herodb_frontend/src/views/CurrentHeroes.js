import React, { Component } from 'react';
import '../index.css';
import { Row, Col } from 'reactstrap';
import { HeroCards } from '../components/HeroCards';
import naruto from '../lib/Naruto.png';
import izuku2 from '../lib/Izuku.png';
import gwen from '../lib/SPWGWEN.jpg';
import sora from '../lib/sora.jpg';
import goku from '../lib/goku.jpg';
import iron from '../lib/ironman.jpg';
import supergirl from '../lib/supergirl.jpg';
import wonder from '../lib/wonderwoman.jpg';
import widow from '../lib/blackwidow.jpg';

export class CurrentHeroes extends Component {
  
    constructor() { 
        super();
        this.state = { 
            hero: [
                {
                    imageURL: goku,
                    name: "Goku",
                    series:"Dragonball Z",
                    abilities:"Kaioken"

                },
                {
                     imageURL: naruto,
                    name: "Naruto",
                    series:"Naruto",
                    abilities:"Rasengan"

                },
                {
                     imageURL: izuku2,
                    name: "Deku",
                    series:"Boku No Hero Academia",
                    abilities:"One For All"

                },
                {
                     imageURL: gwen,
                    name: "Gwen",
                    series:"Spider Girl",
                    abilities:"Spider girl web slinger"

                },
                {
                     imageURL: sora,
                    name: "Sora",
                    series:"Kingdom Hearts",
                    abilities:"Keyblade wielder"

                },
                {
                     imageURL: iron,
                    name: "Tony Stark",
                    series:"Iron Man",
                    abilities:"High IQ"
                },
                {
                    imageURL: wonder,
                   name: "Wonder Woman ",
                   series:"DC comics",
                   abilities:"Lasso of truth"
               },
               {
                imageURL: supergirl,
               name: "Super Girl",
               series:"Super Girl, DC comics",
               abilities:"Same as superman"
           },
           {
            imageURL: widow,
           name: "Black Widow",
           series:"Avengers, Marvel",
           abilities:"Stealth"

       }
            ]
        }
    }
    render() {
        let heroCards = this.state.hero.map(heroes => { 
            return ( 
                <Col sm="4">
                <br></br> <br></br>
                      <HeroCards heroes={heroes}/>
                      <br></br>
                </Col>
            )
        })
        return (
            
            <div style={{height: '2000px'}}>
            <br></br><br></br>
                <h1 style={{textAlign: 'center'}}>Catalog Page for heroes that we currently have</h1>
                <Row sm="2">
                     {heroCards}
                </Row>
              
            </div>
        );
    }
}

export default CurrentHeroes;