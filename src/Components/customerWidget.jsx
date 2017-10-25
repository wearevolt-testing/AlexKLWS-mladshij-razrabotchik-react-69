import React, { Component } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import CustomerItem from './customerItem';
import CreateCustomerWindow from './Modals/createCustomerWindow';
import UpdateCustomerWindow from './Modals/updateCustomerWindow';
import DeleteConfirmationWindow from './Modals/deleteConfirmationWindow';

class CustomerWidget extends Component{

	displayCreateModalWindow(){
		let lastElementIndex = this.props.widgetState.customerList.length - 1;
		this.props.actions.basicActions.setCustomer(
			{id: this.props.widgetState.customerList[lastElementIndex].id + 1,
			name:'',
			address:'',
			phone:'',
			});
		this.props.actions.basicActions.displayModalWindow(0);
	}

	deleteCustomer(){
		this.props.actions.apiActions.removeCustomerData(this.props.widgetState.customer.id);
	}

	render(){
		if(this.props.widgetState.customerList.length === 0){
			this.props.actions.apiActions.getCustomerData();
		}

		return(
			<DocumentTitle title='Customer list'>
				<div>
					<h2> Customer list <Button onClick={this.displayCreateModalWindow.bind(this)}>Create</Button></h2>
					<Table responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Address</th>
								<th>Phone</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{this.props.widgetState.customerList.map ((customer) => {
								return <CustomerItem 
								key = {customer.id} 
								customer = {customer} 
								actions = {this.props.actions}/>
							})}
						</tbody>
					</Table>
					<Modal show={this.props.generalState.modalIsShown}>
						{(() => {
							switch(this.props.generalState.modalType){
							case 0:
								return (<CreateCustomerWindow 
									actions={this.props.actions} 
									widgetState = {this.props.widgetState}/>);
							case 1:
								return (<UpdateCustomerWindow 
									actions={this.props.actions} 
									widgetState = {this.props.widgetState}/>);
							case 2:
								return (<DeleteConfirmationWindow 
									actions={this.props.actions} 
									apiAction = {this.deleteCustomer.bind(this)}/>);
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

export default CustomerWidget;