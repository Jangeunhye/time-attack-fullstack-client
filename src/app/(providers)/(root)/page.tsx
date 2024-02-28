import API from "@/api";
import Page from "@/components/Page";
import DealsCardList from "./_components/DealsCardList";

export default async function HomePage() {
  const deals = await API.deal.getDeals();
  return <Page>{<DealsCardList deals={deals} />}</Page>;
}
