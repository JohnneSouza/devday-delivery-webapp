import axios from "axios";
import { OrderPayload } from "./types";

const PRODUCTS_API_URL = process.env.REACT_APP_PRODUCTS_API_URL;
const ORDERS_API_URL = process.env.REACT_APP_ORDERS_API_URL;

export function fetchProducts() {
  return axios(`${PRODUCTS_API_URL}/products`)
}

export function saveOrder(payload: OrderPayload){
  return axios.post(`${ORDERS_API_URL}/orders`, payload)
}