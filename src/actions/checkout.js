import axios from 'axios';

export const addUser = (user, cart) => {
  return {
    type: 'ADD_USER',
    payload: axios.post(`http://localhost:9001/users`, user)
    .then(data => {
      console.log('action', cart)
       return axios.post(`http://localhost:9001/orders`, cart)
    })
  };
}
