export default(state = [], action) => {
  switch (action.type) {
    case 'GET_LOGIN_FULFILLED':
      return [...action.payload.data]
    case 'LOGIN_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
}
}
