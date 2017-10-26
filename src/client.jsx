import React from 'react';
import { render } from 'react-dom';
import App from './app';
import configureStore, {history} from './Redux/store';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

let initialState = {
	router:{},
	generalReducer: {
		modalIsShown: false,
		modalType: -1,
	},
	customerReducer: {
		customer: {},
		customerList: [],
	},
	productReducer: {
		product: {},
		productList: [],
	}
};

let store = configureStore (initialState);

render(
	<Provider store = {store}>
		<ConnectedRouter history={history}>
			<div>
				<App/>
			</div>
	    </ConnectedRouter>
	</Provider>,
	document.getElementById('app-root')
);