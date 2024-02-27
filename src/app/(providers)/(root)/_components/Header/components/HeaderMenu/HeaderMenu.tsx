"use client";

import API from "@/api";
import { Authenticated, useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogInModal from "../LogInModal";

function HeaderMenu() {
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();

  const handleClickLogOut = async () => {
    await API.auth.logOut();
    auth.setIsLoggedIn(false);
    router.push("/");
  };

  const handleClickLogIn = () => {
    modal.open(<LogInModal />);
  };
  return (
    <Authenticated>
      <div className="ml-auto flex items-center gap-x-4">
        {auth.isLoggedIn ? (
          <>
            <button
              onClick={handleClickLogOut}
              className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleClickLogIn}
              className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            >
              로그인
            </button>
            <Link
              href={"/auth/sign-up"}
              className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            >
              회원가입
            </Link>
          </>
        )}
      </div>
    </Authenticated>
  );
}

export default HeaderMenu;
