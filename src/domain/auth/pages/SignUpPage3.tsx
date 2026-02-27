import React from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import Step3 from "../../../assets/images/step3.png";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/Header";

const SignUpPage3 = () => {
    const navigate = useNavigate()
  const goToSignUp4 = () =>{
    navigate("/signup4")
  }
  return (
    <div className="flex flex-col h-dvh pt-16">
       <Header goBack title="회원가입" />
      <div className="flex pt-8 justify-between items-center" >
       
          <Input
            color="neutral400"
            size="sm"
            type="text"
            placeholder="닉네임을 입력해 주세요"
          />
          <Button color="orange200" size="small" text="text" type="button">
            중복 체크
          </Button>
        
      </div>
      <div className="flex-1" />
      <div className="mb-[36px]">
        <div className="mb-6 flex justify-center">
          <img src={Step3} style={{width: "160px"}} />
        </div>

        <Button color="orange400" size="long" text="white" type="button" onClick={goToSignUp4}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage3;
