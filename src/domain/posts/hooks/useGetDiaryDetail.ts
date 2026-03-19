import {  useQuery } from "@tanstack/react-query";
import { getDiaryDetail } from "../../../api/post.api";

export function useGetDiaryDetail(diaryId: number) {
    return useQuery({
        queryKey: ["diaryDetail", diaryId],
        queryFn:() => getDiaryDetail(diaryId),
        enabled: !!diaryId
    })
}