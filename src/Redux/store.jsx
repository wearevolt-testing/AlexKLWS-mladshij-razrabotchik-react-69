import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export default function configureStore (initialState = { generalState: {}}, history) {

	const historyRouterMiddleware = routerMiddleware(history);

	return createStore (
			combineReducers({
				reducer, 
				router: routerReducer, 
				generalState: (state = {}) => state
			}), 
			initialState, 
			applyMiddleware(logger, historyRouterMiddleware));
}