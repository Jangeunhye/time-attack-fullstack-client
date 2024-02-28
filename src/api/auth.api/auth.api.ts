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
  console.log(client.defaults.headers.common.Authorization);
}

async function logOut() {
  client.defaults.headers.common.Authorization = "";
}
async function refreshToken() {
  const response = await client.get<Response<boolean>>(`/auth/refresh-token`);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const isAccessTokenRefreshed = data.result;
  return isAccessTokenRefreshed;
}
const authAPI = {
  signUp,
  logIn,
  logOut,
  // refreshToken,
};

export default authAPI;
