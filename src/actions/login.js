import axios from 'axios';

export const getadminLogin = () => {
  return {
    type: 'GET_LOGIN',
    payload: axios.get(`https://real-backend-q3.herokuapp.com/adminpage`)
  };
}


export const adminLoginCred = (cred) => {
  console.log(cred);
  return {
    type: 'LOGIN',
    payload: axios.post(`https://real-backend-q3.herokuapp.com/adminpage`, cred)
  };
}
