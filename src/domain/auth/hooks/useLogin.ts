import { useMutation } from "@tanstack/react-query";
import { LoginApi } from "../../../api/auth.api";

export function useLogin() {
    return useMutation({
        mutationFn: LoginApi
    })
}