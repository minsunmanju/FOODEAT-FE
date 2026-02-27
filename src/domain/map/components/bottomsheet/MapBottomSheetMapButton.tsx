import React from "react";
import { FiMap } from "react-icons/fi";
const MapBottomSheetMapButton = () => {
  return (
    <div className="flex gap-2 bg-orange-500">
      <div>
        <FiMap style={{ color: "white" }} />
      </div>
      <div className="text-white">지도 보기</div>
    </div>
  );
};

export default MapBottomSheetMapButton;
