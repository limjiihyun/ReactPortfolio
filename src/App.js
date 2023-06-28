import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import StartPage from "./StartPage";
import Main from "./Main";
import About from "./About";
import Project from "./Project";
import Import from "./Import";
import WhyZiihyun from "./WhyZiihyun";
import HanbatApp from "./HanbatApp";
import Pstachio from "./Pstachio";
import Sky from "./Sky";

function App() {
  return (
    // <div>
    //   <StartPage></StartPage>
    // </div>
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<StartPage />} />
        {/* <SignIn /> */}
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/import" element={<Import />} />
        <Route path="/whyziihyun" element={<WhyZiihyun />} />
        <Route path="/hanbatapp" element={<HanbatApp />} />
        <Route path="/pstachio" element={<Pstachio />} />
        <Route path="/sky" element={<Sky />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
