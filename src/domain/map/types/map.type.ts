import type { FoodType } from "../../../types/post.type";

export type MapDiaryListRequest = {
  latitude: number;
  longitude: number;
  radius: number;
};

export type MapDiaryList = {
  diaryId: number;
  restaurantName: string;
  category: FoodType
  menuName: string;
  price: number;
  rating: number;
  latitude: number;
  longitude: number;
  thumbnailUrl: string;
};

export type MapDiaryListResponse = {
  regionName: string;
  radius: number;
  diaries: MapDiaryList[];
};
