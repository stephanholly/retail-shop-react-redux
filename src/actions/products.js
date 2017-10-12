import axios from 'axios';

export const getProducts = (products) => {
  return {
    type: 'GET_PRODUCTS',
    payload: axios.get(`http://localhost:9001/products`)
  };
}
