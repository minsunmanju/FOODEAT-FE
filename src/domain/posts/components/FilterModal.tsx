import React from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import FoodCategorySelect from "../../../components/FoodCategorySelect";
import PriceSelect from "./PriceSelect";
import RatingSelect from "./RatingSelect";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal = ({ isOpen, onClose }: FilterModalProps) => {
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
                <FoodCategorySelect />
                <div className="text-[20px] font-semibold">가격</div>
                <PriceSelect />
                <div className="text-[20px] font-semibold">별점</div>
                <RatingSelect />
              </div>
              <div className="flex mt-5 justify-between"> 
                <button className="w-[164px] h-[56px] bg-neutral-200 bottom-0 flex rounded-xl items-center justify-center">초기화</button>
                <button className="w-[164px] h-[56px] bg-orange-300 bottom-0 flex rounded-xl items-center justify-center text-white" onClick={onClose}>완료</button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FilterModal;
