import React from "react";

type BadgeProps = {
  text: string;
  onClick: () => void;
};

const Filter = ({ text, onClick }: BadgeProps) => {
  return (
    <div className="flex text-neutral-400 text-[12px] relative bg-white">
      <button
        type="button"
        className="rounded-[50px] border border-neutral-400 w-[62px] h-[28px] px-1 py-1"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Filter;
