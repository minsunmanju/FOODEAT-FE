import React from "react";
import { Header } from "../../../components/Header";
import NavBar from "../../../components/NavBar";
import { useFoodtiResultStore } from "../store/useFoodtiResultStore";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const FoodtiResultPage = () => {
  const { foodtiCode, recommendedMenus } = useFoodtiResultStore();
  const navigate = useNavigate();
  const goFoodtiAgain = () => {
    navigate("/foodti/onboarding");
  };
  const goRoulette = () => {
    navigate("/roulette/onboarding");
  };
  return (
    <div className="pt-16 pb-16 h-dvh flex flex-col">
      <Header goBack title="FOODTI 결과" />
      <div>
        <div className="text-[64px] mt-16">👏</div>
        <div className="text-[32px]">당신의 FOODTI는</div>
        <div className="flex text-[32px]">
          <div className="font-semibold">{foodtiCode}</div>
          <div>입니다!</div>
        </div>
        <div className="mt-20 flex flex-col items-center">
          <div className="text-[24px] text-center font-semibold">
            당신에게 딱! 맞는 오늘의 메뉴는
          </div>
          <div className="grid grid-cols-2 mt-6 ">
            {recommendedMenus.map((menu) => (
              <div key={menu.menuId} className="">
                <div className="bg-orange-100 w-32 h-12  text-neutral-600 flex flex-col text-center justify-center items-center mx-2 my-2 rounded-md">
                  {menu.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1" />
      <div className="flex gap-4">
        <Button
          color="orange200"
          size="half"
          text="text"
          type="button"
          onClick={goFoodtiAgain}
        >
          다시 하기
        </Button>
        <Button
          color="orange400"
          size="half"
          text="white"
          type="button"
          onClick={goRoulette}
        >
          룰렛 돌리기
        </Button>
      </div>
      <NavBar />
    </div>
  );
};

export default FoodtiResultPage;
