import React, {Component} from 'react';
import Mui from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RadioGroup	from 'material-ui/core/RadioGroup'
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}

	render() {
		const {values, handleChange} = this.props;
		return (
			<Mui>
				<React.Fragment>
					
					<AppBar title="Enter User Details" />
					<TextField
						hintText="Enter Hero Name"
						floatingLabelText="Hero Name"
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}
					/>
					<br/>
					<TextField
						hintText="Enter Your Last Name"
						floatingLabelText="Actual Name"
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
					/>
					<br/>
					<RadioGroup

					/>
					<br/>
					<TextField
						hintText="Enter Your Email"
						floatingLabelText="Email"
						onChange={handleChange('email')}
						defaultValue={values.email}
					/>
					<br/>
					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}
					/>
				</React.Fragment>
			</Mui>
		);
	}
}

const styles = {
	button: {
		margin: 15
	}
}

export default FormUserDetails;