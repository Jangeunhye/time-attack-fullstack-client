"use client";
import Page from "@/components/Page";
import UpdateDealForm from "../../../_components/UpdateDealForm";

function DealEditPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;

  return (
    <Page>
      <UpdateDealForm dealId={dealId} />
    </Page>
  );
}

export default DealEditPage;
