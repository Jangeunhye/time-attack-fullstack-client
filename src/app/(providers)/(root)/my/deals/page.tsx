"use client";
import Page from "@/components/Page";
import useQueryGetDeals from "@/react-query/mypage/useQueryGetDeals";

function MyDealPage() {
  const { data } = useQueryGetDeals();
  console.log(data);
  return <Page>{"happy"}</Page>;
}
export default MyDealPage;
