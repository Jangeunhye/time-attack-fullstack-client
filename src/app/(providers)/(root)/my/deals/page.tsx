"use client";
import Page from "@/components/Page";
import useQueryGetDeals from "@/react-query/mydeal/useQueryGetDeals";

function MyDealPage() {
  const { data: deals } = useQueryGetDeals();

  return (
    <Page>
      {deals?.map((deal) => {
        return (
          <div key={deal.id}>
            <img src={`http://localhost:5050/images/${deal.imageUrl}`} />
            <div>{deal.title}</div>
            <div>{deal.price}</div>
            <div>{deal.location}</div>
            <div>{deal.view}</div>
          </div>
        );
      })}
    </Page>
  );
}
export default MyDealPage;
