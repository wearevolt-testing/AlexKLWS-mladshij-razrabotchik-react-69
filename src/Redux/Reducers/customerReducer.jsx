export default function customerReducer(state = {}, action){
	switch (action.type){
		case 'SET_CUSTOMER':
			return Object.assign({}, state, 
					{customer :  action.customer});
		case 'SET_CUSTOMER_ID':
			return Object.assign({}, state, 
					{customer :  Object.assign({}, state.customer, {id: action.id})});
		case 'SET_CUSTOMER_NAME':
			return Object.assign({}, state, 
					{customer :  Object.assign({}, state.customer, {name: action.name})});
		case 'SET_CUSTOMER_ADDRESS':
			return Object.assign({}, state, 
					{customer :  Object.assign({}, state.customer, {address: action.address})});
		case 'SET_CUSTOMER_PHONE':
			return Object.assign({}, state, 
					{customer :  Object.assign({}, state.customer, {phone: action.phone})});
		case 'CREATE_CUSTOMER_DATA':
			let tempCustomers = state.customerList;
			tempCustomers.push(action.customer);
			return Object.assign({}, state, {customerList : tempCustomers});
		case 'UPDATE_CUSTOMER_DATA':
			return Object.assign({}, state, 
					{customerList : state.customerList.map((customer) => {
						return customer.id === action.customer.id ? 
						Object.assign({}, customer, 
							{ name: action.customer.name, address: action.customer.address, phone: action.customer.phone }) : customer
					})
			});
		case 'REMOVE_CUSTOMER_DATA':
			let updatedCustomerList = state.customerList.filter(c => c.id != action.id);
			return Object.assign({}, state, {customerList : updatedCustomerList});
		case 'CUSTOMER_DATA_RECEIVED':
			return Object.assign({}, state, {customerList : action.customerList});
		default:
			return state;
	}
}