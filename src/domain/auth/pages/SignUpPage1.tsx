import React from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import Step1 from "../../../assets/images/step1.png";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/Header";
import { useSignUpStore } from "../../../store/useSignUpStore";
import { useCheckEmail } from "../hooks/useCheckEmail";

const SignUpPage1 = () => {
  const navigate = useNavigate();
  const {
    form,
    setField,
    emailChecked,
    lastCheckedEmail,
    setEmailCheckedResult,
  } = useSignUpStore();
  const checkEmail = useCheckEmail();

  const emailOk =
    emailChecked &&
    lastCheckedEmail === form.email &&
    form.email.trim().length > 0;

  const handleCheckEmail = () => {
    if (!form.email.trim()) return;
    checkEmail.mutate(form.email, {
      onSuccess: (res) => setEmailCheckedResult(form.email, res.available),
    });
  };

  const handleNext = () => {
    if (emailOk) {
      navigate("/signup2");
    } else {
      alert("이메일 중복체크를 해주세요.");
    }
  };

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
              placeholder="이메일을 입력해 주세요"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
            />
          </div>

          <Button
            color="orange200"
            size="small"
            text="text"
            type="button"
            onClick={handleCheckEmail}
          >
            {checkEmail.isPending ? "확인 중" : "중복체크"}
          </Button>
        </div>
        {lastCheckedEmail === form.email && form.email && (
          <div className="flex justify-center">
            {emailChecked ? (
              <div className="flex text-[16px] mt-4">사용 가능한 이메일 이에요</div>
            ) : (
              <div>이미 사용중인 이메일 이에요</div>
            )}
          </div>
        )}

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
            onClick={handleNext}
          >
            다음
          </Button>
          
        </div>
      </div>
    </div>
  );
};

export default SignUpPage1;
