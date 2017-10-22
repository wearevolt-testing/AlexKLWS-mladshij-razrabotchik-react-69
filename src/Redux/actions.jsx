let actions = {
	switchMainWidget(index){
		return{
			type: 'WIDGET_SWITCH',
			index: index
		}
	},
};

export default actions;