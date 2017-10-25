import React, { Component } from 'react';
import { Button, Modal, FormControl, FormGroup, Form, ControlLabel } from 'react-bootstrap';

class UpdateProductWindow extends Component{

	createProduct(){
		this.props.actions.apiActions.updateProductData(this.props.widgetState.product);
		this.hideModalWindow();
	}

	hideModalWindow(){
		this.props.actions.basicActions.hideModalWindow();
	}

	handleNameChange(event){
		this.props.actions.basicActions.setProductName(event.target.value);
	}

	handlePriceChange(event){
		this.props.actions.basicActions.setProductPrice(event.target.value);
	}

	render(){
		return(
			<div>
				<Modal.Header>
					<Modal.Title>Edit product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h2># {this.props.widgetState.product.id}</h2>
					<FormGroup
					controlId="formBasicText">
						<ControlLabel>Enter product name</ControlLabel>
							<FormControl
							type="text"
							value={this.props.widgetState.product.name}
							placeholder={this.props.widgetState.product.name}
							onChange={this.handleNameChange.bind(this)}/>
						<FormControl.Feedback />
					</FormGroup>
					<FormGroup
					controlId="formBasicText">
						<ControlLabel>Enter product price</ControlLabel>
							<FormControl
							type="text"
							value={this.props.widgetState.product.price}
							placeholder={this.props.widgetState.product.price}
							onChange={this.handlePriceChange.bind(this)}/>
						<FormControl.Feedback />
					</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.hideModalWindow.bind(this)}>Close</Button>
					<Button onClick={this.createProduct.bind(this)} bsStyle="primary">Update</Button>
				</Modal.Footer>					
			</div>
		);
	}
}

export default UpdateProductWindow;