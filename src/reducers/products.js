export default(state = [], action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_FULFILLED':
      return [...action.payload.data]
    case 'ADD_PRODUCT_FULFILLED':
      return state.concat(action.payload.data)
    case 'EDIT_PRODUCT_FULFILLED':
    console.log('action for edit',action.payload);
      return [...action.payload.data]
    case 'DELETE_PRODUCT_FULFILLED':
      console.log("state", state);
      return state.filter( item => item.id.toString() !== action.payload.data)
    default:
      return state;
  }
}
