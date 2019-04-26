import React, {Component} from 'react';
import Mui from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const {values: {heroName, birthName, gender,
			occupation, city, bio }} = this.props;
		return (
			<Mui>
				<React.Fragment>
					
					<AppBar title="Confirm User Data" align="center"/>
					<List align="center">
						<ListItem
							primaryText="Hero Name"
							secondaryText={heroName}
							align="center"
						/>
						<ListItem
							primaryText="Birth Name"
							secondaryText={birthName}
						/>
						<ListItem
							primaryText="Gender"
							secondaryText={gender}
						/>
						<ListItem
							primaryText="Occupation"
							secondaryText={occupation}
						/>
						<ListItem
							primaryText="City"
							secondaryText={city}
						/>
						<ListItem
							primaryText="Bio"
							secondaryText={bio}
						/>
					</List>
					<br/>
					<RaisedButton
						label="Confirm & Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}
						 align="center"
					/>
					<RaisedButton
						label="Previous"
						primary={false}
						style={styles.button}
						onClick={this.back}
					/>
				</React.Fragment>
			</Mui>
		);
	}
}

const styles = {
	
	list: {
		marginLeft: '32%',
		marginRight: 'auto',
		paddingBottom: 0,
		marginTop: 0,
		fontWeight: 500
	},
	button: {
		margin: 15
	}
}

export default Confirm;