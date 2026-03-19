import React, { useEffect, useMemo, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import NavBar from "../../../components/NavBar";
import { useSpinRoulette } from "../hooks/useSpinRoulette";
import type { RouletteMenu } from "../types/roulette.type";

const RoulettePage = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);

  const [menus, setMenus] = useState<RouletteMenu[]>([]);
  const rouletteMenu = useSpinRoulette();

  useEffect(() => {
    rouletteMenu.mutate(undefined, {
      onSuccess: (res) => {
        setMenus(res.menus);
      },
    });
  }, []);

  const rouletteData = useMemo(() => {
    return menus.map((menu) => ({
      option: menu.name,
      style: {
        backgroundColor: "#FFEDD4",
        textColor: "black",
      },
    }));
  }, [menus]);

  const handleSpin = () => {
    if (rouletteData.length === 0) return;

    const next = Math.floor(Math.random() * rouletteData.length);
    setPrizeNumber(next);
    setWinner(null);
    setMustSpin(true);
  };

  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <Header title="룰렛" goBack />
      <div className="pt-[64px] flex flex-col justify-center flex-1">
        <div className="flex flex-col text-center">
          <div className="font-semibold text-[30px] pt-12">
            오늘의 한끼 뽑아보세요!
          </div>
          <div className="font-medium text-[18px] text-neutral-400">
            과연 오늘의 한끼는 무엇일까요?
          </div>
        </div>

        <div className="flex justify-center pt-12">
          {rouletteData.length > 0 ? (
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={rouletteData}
              backgroundColors={["#FFEDD4"]}
              outerBorderColor="#FF8904"
              onStopSpinning={() => {
                setMustSpin(false);
                setWinner(rouletteData[prizeNumber].option);
              }}
              innerBorderColor="#FF8904"
              radiusLineColor="#FF8904"
              radiusLineWidth={1.5}
              outerBorderWidth={1.5}
            />
          ) : (
            <div>룰렛 메뉴 불러오는 중...</div>
          )}
        </div>

        <div className="flex-1" />

        {winner && (
          <div className="flex flex-col text-center">
            <div className="flex justify-center">
              <div className="font-medium text-[24px]">오늘의 메뉴는</div>
              <div className="pl-2 font-bold text-orange-400 text-[24px]">
                {winner}
              </div>
              <div className="pl-2 font-medium text-[20px]">입니다!</div>
            </div>
            <div className="font-medium text-[24px] pb-8">맛있게 드세요😝</div>
          </div>
        )}

        <div className="mb-[80px]">
          <Button
            type="button"
            color="orange400"
            size="long"
            text="white"
            onClick={handleSpin}
          >
            {mustSpin ? "메뉴 고르는 중..." : "메뉴 고르기"}
          </Button>
        </div>

        <NavBar />
      </div>
    </div>
  );
};

export default RoulettePage;
