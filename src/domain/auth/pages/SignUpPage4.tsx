import React from "react";
import { Button } from "../../../components/Button";
import Step4 from "../../../assets/images/step4.png";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import { useSignUpStore } from "../../../store/useSignUpStore";
import { useSignUp } from "../hooks/useSignUp";
import { useAuthStore } from "../../../store/useAuthStore";
import type { AddressCoordsResult } from "../../../api/kakaoLocal.api";
import AddressSearh from "../components/AddressSearch";

const SignUpPage4 = () => {
  const navigate = useNavigate();

  const { form, setField, reset } = useSignUpStore();
  const signUp = useSignUp();
  const setTokens = useAuthStore((s) => s.setTokens);

  const handleFinish = () => {
    if (
      !form.email ||
      !form.nickname ||
      !form.password ||
      !form.homeLatitude ||
      !form.homeLongitude
    )
      return;

    signUp.mutate(
      {
        email: form.email,
        nickname: form.nickname,
        password: form.password,
        homeLatitude: form.homeLatitude,
        homeLongitude: form.homeLongitude,
      },
      {
        onSuccess: (res) => {
          setTokens(res.accessToken, res.refreshToken ?? null);
          reset();
          alert("회원가입에 성공했어요!")
          navigate("/login");
        },
      },
    );
  };
  const handleSelectCoords = (result: AddressCoordsResult) => {
    setField("homeLatitude", result.lat);
    setField("homeLongitude", result.lng);
  };

  return (
    <div className="flex flex-col h-dvh pt-16">
      <Header goBack title="회원가입" />
      <div className=" pt-8 ">
        <AddressSearh onSelectCoords={handleSelectCoords} />
      </div>

      <div className="flex-1" />
      <div className="mb-[36px]">
        <div className="mb-6 flex justify-center">
          <img src={Step4} style={{ width: "160px" }} />
        </div>

        <Button
          color="orange400"
          size="long"
          text="white"
          type="button"
          onClick={handleFinish}
        >
          {signUp.isPending ? "가입 중..." : "가입 완료"}
          
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage4;
