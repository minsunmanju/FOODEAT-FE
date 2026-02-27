import type { ReactNode } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  title?: string;
  goBack?: boolean;
}

export function Header({ title, goBack }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0  z-50 h-[64px] w-[390px] -translate-x-1/2 left-1/2 flex items-center bg-white pt-[24px] px-[16px]">
      <div className="w-10">
        {goBack && (
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
            className="items-center justify-center"
          >
            <MdOutlineArrowBackIosNew size={24}/>
          </button>
        )}
      </div>
      <div className="flex-1 text-center text-[24px] font-medium text-neutral-900">
        {title}
      </div>
      <div className="w-10" />
    </div>
  );
}
