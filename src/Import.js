//import { Navigate } from "react-router-dom";
import "./styles/Import.css";

const home = () => {
  window.location.href = "/main";
};

function Import() {
  return (
    <>
      <body className="mainbackcolor">
        <div className="whitebox scroll">
          <header>
            <img className="imgbox" src="/img/homeimg.png" onClick={home}></img>
          </header>
          <div class="content">
            <div className="importbox">👩‍💻 한밭대학교 코딩동아리 IMPORT</div>
            <div className="picture-main">
              <img className="picturebox" src="/img/calendarimg.png" />
              <img className="picturebox" src="/img/logoimg.png" />
              <img className="picturebox" src="/img/showimg.jpg" />
              <img className="picturebox" src="/img/studyimg.png" />
            </div>
            <div className="ptagbox">
              <p>한밭대학교 유일 정규 코딩동아리</p>
              <p>역할 : 임원진(총무)</p>
              <p>파이썬 - 알고리즘 스터디 운영</p>
              <p>달력 웹페이지 제작 사이드 프로젝트</p>
              <p>logo 직접 제작</p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Import;
