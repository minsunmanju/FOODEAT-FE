import { create } from "zustand";
// 스텝(FOODEAT의 경우에는 총 4개의 스텝이 있음

type Step = 1 | 2 | 3 | 4;

// 사용자가 회원가입시 입력할 정보
interface SignUpForm  {
  email: string;
  password: string;
  // passwordConfirm: string;
  nickname: string;
  // address: string;
  homeLatitude: number;
  homeLongitude: number;
};

type SingUpState = {
  step: Step;
  form: SignUpForm;

  // 이메일 중복검사 결과
  emailChecked: boolean;
  // 사용자가 마지막으로 중복검사한 이메일
  lastCheckedEmail: string;
  // 닉네임 중복검사 결과
  nicknameChecked: boolean;
  // 사용자가 마지막으로 중복검사한 닉네임
  lastCheckedNickname: string;

  setField: <K extends keyof SignUpForm>(key: K, value: SignUpForm[K]) => void;
  setEmailCheckedResult: (email: string, available: boolean) => void;
  setNicknameCheckedResult: (nickname: string, available: boolean) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
};

const initialForm: SignUpForm = {
  email: "",
  password: "",
  // passwordConfirm: "",
  nickname: "",
  // address:"",
  homeLatitude: 0,
  homeLongitude: 0,
};

export const useSignUpStore = create<SingUpState>((set, get) => ({
  step: 1,
  form: initialForm,
  emailChecked: false,
  lastCheckedEmail: "",
  nicknameChecked: false,
  lastCheckedNickname: "",
  setField: (key, value) => {
    if (key === "email") {
      set({
        form: { ...get().form, email: value as string },
        emailChecked: false,
        lastCheckedEmail: "",
      });
      return;
    }
    if (key === "nickname") {
      set({
        form: { ...get().form, nickname: value as string },
        nicknameChecked: false,
        lastCheckedNickname: "",
      });
      return;
    }
    set({ form: { ...get().form, [key]: value } });
  },
  setNicknameCheckedResult: (nickname, available) => {
    set({
      nicknameChecked: available,
      lastCheckedNickname: nickname,
    });
  },
  setEmailCheckedResult: (email, available) => {
    set({
      emailChecked: available,
      lastCheckedEmail: email,
    });
  },
  next: () => {
    const { step } = get();
    if (step < 4) set({ step: (step + 1) as Step });
  },
  prev: () => {
    const { step } = get();
    if (step > 1) set({ step: (step - 1) as Step });
  },
  reset: () =>
    set({
      step: 1,
      form: initialForm,
      emailChecked: false,
      lastCheckedEmail: "",
      nicknameChecked: false,
      lastCheckedNickname: "",
    }),
}));
