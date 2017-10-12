export default(state = [], action) => {
  switch (action.type) {
    case 'GET_CART':
      return state;
    case 'ADD_TO_CART':
      return state.concat(action.payload)
    default:
      return state;
  }
}
