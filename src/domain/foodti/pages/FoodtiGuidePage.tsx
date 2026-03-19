import React from "react";
import { Header } from "../../../components/Header";
import FoodtiGuideCard from "../components/FoodtiGuideCard";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar";

const TYPES = [
  {
    icon: "🌶️",
    title: "Spicy / Mild",
    leftLabel: "매운맛",
    rightLabel: "순한맛",
    
  },
  {
    icon: "🥕",
    title: "Meat / Vegetable",
    leftLabel: "고기",
    rightLabel: "채소",
  },
  { icon: "🍚", title: "Rice / Noodles", leftLabel: "밥", rightLabel: "면" },
  {
    icon: "🍲",
    title: "Brothy / Dry",
    leftLabel: "국물 O",
    rightLabel: "국물 X",
  },
  
];

const FoodtiGuidePage = () => {
  const navigate = useNavigate();
  const goFoodtiTest = () => {
    navigate("/foodti/1");
  };

  return (
    <div className="flex flex-col h-dvh pt-[64px] pb-[40px]">
      <Header title="FOODTI" goBack />
      <div className="flex flex-col items-center mt-6">
        <div className="font-semibold text-[24px] ">FOODTI는 이렇게 나와요</div>
        <div className="text-neutral-400 mt-2 text-[14px]">
          4가지 선택이 모여 당신의 식성 타입이 됩니다.
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center mt-16">
        {TYPES.map((t) => (
          <FoodtiGuideCard
            key={t.title}
            icon={t.icon}
            title={t.title}
            leftLabel={t.leftLabel}
            rightLabel={t.rightLabel}
          />
        ))}
      </div>
      <div className="flex flex-1" />
      <div className="mb-8">
        <Button
          color="orange400"
          type="button"
          text="white"
          size="long"
          onClick={goFoodtiTest}
        >
          좋아요
        </Button>
      </div>
      <NavBar/>
    </div>
  );
};

export default FoodtiGuidePage;
