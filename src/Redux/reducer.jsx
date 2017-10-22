export default function reducer(state, action){
	switch (action.type){
		case 'WIDGET_SWITCH':
			return Object.assign({}, state, { generalState : Object.assign({}, state.generalState, {currentMainWidget : action.index})});
		default:
			return state;
	}
}