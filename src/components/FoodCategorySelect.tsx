import React from "react";

export const CATEGORIES = ["한식", "중식", "양식", "일식"] as const;
export type CATEGORIES = (typeof CATEGORIES)[number]; 
// ↑ 이름 그대로 쓰고 싶다면 가능하지만 헷갈려서 보통은 Category로 이름 바꿈

type CategoryButtonProps = {
  label: CATEGORIES;
  active: boolean;
  onClick: () => void;
};

function CategoryButton({ label, active, onClick }: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-[50px] border px-4 py-1 text-sm transition",
        active
          ? "border-orange-400 bg-orange-200 text-neutral-900"
          : "border-neutral-400 bg-white text-neutral-900",
      ].join(" ")} // ✅ join(" ")
    >
      {label}
    </button>
  );
}

type FoodCategorySelectProps = {
  value: CATEGORIES;
  onChange: (next: CATEGORIES) => void;
};

export default function FoodCategorySelect({ value, onChange }: FoodCategorySelectProps) {
  return (
    <div className="flex gap-2">
      {CATEGORIES.map((label) => (
        <CategoryButton
          key={label}
          label={label}
          active={value === label}
          onClick={() => onChange(label)}
        />
      ))}
    </div>
  );
}