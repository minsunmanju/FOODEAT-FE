import { useQuery } from "@tanstack/react-query";
import { getMapDiaryList } from "../../../../../api/map.api";
import type { MapDiaryListRequest } from "../../../types/map.type";

export function useGetMapDiary({latitude, longitude, radius} :MapDiaryListRequest) {
 return useQuery({
    queryKey: ["mapDiary", longitude, latitude, radius],
    queryFn : () => getMapDiaryList({longitude, latitude, radius})
 })
}