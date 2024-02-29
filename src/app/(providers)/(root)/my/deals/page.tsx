"use client";
import Page from "@/components/Page";
import useQueryGetDeals from "@/react-query/mydeal/useQueryGetDeals";
import { useState } from "react";
import DealsCardList from "../../_components/DealsCardList";

function MyDealPage() {
  const [showMyDeal, setShowMyDeal] = useState(true);
  const { data: myDeals } = useQueryGetDeals();

  return (
    <Page>
      <div className="flex gap-x-5 border-b pb-4 mb-10">
        <div
          onClick={() => setShowMyDeal(true)}
          className={`${
            showMyDeal ? "opacity-100" : "opacity-50"
          } hover:cursor-pointer`}
        >
          내 판매글
        </div>
        <div
          onClick={() => setShowMyDeal(false)}
          className={`${
            showMyDeal ? "opacity-50" : "opacity-100"
          } hover:cursor-pointer`}
        >
          관심 판매글
        </div>
      </div>
      {showMyDeal ? (
        myDeals ? (
          <DealsCardList deals={myDeals} />
        ) : null
      ) : myDeals ? (
        <DealsCardList deals={myDeals} />
      ) : null}
    </Page>
  );
}
export default MyDealPage;
