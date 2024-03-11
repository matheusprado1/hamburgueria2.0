import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-hamburgueriav2.onrender.com",
  timeout: 8000
})