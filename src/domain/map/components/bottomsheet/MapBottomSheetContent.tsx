import React from "react";
import { postMockData } from "../../../posts/mock/post.mock";
import MapBottomSheetPostCard from "./MapBottomSheetPostCard";

const MapBottomSheetContent = () => {
  return (
    <div>
      {postMockData.map((p) => (
        <MapBottomSheetPostCard key={p.postId} post={p} />
      ))}
    </div>
  );
};

export default MapBottomSheetContent;
