import React, { useState } from "react";

const RATING_OPTIONS = ["1점", "2점", "3점", "4점", "5점"] as const;

export type RatingOption = (typeof RATING_OPTIONS)[number] | null;

type RatingOptionButtonProps = {
  label: RatingOption;
  active: boolean;
  onClick: () => void;
};

function RatingButton({ label, active, onClick }: RatingOptionButtonProps) {
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

type RatingSelectProps = {
  value: RatingOption
  onChange : (next: RatingOption) => void;
}

export default function RatingSelect({value, onChange}: RatingSelectProps) {

  return (
    <div className="flex gap-2">
      {RATING_OPTIONS.map((label) => (
        <RatingButton
          key={label}
          label={label}
          active={value === label}
          onClick={() => onChange(label)}
        />
      ))}
    </div>
  );
}
