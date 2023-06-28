//import { Navigate } from "react-router-dom";
import "./styles/HanbatApp.css";

const home = () => {
  window.location.href = "/main";
};
const before = () => {
  window.location.href = "/project";
};
function HanbatApp() {
  return (
    <>
      <body className="mainbackcolor">
        <div className="whitebox scroll">
          <header>
            <img className="imgbox" src="/img/beforeimg.png" onClick={before}></img>
            <img className="imgbox" src="/img/homeimg.png" onClick={home}></img>
          </header>
          <div>
            <img className="hanbatimg" src="/img/hanbat1.png" />
            <div className="hanbattext">✅한밭대학교 교통관리 서비스 앱</div>
          </div>
          <div className="make-text-box">
            <div className="maketext">
              제작 목적: 한밭대학교 학생들의 편리하고 친환경 적인 교통환경
              조성을 위해 4인 1조로 대안을 제작하는 캡스톤 활동을 하며 제작한
              앱이다. 우리 조는 그 대안으로 회전교차로 도입, 카풀 활성화를
              제시하였고 그 안에서 나의 역할은 카풀 게시판 및 교통 활성화
              어플리케이션을 제작하는 것이였다.
            </div>
            <div className="maketext">
              사용 기술: 안드로이드 스튜디오 / JAVA
            </div>
            <div className="maketext">
              세부 기능: 회전 교차로 사용 시 주의사항 안내 / 학교 내 숨은
              주차구역 안내 페이지 / 셔틀버스 시간 안내 / 카풀 게시판 제작 (
              로그인, 댓글 기능 )
            </div>
            <div className="maketext"> 🥈 은상 수상 / 📷 활동 사진</div>
            <div className="selfi-box">
              <img className="selfiimg" src="/img/hanbat2.jpg" />
              <img className="selfiimg" src="/img/hanbat3.jpg" />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default HanbatApp;
