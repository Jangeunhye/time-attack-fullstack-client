import { Response } from "@/types/Response.type";
import { client } from "..";
import { LogInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  await client.post<Response>("/auth/sign-up", dto);
}

async function logIn(dto: LogInDto) {
  const response = await client.post<Response>("/auth/log-in", dto);
  const accessToken = response.data.result;
  if (!accessToken) throw new Error("fail signup");
  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  localStorage.setItem("accessToken", accessToken);

  return accessToken;
}

async function logOut() {
  client.defaults.headers.common.Authorization = "";
  localStorage.removeItem("accessToken");
}

async function refreshToken() {
  const response = await client.get<Response>(`/auth/refresh-token`);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const isAccessTokenRefreshed = data.result;
  return isAccessTokenRefreshed;
}

async function checkLoggedIn(dealId: number) {
  const response = await client.post<Response>(`/check-login/${dealId}`);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const verified = data.result;
  return verified;
}

const authAPI = {
  signUp,
  logIn,
  logOut,
  refreshToken,
  checkLoggedIn,
};

export default authAPI;
