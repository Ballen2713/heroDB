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
					<AppBar title="Success" />
					<h1>Thank You For Your Submission</h1>
					<p>You will get an email with further
					instructions</p>
				</React.Fragment>
			</Mui>
		);
	}
}

export default Success;