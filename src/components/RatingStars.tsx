import React from "react";
import YellowStar from "../assets/images/yellowstar.png";
import GrayStar from "../assets/images/graystar.png";

type Props = {
  raiting: number;
};

const RatingStars = ({ raiting}: Props) => {
  const safe = Math.max(0, Math.min(5, Math.floor(raiting)));

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <img
          key={i}
          src={i < safe ? YellowStar : GrayStar}
          className="block"
          style={{ width: "16px", height: "16px" }}
        />
      ))}
    </div>
  );
};

export default RatingStars;
