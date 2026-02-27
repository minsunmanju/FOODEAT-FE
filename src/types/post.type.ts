// PostCard(식사 일지)에서 사용
export type FoodType = "한식" | "중식" | "일식" | "양식" | undefined;

export interface PostItem {
  postId: number;
  menuName: string;
  restaurantName: string;
  price: number;
  visitedDate: string;
  foodType: FoodType;
  rating: number;
  content: string;
  imageUrl: string;
}
