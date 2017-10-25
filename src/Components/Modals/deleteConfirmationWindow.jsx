import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class DeleteConfirmationWindow extends Component{

	deleteItem(){
		this.props.apiAction();
		this.hideModalWindow();
	}

	hideModalWindow(){
		this.props.actions.basicActions.hideModalWindow();
	}

	render(){
		return(
			<div>
				<Modal.Header>
					<Modal.Title>Delete</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h2>Do you really want to delete this item?</h2>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.deleteItem.bind(this)} bsStyle="danger">Delete</Button>
					<Button onClick={this.hideModalWindow.bind(this)}>Close</Button>
				</Modal.Footer>					
			</div>
		);
	}
}

export default DeleteConfirmationWindow;