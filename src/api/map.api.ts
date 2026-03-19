import {
  type MapDiaryListResponse,
  type MapDiaryListRequest,
} from "../domain/map/types/map.type";
import { axiosInstance } from "./axiosInstance";
import { API } from "./endpoints";

export const getMapDiaryList = async ({latitude, longitude, radius=1}: MapDiaryListRequest) => {
  const { data } = await axiosInstance.get<MapDiaryListResponse>(
    API.MAP_DIARY,
    {
      params: {latitude,longitude, radius} 
    },
  );
  return data;
};
