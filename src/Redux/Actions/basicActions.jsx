let basicActions = {
	switchMainWidgetIndex(index){
		return{
			type: 'WIDGET_SWITCH',
			index: index
		}
	},
	displayModalWindow (id){
		return{
			type: 'MODAL_DISPLAY',
			id: id
		}
	},
	hideModalWindow(){
		return{
			type: 'MODAL_HIDE'
		}
	},
	setCustomer(customer){
		return{
			type: 'SET_CUSTOMER',
			customer: customer
		}
	},
	setCustomerID(id){
		return{
			type: 'SET_CUSTOMER_ID',
			id: id
		}
	},
	setCustomerName(name){
		return{
			type: 'SET_CUSTOMER_NAME',
			name: name
		}
	},
	setCustomerAddress(address){
		return{
			type: 'SET_CUSTOMER_ADDRESS',
			address: address
		}
	},
	setCustomerPhone(phone){
		return{
			type: 'SET_CUSTOMER_PHONE',
			phone: phone
		}
	},
	setProduct(product){
		return{
			type: 'SET_PRODUCT',
			product: product
		}
	},
	setProductID(id){
		return{
			type: 'SET_PRODUCT_ID',
			id: id
		}
	},
	setProductName(name){
		return{
			type: 'SET_PRODUCT_NAME',
			name: name
		}
	},
	setProductPrice(price){
		return{
			type: 'SET_PRODUCT_PRICE',
			price: price
		}
	},
	deleteCurrentlySelectedItem(){
		return{
			type: 'DELETE_CURRENT',
		}
	},
};

export default basicActions;