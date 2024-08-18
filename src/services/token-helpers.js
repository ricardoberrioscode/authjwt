import axios from "axios";
//const API = "http://localhost:4000";

const TOKEN_KEY = 'x-access-token';

export function setToken(token) {
  //localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  localStorage.setItem(TOKEN_KEY, (token));
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function initAxiosInterceptors() {
  axios.interceptors.request.use(config => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }

    return config;
  });

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        deleteToken();
        window.location = '/';
      } else {
        return Promise.reject(error);
      }
    }
  )
}



