import API from "@/api";
import Page from "@/components/Page";

async function DealPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;
  const deal = await API.deal.getDeal(Number(dealId));
  console.log(deal);

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
      </section>
    </Page>
  );
}

export default DealPage;
