import React, {Component} from 'react';
import Mui from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RadioGroupButtons from './RadioGroup';



export class FormUserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}

	render() {
		const {values, handleChange} = this.props;
		return (
			<Mui>
				<React.Fragment align="center">
					
					<AppBar title="Enter User Details" align="center"/>
					<TextField
						hintText="EX: Superman, Iron Man, All-Might"
						floatingLabelText="Hero Name"
						onChange={handleChange('heroName')}
						defaultValue={values.heroName}
						style={styles.root}
					/>
					<br/>
					<TextField
						hintText="Name given at birth"
						floatingLabelText="Name"
						onChange={handleChange('birthName')}
						defaultValue={values.birthName}
					/>
					<br/>
					<RadioGroupButtons 
						handleChange = {handleChange}
						values = {values}
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
		margin: 15,
	},
	
}

export default FormUserDetails;