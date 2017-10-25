import React, { Component } from 'react';
import { Button, Modal, FormControl, FormGroup, Form, ControlLabel } from 'react-bootstrap';

class UpdateCustomerWindow extends Component{

	updateCustomer(){
		this.props.actions.apiActions.updateCustomerData(this.props.widgetState.customer);
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
					<Modal.Title>Edit customer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h2>#{this.props.widgetState.customer.id}</h2>
					<FormGroup
					controlId="formBasicText">
						<ControlLabel>Enter customer name</ControlLabel>
							<FormControl
							type="text"
							value={this.props.widgetState.customer.name}
							placeholder={this.props.widgetState.customer.name}
							onChange={this.handleNameChange.bind(this)}/>
						<FormControl.Feedback />
					</FormGroup>
					<FormGroup
					controlId="formBasicText">
						<ControlLabel>Enter customer address</ControlLabel>
							<FormControl
							type="text"
							value={this.props.widgetState.customer.address}
							placeholder={this.props.widgetState.customer.address}
							onChange={this.handleAddressChange.bind(this)}/>
						<FormControl.Feedback />
					</FormGroup>
					<FormGroup
					controlId="formBasicText">
						<ControlLabel>Enter customer phone #</ControlLabel>
							<FormControl
							type="text"
							value={this.props.widgetState.customer.phone}
							placeholder={this.props.widgetState.customer.phone}
							onChange={this.handlePhoneChange.bind(this)}/>
						<FormControl.Feedback />
					</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModalWindow.bind(this)}>Close</Button>
					<Button onClick={this.updateCustomer.bind(this)} bsStyle="primary">Update</Button>
				</Modal.Footer>					
			</div>
		);
	}
}

export default UpdateCustomerWindow;