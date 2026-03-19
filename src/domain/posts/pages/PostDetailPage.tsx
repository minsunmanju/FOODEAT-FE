import React from "react";
import { postMockData } from "../mock/post.mock";
import { Header } from "../../../components/Header";

import { useParams } from "react-router-dom";
import FoodCategoryBadge from "../../../components/FoodCategoryBadge";
import RatingStars from "../../../components/RatingStars";
import { FaWonSign } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import NavBar from "../../../components/NavBar";
import { useGetDiaryDetail } from "../hooks/useGetDiaryDetail";

const PostDetailPage = () => {
  const { diaryId } = useParams();
  const numbericDiaryId = Number(diaryId);
  const { data } = useGetDiaryDetail(numbericDiaryId);

  if (!data) {
    return <div>존재하지 않는 게시물 입니다.</div>;
  }
  return (
    <div className="flex flex-col h-dvh mb-[60px]">
      <Header title="식사 일지" goBack />
      <div className="mt-[92px] flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="text-[24px] font-semibold flex items-center gap-3">
            {data.menuName}
            <FoodCategoryBadge category={data.category} />
          </div>
          <div className="flex gap-2 items-center">
            <RatingStars raiting={data.rating} />
            <div className="text-neutral-400">{data.visitedAt}</div>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <FaWonSign size={15} />
            {data.price}
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <IoLocationOutline size={15} />
            {data.restaurantName}
          </div>
        </div>
        <div>{data.comment}</div>
        {/* <img src={data.imageUrls} /> */}
        {data.imageUrls.map((image) => (
          <img src={image} className="w-[320px] h-[320px]" />
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default PostDetailPage;
