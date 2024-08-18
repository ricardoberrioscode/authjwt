import axios from "axios";
//const API = "http://192.168.2.9:4000";
//export const API = "http://192.168.217.157:4007";
//export const API = "http://192.168.15.67:4007";
//const TOKEN_KEY = 'x-access-token';
//http://192.168.137.1:3000/
//export const API = "http://192.168.2.37:4007";
export const API = "http://192.168.1.37:4007";
//export const API = "http://127.0.0.1:4007";

export const getUsers = async () => {
  return await axios.get(`${API}/api/users/getusers`);
};
export const logIn = async (user) => {
  return await axios.post(`${API}/api/auth/signin`, user);
}
export const getuser = async (tok) => {
  return await axios.get(`${API}/api/users/getuser`, {
    headers: {
      "x-access-token": tok
    }
  })
}

export const createNewUser = async (user) => {
  return await axios.post(`${API}/api/auth/signup`, user);
};

export const getRolUser = async (id) =>
  await axios.get(`${API}/api/auth/getrol/${id}`);
