import React from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import Step1 from "../../../assets/images/step1.png";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/Header";

const SignUpPage1 = () => {
  const navigate = useNavigate();
  const goToSignUp2 = () => navigate("/signup2");

  return (
    <div className="flex h-dvh flex-col bg-white pt-16">
      <Header goBack title="회원가입" />

      <div className="flex flex-1 flex-col ">
        <div className="flex items-center justify-between pt-8">
          <div className="flex-1">
            <Input
              color="neutral400"
              size="sm"
              type="text"
              placeholder="아이디를 입력해 주세요"
            />
          </div>

          <Button color="orange200" size="small" text="text" type="button">
            중복 체크
          </Button>
        </div>

        <div className="flex-1" />

        <div className="mb-[36px]">
          <div className="mb-6 flex justify-center">
            <img src={Step1} className="w-[160px]" alt="step1" />
          </div>

          <Button
            color="orange400"
            size="long"
            text="white"
            type="button"
            onClick={goToSignUp2}
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage1;
