import type { ReactNode } from "react";
import type { ChangeEvent } from "react";

export type Color = "text" | "neutral400";
export type Size = "sm" | "md" | "comment" | "content";
export  type Type = "text" | "password";

export interface InputProps {
  color: Color;
  size: Size;
  type: Type;
  placeholder?: string;
  value?: string |number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ color, size, type, placeholder, value, onChange}: InputProps) {
  return (
    <input
      className={`${InputTheme.color[color]} ${InputTheme.size[size]}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

const InputTheme = {
  color: {
    // 일반 텍스트 작성시
    text: "text-neutral-900 bg-white border border-orange-200 rounded-lg",
    // 아이디, 비밀번호, 회원가입
    neutral400: "text-neutral-900 bg-white border border-orange-200 rounded-lg",
  },
  size: {
    // 가격 입력란
    sm: "w-[260px] h-[38px] pl-[8px] text-[12px]",
    // 화면 가로는 꽉 차고, 세로는 그냥 input 일때
    md: "w-full h-[38px] pl-2 text-[12px]",
    // 코멘트 용
    comment: "w-full h-[152px]",
    // 커뮤니티 글 작성용
    content: "w-[276px] h-[261px]",
  },
} as const;
