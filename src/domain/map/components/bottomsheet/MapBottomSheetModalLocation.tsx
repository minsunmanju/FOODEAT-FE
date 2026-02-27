import React from "react";
import { FiHome } from "react-icons/fi";
import { BiCurrentLocation } from "react-icons/bi";
import Divider from "../../../../components/Divider";

interface Props {
  onClose: () => void;
  // 현재 위치 기준
  onClickCurrentLocation: () => void;
  // 회원가입 시 입력한 주소 기준
  onClickHomeLocation: () => void;
}

const MapBottomSheetModalLocation = ({
  onClose,
  onClickCurrentLocation,
  onClickHomeLocation,
}: Props) => {
  return (
    <div
      onClick={onClose}
      className="pointer-events-auto fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.25)] flex justify-center items-end z-50 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mb-[40px] bg-white rounded-xl w-[340px] p-[30px] flex flex-col gap-2"
      >
        <div className="text-[20px] mb-[16px] text-center ">
          어디에서 찾을까요?
        </div>

        <div
          onClick={() => {
            onClickHomeLocation();
            onClose();
          }}
          className="flex gap-[16px] items-center cursor-pointer "
        >
          <div>
            <FiHome size={20} />
          </div>
          <div className="text-[20px]">우리집</div>
        </div>
          <Divider/>
        <div
          onClick={() => {
            onClickCurrentLocation();
            onClose();
          }}
          className="flex gap-[16px] items-center cursor-pointer"
        >
          <div>
            <BiCurrentLocation size={20}/>
          </div>
          <div className="text-[20px]">현재 위치</div>
        </div>
      </div>
    </div>
  );
};

export default MapBottomSheetModalLocation;
