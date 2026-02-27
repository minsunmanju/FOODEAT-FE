import React from "react";
import { postMockData } from "../mock/post.mock";
import { Header } from "../../../components/Header";
import type { PostItem } from "../../../types/post.type";
import { useParams } from "react-router-dom";
import FoodCategoryBadge from "../../../components/FoodCategoryBadge";
import RatingStars from "../../../components/RatingStars";
import { FaWonSign } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import NavBar from "../../../components/NavBar";

const PostDetailPage = () => {
  const { postId } = useParams();
  const post = postMockData.find((p) => p.postId === Number(postId));

  if (!post) {
    return <div>존재하지 않는 게시물 입니다.</div>;
  }
  return (
    <div className="flex h-dvh">
      <Header title="식사 일지" goBack />
      <div className="mt-[92px] flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="text-[24px] font-semibold flex items-center gap-3">
            {post.menuName}
            <FoodCategoryBadge category={post.foodType} />
          </div>
          <div className="flex gap-2 items-center">
            <RatingStars raiting={post.rating} />
            <div className="text-neutral-400">{post.visitedDate}</div>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <FaWonSign size={15} />
            {post.price}
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <IoLocationOutline size={15} />
            {post.restaurantName}
          </div>
        </div>
        <div>{post.content}</div>
        <img src={post.imageUrl} />
      </div>
      <NavBar/>
    </div>
  );
};

export default PostDetailPage;
