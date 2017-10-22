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

export const deleteItem = (item) => {
  console.log("deleteItem", item)
  return {
    type: 'DELETE_FROM_CART',
    payload: item
  }
}
