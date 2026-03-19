import React, { useEffect, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import FoodCategorySelect, {
  CATEGORIES,
} from "../../../components/FoodCategorySelect";
import PriceSelect, { type PriceOption } from "./PriceSelect";
import RatingSelect, { type RatingOption } from "./RatingSelect";
import type {
  DiaryPriceRangeType,
  DiaryRatingType,
  FoodType,
} from "../../../types/post.type";
import {
  mapPriceOptionToParam,
  mapRatingOptionToParam,
} from "../utils/filterMapper";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory: FoodType;
  initialPriceRange: DiaryPriceRangeType;
  initialRating: DiaryRatingType;
  onApply: (filters: {
    category: FoodType;
    priceRange: DiaryPriceRangeType;
    rating: DiaryRatingType;
  }) => void;
  onReset: () => void;
}

const priceParamToLabel = (value: DiaryPriceRangeType): PriceOption => {
  switch (value) {
    case 1:
      return "1만원 이하";
    case 2:
      return "1~2만원";
    case 3:
      return "3만원 이상";
    default:
      return null;
  }
};

const ratingParamToLabel = (value: DiaryRatingType): RatingOption => {
  switch (value) {
    case 1:
      return "1점";
    case 2:
      return "2점";
    case 3:
      return "3점";
    case 4:
      return "4점";
    case 5:
      return "5점";
    default:
      return null;
  }
};

const FilterModal = ({
  isOpen,
  onClose,
  initialCategory,
  initialPriceRange,
  initialRating,
  onApply,
  onReset,
}: FilterModalProps) => {
  const [category, setCategory] = useState<FoodType>(initialCategory);
  const [price, setPrice] = useState<PriceOption>(
    priceParamToLabel(initialPriceRange),
  );
  const [rating, setRating] = useState<RatingOption>(
    ratingParamToLabel(initialRating),
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-[50]"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 bottom-0 flex justify-center z-[51] touch-none"
          >
            <div className="w-full h-[380px] bg-neutral-50 rounded-tl-[20px] rounded-tr-[20px] px-[16px]">
              <div className="w-[40px] h-[4px] rounded-[2px] bg-[#DEE2E6] mx-auto my-auto mt-4" />
              <div className="flex flex-col pt-6 gap-3">
                <div className="text-[20px] font-semibold">카테고리</div>
                <FoodCategorySelect
                  value={(category ?? "한식") as CATEGORIES}
                  onChange={(next) => setCategory(next)}
                />
                <div className="text-[20px] font-semibold">가격</div>
                <PriceSelect
                  value={(price ?? "1만원 이하") as PriceOption}
                  onChange={(next) => setPrice(next)}
                />
                <div className="text-[20px] font-semibold">별점</div>
                <RatingSelect
                  value={(rating ?? "1점") as RatingOption}
                  onChange={(next) => setRating(next)}
                />
              </div>
              <div className="flex mt-5 justify-between">
                <button
                  className="w-[164px] h-[56px] bg-neutral-200 bottom-0 flex rounded-xl items-center justify-center"
                  onClick={() => {
                    setPrice(null);
                    setCategory(null);
                    setRating(null);
                    onReset();
                    onClose();
                  }}
                >
                  초기화
                </button>
                <button
                  className="w-[164px] h-[56px] bg-orange-300 bottom-0 flex rounded-xl items-center justify-center text-white"
                  onClick={() => {
                    onApply({
                      category,
                      priceRange: mapPriceOptionToParam(price),
                      rating: mapRatingOptionToParam(rating),
                    });
                    onClose();
                  }}
                >
                  완료
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FilterModal;
