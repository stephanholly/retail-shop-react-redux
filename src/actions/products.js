import axios from 'axios';

export const getProducts = (products) => {
  return {
    type: 'GET_PRODUCTS',
    payload: axios.get(`http://localhost:9001/products`)
  };
}

export const deleteProduct = (product) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axios.delete(`http://localhost:9001/products/`+ product +`/delete`, product)
  };
}

export const addNewItem = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: axios.post(`http://localhost:9001/products/`, product)
  };
}

export const editItem = (product, id) => {
  console.log(product);
  return {
    type: 'EDIT_PRODUCT',
    payload: axios.patch(`http://localhost:9001/products/`+id+`/edit`, product)
  };
}
