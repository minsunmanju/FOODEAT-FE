import React, { use, useMemo, useState } from "react";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import FoodCategorySelect, {
  type CATEGORIES,
} from "../../../components/FoodCategorySelect";
import YellowStar from "../../../assets/images/yellowstar.png";
import GrayStar from "../../../assets/images/graystar.png";
import { Button } from "../../../components/Button";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import { useCreateDiary } from "../hooks/useCreateDiary";
import type { FoodType } from "../../../types/post.type";
import type { AddressCoordsResult } from "../../../api/kakaoLocal.api";
import AddressSearch from "../../auth/components/AddressSearch";

const PostWritePage = () => {
  // const presign = useUploadPresigned();
  const createDiary = useCreateDiary();

  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const [visitedAt, setVisitedAt] = useState<Date>(new Date());
  const [category, setCategory] = useState<CATEGORIES>("한식");
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([])
  // const [startDate, setStartDate] = useState(new Date());
  // const [clicked, setClicked] = useState([false, false, false, false, false]);
  // const array = [0, 1, 2, 3, 4];

  // const starScore = (index) => {
  //   const star = [...clicked];
  //   for (let i = 0; i < 5; i++) {
  //     star[i] = i <= index ? true : false;
  //   }
  //   setClicked(star);
  // };

  const stars = [1, 2, 3, 4, 5];

  const handleSelectPlace = (result: AddressCoordsResult) => {
    const name = (result as any).placeName ?? result.addressName;

    setRestaurantName(name);
    setRestaurantAddress(result.addressName);
    setLatitude(result.lat);
    setLongitude(result.lng);
  };
  
  const visitedAtStr = useMemo(
    () => visitedAt.toISOString().slice(0, 10),
    [visitedAt],
  );

  const handleSubmit = () => {
    if (!restaurantAddress || !restaurantName) return;
    if (latitude === null || longitude === null) return;
    if (!menuName.trim()) return;
    if (!price) return;
    if (rating < 1) return;

    createDiary.mutate(
      {
        restaurantName,
        restaurantAddress,
        latitude,
        longitude,
        visitedAt,
        category,
        menuName,
        price :Number(price),
        rating,
        comment,
        imageUrls
      },
      {
        onSuccess: () => {
          alert("작성 완료!");
          navigate("/home");
        },

        onError: (err) => {
          console.log(alert);
          alert("작성에 실패했어요");
        },
      },
    );
  };

  const navigate = useNavigate();
  const goMain = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col gap-8 pt-16">
      <Header goBack title="식사 일지 작성" />
      <div>
        <div className="mb-2 text-sm text-neutral-600">식당</div>
        <AddressSearch onSelectCoords={handleSelectPlace} />

        {restaurantName && (
          <div className="mt-3 rounded-lg border border-orange-200 bg-orange-50 p-3 text-sm">
            <div className="font-medium text-neutral-900">{restaurantName}</div>
            <div className="mt-1 text-neutral-500">{restaurantAddress}</div>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <div className="">날짜</div>
        <div className="flex-1 flex justify-center">
          <DatePicker
            selected={visitedAt}
            onChange={(date) => setVisitedAt(date)}
            dateFormat="yyyy-MM-dd"
            locale={ko}
            className="text-center"
          />
        </div>
        <IoCalendarClearOutline size={20} />
      </div>
      <div className="flex gap-4 items-center">
        종류
        <FoodCategorySelect value={category} onChange={setCategory} />
      </div>
      <div className="flex gap-4 items-center">
        <div>메뉴</div>
        <div className="flex-1">
          <Input
            color="text"
            size="md"
            type="text"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div>가격</div>
        <div className="flex-1">
          <Input
            color="text"
            size="md"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>원</div>
      </div>
      <div className="flex gap-4 items-center">
        <div>별점</div>
        <div className="flex flex-1 justify-center gap-6">
          {stars.map((star) => (
            <img
              key={star}
              onClick={() => setRating(star)}
              src={star <= rating ? YellowStar : GrayStar}
              style={{ width: "30px", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
      <div>사진</div>
      <ImageUploader onUploaded={setImageUrls}/>
      <div>
        <div>코멘트</div>
        <Input
          color="text"
          size="comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <Button
        color="orange400"
        size="long"
        text="white"
        type="submit"
        onClick={handleSubmit}
      >
        작성
      </Button>
    </div>
  );
};

export default PostWritePage;
