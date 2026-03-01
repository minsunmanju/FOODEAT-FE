import React, { useState } from "react";

const CATEGORIES = ["1점", "2잠", "3점", "4점", "5점"] as const;

type Category = (typeof CATEGORIES)[number];

type CategoryButtonProps = {
  label: Category;
  active: boolean;
  onClick: () => void;
};

function RatingButton({ label, active, onClick }: CategoryButtonProps) {
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

export default function RatingSelect() {
  const [selectedCategory, setSelectedCateory] = useState<Category>("1점");

  return (
    <div className="flex gap-2">
      {CATEGORIES.map((label) => (
        <RatingButton
          key={label}
          label={label}
          active={selectedCategory === label}
          onClick={() => setSelectedCateory(label)}
        />
      ))}
    </div>
  );
}
