import type {
  CheckEmailResponse,
  CheckNicknameResponse,
  SignUpPayload,
} from "../types/auth.type";
import { axiosInstance } from "./axiosInstance";
import { API } from "./endpoints";

export const checkEmailApi = async (email: string) => {
  const { data } = await axiosInstance.get(API.AUTH.CHECK_EMAIL, {
    params: { email },
  });
  return data as { available: boolean };
};

export const checkNicknameApi = async (nickname: string) => {
  const { data } = await axiosInstance.get(API.AUTH.CHECK_NICKNAME, {
    params: { nickname },
  });
  return data as { available: boolean };
};

export const signUpAPi = async (payload: SignUpPayload) => {
  const { data } = await axiosInstance.post(API.AUTH.SIGN_UP, payload);
  return data as { accessToken: string; refreshToken?: string };
};

export const LoginApi = async (payload: {
  email: string;
  password: string;
  autoLogin: boolean;
}) => {
  const { data } = await axiosInstance.post(API.AUTH.LOGIN, payload);
  return data;
};
