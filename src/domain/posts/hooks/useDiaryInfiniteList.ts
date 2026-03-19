import { useInfiniteQuery } from "@tanstack/react-query";
import { getDiaryList } from "../../../api/post.api";
import type { DiaryFilterParams } from "../../../types/post.type";

export function useDiaryInfiniteList(filters: DiaryFilterParams) {
  return useInfiniteQuery({
    queryKey: ["diaries",filters],
    queryFn: ({ pageParam = 0 }) => getDiaryList({
      page: pageParam,
      size: 10,
      sort: filters.sort,
      category: filters.category,
      rating: filters.rating,
      priceRange: filters.priceRange
    }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNext ? allPages.length : undefined;
    },
  });
}
