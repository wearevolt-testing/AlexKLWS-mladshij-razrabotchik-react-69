export default function productReducer(state = {}, action){
	switch (action.type){
		case 'SET_PRODUCT':
			return Object.assign({}, state, 
				{product :  action.product});
		case 'SET_PRODUCT_ID':
			return Object.assign({}, state, 
				{product :  Object.assign({},state.product, {id: action.id})});
		case 'SET_PRODUCT_NAME':
			return Object.assign({}, state, 
				{product :  Object.assign({},state.product, {name: action.name})});
		case 'SET_PRODUCT_PRICE':
			return Object.assign({}, state, 
				{product :  Object.assign({},state.product, {price: action.price})});
		case 'CREATE_PRODUCT_DATA_SUCCESS':
			let tempProducts = state.productList;
			tempProducts.push(action.product);
			return Object.assign({}, state, 
				{productList : tempProducts});
		case 'UPDATE_PRODUCT_DATA_SUCCESS':
			return Object.assign({}, state, {productList : state.productList.map((product) => {
					return product.id === action.product.id ? 
					Object.assign({}, product, 
						{ name: action.product.name, price: action.product.price }) : product
				})
			});
		case 'REMOVE_PRODUCT_DATA':
			let updatedProductList = state.productList.filter(p => p.id != action.id);
			return Object.assign({}, state, 
				{productList : updatedProductList});
		case 'PRODUCT_DATA_RECEIVED':
			return Object.assign({}, state, 
				{productList : action.productList});
		default:
			return state;
	}
}