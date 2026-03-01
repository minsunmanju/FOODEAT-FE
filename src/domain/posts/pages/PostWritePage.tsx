import React, { useState } from "react";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import FoodCategorySelect from "../../../components/FoodCategorySelect";
import YellowStar from "../../../assets/images/yellowstar.png";
import GrayStar from "../../../assets/images/graystar.png";
import { Button } from "../../../components/Button";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";

const PostWritePage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];

  const starScore = (index) => {
    const star = [...clicked];
    for (let i = 0; i < 5; i++) {
      star[i] = i <= index ? true : false;
    }
    setClicked(star);
  };
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col gap-8 pt-16">
      <Header goBack title="식사 일지 작성" />
      <div className="flex gap-4 items-center">
        <div className="">식당</div>
        <div className="flex-1">
          <Input color="text" size="md" type="text" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="">날짜</div>
        <div className="flex-1 flex justify-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            locale={ko}
            className="text-center"
          />
        </div>
        <IoCalendarClearOutline size={20} />
      </div>
      <div className="flex gap-4 items-center">
        종류
        <FoodCategorySelect />
      </div>
      <div className="flex gap-4 items-center">
        <div>메뉴</div>
        <div className="flex-1">
          <Input color="text" size="md" type="text" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div>가격</div>
        <div className="flex-1">
          <Input color="text" size="md" type="text" />
        </div>
        <div>원</div>
      </div>
      <div className="flex gap-4 items-center">
        <div>별점</div>
        <div className="flex flex-1 justify-center gap-6">
          {array.map((index) => (
            <img
              key={index}
              onClick={() => starScore(index)}
              src={clicked[index] ? YellowStar : GrayStar}
              style={{ width: "30px" }}
            />
          ))}
        </div>
      </div>
      <div>사진</div>
      <ImageUploader />
      <div>
        <div>코멘트</div>
        <Input color="text" size="comment" type="text" />
      </div>
      <Button
        color="orange400"
        size="long"
        text="white"
        type="submit"
        onClick={goMain}
      >
        작성
      </Button>
    </div>
  );
};

export default PostWritePage;
