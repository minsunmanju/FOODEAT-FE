// import { type PreSignResponse, type CreateDiaryPayload, type PresignRequest } from "../types/post.type";
import {
  type DiaryListResponse,
  type CreateDiaryPayload,
  type DiaryDetailResponse,
  type DiaryFilterParams,
} from "../types/post.type";
import { axiosInstance } from "./axiosInstance";
import { API } from "./endpoints";

export const createDiaryApi = async (payload: CreateDiaryPayload) => {
  const { data } = await axiosInstance.post(API.DIARY.CREATE_DIARY, payload);
  return data;
};

type GetDiaryListParams = DiaryFilterParams & {
  page: number;
  size: number;
};

export const getDiaryList = async ({
  page,
  size = 10,
  sort,
  category,
  priceRange,
  rating,
}: GetDiaryListParams) => {
  const { data } = await axiosInstance.get<DiaryListResponse>(
    API.DIARY.GET_DIARY,
    {
      params: {
        page,
        size,
        sort,
        category: category ?? undefined,
        priceRange: priceRange ?? undefined,
        rating: rating ?? undefined,
      },
    },
  );
  return data;
};

export const getDiaryDetail = async (diaryId: number) => {
  const { data } = await axiosInstance.get<DiaryDetailResponse>(
    `/api/v1/diaries/${diaryId}`,
  );
  return data;
};
