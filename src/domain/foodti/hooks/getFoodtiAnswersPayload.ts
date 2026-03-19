import { FOODTI_QUESTIONS } from "../constants/foodtiQuestions";
import type { AnswerSide } from "../../../store/useFoodtiStore";

export function getFoodtiAnswersPayload(
    selectedAnswers : Record<number, AnswerSide>
) {
    return FOODTI_QUESTIONS.map((question) => {
        const side = selectedAnswers[question.quizId]

        if(!side){
            throw new Error(`${question.quizId}번 문항 답변이 없습니다.`)
        }

        return side === "left" ? question.leftValue : question.rightValue
    })
}