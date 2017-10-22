import React from 'react';
import { render } from 'react-dom';
import App from './app';
import configureStore from './Redux/store';
import {Provider} from 'react-redux';
import { ConnectedRouter, push, Route, Switch } from 'react-router-redux';
import InvoiceWidget from './Components/invoiceWidget';
import ProductWidget from './Components/productWidget';
import CustomerWidget from './Components/customerWidget';
import createHistory from 'history/createBrowserHistory';

let initialState = {
	router:{},
	reducer: {
		generalState:{
			currentMainWidget: 2,
		}
	},
};

const history = createHistory();

let store = configureStore (initialState, history);

render(
	<Provider store = {store}>
		<div>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact  path="/" component={App} />
		        </Switch>
		    </ConnectedRouter>
	    </div>
	</Provider>,
	document.getElementById('app-root')
);