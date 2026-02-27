import React from "react";
import type { PostItem } from "../../../types/post.type";
import FoodCategoryBadge from "../../../components/FoodCategoryBadge";
import { FaWonSign } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import RatingStars from "../../../components/RatingStars";
import Divider from "../../../components/Divider";
import { useNavigate } from "react-router-dom";

type PostCardProps = {
  post: PostItem;
};

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();
  const goPostDetail = () =>{
    navigate(`/post/${post.postId}`)
  }

  return (
    <div className="mt-2 mb-4" onClick={goPostDetail}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb-2">
          <div className="font-semibold text-[20px]">{post.menuName}</div>
          <FoodCategoryBadge category={post.foodType} />
        </div>
        <div>
          <RatingStars raiting={post.rating} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-neutral-400">
            <FaWonSign size={15} />
            {post.price}
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <IoLocationOutline size={15} />
            {post.restaurantName}
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <IoCalendarClearOutline size={15} />
            {post.visitedDate}
          </div>
        </div>
        <div>
          <img src={post.imageUrl} className="w-[120px] h-[120px] rounded-lg" />
        </div>
      </div>
      <div className="mb-4"/>
      <Divider />
    </div>
  );
};

export default PostCard;
