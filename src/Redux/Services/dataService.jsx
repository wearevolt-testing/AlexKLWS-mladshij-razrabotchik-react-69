import request from 'superagent'

const DataService = store => next => action => {
  next(action);
  switch (action.type) {
  case 'GET_CUSTOMER_DATA':
    request
      .get('/api/customers')
      .end((err, res) => {
        if (err) {
          return next({
            type: 'GET_CUSTOMER_DATA_ERROR',
            error: err
          })
        }
        const data = JSON.parse(res.text);
        return next({
          type: 'CUSTOMER_DATA_RECEIVED',
          customerList: data
        });
      })
    break;
  case 'CREATE_CUSTOMER_DATA':
    request
      .post('/api/customers')
      .send(action.customer)
      .end((err, res) => {
        if (err) {
          return next({
            type: 'CREATE_CUSTOMER_DATA_ERROR',
            err
          })
        }
        const data = JSON.parse(res.text);
        return next({
          type: 'CREATE_CUSTOMER_DATA_SUCCESS',
          customer: data
        });
      })
    break;
  case 'UPDATE_CUSTOMER_DATA':
    request
      .put('/api/customers/' + action.customer.id)
      .send(action.customer)
      .end((err, res) => {
        if (err) {
          return next({
            type: 'UPDATE_CUSTOMER_DATA_ERROR',
            err
          })
        }
        const data = JSON.parse(res.text);
        return next({
          type: 'UPDATE_CUSTOMER_DATA_SUCCESS',
          customer: data
        });
      })
    break;
  case 'REMOVE_CUSTOMER_DATA':
    request
      .del('/api/customers/' + action.id)
      .end((err, res) => {
        if (err) {
          return next({
            type: 'REMOVE_CUSTOMER_DATA_ERROR',
            err
          })
        }
        return next({
          type: 'REMOVE_CUSTOMER_DATA_SUCCESS',
        });
      })
    break;
  case 'GET_PRODUCT_DATA':
    request
      .get('/api/products')
      .end((err, res) => {
        if (err) {
          return next({
            type: 'GET_PRODUCT_DATA_ERROR',
            error: err
          })
        }
        const data = JSON.parse(res.text);
        return next({
          type: 'PRODUCT_DATA_RECEIVED',
          productList: data
        });
      })
    break;
  case 'CREATE_PRODUCT_DATA':
    request
      .post('/api/products')
      .send(action.product)
      .end((err, res) => {
        if (err) {
          return next({
            type: 'CREATE_PRODUCT_DATA_ERROR',
            err
          })
        }
        const data = JSON.parse(res.text);
        return next({
          type: 'CREATE_PRODUCT_DATA_SUCCESS',
          product: data
        });
      })
    break;
  case 'UPDATE_PRODUCT_DATA':
    request
      .put('/api/products/' + action.product.id)
      .send(action.product)
      .end((err, res) => {
        if (err) {
          return next({
            type: 'UPDATE_PRODUCT_DATA_ERROR',
            err
          })
        }
        const data = JSON.parse(res.text);
        return next({
          type: 'UPDATE_PRODUCT_DATA_SUCCESS',
          product: data
        });
      })
    break;
  case 'REMOVE_PRODUCT_DATA':
    request
      .del('/api/products/' + action.id)
      .end((err, res) => {
        if (err) {
          return next({
            type: 'REMOVE_PRODUCT_DATA_ERROR',
            err
          })
        }
        return next({
          type: 'REMOVE_PRODUCT_DATA_SUCCESS',
        });
      })
    break;
  default:
    break;
  }

};

export default DataService