import axios from "axios";
import authAPI from "./auth.api/auth.api";
import dealAPI from "./deal.api.ts/deal.api";

const accessToken =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

export const client = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  },
});

const API = { auth: authAPI, deal: dealAPI };
export default API;
