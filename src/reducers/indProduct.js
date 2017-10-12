export default(state = [], action) => {
  switch (action.type) {
    case 'GET_INDPRODUCT_FULFILLED':
      return [...action.payload.data][0]
    default:
      return state;
}
}
