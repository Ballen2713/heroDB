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
					
					<AppBar title="Enter Your Heroes Information" align="center"/>
					<TextField
						hintText="EX: Superman, Iron Man, All-Might"
						floatingLabelText="Hero Name"
						onChange={handleChange('heroName')}
						defaultValue={values.heroName}
						style={styles.textField}
					/>
					<br/>
					<TextField
						hintText="Name given at birth"
						floatingLabelText="Name"
						onChange={handleChange('birthName')}
						defaultValue={values.birthName}
						style={styles.textField}
					/>
					<br/>
					<RadioGroupButtons 
						handleChange = {handleChange}
						values = {values}
					/>
					
					<br/>
					<div style={{ marginLeft: "44%" }}>
					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}
						
					/>
					</div>
				</React.Fragment>
			</Mui>
		);
	}
}


const styles = {
	textField: {
		marginLeft: '40%',
		marginRight: 'auto',
		paddingBottom: 0,
		marginTop: 0,
		fontWeight: 500
	},
	button: {
		margin: 15,
	},
	
}

export default FormUserDetails;