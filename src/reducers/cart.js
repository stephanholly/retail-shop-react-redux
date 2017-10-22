export default(state = [], action) => {
  switch (action.type) {
    case 'GET_CART':
      return state;
    case 'ADD_TO_CART':
      return state.concat(action.payload)
    case 'DELETE_FROM_CART':
      return state.filter( item  => item !== action.payload)
    default:
      return state;
  }
}
