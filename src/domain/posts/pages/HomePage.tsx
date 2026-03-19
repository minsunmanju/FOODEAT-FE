import React, { useEffect, useRef, useState } from "react";
import { Header } from "../../../components/Header";
import Dropdown from "../components/Dropdown";
import Filter from "../../../components/Filter";
import Divider from "../../../components/Divider";
import { postMockData } from "../mock/post.mock";
import PostCard from "../components/PostCard";
import { Button } from "../../../components/Button";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import FilterModal from "../components/FilterModal";
import { useDiaryInfiniteList } from "../hooks/useDiaryInfiniteList";
import { type DiaryFilterParams, type DiarySortType } from "../../../types/post.type";

const SORT_LABEL_MAP : Record<string, DiarySortType> = {
  작성일순: "createdAt",
  가격낮은순:"price",
  방문날짜순:"visitedAt"
}

const HomePage = () => {
  const navigate = useNavigate();
  const goWrite = () => {
    navigate("/post/write");
  };
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [sortLabel, setSortLabel] = useState("작성일순")
  const [filters, setFilters] = useState<DiaryFilterParams>({
    sort: "createdAt",
    category: null,
    rating: null,
    priceRange: null
  })
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useDiaryInfiniteList(filters);
  useEffect(() => {
    const target = observerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 },
    );
    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const diaries = data?.pages.flatMap((page) => page.diaries) ?? [];

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생</div>;

  const handleChangeSort = (label: string) =>{
    setSortLabel(label);
    setFilters((prev) => ({
      ...prev,
      sort: SORT_LABEL_MAP[label]
    }))
  }

  const handleChangeFilter = ({category, rating, priceRange} : {category: DiaryFilterParams["category"];
    rating: DiaryFilterParams["rating"];
    priceRange: DiaryFilterParams["priceRange"]
  }) =>{
    setFilters((prev) =>({
      ...prev,
      category,
      rating,
      priceRange
    }))
  }

  const handleResetFilter = () =>{
    setFilters((prev) => ({
      ...prev,
      category: null,
      rating: null,
      priceRange: null
    }))
  }

  return (
    <div className="pt-16 pb-16 ">
      <Header title="식사 일지" />
      <div className="w-full flex fixed gap-2 mt mb-3 z-20 bg-white">
        <Dropdown data={["작성일순","가격낮은순", "방문날짜순"]} value={sortLabel} onChange={handleChangeSort}/>
        <Filter text="필터" onClick={() => setIsFilterModalOpen(true)} />
      </div>
      <Divider />
      <div className="pt-12">
        {diaries.map((diary) => (
          <PostCard key={diary.diaryId} diary={diary} />
        ))}
      </div>
      <div ref={observerRef} className="h-10" />
      {isFetchingNextPage && <div> 다음 페이지 불러오는 중... </div>}
      {!hasNextPage && <div>마지막 페이지 입니다.</div>}
      <div className="fixed bottom-16 right-3">
        <Button
          color="orange400"
          size="write"
          text="white"
          type="button"
          onClick={goWrite}
        >
          글 작성
        </Button>
      </div>
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        initialCategory={filters.category}
        initialPriceRange={filters.priceRange}
        initialRating={filters.rating}
        onApply={handleChangeFilter}
        onReset={handleResetFilter}
      />
      <NavBar />
    </div>
  );
};

export default HomePage;
