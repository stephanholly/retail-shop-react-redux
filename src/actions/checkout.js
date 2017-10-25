import axios from 'axios';

export const addUser = (user, cart) => {
  return {
    type: 'ADD_USER',
    payload: axios.post(`https://real-backend-q3.herokuapp.com/users`, user)
    .then(data => {
      console.log('action', cart)
       return axios.post(`https://real-backend-q3.herokuapp.com/orders`, cart)
    })
  };
}
