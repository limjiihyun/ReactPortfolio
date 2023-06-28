import "./styles/Pstachio.css";

const home = () => {
  window.location.href = "/main";
};
const before = () => {
  window.location.href = "/project";
};

function Sky() {
  return (
    <>
      <body className="mainbackcolor">
        <div className="whitebox scroll">
          <header>
            <img
              className="imgbox"
              src="/img/beforeimg.png"
              onClick={before}
            ></img>
            <img className="imgbox" src="/img/homeimg.png" onClick={home}></img>
          </header>
          <div>
            <img className="hanbatimg" src="/img/skyimg.png" />
            <div className="hanbattext">✅ 감정일기, TODO 결합 웹사이트</div>
          </div>
          <div className="make-text-box">
            <div className="maketext">
              감정에 휘둘리지 않고 나 자신을 아끼고 챙기는 가장 첫 단계는 바로
              감정을 기록하는 것입니다. '그날의 하늘'은 오늘 있었던 일들과 오늘
              느꼈던 감정들을 기록할 수 있도록 제작한 웹 사이트입니다. 이에
              더불어 할 일도 기록하고, 그 할 일 혹은 한 일 에 따른 감정, 생각
              기록 가능합니다.
            </div>
            <div className="maketext">
              사용 기술: Typescript, EJS, MYSQL, EXPRESS, AXIOS, JWT{" "}
            </div>
            <div className="maketext">
              맡은 페이지: 캘린더, TODO조회 프론트 페이지
            </div>
            <div className="maketext"></div>
            <div className="selfi-box">
              <img className="selfiimg" src="/img/sky1.jpg" />
              <img className="selfiimg" src="/img/sky2.jpg" />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Sky;
