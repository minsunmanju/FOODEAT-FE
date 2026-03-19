import React, { useState } from "react";

export const PRICE_OPTIONS = ["1만원 이하", "1~2만원", "3만원 이상"] as const;
export type PriceOption = (typeof PRICE_OPTIONS)[number] | null


type CategoryButtonProps = {
  label: (typeof PRICE_OPTIONS)[number] 
  active: boolean;
  onClick: () => void;
};

function CategoryButton({ label, active, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={[
        "rounded-[50px] border px-4 py-1 text-sm transition",
        active
          ? "border-orange-400 bg-orange-200 text-neutral-900"
          : "border-neutral-400 bg-white text-neutral-900",
      ].join()}
    >
      {label}
    </button>
  );
}

type PriceSelectProps = {
  value: PriceOption;
  onChange: (next: PriceOption) => void
}

export default function PriceSelect({value, onChange} : PriceSelectProps) {

  return (
    <div className="flex gap-2">
      {PRICE_OPTIONS.map((label) => (
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
