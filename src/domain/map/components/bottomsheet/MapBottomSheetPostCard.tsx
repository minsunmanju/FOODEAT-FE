import React from "react";
import FoodCategoryBadge from "../../../../components/FoodCategoryBadge";
import RatingStars from "../../../../components/RatingStars";
import { IoLocationOutline } from "react-icons/io5";
import Divider from "../../../../components/Divider";
import { FaWonSign } from "react-icons/fa6";
import type { MapDiaryList, MapDiaryListResponse } from "../../types/map.type";
import { useGetMapDiary } from "./hooks/useGetMapDiary";

type MapBottomSheetPostCardProps = {
  post : MapDiaryList
}

const MapBottomSheetPostCard = ({post} : MapBottomSheetPostCardProps) => {
  // const latitude = 1
  // const longitude =1
  // const radius = 3
  // const {data, isLoading, isError} = useGetMapDiary({latitude, longitude, radius});

  return (
    <div className="flex flex-col py-2 my-3 pb-2">
      <div className="flex items-center gap-2">
        <div className="text-orange-400">
          <IoLocationOutline size={40} />
        </div>
        <div className="text-[20px]">{post.restaurantName}</div>
        <div>
          <FoodCategoryBadge category={post.category} />
        </div>
      </div>
      <div className="flex pl-12 items-center">
        <div className="text-neutral-400 pb-4 flex items-center">
          <div className="text-[16px]">{post.menuName}</div>
          <div className="pl-2">
            <FaWonSign />
          </div>
          <div>{post.price}</div>
          <div className="pl-2">
            <RatingStars raiting={post.rating} />
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default MapBottomSheetPostCard;
