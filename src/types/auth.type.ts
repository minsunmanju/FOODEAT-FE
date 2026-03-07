export type CheckEmailResponse = {
  available: boolean;
};

export type CheckNicknameResponse = {
  available: boolean;
};

export type SignUpPayload = {
  email: string;
  password: string;
  nickname: string;
  homeLatitude: number;
  homeLongitude: number;
};

export type SignUpResponse = {
  userId: number;
};

export type LoginPayload = {
  email: string;
  password: string;
  autoLogin: boolean;
};
export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  userId: number;
  foodtiNumber: number;
  nickname: string;
};
