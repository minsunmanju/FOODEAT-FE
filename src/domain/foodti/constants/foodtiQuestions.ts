export type Side = "left" | "right";

export type FoodtiQuestion = {
  quizId: number;
  titleEng: string;
  titleKor: string;
  leftType: string;
  leftDesc: string;
  rightType: string;
  rightDesc: string;
};

export const FOODTI_QUESTIONS: FoodtiQuestion[] = [
  {
    quizId: 1,
    titleEng: "Spicy / Mild",
    titleKor: "매운맛 VS 순한맛",
    leftType: "Spicy",
    leftDesc: "매운맛이 있어야 살아!",
    rightType: "Mild",
    rightDesc: "부드럽고 편안한 맛이 좋아!",
  },
  {
    quizId: 2,
    titleEng: "Meat / Vegetable",
    titleKor: "고기 VS 채소",
    leftType: "Meat",
    leftDesc: "든든하게 고기!",
    rightType: "Vegetable",
    rightDesc: "가볍게 채소!",
  },

  {
    quizId: 3,
    titleEng: "Rice / Noodles",
    titleKor: "밥 VS 면",
    leftType: "Rice",
    leftDesc: "밥이 있어야 식사지!",
    rightType: "Noodles",
    rightDesc: "면은 언제나 옳아!",
  },

  {
    quizId: 4,
    titleEng: "Brothy / Dry",
    titleKor: "국물 O VS 국물X",
    leftType: "Brothy",
    leftDesc: "국물 없으면 뭔가 허전해",
    rightType: "Dry",
    rightDesc: "깔끔하게 마무리 하는게 좋아",
  },
];
