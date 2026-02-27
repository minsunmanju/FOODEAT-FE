import React from "react";
import type { FoodType } from "../types/post.type";

type FoodCategoryBadgeProps = {
  category: FoodType;
};

const FoodCategoryBadge = ({ category }: FoodCategoryBadgeProps) => {
  return (
    <div>
      <div className="rounded-[50px] border px-3 py-0.5 text-[12px] border-orange-400 bg-orange-200 text-neutral-900">
        {category}
      </div>
    </div>
  );
};

export default FoodCategoryBadge;
