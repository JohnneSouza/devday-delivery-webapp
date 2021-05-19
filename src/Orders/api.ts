import axios from "axios";
import { OrderPayload } from "./types";

const API_URL = "http://localhost:3003";

export function fetchProducts() {
  return axios(`${API_URL}/products`)
}

export function saveOrder(payload: OrderPayload){
  return axios.post(`${API_URL}/orders`, payload)
}