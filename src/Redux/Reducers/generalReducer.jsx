export default function generalReducer(state = {}, action){
	switch (action.type){
		case 'WIDGET_SWITCH':
			return Object.assign({}, state, { currentMainWidget : action.index});
		case 'MODAL_DISPLAY':
			return Object.assign({}, state, { modalIsShown : true, modalType: action.id});
		case 'MODAL_HIDE':
			return Object.assign({}, state, { modalIsShown : false, modalType: -1});
		default:
			return state;
	}
}