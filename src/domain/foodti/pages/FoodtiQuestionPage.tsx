import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FOODTI_QUESTIONS, type Side } from "../constants/foodtiQuestions";
import FoodtiSelectCard from "../components/FoodtiSelectCard";
import { Button } from "../../../components/Button";
import NavBar from "../../../components/NavBar";

const FoodtiQuestionPage = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const stepNum = Number(step);
  const index = stepNum - 1;

  const question = FOODTI_QUESTIONS[index];
  const [activeSide, setActiveSide] = useState<Side | null>(null);
  if (!question) {
    navigate("/foodti/1", { replace: true });
    return null;
  }

  const isLast = stepNum === FOODTI_QUESTIONS.length;
  const handleNext = () => {
    if (!activeSide) return;
    if (isLast) {
      navigate("/foodti/result");
    } else {
      navigate(`/foodti/${stepNum + 1}`);
      setActiveSide(null);
    }
  };

  return (
    <div className="flex flex-col h-dvh pt-[64px] pb-[40px]">
      <FoodtiSelectCard
        quizId={question.quizId}
        titleEng={question.titleEng}
        titleKor={question.titleKor}
        selectLeftType={question.leftType}
        selectLeftDesc={question.leftDesc}
        selectRightType={question.rightType}
        selectRightDesc={question.rightDesc}
        activeSide={activeSide}
        onSelect={(side) => setActiveSide(side)}
      />
    <div className="flex flex-1" />
      <div className="mb-8">
      <Button
        type="button"
        color="orange400"
        size="long"
        text="white"
        onClick={handleNext}
      >
        다음
      </Button>
      </div>
      <NavBar/>
    </div>
  );
};

export default FoodtiQuestionPage;
