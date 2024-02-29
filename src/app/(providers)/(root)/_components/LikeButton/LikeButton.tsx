"use client";

import { useAuth } from "@/contexts/auth.context";
import useMutationAddLike from "@/react-query/mydeal/useMutationAddLike";
import useMutationDeleteLike from "@/react-query/mydeal/useMutationDeleteLike";
import useQueryGetUser from "@/react-query/mydeal/useMutationGetLoggedIn";
import { MouseEventHandler, useState } from "react";

interface LikeButtonProps {
  dealId: number;
}

function LikeButton({ dealId }: LikeButtonProps) {
  const auth = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const { mutateAsync: addLike } = useMutationAddLike();
  const { mutateAsync: deleteLike } = useMutationDeleteLike();

  const { data: user } = useQueryGetUser();

  if (!auth.isAuthInitialized) {
    return null;
  }

  const handleClickLike: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!auth.isLoggedIn) return alert("로그인 먼저하세요.");
    if (isLiked) {
      deleteLike(dealId);
      setIsLiked(false);
    } else {
      addLike(dealId);
      setIsLiked(true);
    }
  };
  return (
    <>
      {user ? null : (
        <div className="w-[750px] mx-auto">
          <button
            onClick={handleClickLike}
            className={
              "mt-3 px-8 py-3 rounded-lg bg-[#2b1e8e] text-white hover:opacity-70"
            }
          >
            {isLiked ? "좋아요 취소" : "좋아요"}
          </button>
        </div>
      )}
    </>
  );
}

export default LikeButton;
