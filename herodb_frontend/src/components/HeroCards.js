import React, { Component } from 'react';
import { CardImg, CardText,
  CardTitle, CardSubtitle} from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'


export class HeroCards extends Component {
   constructor(props){ 
       super(props);
   }
  render () {
    return (
      <div>
        <Card>
        <CardImg top width="25%" src={this.props.heroes.imageURL} style={{height: "400px", width: "500px"}}/>
        <CardContent>
              <CardTitle>{this.props.heroes.name}</CardTitle>
            <CardSubtitle>{this.props.heroes.series}</CardSubtitle>
            <CardText>{this.props.heroes.abilities}</CardText>
            <Button variant="outlined" color="secondary">
        More Info
      </Button>
        </CardContent>
        </Card>
      </div>
    )
  }
}

export default HeroCards;