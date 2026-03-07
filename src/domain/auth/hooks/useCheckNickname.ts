import { useMutation } from "@tanstack/react-query";
import { checkNicknameApi } from "../../../api/auth.api";

export function useCheckNickname() {
  return useMutation({
    mutationFn: (email: string) => checkNicknameApi(email),
  });
}
