import axios from "axios";

const api = axios.create({
  baseURL: "https://user-authentication-app-backend.onrender.com",
  withCredentials: true
});

export default api;
