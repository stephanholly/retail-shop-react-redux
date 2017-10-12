export const addCartItems = (item, obj) => {
  return {
    type: 'ADD_TO_CART',
    payload: {...item, ...obj}
  }
}

export const getCart = () => {
  return {
    type: 'GET_CART',
  }
}
