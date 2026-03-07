export const API = {
  AUTH: {
    CHECK_NICKNAME: "/api/v1/auth/check-nickname",
    CHECK_EMAIL: "/api/v1/auth/check-email",
    SIGN_UP: "/api/v1/auth/signup",
    LOGIN: "/api/v1/auth/login",
    REFRESH: "/api/v1/auth/reissue",
  },
} as const;
