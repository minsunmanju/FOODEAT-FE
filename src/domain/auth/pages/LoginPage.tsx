import React, { useState } from "react";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import Google from "../../../assets/images/google.png";
import KaKao from "../../../assets/images/kakao.png";
import Naver from "../../../assets/images/naver.png";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";
import { useLogin } from "../hooks/useLogin";
const LoginPage = () => {
  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/signup1");
  };
  const setTokens = useAuthStore((s) => s.setTokens);
  const login = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) return;

    login.mutate(
      {
        email,
        password,
        autoLogin: false,
      },
      {
        onSuccess: (res) => {
          setTokens(res.accessToken, res.refreshToken ?? null);
          alert("로그인에 성공했어요!")
          navigate("/home");
        },
      },
    );
  };

  return (
    <div>
      <div className="pt-[120px] h-dvh">
        <div className="text-[32px] font-semibold text-center">로그인</div>
        <div className="text-base font-medium text-center">
          아이디와 비밀번호를 입력하세요
        </div>

        <div className="flex flex-col gap-8 mt-[64px]">
          <Input
            placeholder="아이디를 입력해 주세요"
            color="neutral400"
            size="md"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="비밀번호를 입력해 주세요"
            color="neutral400"
            size="md"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-[12px] flex items-center mt-8 text-neutral-400 justify-between">
          <div className="flex items-center">
            <input type="checkbox" className=" mr-2" />
            자동 로그인
          </div>
          <div>비밀번호를 잊으셨나요?</div>
        </div>
        <div className="mt-[36px]">
          {login.isError && (
            <div>아이디 또는 비밀번호를 다시 확인해 주세요</div>
          )}
          <Button
            color="orange400"
            size="long"
            text="white"
            type="button"
            onClick={handleLogin}
          >
            로그인
          </Button>
        </div>
        <div className="flex justify-between mt-[24px]">
          <div className="text-neutral-400 text-[12px]">
            아직 회원이 아니신가요?
          </div>
          <button className="text-neutral-900 text-[12px]" onClick={goToSignUp}>
            회원가입
          </button>
        </div>
        <div className="flex gap-6 justify-center mt-8">
          <img src={Google} className="w-[40px] h-[40px]" />
          <img src={KaKao} className="w-[40px] h-[40px]" />
          <img src={Naver} className="w-[40px] h-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
