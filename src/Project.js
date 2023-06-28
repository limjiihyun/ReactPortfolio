import "./styles/Project.css";

const hanbatshow = () => {
  window.location.href = "/hanbatapp";
};

const pstachioshow = () => {
  window.location.href = "/pstachio";
};

const skyshow = () => {
  window.location.href = "/sky";
};

const home = () => {
  window.location.href = "/main";
};


function Project() {
  return (
    <>
      <body className="mainbackcolor">
        <div className="whitebox scroll">
          <header>
            <img className="imgbox" src="/img/homeimg.png" onClick={home}></img>
          </header>
          <div>
            <div>
              <div className="thisbox">ZiHyun_Project 🖥️</div>
              <div className="pinkbox">
                <div className="projectname">
                  ✅한밭대학교 교통관리 서비스 앱
                  <div>
                    <img className="bhanbatimg" src="img/hanbatapp.png" />
                  </div>
                  <div className="usetext">
                    사용기술: 안드로이드 스튜디오, JAVA
                  </div>
                  <div className="usetext2 blink" onClick={hanbatshow}>
                    자세히 보려면 Click!
                  </div>
                </div>
              </div>
              <div className="pinkbox">
                <div className="projectname">
                  ✅PSTACHIO SHOP
                  <div>
                    <img className="pstachioimg" src="img/pstachioimg.jpg" />
                  </div>
                  <div className="usetext3">사용기술: HTML, CSS, JS</div>
                  <div className="usetext4 blink" onClick={pstachioshow}>
                    자세히 보려면 Click!
                  </div>
                </div>
              </div>
              <div className="pinkbox">
                <div className="projectname">
                  ✅ 감정일기, TODO 결합 웹사이트
                  <div>
                    <img className="pstachioimg" src="img/skyimg.png" />
                  </div>
                  <div className="usetext3">
                    사용기술: 사용기술: Typescript, MYSQL
                  </div>
                  <div className="usetext5 blink" onClick={skyshow}>
                    자세히 보려면 Click!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Project;
