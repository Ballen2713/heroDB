import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
	state = {
		step: 1,
		heroName: '',
		birthName: '',
		gender: '',
		occupation: '',
		city: '',
		bio: ''
	}

	//Proceed to the next step
	nextStep = () => {
		const { step } = this.state; //Destructuring
		this.setState({
			step: step + 1
		});
	}

	//Go back to the previous step
	prevStep = () => {
		const {  step } = this.state;
		this.setState({
			step: step - 1
		});
	}

	// Handle fields change
	handleChange = input => e => {
		this.setState({[input]: e.target.value});
	}

	render() {
		//Destructuring from step value,
		//simply pulling out the value from the step value
		const {step} = this.state;
		const { heroName, birthName, gender, occupation, city, 
		bio } = this.state;
		const values = { heroName, birthName, gender, occupation, city, 
		bio }		
		switch (step){
			case 1:
				return (
					<FormUserDetails
						nextStep = {this.nextStep}
						handleChange = {this.handleChange}
						values = {values}
						style={styles}
					/>
				);
			case 2:
				return (
					<FormPersonalDetails
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange = {this.handleChange}
						values = {values}
					/>
				);
			case 3:
				return (
					<Confirm
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						values = {values}
					/>
				);			
			case 4:
				return (
					<Success />
				);
				
		}
	}
}

const styles = {
	paddingBottom: "20%"
}

export default UserForm