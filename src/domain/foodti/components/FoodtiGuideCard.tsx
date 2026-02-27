import React from "react";

type FoodtiGuideCardProps = {
  icon: string;
  title: string;
  leftLabel: string;
  rightLabel: string;
};

const FoodtiGuideCard = ({
  icon,
  title,
  leftLabel,
  rightLabel,
}: FoodtiGuideCardProps) => {
  return (
    <div className="w-[150px] flex flex-col mb-4">
      <div className="text-[30px] flex flex-col items-center">{icon}</div>
      <div className="pt-3 pb-3 bg-orange-100 text-[14px] flex flex-col justify-between w-[150px] h-[150px] items-center rounded-xl">
        <div>{title}</div>
        <div>{leftLabel}</div>
        <div className="text-orange-600">VS</div>
        <div>{rightLabel}</div>
      </div>
    </div>
  );
};

export default FoodtiGuideCard;
