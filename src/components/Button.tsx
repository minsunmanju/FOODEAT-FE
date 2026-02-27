import type { ReactNode } from "react";

export type Color = "orange400" | "orange200";
export type Size = "long" | "half" | "small" | "write";
export type Text = "white" | "text";
export type Type = "button" | "submit";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color: Color;
  size: Size;
  text: Text;
  type: Type;
}

export function Button({
  children,
  onClick,
  color,
  size,
  text,
  type,
}: ButtonProps) {
  return (
    <button
      className={`${buttonTheme.color[color]} ${buttonTheme.size[size]} ${buttonTheme.text[text]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const buttonTheme = {
  color: {
    orange400: "bg-orange-400",
    orange200: "bg-orange-200",
  },
  size: {
    long: "w-full h-[57px] rounded-md text-base ",
    half: "w-[170px] h-[57px] rounded-md text-base ",
    small: "w-[79px] h-[34px] rounded-md text-[12px]",
    write: "w=[240px] h-[57px] rounded-[30px] text-base px-8",
  },
  text: {
    white: "text-white",
    text: "text-neutral-900",
  },
} as const;
