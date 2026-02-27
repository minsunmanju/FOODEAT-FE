import React from "react";
import { Header } from "../../../components/Header";

type Side = "left" | "right";

type FoodtiSelectCardProps = {
  quizId: number;
  titleEng: string;
  titleKor: string;
  selectLeftType: string;
  selectLeftDesc: string;
  selectRightType: string;
  selectRightDesc: string;

  activeSide: Side | null;
  onSelect: (side: Side) => void;
};

const FoodtiSelectCard = ({
  quizId,
  titleEng,
  titleKor,
  selectLeftType,
  selectLeftDesc,
  selectRightType,
  selectRightDesc,
  activeSide,
  onSelect,
}: FoodtiSelectCardProps) => {
  const isLeft = activeSide === "left";
  const isRight = activeSide === "right";

  const baseCard = "w-[298px] h-[120px] rounded-xl px-6 py-5 text-center ";
  const activeCard = "bg-orange-100 border-orange-500 border-[2px]";
  const inactiveCard = "bg-neutral-100 border-transparent";

  return (
    <div className="flex flex-col items-center text-center">
      <Header title="FOODTI" goBack />
      <div className="flex flex-col ">
        <div className="font-bold text-[40px]">Q.{quizId}</div>
        <div className="text-[24px] font-semibold mb-2">{titleEng}</div>
        <div className="text-[18px] text-neutral-400 mb-24">{titleKor}</div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <button
            type="button"
            onClick={() => onSelect("left")}
            className={`${baseCard} ${isLeft ? activeCard : inactiveCard}`}
          >
            <div className="flex flex-col gap-2">
              <div className="text-[24px] font-semibold">{selectLeftType}</div>
              <div>{selectLeftDesc}</div>
            </div>
          </button>
        </div>
        <div className="text-orange-500 font-bold text-[24px]">VS</div>
        <div>
          <button
            type="button"
            onClick={() => onSelect("right")}
            className={`${baseCard} ${isRight ? activeCard : inactiveCard}`}
          >
            <div className="flex flex-col gap-2">
            <div className="text-[24px] font-semibold">{selectRightType}</div>
            <div>{selectRightDesc}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodtiSelectCard;
