import axios from 'axios';


export const getIndProduct = (productId) => {
  return {
    type: 'GET_INDPRODUCT',
    payload: axios.get(`http://localhost:9001/products/`+`${productId}`)
  };
}
