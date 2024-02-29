import { Response } from "@/types/Response.type";
import { client } from "..";
import { Deal, UpdateDeal } from "./deal.dto";

const getDeals = async () => {
  const response = await client.get<Response<Deal[]>>("/");
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const deals = data.result;
  return deals;
};

const getDeal = async (dealId: number) => {
  const response = await client.get<Response<Deal>>(`/deals/${dealId}`);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const deal = data.result;
  return deal;
};

const getMyDeals = async () => {
  const response = await client.get<Response<Deal[]>>("/my/deals");
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const deal = data.result;
  return deal;
};

const deleteDeal = async (dealId: number) => {
  const response = await client.delete<Response>(`/deals/${dealId}`);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const deals = data.result;
  return deals;
};

const editDeal = async (dealId: number, dto: UpdateDeal) => {
  const response = await client.put<Response>(`/deals/${dealId}/edit`, dto);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const deals = data.result;
  return deals;
};

const addLike = async (dealId: number) => {
  const response = await client.post<Response>(`/deals/${dealId}/like`);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const deals = data.result;
  return deals;
};

const deleteLike = async (dealId: number) => {
  const response = await client.delete<Response>(`/deals/${dealId}/like`);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const deals = data.result;
  return deals;
};

const dealAPI = {
  getDeals,
  getDeal,
  getMyDeals,
  deleteDeal,
  editDeal,
  addLike,
  deleteLike,
};

export default dealAPI;
