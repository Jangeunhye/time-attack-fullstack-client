import API from "@/api";
import Page from "@/components/Page";
import LikeButton from "../../_components/LikeButton";

async function DealPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;
  const deal = await API.deal.getDeal(Number(dealId));

  return (
    <Page>
      <section>
        <div>
          <img src={`http://localhost:5050/images/${deal.imageUrl}`} />
          <div>{deal.title}</div>
          <div>{deal.price}</div>
          <div>{deal.location}</div>
          <div>{deal.view}</div>
        </div>
        <LikeButton dealId={deal.id} />
      </section>
    </Page>
  );
}

export default DealPage;
