import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import customerReducer from './customerReducer';
import generalReducer from './generalReducer';
import productReducer from './productReducer';

let reducer = combineReducers({
				customerReducer: customerReducer,
				generalReducer: generalReducer,
				productReducer: productReducer,
				router: routerReducer
			});

export default reducer;