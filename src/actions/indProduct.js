import axios from 'axios';


export const getIndProduct = (productId) => {
  return {
    type: 'GET_INDPRODUCT',
    payload: axios.get(`https://real-backend-q3.herokuapp.com/products/`+`${productId}`)
  };
}
