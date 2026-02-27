import React from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import Step4 from "../../../assets/images/step4.png";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";

const SignUpPage4 = () => {
  const navigate = useNavigate();
  const goMain = () =>{
    navigate("/home")
  }
  return (
    <div className="flex flex-col h-dvh pt-16">
       <Header goBack title="회원가입" />
      <div className="flex pt-8 justify-between items-center">
        <Input
          color="neutral400"
          size="sm"
          type="text"
          placeholder="주소를 검색하세요"
        />
        <Button color="orange200" size="small" text="text" type="button">
          검색
        </Button>
      </div>
      <div className="flex-1" />
      <div className="mb-[36px]">
        <div className="mb-6 flex justify-center">
          <img src={Step4} style={{ width: "160px" }} />
        </div>

        <Button color="orange400" size="long" text="white" type="button" onClick={goMain}>
          완료
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage4;
