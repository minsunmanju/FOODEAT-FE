import { useMutation } from "@tanstack/react-query";
import { checkEmailApi } from "../../../api/auth.api";

export function useCheckEmail() {
    return useMutation({
        mutationFn:(email: string) => checkEmailApi(email)
    })
}