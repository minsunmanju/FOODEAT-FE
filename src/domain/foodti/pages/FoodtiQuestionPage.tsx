import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FOODTI_QUESTIONS, type Side } from "../constants/foodtiQuestions";
import FoodtiSelectCard from "../components/FoodtiSelectCard";
import { Button } from "../../../components/Button";
import NavBar from "../../../components/NavBar";
import { useFoodtiStore } from "../../../store/useFoodtiStore";
import { useSubmitFoodti } from "../hooks/useSubmitFoodti";
import { useFoodtiResultStore } from "../store/useFoodtiResultStore";
import { getFoodtiAnswersPayload } from "../hooks/getFoodtiAnswersPayload";
import { Header } from "../../../components/Header";

const FoodtiQuestionPage = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const stepNum = Number(step);
  const index = stepNum - 1;

  const question = FOODTI_QUESTIONS[index];

  const { answers, setAnswer, resetAnswers } = useFoodtiStore();
  const submitFoodti = useSubmitFoodti();
  const setResult = useFoodtiResultStore((s) => s.setResult);

  const activeSide = answers[question.quizId] ?? null;
  if (!question) {
    navigate("/foodti/1", { replace: true });
    return null;
  }

  const isLast = stepNum === FOODTI_QUESTIONS.length;
  const handleNext = () => {
    if (!activeSide) return;

    if (isLast) {
      const payloadAnswers = getFoodtiAnswersPayload(answers);

      submitFoodti.mutate(
        { answers: payloadAnswers },
        {
          onSuccess: (res) => {
            setResult(res.foodtiNumber, res.foodtiCode, res.recommendedMenus);
            resetAnswers();
            navigate("/foodti/result");
          },
          onError: () => {
            alert("제출에 실패했어요.");
          },
        },
      );
    } else {
      navigate(`/foodti/${stepNum + 1}`);
    }
  };

  return (
    <div className="flex flex-col h-dvh pt-[64px] pb-[40px]">
      <Header title="FOODTI" goBack />
      <FoodtiSelectCard
        quizId={question.quizId}
        titleEng={question.titleEng}
        titleKor={question.titleKor}
        selectLeftType={question.leftType}
        selectLeftDesc={question.leftDesc}
        selectRightType={question.rightType}
        selectRightDesc={question.rightDesc}
        activeSide={activeSide}
        onSelect={(side) => setAnswer(question.quizId, side)}
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
          {isLast ? "제출 하기" : "다음"}
        </Button>
      </div>
      <NavBar />
    </div>
  );
};

export default FoodtiQuestionPage;
