import React, { Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'Redux/actions';

class App extends Component{

	showWindow(){}

	hideWindow(){}

	render(){
		return(
			<div>
			<b>My App is gonna be here</b>
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