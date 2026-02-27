import React from "react";
import { Header } from "../../../components/Header";
import Dropdown from "../components/Dropdown";
import Filter from "../../../components/Filter";
import Divider from "../../../components/Divider";
import { postMockData } from "../mock/post.mock";
import PostCard from "../components/PostCard";
import { Button } from "../../../components/Button";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const goWrite = () =>{
    navigate("/post/write")
  }
  return (
    <div className="pt-16 pb-16 ">
      <Header title="식사 일지" />
      <div className="w-full flex fixed gap-2 mt mb-3 z-20 bg-white">
        <Dropdown data={["가격순", "방문날짜순"]} />
        <Filter text="필터" />
      </div>
      <Divider />
      <div className="pt-12">
        {postMockData.map((post) => (
          <PostCard key={post.postId} post={post} />
        ))}
      </div>
      <div className="fixed bottom-16 right-3">
        <Button color="orange400" size="write" text="white" type="button" onClick={goWrite}>
          글 작성
        </Button>
      </div>
      <NavBar/>
    </div>
  );
};

export default HomePage;
