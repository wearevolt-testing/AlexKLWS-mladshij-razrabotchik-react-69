import React, { Component } from 'react';
import { Button, Modal, FormControl, FormGroup, Form, ControlLabel } from 'react-bootstrap';

class CreateCustomerWindow extends Component{

	createCustomer(){
		this.props.actions.apiActions.createCustomerData(this.props.widgetState.customer);
		this.hideModalWindow();
	}

	hideModalWindow(){
		this.props.actions.basicActions.hideModalWindow();
	}

	handleNameChange(event){
		this.props.actions.basicActions.setCustomerName(event.target.value);
	}

	handleAddressChange(event){
		this.props.actions.basicActions.setCustomerAddress(event.target.value);
	}

	handlePhoneChange(event){
		this.props.actions.basicActions.setCustomerPhone(event.target.value);
	}

	render(){
		return(
			<div>
				<Modal.Header>
					<Modal.Title>Create a customer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h2># {this.props.widgetState.customer.id}</h2>
					<FormGroup
					controlId="formBasicText">
						<ControlLabel>Enter customer name</ControlLabel>
							<FormControl
							type="text"
							value={this.props.widgetState.customer.name}
							placeholder="Name"
							onChange={this.handleNameChange.bind(this)}/>
						<FormControl.Feedback />
					</FormGroup>
					<FormGroup
					controlId="formBasicText">
						<ControlLabel>Enter customer address</ControlLabel>
							<FormControl
							type="text"
							value={this.props.widgetState.customer.address}
							placeholder="Address"
							onChange={this.handleAddressChange.bind(this)}/>
						<FormControl.Feedback />
					</FormGroup>
					<FormGroup
					controlId="formBasicText">
						<ControlLabel>Enter customer phone #</ControlLabel>
							<FormControl
							type="text"
							value={this.props.widgetState.customer.phone}
							placeholder="Phone"
							onChange={this.handlePhoneChange.bind(this)}/>
						<FormControl.Feedback />
					</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModalWindow.bind(this)}>Close</Button>
					<Button onClick={this.createCustomer.bind(this)} bsStyle="primary">Create</Button>
				</Modal.Footer>					
			</div>
		);
	}
}

export default CreateCustomerWindow;