// 바텀시트 내에 반경 설정, 위치 설정 버튼 스타일링

import React from "react";

type MapButtonSheetButtonProps = {
  content: string;
  onClick? : () => void
};

const MapBottomSheetButton = ({ content , onClick}: MapButtonSheetButtonProps) => {
  return (
    <button className="py-[6px] px-[12px] text-[12px] bg-white text-neutral-900 border-[0.5px] border-neutral-400 rounded-[30px] flex items-center gap-4" onClick={onClick}>
      {content}
    </button>
  );
};

export default MapBottomSheetButton;
