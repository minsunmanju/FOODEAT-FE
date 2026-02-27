import React, { useState } from "react";

const CATEGORIES = ["한식", "양식", "일식", "중식"] as const;

type Category = (typeof CATEGORIES)[number];

type CategoryButtonProps = {
  label: Category;
  active: boolean;
  onClick: () => void;
};

function CategoryButton({ label, active, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={["rounded-[50px] border px-4 py-1 text-sm transition",
        active ? "border-orange-400 bg-orange-200 text-neutral-900" : "border-neutral-400 bg-white text-neutral-900"
      ].join()}
    >
      {label}
    </button>
  );
}

export default function FoodCategorySelect() {
    const [selectedCategory, setSelectedCateory] = useState<Category>("한식");

    return (
        <div className="flex gap-2">
            {CATEGORIES.map((label) =>(
                <CategoryButton
                key={label}
                label={label}
                active={selectedCategory === label}
                onClick={() => setSelectedCateory(label)}
            />
            ))}

        </div>
    )
}