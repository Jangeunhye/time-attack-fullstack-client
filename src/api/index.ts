import axios from "axios";
import authAPI from "./auth.api/auth.api";

export const client = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
});

const API = { auth: authAPI };
export default API;
