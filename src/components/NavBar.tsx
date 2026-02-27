import React from "react";
import { FiHome } from "react-icons/fi";
import { FiMap } from "react-icons/fi";
import { PiDiceSix } from "react-icons/pi";
import { IoTrophyOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPencil } from "react-icons/bs";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "홈", path: "/", icon: FiHome },
    { label: "지도", path: "/map", icon: FiMap },
    { label: "FOODTI", path: "/foodti/onboarding", icon: BsPencil },
    { label: "룰렛", path: "/roulette", icon: PiDiceSix },
    { label: "나의 뱃지", path: "/badge", icon: IoTrophyOutline },
  ];

  return (
    <div className="fixed w-[390px] transform -translate-x-1/2 left-1/2 bottom-0 h-[60px] bg-white">
      <div className="flex justify-between items-center h-full px-[10px] py-[20px]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              type="button"
              onClick={() => navigate(item.path)}
              className={[
                "flex flex-col items-center justify-center gap-[6px] p-2",
                "bg-transparent border-none cursor-pointer transition-colors duration-200",
                "hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-orange-600 rounded-md ",
                isActive ? "text-neutral-900" : "text-neutral-400",
              ].join(" ")}
            >
              <span className="flex items-center justify-center text-[20px]">
                <Icon />
              </span>

              <span className="whitespace-nowrap text-[12px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
