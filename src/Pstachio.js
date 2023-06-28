//import { Navigate } from "react-router-dom";
import "./styles/Pstachio.css";

const home = () => {
  window.location.href = "/main";
};
const before = () => {
  window.location.href = "/project";
};

function Pstachio() {
  return (
    <>
      <body className="mainbackcolor">
        <div className="whitebox scroll">
          <header>
            <img className="imgbox" src="/img/beforeimg.png" onClick={before}></img>
            <img className="imgbox" src="/img/homeimg.png" onClick={home}></img>
          </header>
          <div>
            <img className="hanbatimg" src="/img/p1.jpg" />
            <div className="hanbattext">✅ PSTACHIO SHOP 프론트 페이지</div>
          </div>
          <div className="make-text-box">
            <div className="maketext">
              "피스타치오 사이트"는 4명의 열정적인 개인이 팀을 이루어 개발한
              아이스크림 웹사이트입니다. 주제 선정 동기로, 아이스크림은 다양한
              맛과 종류로 모두 호불호 없이 좋아하는 음식으로 모두가 열정을
              가지고 개성껏 제작할 수 있을 것 같아 이 주제로 선정하게
              되었습니다.
            </div>
            <div className="maketext">사용 기술: HTML, CSS, JS</div>
            <div className="maketext">
              맡은 페이지: 메인 페이지, 메뉴 소개 페이지, 피하기 게임 페이지
            </div>
            <div className="maketext"></div>
            <div className="selfi-box">
              <img className="selfiimg" src="/img/p2.jpg" />
              <img className="selfiimg" src="/img/p3.jpg" />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Pstachio;
