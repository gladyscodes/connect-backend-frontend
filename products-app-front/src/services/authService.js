import axios from "axios";

export const login = (credentials) => {
  return axios.post("http://localhost:3000/login", credentials, {
    withCredentials: true,
  });
}

export const signup = (credentials) => {
  return axios.post("http://localhost:3000/signup", credentials);
}