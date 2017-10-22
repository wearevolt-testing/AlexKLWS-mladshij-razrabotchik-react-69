import React, { Component } from 'react'
import { Button} from 'react-bootstrap'

class ProductWidget extends Component{
	render(){
		return(
			<div>
			<h2> Product list <Button>Create</Button></h2>
			<b>This is products screen</b>
			</div>
		);
	}
}

export default ProductWidget;