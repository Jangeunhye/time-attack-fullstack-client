import API from "@/api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import DealsCardList from "./_components/DealsCardList";

export default async function HomePage() {
  const deals = await API.deal.getDeals();
  return (
    <Page>
      <Heading>전체 글 보기</Heading>
      {<DealsCardList deals={deals} />}
    </Page>
  );
}

export const revalidate = 5;
