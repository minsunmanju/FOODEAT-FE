import { useMutation } from "@tanstack/react-query";
import { signUpAPi } from "../../../api/auth.api";
import type { SignUpPayload } from "../../../types/auth.type";

export function useSignUp() {
  return useMutation({mutationFn: signUpAPi})
}
