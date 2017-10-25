import React, { Component } from 'react';
import { Table, Button} from 'react-bootstrap';

class ProductItem extends Component
{
	displayUpdateModalWindow(product){
		this.props.actions.basicActions.setProduct(product);
		this.props.actions.basicActions.displayModalWindow(1);
	}

	displayDeleteModalWindow(product){
		this.props.actions.basicActions.setProduct(product);
		this.props.actions.basicActions.displayModalWindow(2);
	}


	render(){
		return(
			<tr>
				<td>{this.props.product.id}</td>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.price}</td>
				<td>
					<Button onClick={this.displayUpdateModalWindow.bind(this, this.props.product)} bsStyle="link">Edit</Button> 
					<Button onClick={this.displayDeleteModalWindow.bind(this, this.props.product)} bsStyle="link">Delete</Button>
				</td>
			</tr>
		);
	}
}

export default ProductItem;