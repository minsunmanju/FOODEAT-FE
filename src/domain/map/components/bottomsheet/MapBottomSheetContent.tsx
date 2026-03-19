import React from "react";
import { postMockData } from "../../../posts/mock/post.mock";
import MapBottomSheetPostCard from "./MapBottomSheetPostCard";
import type { MapDiaryList } from "../../types/map.type";

type MapBottomSheetConetentProps = {
  diaries: MapDiaryList[];
};

const MapBottomSheetContent = ({ diaries }: MapBottomSheetConetentProps) => {
  return (
    <div>
      {diaries.map((diary) => (
        <MapBottomSheetPostCard key={diary.diaryId} post={diary} />
      ))}
    </div>
  );
};

export default MapBottomSheetContent;
