import API from "@/api";
import Page from "@/components/Page";
import DetailDealCard from "../../_components/DetailDealCard";
import LikeButton from "../../_components/LikeButton";
import UpdateButtonForUser from "../../_components/UpdateButtonForUser";

async function DealPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;
  const deal = await API.deal.getDeal(Number(dealId));
  return (
    <Page>
      <section>
        <DetailDealCard deal={deal} />
        <div className="flex items-center justify-between w-[750px] mx-auto">
          <LikeButton dealId={deal.id} />
          <UpdateButtonForUser dealId={deal.id} />
        </div>
      </section>
    </Page>
  );
}

export default DealPage;
