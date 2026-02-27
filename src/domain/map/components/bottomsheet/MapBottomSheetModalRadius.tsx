import React, { useState } from "react";
import MapBottomSheetRange from "./MapBottomSheetRange";

interface Props {
  onApply: (radius: number) => void;
  onClose: () => void;
}

const MapBottomSheetModalRadius = ({ onApply, onClose }: Props) => {
  const [radius, setRadius] = useState(1);
  return (
    <div
      onClick={onClose}
      className="pointer-events-auto fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.25)] flex justify-center items-end pt-0 pr-[16px] pl-[16px] pb-[20px] z-50"
    >
      <div
        onClick={(e) => e.stopPropagation}
        className="w-full max-w-[360px] flex flex-col items-center"
      >
        <div className="w-full bg-white rounded-xl py-[22px] pr-[20px] pl-[28px]">
          <div className="text-[20px] mb-[4px] text-center">
            찾고 싶은 반경을 설정해 주세요
          </div>
          <div className="text-[16px] text-neutral-400 mb-[24px]">
            1km부터 5km까지 1km단위로 설정할 수 있어요
          </div>

          <div className="text-center bg-neutral-100 rounded-sm py-10 px-0 text-[20px] mb-[24px]">
            근처{" "}<span className="text-orange-400 font-semibold">{radius}km</span>의 맛집👅
          </div>

          <div className="my-0 mx-auto w-full">
            <div className="flex justify-between mt-[6px]">
              <MapBottomSheetRange radius={radius} onChangeRadius={setRadius} />
            </div>
          </div>
        </div>

        <div
          onClick={() => onApply(radius)}
          className="
        w-full h-[60px] text-white bg-orange-400 rounded-xl mt-[12px] text-[20px] border-none justify-center items-center flex"
        >
          적용하기
        </div>
      </div>
    </div>
  );
};

export default MapBottomSheetModalRadius;
