import React, {Component} from 'react';
import Mui from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	state = {
		multiline: 'Controlled',
	};

	render() {
		const {values, handleChange} = this.props;
		return (
			<Mui>
				<React.Fragment>
					
					<AppBar title="Enter User Details" align="center" />
					<TextField
						hintText="EX: amime title, comic book title "
						floatingLabelText="Series"
						onChange={handleChange('occupation')}
						defaultValue={values.occupation}
					/>
					<br/>
					<TextField
						hintText="Is it a manga, an amime, a cartoon, etc"
						floatingLabelText="Medium"
						onChange={handleChange('city')}
						defaultValue={values.city}
					/>
					<br/>
					<TextField
						multiline={true}
						rows="4"
						margin="normal"
						hintText="Enter Your Bio"
						floatingLabelText="Bio"
						onChange={handleChange('bio')}
						defaultValue={values.bio}
					/>
					<br/>
					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}
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
	button: {
		margin: 15,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
}

export default FormPersonalDetails;