import React from "react";
import type { DiaryItem } from "../../../types/post.type";
import FoodCategoryBadge from "../../../components/FoodCategoryBadge";
import { FaWonSign } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import RatingStars from "../../../components/RatingStars";
import Divider from "../../../components/Divider";
import { useNavigate } from "react-router-dom";
import DefaultFoodImage from "../../../assets/images/food1.png"
type PostCardProps = {
  diary: DiaryItem
};

const PostCard = ({diary }: PostCardProps) => {
  const navigate = useNavigate();
  const goPostDetail = () =>{
    navigate(`/post/${diary.diaryId}`)
  }

  return (
    <div className="mt-2 mb-4" onClick={goPostDetail}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb-2">
          <div className="font-semibold text-[20px]">{diary.menuName}</div>
          <FoodCategoryBadge category={diary.category} />
        </div>
        <div>
          <RatingStars raiting={diary.rating} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-neutral-400">
            <FaWonSign size={15} />
            {diary.price}
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <IoLocationOutline size={15} />
            {diary.restaurantName}
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <IoCalendarClearOutline size={15} />
            {diary.visitedAt}
          </div>
        </div>
        <div>
          <img src={diary.thumbnailUrl ? diary.thumbnailUrl : DefaultFoodImage} className="w-[120px] h-[120px] rounded-lg" />
        </div>
      </div>
      <div className="mb-4"/>
      <Divider />
    </div>
  );
};

export default PostCard;
