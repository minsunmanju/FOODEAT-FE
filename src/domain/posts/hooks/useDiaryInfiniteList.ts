import { useInfiniteQuery } from "@tanstack/react-query";
import { getDiaryList } from "../../../api/post.api";

export function useDiaryInfiniteList() {
  return useInfiniteQuery({
    queryKey: ["diaries"],
    queryFn: ({ pageParam = 0 }) => getDiaryList(pageParam, 10),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNext ? allPages.length : undefined;
    },
  });
}
