import axios from 'axios';

export const getadminLogin = () => {
  return {
    type: 'GET_LOGIN',
    payload: axios.get(`http://localhost:9001/adminpage`)
  };
}


export const adminLoginCred = (cred) => {
  console.log(cred);
  return {
    type: 'LOGIN',
    payload: axios.post(`http://localhost:9001/adminpage`, cred)
  };
}
