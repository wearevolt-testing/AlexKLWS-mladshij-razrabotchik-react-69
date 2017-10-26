import React, { Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import basicActions from './Redux/Actions/basicActions';
import apiActions from './Redux/Actions/apiActions';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import { push } from 'react-router-redux';
import InvoiceWidget from './Components/invoiceWidget';
import ProductWidget from './Components/productWidget';
import CustomerWidget from './Components/customerWidget';

class App extends Component{

	handleWidgetSwitch(index){
		switch(index){
			case 0:
				this.props.actions.routeActions.changeRoute('/invoices');
				return;
			case 1:
				this.props.actions.routeActions.changeRoute('/product');
				return;
			case 2:
				this.props.actions.routeActions.changeRoute('/customers');
				return;
			default:
				return;
		}
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
							<NavItem eventKey={1} onClick = {this.handleWidgetSwitch.bind(this, 0)}>
								Invoices
							</NavItem>
							<NavItem eventKey={2} onClick = {this.handleWidgetSwitch.bind(this, 1)}>										
								Products						
							</NavItem>
							<NavItem eventKey={3} onClick = {this.handleWidgetSwitch.bind(this, 2)}>		
								Customers
							</NavItem>
						</Nav>
				</Navbar>
				<div className="col-xs-12 col-sm-6 col-md-8">
					<Switch>
				        <Route path="/invoices" component={InvoiceWidget}/>
				        <Route path="/product" 
				        render={(props) => 
				        	(<ProductWidget 
				        		generalState={this.props.generalReducer} 
				        		widgetState={this.props.productReducer}
				        		actions={this.props.actions} 
				        		{...props}/>)
				        }/>
				        <Route path="/customers" 
				        render={(props) => 
				        	(<CustomerWidget 
				        		generalState={this.props.generalReducer}
				        		widgetState={this.props.customerReducer}
				        		actions={this.props.actions} 
				        		{...props}/>)
				        }/>
			        </Switch>
		        </div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			basicActions: bindActionCreators(basicActions, dispatch),
			routeActions: bindActionCreators({changeRoute: (route) => push(route)}, dispatch),
			apiActions: bindActionCreators(apiActions, dispatch),
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);