import axios from "axios";
import authAPI from "./auth.api/auth.api";
import dealAPI from "./deal.api.ts/deal.api";

const accessToken =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

export const client = axios.create({
  baseURL:
    "https://port-0-time-attack-fullstack-server-am952nltdolbtm.sel5.cloudtype.app",
  withCredentials: true,
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  },
});

const API = { auth: authAPI, deal: dealAPI };
export default API;
