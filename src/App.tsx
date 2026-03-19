import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/global.css";
import "react-datepicker/dist/react-datepicker.css";
import AppFrame from "./layouts/AppFrame";
import LoginPage from "./domain/auth/pages/LoginPage";
import SignUpPage1 from "./domain/auth/pages/SignUpPage1";
import SignUpPage2 from "./domain/auth/pages/SignUpPage2";
import SignUpPage3 from "./domain/auth/pages/SignUpPage3";
import SignUpPage4 from "./domain/auth/pages/SignUpPage4";
import PostWritePage from "./domain/posts/pages/PostWritePage";
import FoodtiOnboardingPage from "./domain/foodti/pages/FoodtiOnboardingPage";
import FoodtiGuidePage from "./domain/foodti/pages/FoodtiGuidePage";
import FoodtiQuestionPage from "./domain/foodti/pages/FoodtiQuestionPage";
import HomePage from "./domain/posts/pages/HomePage";
import PostDetailPage from "./domain/posts/pages/PostDetailPage";
import MapPage from "./domain/map/pages/MapPage";
import RouletteOnboardingPage from "./domain/roulette/pages/RouletteOnboardingPage";
import RoulettePage from "./domain/roulette/pages/RoulettePage";
import FoodtiResultPage from "./domain/foodti/pages/FoodtiResultPage";
function App() {
  return (
    <AppFrame>
      <BrowserRouter>
        <Routes>
          {/* 로그인 */}
          <Route path="/" element={<LoginPage />}></Route>
          {/* 회원가입 */}
          <Route path="/signup1" element={<SignUpPage1 />}></Route>
          <Route path="/signup2" element={<SignUpPage2 />}></Route>
          <Route path="/signup3" element={<SignUpPage3 />}></Route>
          <Route path="/signup4" element={<SignUpPage4 />}></Route>
          {/* 식사 일지 */}
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/post/write" element={<PostWritePage />}></Route>
          <Route path="/post/:diaryId" element={<PostDetailPage />}></Route>
          {/* FOODTI */}
          <Route
            path="/foodti/onboarding"
            element={<FoodtiOnboardingPage />}
          ></Route>
          <Route path="/foodti/guide" element={<FoodtiGuidePage />}></Route>
          <Route path="/foodti/:step" element={<FoodtiQuestionPage />}></Route>
          <Route path="/foodti/result" element={<FoodtiResultPage />}></Route>
          {/* 지도 */}
          <Route path="/map" element={<MapPage />}></Route>
          {/* 룰렛 */}
          <Route path="/roulette/onboarding" element={<RouletteOnboardingPage />}></Route>
          <Route path="/roulette/" element={<RoulettePage />}></Route>
        </Routes>
      </BrowserRouter>
    </AppFrame>
  );
}

export default App;
