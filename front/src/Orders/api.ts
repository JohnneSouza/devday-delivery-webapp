import axios from "axios";
import { OrderPayload } from "./types";

const PRODUCTS_API_URL = process.env.REACT_APP_PRODUCTS_API_URL;
const ORDERS_API_URL = process.env.REACT_APP_ORDERS_API_URL;

export function fetchProducts() {
  return axios(`${PRODUCTS_API_URL}/products`, {timeout: 20000});
}

export function saveOrder(payload: OrderPayload){
  return axios.post(`${ORDERS_API_URL}/orders`, payload);
}

export function fetchOrders() {
  return axios.get(`${ORDERS_API_URL}/orders`, {timeout: 20000});
}

export function deleteOrder(id: string) {
  return axios.delete(`${ORDERS_API_URL}/orders/${id}`);
}