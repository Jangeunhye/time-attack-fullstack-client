import { Response } from "@/types/Response.type";
import { client } from "..";
import { GetDeals } from "./deal.dto";

const getDeals = async () => {
  const response = await client.get<Response<GetDeals[]>>("/");
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const deals = data.result;
  return deals;
};

const dealAPI = {
  getDeals,
};

export default dealAPI;
