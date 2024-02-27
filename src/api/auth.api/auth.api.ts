import { Response } from "@/types/Response.type";
import { client } from "..";
import { LogInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  await client.post<Response>("/auth/sign-up", dto);
}

async function logIn(dto: LogInDto) {
  await client.post<Response>("/auth/log-in", dto);
}

const authAPI = {
  signUp,
  logIn,
};

export default authAPI;
