import { useMutation } from "@tanstack/react-query";
import { createDiaryApi } from "../../../api/post.api";

export function useCreateDiary() {
    return useMutation({mutationFn: createDiaryApi})
}