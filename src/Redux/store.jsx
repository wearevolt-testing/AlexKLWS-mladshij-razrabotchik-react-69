import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import reducer from './Reducers/index';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import DataService from './Services/dataService';

export const history = createHistory();

export default function configureStore (initialState = {}) {

	let historyRouterMiddleware = routerMiddleware(history);

	return createStore (
			reducer, 
			initialState, 
			applyMiddleware(logger, historyRouterMiddleware, DataService));
}