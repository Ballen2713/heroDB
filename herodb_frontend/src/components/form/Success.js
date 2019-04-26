import React, {Component} from 'react';
import Mui from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {

	render() {
		return (
			<Mui>
				<React.Fragment>
					<AppBar title="Success" align="center"/>
					<h1 align="center">Thank You For Your Submission</h1>
					<p align="center">You will get an email with further
					instructions</p>
				</React.Fragment>
			</Mui>
		);
	}
}

export default Success;