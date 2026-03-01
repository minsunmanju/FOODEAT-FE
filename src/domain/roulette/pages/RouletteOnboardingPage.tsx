import React from "react";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";

const RouletteOnboardingPage = () => {
    const navigate = useNavigate();
    const goRoulette = () =>{
        navigate("/roulette")
    }
  return (
    <div>
      <Header title="룰렛" />
      <div className="pt-[64px] flex flex-col h-dvh">
        <div className="flex flex-col text-center pt-[48px]">
          <div className="text-[120px]">😮‍💨</div>
          <div className="flex flex-col gap-4">
            <div className="text-[32px] font-semibold">"뭐 먹지?"</div>
            <div className="font-semibold text-[28px]">이제 룰렛에게 맡겨!</div>
            <div className="font-medium text-neutral-400 text-[18px]">
              내 FOODTI에 찰떡인 메뉴들만 쏙쏙 담았어요.
            </div>
          </div>
        </div>
        <div className="flex-1" />
        <div className="pb-[80px]">
          <Button color="orange400" size="long" text="white" type="button" onClick={goRoulette}>
            오늘의 한끼 고르기
          </Button>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default RouletteOnboardingPage;
