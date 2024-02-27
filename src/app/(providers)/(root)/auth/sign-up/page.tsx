"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import useMutationSignUp from "@/react-query/auth/useMutationSignUp";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const auth = useAuth();
  const router = useRouter();
  const { mutateAsync: signUp, isPending } = useMutationSignUp();

  const handleClickSignUp = async () => {
    if (!email.trim()) return alert("이메일을 입력해 주세요");
    if (!password.trim()) return alert("비밀번호를 입력해 주세요");
    if (!passwordCheck.trim()) return alert("비밀번호 확인을 입력해 주세요");
    if (password.trim() !== passwordCheck.trim())
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");

    try {
      await signUp({ email, password });
      auth.logIn();
    } catch (e) {
      alert("회원가입에 실패하였습니다.");
    }
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.replace("/");
    }
  }, [auth.isLoggedIn, router]);

  return (
    <Page>
      <Heading>회원가입</Heading>
      <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
        <Input
          type="email"
          label="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          disabled={isPending}
        />
        <Input
          type="password"
          label="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          disabled={isPending}
        />

        <Input
          type="password"
          label="비밀번호 확인"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          autoFocus
          disabled={isPending}
        />

        <Button onClick={handleClickSignUp} disabled={isPending}>
          회원가입
        </Button>
      </section>
    </Page>
  );
}
export default SignUpPage;
