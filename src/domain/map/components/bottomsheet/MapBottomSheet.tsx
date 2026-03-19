import React, { useState } from "react";
import { BOTTOM_SHEET_HEIGHT } from "../../constants";
import { motion } from "framer-motion";
import useBottomSheet from "./hooks/useBottomSheet";
import { Header } from "../../../../components/Header";
import MapBottomSheetHeader from "./MapBottomSheetHeader";
import MapBottomSheetContent from "./MapBottomSheetContent";
import MapBottomSheetButton from "./MapBottomSheetButton";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MapBottomSheetModalLocation from "./MapBottomSheetModalLocation";
import MapBottomSheetModalRadius from "./MapBottomSheetModalRadius";
import { useGetMapDiary } from "./hooks/useGetMapDiary";
import { useAuthStore } from "../../../../store/useAuthStore";
import { useSignUpStore } from "../../../../store/useSignUpStore";
import type { MapDiaryList } from "../../types/map.type";

interface Props {
  onClickCurrentLocation: () => void;
  onClickHomeLocation: () => void;
  onChangeRadius: (r: number) => void;
  locationLabel: string;
  radius: number;
  diaries: MapDiaryList[]
  isLoading: boolean;
  isError: boolean
}

const MapBottomSheet = ({
  onClickCurrentLocation,
  onClickHomeLocation,
  onChangeRadius,
  locationLabel,
  radius,
  diaries
}: Props) => {
  const { sheet, content } = useBottomSheet();
  const navigate = useNavigate();

  const [openModalLocation, setOpenModalLocation] = useState(false);
  const [openModalRadius, setOpenModalRadius] = useState(false);
  
  const goWrite = () => {
    navigate("/post/write");
  };
  return (
    <div>
      {openModalLocation && (
        <MapBottomSheetModalLocation
          onClose={() => setOpenModalLocation(false)}
          onClickCurrentLocation={onClickCurrentLocation}
          onClickHomeLocation={onClickHomeLocation}
          

        />
      )}

      {openModalRadius && (
        <MapBottomSheetModalRadius
          onClose={() => setOpenModalRadius(false)}
          onApply={(r) => {
            onChangeRadius(r);
            setOpenModalRadius(false);
          }}
        />
      )}
      <motion.div
        className="
        fixed left-0 right-0 z-[1]
        flex flex-col
        rounded-tl-[12px] rounded-tr-[12px]
        shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
        bg-white
        transition-transform duration-[650ms] ease-out
        w-[390px] mx-auto
      "
        style={{
          top: "calc(100% - 90px)", // 시트가 처음 보이는 위치
          height: `${BOTTOM_SHEET_HEIGHT}px`,
        }}
        ref={sheet}
      >
        <div className="px-[16px]">
          <MapBottomSheetHeader />
          <div className="flex gap-2 pb-4">
            <MapBottomSheetButton
              content={locationLabel}
              onClick={() => setOpenModalLocation(true)}
            />
            <MapBottomSheetButton
              content={`반경 ${radius}km`}
              onClick={() => setOpenModalRadius(true)}
            />
          </div>
          <div className="flex bg-orange-400 items-center  relative h-[40px]">
            <div className="text-white flex justify-center w-full text-center">
              지금 바로 식사일지를 작성해 보세요!
            </div>

            <div className="absolute right-[16px]">
              <IoArrowForwardCircleOutline
                style={{ color: "white" }}
                onClick={goWrite}
                size={24}
              />
            </div>
          </div>
          <div
            className="overflow-auto "
            style={{ WebkitOverflowScrolling: "touch" }}
            ref={content}
          >
            <MapBottomSheetContent diaries={diaries}/>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MapBottomSheet;
