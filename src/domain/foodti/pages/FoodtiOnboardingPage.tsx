import React from "react";
import { Header } from "../../../components/Header";
import FoodtiOnboarding from "../../../assets/images/foodtionboarding.png";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar";

const FoodtiOnboardingPage = () => {
  const navigate = useNavigate();
  const goFoodtiGuide = () => {
    navigate("/foodti/guide");
  };
  return (
    <div className="flex flex-col h-dvh pt-[64px] pb-[40px]">
      <Header title="FOODTI" />
      <div className="font-semibold text-[28px] mt-12 mb-8">
        오늘 내 입맛,
        <br />한 번 정리해볼까?
      </div>
      <div className="flex justify-center">
        <img src={FoodtiOnboarding} className="w-[339px] mt-8" />
      </div>
      <div className="flex flex-col text-[24px] font-medium mt-20">
        <div className="flex justify-center ">
          <div className="text-orange-600">1분</div>
          <div>이면 끝!</div>
        </div>
        <div className="flex justify-center">
          <div className="text-orange-600">"뭐 먹지?"</div>
          <div>고민 줄여요😋</div>
        </div>
      </div>
      <div className="flex flex-1" />
      <div className="mb-8">
        <Button
          color="orange400"
          size="long"
          text="white"
          type="button"
          onClick={goFoodtiGuide}
        >
          FOODTI 하러 가기
        </Button>
      </div>
      <NavBar/>
    </div>
  );
};

export default FoodtiOnboardingPage;
