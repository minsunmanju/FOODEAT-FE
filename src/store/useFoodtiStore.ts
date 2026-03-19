import { create } from "zustand";

export type AnswerSide = "left" | "right";

type FoodtiState = {
  answers: Record<number, AnswerSide>;
  setAnswer: (quizId: number, side: AnswerSide) => void;
  resetAnswers: () => void;
};

export const useFoodtiStore = create<FoodtiState>((set) => ({
  answers: {},
  setAnswer: (quizId, side) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [quizId]: side,
      },
    })),
  resetAnswers: () => set({ answers: {} }),
}));
