import React, { Component } from 'react';
import InvoiceWidget from './invoiceWidget';
import ProductWidget from './productWidget';
import CustomerWidget from './customerWidget';

class MainView extends Component{

	render(){
		return(
			<div>
			{(() => {
				switch(this.props.generalState.currentMainWidget){
					case 0:
						return (<InvoiceWidget actions={this.props.actions} generalState = {this.props.generalState}/>)
					case 1:
						return (<ProductWidget actions={this.props.actions} generalState = {this.props.generalState}/>)
					case 2:
						return (<CustomerWidget actions={this.props.actions} generalState = {this.props.generalState}/>)
					default:
					return (
						<div>
							<h1> GOT THE WRONG INDEX SOMEHOW </h1>
						</div>
					)
				}
			})()}
			</div>
		)
	}
}

export default MainView