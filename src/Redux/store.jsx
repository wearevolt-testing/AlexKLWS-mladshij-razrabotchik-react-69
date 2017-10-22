import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

export default function configureStore (initialState = { generalState: {}}) {
	return createStore (reducer, initialState, applyMiddleware(logger));
}