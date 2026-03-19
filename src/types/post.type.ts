// PostCard(식사 일지)에서 사용
export type FoodType = "한식" | "중식" | "일식" | "양식" |null;
export type DiarySortType = "createdAt" | "visitedAt" | "price";
export type DiaryPriceRangeType =
  | 1
  | 2
  | 3
  | null;
export type DiaryRatingType = 1 | 2 | 3 | 4 | 5 | null;
export type DiaryFilterParams = {
  sort: DiarySortType;
  category: FoodType;
  priceRange: DiaryPriceRangeType;
  rating: DiaryRatingType;
};

export type CreateDiaryPayload = {
  restaurantName: string;
  restaurantAddress: string;
  latitude: number;
  longitude: number;
  visitedAt: Date;
  category: FoodType;
  menuName: string;
  price: number;
  rating: number;
  comment: string;
  imageUrls: string[];
};

export type DiaryItem = {
  diaryId: number;
  restaurantName: string;
  menuName: string;
  category: FoodType;
  rating: number;
  price: number;
  visitedAt: string;
  thumbnailUrl: string;
};

export type DiaryListResponse = {
  diaries: DiaryItem[];
  hasNext: boolean;
};

export type DiaryDetailResponse = {
  diaryId: number;
  restaurantName: string;
  restaurantAddress: string;
  latitude: number;
  longitude: number;
  visitedAt: string;
  category: FoodType;
  menuName: string;
  price: number;
  rating: number;
  comment: string;
  imageUrls: string[];
  createdAt: string;
};
