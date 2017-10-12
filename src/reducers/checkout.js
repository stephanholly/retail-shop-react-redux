export default(state = [], action) => {
  switch (action.type) {
    case 'ADD_USER_FULFILLED':
    console.log('reducer', action.payload.data)
      return [...action.payload.data]
      case 'ADD_ORDER_FULFILLED':
        return [...action.payload.data]
    default:
      return state;
  }
}
