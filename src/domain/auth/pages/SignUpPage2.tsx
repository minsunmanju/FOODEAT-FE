import React from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import Step2 from "../../../assets/images/step2.png";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/Header";
import { useSignUpStore } from "../../../store/useSignUpStore";

const SignUpPage2 = () => {
  const navigate = useNavigate();
  const goToSignUp3 = () => {
    navigate("/signup3");
  };

  const { form, setField } = useSignUpStore();
  const passwordOk =
    form.password.length >= 8 && form.password === form.passwordConfirm;

  return (
    <div className="flex flex-col h-dvh pt-16">
      <Header goBack title="회원가입" />
      <div className=" pt-8  ">
        <Input
          color="neutral400"
          size="md"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e) => setField("password", e.target.value)}
        />
        <div className="mt-6">
          <Input
            color="neutral400"
            size="md"
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => setField("passwordConfirm", e.target.value)}
          />
        </div>
      </div>

      {!passwordOk && form.passwordConfirm && (
        <p>
          비밀번호가 일치하고 8자 이상이어야 해요
        </p>
      )}
      <div className="flex-1" />
      <div className="mb-[36px]">
        <div className="mb-6 flex justify-center">
          <img src={Step2} style={{ width: "160px" }} />
        </div>

        <Button
          color="orange400"
          size="long"
          text="white"
          type="button"
          onClick={goToSignUp3}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage2;
