// PostCard(식사 일지)에서 사용
export type FoodType = "한식" | "중식" | "일식" | "양식" | undefined;

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
  imageUrls: string[]
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

// export type PresignRequest = {
//   fileName: string;
//   contentType: string;
// }

// export type PreSignResponse = {
//   uploadUrl: string;
//   fileUrl: string;
// }
