import React, { Component } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import ProductItem from './productItem';
import CreateProductWindow from './Modals/createProductWindow';
import UpdateProductWindow from './Modals/updateProductWindow';
import DeleteConfirmationWindow from './Modals/deleteConfirmationWindow';

class ProductWidget extends Component{

	displayCreateModalWindow(){
		let lastElementIndex = this.props.widgetState.productList.length - 1;
		this.props.actions.basicActions.setProduct(
			{id: this.props.widgetState.productList[lastElementIndex].id + 1,
			name:'',
			price:'',
			});
		this.props.actions.basicActions.displayModalWindow(0);
	}

	deleteProduct(){
		this.props.actions.apiActions.removeProductData(this.props.widgetState.product.id);
	}

	render(){

		if(this.props.widgetState.productList.length === 0){
			this.props.actions.apiActions.getProductData();
		}

		return(
			<DocumentTitle title='Product list'>
				<div>
					<h2> Product list <Button onClick={this.displayCreateModalWindow.bind(this)}>Create</Button></h2>
					<Table responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Price</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{this.props.widgetState.productList.map ((product) => {
								return <ProductItem 
								key = {product.id} 
								product = {product} 
								actions = {this.props.actions}
								/>
							})}
						</tbody>
					</Table>
					<Modal show={this.props.generalState.modalIsShown}>
						{(() => {
							switch(this.props.generalState.modalType){
							case 0:
								return (<CreateProductWindow 
									actions={this.props.actions} 
									widgetState = {this.props.widgetState}/>);
							case 1:
								return (<UpdateProductWindow 
									actions={this.props.actions} 
									widgetState = {this.props.widgetState}/>);
							case 2:
								return (<DeleteConfirmationWindow 
									actions={this.props.actions} 
									apiAction = {this.deleteProduct.bind(this)}/>);
							default:
								return (
									<div>
										<h1> SOMETHING WENT WRONG </h1>
									</div>
								);
							}
						})()}
					</Modal>
				</div>
			</DocumentTitle>
		);
	}
}

export default ProductWidget;