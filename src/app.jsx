import React, { Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'Redux/actions';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import MainView from './Components/mainView';
import InvoiceWidget from './invoiceWidget';
import ProductWidget from './productWidget';
import CustomerWidget from './customerWidget';

class App extends Component{

	showWindow(){}

	hideWindow(){}

	handleWidgetSwitch(index){
		this.props.actions.switchMainWidget(index);
	}

	render(){
		return(
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">Invoice App</a>
						</Navbar.Brand>
					</Navbar.Header>
						<Nav>
							<NavItem eventKey={1} onClick = {this.handleWidgetSwitch.bind(this, 0)}>Invoices</NavItem>
							<NavItem eventKey={2} onClick = {this.handleWidgetSwitch.bind(this, 1)}>Products</NavItem>
							<NavItem eventKey={3} onClick = {this.handleWidgetSwitch.bind(this, 2)}>Customers</NavItem>
						</Nav>
				</Navbar>
				<Route path="/customers" component={CustomerWidget}/>
		        <Route path="/invoices" component={InvoiceWidget}/>
		        <Route path="/product" component={ProductWidget}/>
				<MainView actions = {this.props.actions} generalState = {this.props.reducer.generalState}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
	actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)