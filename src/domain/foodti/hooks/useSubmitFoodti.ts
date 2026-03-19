import { useMutation } from "@tanstack/react-query";
import { SubmitFoodti } from "../../../api/foodti.api";

export function useSubmitFoodti() {
  return useMutation({
    mutationFn: SubmitFoodti,
  });
}
