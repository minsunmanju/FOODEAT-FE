import { create } from "zustand";
import type { FoodMenu, FoodtiResponse } from "../../../types/foodti.type";

export type RecommendedMenu = {
  menuId: number;
  name: string;
  category: string;
};

type FoodtiResultState = {
  foodtiNumber: number;
  foodtiCode: string;
  recommendedMenus: RecommendedMenu[];
  setResult: (
    foodtiNumber: number,
    foodtiCode: string,
    recommendedMenus: RecommendedMenu[],
  ) => void;
  resetResult: () => void;
};

export const useFoodtiResultStore = create<FoodtiResultState>((set) => ({
  foodtiNumber: 0,
  foodtiCode: "",
  recommendedMenus: [],
  setResult: (foodtiNumber, foodtiCode, recommendedMenus) =>
    set({ foodtiNumber, foodtiCode, recommendedMenus }),
  resetResult: () =>
    set({ foodtiNumber: 0, foodtiCode: "", recommendedMenus: [] }),
}));
