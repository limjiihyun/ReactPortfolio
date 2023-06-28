import "./styles/Main.css";

const About = () => {
  window.location.href = "/about";
};

const project = () => {
  window.location.href = "/project";
};

const Import = () => {
  window.location.href = "/import";
};

const WhyZiihyun = () => {
  window.location.href = "/whyziihyun";
};

const naverblog = () => {
  window.location.href = "https://m.blog.naver.com/dlawlgus400";
};

const tistory = () => {
  window.location.href = "https://dlawlgus40.tistory.com/";
};

const github = () => {
  window.location.href = "https://github.com/limjiihyun";
};

function Main() {
  return (
    <>
      <body className="mainbackcolor">
        <div className="whitebox scroll">
          <header>
            <img
              className="imgbox"
              src="/img/gitimg.png"
              onClick={github}
            ></img>
            <img
              className="imgbox"
              src="/img/Nimg.png"
              onClick={naverblog}
            ></img>
            <img className="imgbox" src="/img/Timg.png" onClick={tistory}></img>
          </header>
          <article>
            <img className="ziihyunbox" src="/img/ziihyunimg.jpeg" />
            <div class="content">
              <div className="thisbox">This is ZiiHyun 😊 </div>
              <div class="tag-container">
                <div className="tagbox">#임지현</div>
                <div className="tagbox">#2001.02.13</div>
                <div className="tagbox">#한밭대_정보통신공학과</div>
                <div className="tagbox">#휴학생</div>
                <div className="tagbox">#ESTJ</div>
                <div className="tagbox">#긍정적인</div>
                <div className="tagbox">#도전을_사랑함</div>
                <div className="tagbox">#배우는것을_좋아함</div>
                <div className="tagbox">#주니어_웹개발자</div>
                <div className="tagbox">#병아리_개발자</div>
                <div className="tagbox">#IMPORT총무</div>
              </div>
            </div>
          </article>
          <footer>
            <div className="footer-main-box">
              <div className="footerbox" onClick={About}>
                📌
                <br /> About_ZiHyun
              </div>
              <div className="footerbox" onClick={project}>
                📌
                <br />
                ZiHyun's_Project
              </div>
              <div className="footerbox" onClick={Import}>
                📌
                <br />
                What's Import
              </div>
              <div className="footerbox" onClick={WhyZiihyun}>
                📌
                <br />
                Pick_ZiHyun
              </div>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
}

export default Main;
