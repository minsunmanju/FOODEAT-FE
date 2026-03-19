import { useMemo, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
type DropdownProps = {
  data: string[];
  value: string;
  onChange : (value: string) => void
};

export default function Dropdown({ data , value, onChange}: DropdownProps) {
  const list = useMemo(() => data ?? [], [data]);
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (nextValue: string) => {
    onChange(nextValue)
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
          <span className="flex text-[12px] items-center">{value}</span>
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
