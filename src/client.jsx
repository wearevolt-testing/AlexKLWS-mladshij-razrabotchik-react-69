import React from 'react'
import { render } from 'react-dom'
import App from './app'
import configureStore from './Redux/store'
import {Provider} from 'react-redux'

let initialState = {}

let store = configureStore (initialState)

render(
	<Provider store = {store}>
		<App/>
	</Provider>,
	document.getElementById('app-root')
)