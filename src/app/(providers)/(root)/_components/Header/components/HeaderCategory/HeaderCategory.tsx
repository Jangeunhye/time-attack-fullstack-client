"use client";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogInModal from "../LogInModal";

function HeaderCategory() {
  const auth = useAuth();
  const route = useRouter();
  const modal = useModal();

  const handleClickDealCreate = () => {
    if (!auth.isLoggedIn) {
      modal.open(<LogInModal />);
    }
  };
  return (
    <ul className="text-[15px] font-medium flex gap-4">
      <li>
        <Link href="/">구입하기</Link>
      </li>
      <li>
        <Link
          href={auth.isLoggedIn ? "/deals/create" : "/"}
          onClick={handleClickDealCreate}
        >
          판매하기
        </Link>
      </li>
      <li>
        <Link
          href={auth.isLoggedIn ? "/my/deals" : "/"}
          onClick={handleClickDealCreate}
        >
          내 판매글
        </Link>
      </li>
    </ul>
  );
}

export default HeaderCategory;
