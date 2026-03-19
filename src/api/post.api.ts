// import { type PreSignResponse, type CreateDiaryPayload, type PresignRequest } from "../types/post.type";
import {
  type DiaryListResponse,
  type CreateDiaryPayload,
  type DiaryDetailResponse,
} from "../types/post.type";
import { axiosInstance } from "./axiosInstance";
import { API } from "./endpoints";

export const createDiaryApi = async (payload: CreateDiaryPayload) => {
  const { data } = await axiosInstance.post(API.DIARY.CREATE_DIARY, payload);
  return data;
};

export const getDiaryList = async (page: number, size: number = 10) => {
  const { data } = await axiosInstance.get<DiaryListResponse>(
    API.DIARY.GET_DIARY,
    {
      params: { page, size },
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
// export const getPresignedUrlApi = async (payload: PresignRequest) =>{
//     const {data} = await axiosInstance.post<PreSignResponse>("/api/v1/files/presign", payload)
//     return data
// }
