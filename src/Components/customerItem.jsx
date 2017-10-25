import React, { Component } from 'react';
import { Table, Button} from 'react-bootstrap';

class CustomerItem extends Component
{
	displayUpdateModalWindow(customer){
		this.props.actions.basicActions.setCustomer(customer);
		this.props.actions.basicActions.displayModalWindow(1);
	}

	displayDeleteModalWindow(customer){
		this.props.actions.basicActions.setCustomer(customer);
		this.props.actions.basicActions.displayModalWindow(2);
	}

	render(){
		return(
			<tr>
				<td>{this.props.customer.id}</td>
				<td>{this.props.customer.name}</td>
				<td>{this.props.customer.address}</td>
				<td>{this.props.customer.phone}</td>
				<td>
					<Button onClick={this.displayUpdateModalWindow.bind(this, this.props.customer)} bsStyle="link">Edit</Button> 
					<Button onClick={this.displayDeleteModalWindow.bind(this, this.props.customer)} bsStyle="link">Delete</Button>
				</td>
			</tr>
		);
	}
}

export default CustomerItem;