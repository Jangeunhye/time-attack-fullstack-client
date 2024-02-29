"use client";
import { useAuth } from "@/contexts/auth.context";
import useMutationDeleteDeal from "@/react-query/mydeal/useMutationDeleteDeal";
import useQueryGetUser from "@/react-query/mydeal/useMutationGetLoggedIn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

function UpdateButtonForUser({ dealId }: { dealId: number }) {
  const auth = useAuth();
  const route = useRouter();
  const { mutateAsync: deleteDeal } = useMutationDeleteDeal();
  const { data: user } = useQueryGetUser();
  console.log(user);
  const DeleteDeal: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    try {
      deleteDeal(dealId);
      alert("삭제 되었습니다.");
      route.replace("/");
    } catch (e) {
      console.error("삭제 실패 ");
    }
  };
  return (
    <>
      {auth.isLoggedIn ? (
        <div className="w-[750px] mx-auto flex gap-5 justify-end">
          <Link
            href={`/deals/${dealId}/edit`}
            className="mt-3 px-8 py-3 rounded-lg bg-white text-[#2b1e8e] hover:opacity-70 shadow-lg"
          >
            글 수정하기
          </Link>
          <button
            onClick={DeleteDeal}
            className="mt-3 px-8 py-3 rounded-lg bg-[#2b1e8e] text-white hover:opacity-70"
          >
            글 삭제하기
          </button>
        </div>
      ) : null}
    </>
  );
}

export default UpdateButtonForUser;
