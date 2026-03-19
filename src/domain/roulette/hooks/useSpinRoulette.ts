import { useMutation } from "@tanstack/react-query";
import { SpinRoulette } from "../../../api/roulette.api";

export function useSpinRoulette() {
  return useMutation({
    mutationFn: SpinRoulette,
  });
}
