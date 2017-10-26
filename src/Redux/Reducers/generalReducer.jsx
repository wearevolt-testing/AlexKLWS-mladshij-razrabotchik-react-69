export default function generalReducer(state = {}, action){
	switch (action.type){
		case 'MODAL_DISPLAY':
			return Object.assign({}, state, { modalIsShown : true, modalType: action.id});
		case 'MODAL_HIDE':
			return Object.assign({}, state, { modalIsShown : false});
		default:
			return state;
	}
}