import axios from "axios";

axios.defaults.withCredentials = true;

export const getProducts = () => {
  return axios.get("http://localhost:3000/products");
};

export const createProducts = (product) => {
  return axios.post("http://localhost:3000/products", product, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    },
  });
};