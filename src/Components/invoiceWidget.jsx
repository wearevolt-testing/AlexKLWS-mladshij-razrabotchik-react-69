import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

class InvoiceWidget extends Component{
	render(){
		return(
			<DocumentTitle title='Invoice list'>
				<div>
					<h2> Invoices</h2>
					<b>This is invoice screen</b>
				</div>
			</DocumentTitle>
		);
	}
}

export default InvoiceWidget;