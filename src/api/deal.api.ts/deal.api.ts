import { Response } from "@/types/Response.type";
import { client } from "..";
import { Deal } from "./deal.dto";

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

const dealAPI = {
  getDeals,
  getDeal,
  getMyDeals,
};

export default dealAPI;
