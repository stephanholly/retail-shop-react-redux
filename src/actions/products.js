import axios from 'axios';

export const getProducts = (products) => {
  return {
    type: 'GET_PRODUCTS',
    payload: axios.get(`https://real-backend-q3.herokuapp.com/products`)
  };
}

export const deleteProduct = (product) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axios.delete(`https://real-backend-q3.herokuapp.com/products/`+ product +`/delete`, product)
  };
}

export const addNewItem = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: axios.post(`https://real-backend-q3.herokuapp.com/products/`, product)
  };
}

export const editItem = (product, id) => {
  console.log(product);
  return {
    type: 'EDIT_PRODUCT',
    payload: axios.patch(`https://real-backend-q3.herokuapp.com/products/`+id+`/edit`, product)
  };
}
