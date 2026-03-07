import React from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import Step3 from "../../../assets/images/step3.png";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/Header";
import { useSignUpStore } from "../../../store/useSignUpStore";
import { useCheckNickname } from "../hooks/useCheckNickname";

const SignUpPage3 = () => {
  const navigate = useNavigate();
  const goToSignUp4 = () => {
    navigate("/signup4");
  };
  const {
    form,
    setField,
    nicknameChecked,
    lastCheckedNickname,
    setNicknameCheckedResult,
  } = useSignUpStore();

  const checkNickname = useCheckNickname();

  const nicknameOk =
    nicknameChecked &&
    lastCheckedNickname === form.email &&
    form.nickname.trim().length > 0;
  const handleNext = () => {
    if (nicknameOk) {
      navigate("/signup4");
    } else {
      alert("닉네임 중복확인을 해주세요.");
    }
  };
  const handleCheckNickname = () => {
    if (!form.nickname.trim()) return;
    checkNickname.mutate(form.nickname, {
      onSuccess: (res) =>
        setNicknameCheckedResult(form.nickname, res.available),
    });
  };
  return (
    <div className="flex flex-col h-dvh pt-16">
      <Header goBack title="회원가입" />
      <div className="flex pt-8 justify-between items-center">
        <Input
          color="neutral400"
          size="sm"
          type="text"
          placeholder="닉네임을 입력해 주세요"
          onChange={(e) => setField("nickname", e.target.value)}
        />
        <Button
          color="orange200"
          size="small"
          text="text"
          type="button"
          onClick={handleCheckNickname}
        >
          {checkNickname.isPending ? "확인 중" : "중복 체크"}
        </Button>
      </div>

      {lastCheckedNickname === form.nickname && form.nickname && (
        <div className="flex justify-center mt-4">
          {nicknameChecked ? (
            <span>사용 가능한 닉네임 이에요</span>
          ) : (
            <span>이미 사용중인 닉네임 이에요</span>
          )}
        </div>
      )}
      <div className="flex-1" />
      <div className="mb-[36px]">
        <div className="mb-6 flex justify-center">
          <img src={Step3} style={{ width: "160px" }} />
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
  );
};

export default SignUpPage3;
