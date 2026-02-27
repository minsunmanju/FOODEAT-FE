import { useMemo, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
type DropdownProps = {
  data: string[];
};

export default function Dropdown({ data }: DropdownProps) {
  const list = useMemo(() => data ?? [], [data]);
  const [currentValue, setCurrentValue] = useState(list[0] ?? "");
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (value: string) => {
    setCurrentValue(value);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setShowOptions((prev) => !prev)}
          className="relative flex h-[28px] w-[90px] items-center justify-center 
            rounded-[50px] border border-neutral-400 bg-white 
            text-[12px] cursor-pointer text-neutral-400
            "
        >
          <span className="flex text-[12px] items-center">{currentValue}</span>
          <span className="flex text-[12px] font-bold items-center text-neutral-400 leading-none pl-[4px]">
            <MdOutlineKeyboardArrowDown size={16}/>
          </span>
        </button>
      </div>
      <ul
        className={`absolute left-0 top-[38px] w-[85px] overflow-hidden rounded-[5px] bg-white
     
        ${showOptions ? "max-h-[200px] overflow-y-auto border border-neutral-300" : "max-h-0 border-transparent"}
        `}
      >
        {list.map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(item);
              }}
              className="w-[85px] px-[10px] py-[10px] text-left text-[14px] hover:text-white hover:bg-gradient-to-br hover:bg-orange-200"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
