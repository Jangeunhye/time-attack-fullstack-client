import axios from "axios";
import authAPI from "./auth.api/auth.api";
import dealAPI from "./deal.api.ts/deal.api";

export const client = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
});

const API = { auth: authAPI, deal: dealAPI };
export default API;
