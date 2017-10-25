let apiActions = {
	getCustomerData(){
		return{
			type: 'GET_CUSTOMER_DATA'
		}
	},
	createCustomerData(customer){
		return{
			type: 'CREATE_CUSTOMER_DATA',
			customer : customer
		}
	},
	updateCustomerData(customer){
		return{
			type: 'UPDATE_CUSTOMER_DATA',
			customer : customer
		}
	},
	removeCustomerData(id){
		return{
			type: 'REMOVE_CUSTOMER_DATA',
			id : id
		}
	},
	getProductData(){
		return{
			type: 'GET_PRODUCT_DATA'
		}
	},
	createProductData(product){
		return{
			type: 'CREATE_PRODUCT_DATA',
			product : product
		}
	},
	updateProductData(product){
		return{
			type: 'UPDATE_PRODUCT_DATA',
			product : product
		}
	},
	removeProductData(id){
		return{
			type: 'REMOVE_PRODUCT_DATA',
			id : id
		}
	},
	getInvoiceData(){
		return{
			type: 'GET_INVOICE_DATA'
		}
	},
};

export default apiActions;