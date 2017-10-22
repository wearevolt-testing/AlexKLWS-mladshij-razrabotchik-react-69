import React, { Component } from 'react'
import { Button, Label} from 'react-bootstrap'

class CustomerWidget extends Component{
	render(){
		return(
			<div>
			<h2> Customer list <Button>Create</Button></h2>
			<b>This is customers screen</b>
			</div>
		);
	}
}

export default CustomerWidget;