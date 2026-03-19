export const API = {
  AUTH: {
    CHECK_NICKNAME: "/api/v1/auth/check-nickname",
    CHECK_EMAIL: "/api/v1/auth/check-email",
    SIGN_UP: "/api/v1/auth/signup",
    LOGIN: "/api/v1/auth/login",
    REFRESH: "/api/v1/auth/reissue",
  },
  DIARY: {
    CREATE_DIARY: "/api/v1/diaries",
    GET_DIARY: "/api/v1/diaries",
  },
  FOODTI : {
    SUBMIT_FOODTI: "/api/v1/foodti/submit"
  },
  ROULETTE: "/api/v1/roulette",
  IMAGES_UPLOAD: "/api/v1/images/diary",
  MAP_DIARY: "/api/v1/map/diaries"
} as const;
