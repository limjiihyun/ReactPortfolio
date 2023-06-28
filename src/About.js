//import { Navigate } from "react-router-dom";
import "./styles/About.css";

const home = () => {
  window.location.href = "/main";
};

function About() {
  return (
    <>
      <body className="mainbackcolor">
        <div className="whitebox scroll">
          <header>
            <img className="imgbox" src="/img/homeimg.png" onClick={home}></img>
          </header>
          <article>
            <img className="ziihyunbox" src="/img/ziihyunimg.jpeg" />
            <div class="content">
              <div className="thisbox">About_ZiHyun 😊</div>
              <div className="detailbox">
                <details>
                  <summary class="summaryfont">
                    1. 자기소개(휴학의 이유, 성격의 장단점)
                  </summary>
                  <ul>
                    <li class="lifont">
                      배움과 도전을 좋아하고 이루고자 하는 것은 무슨 일이 있어도
                      해내는 임지현입니다. 현재 한밭대학교 정보통신공학과
                      3학년을 마치고 휴학 상태입니다. 인생에서 ‘휴학’은 하나의
                      도전 입니다. 삶의 방향성을 잡고 스스로 어떤 성향의
                      사람인지를 알아가고자 휴학을 도전했습니다. 성격의 장점은
                      친화력과 막중한 책임감 그리고 단점은 냉정하고 이성적인
                      성격 입니다.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary class="summaryfont">
                    2. 개발 쪽 진로를 선택하게 된 계기
                  </summary>
                  <ul>
                    <li class="lifont">
                      코드를 짤 때 스스로 깊게 몰입하고 있음을 느꼈고, 생각한
                      대로 구현하였을 때 큰 뿌듯함을 느낀 경험이 개발자가 되겠단
                      생각의 밑거름 이 되었습니다. 3학년 2학기에 '모바일
                      프로그래밍'강의를 수강하고, 간단한 어플리케이션을 제작해본
                      경험이 있습니다. 또한 이때 배웠던 예제코드를 응용하여 1월
                      한밭대학교 주관 캡스톤 대회에서 앱을 구현하고 은상을 받은
                      경험 이 있습니다. 이때 자발적으로 활동 기간 동안 매일 밤샘
                      작업을 하여 완성을 해갈만큼 열정 이 있었고, 조원들 그리고
                      심사위원에게 내가 만든 제작물을 보여주고 인정받았을 때
                      개발자가 되어야겠다는 생각에 확신을 얻을 수 있었습니다.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary class="summaryfont">
                    3. 웹 페이지 제작에 관심을 갖게 된 계기
                  </summary>
                  <ul>
                    <li class="lifont">
                      웹을 선택하게 된 계기는 IMPORT라는 코딩동아리 덕분입니다.
                      개발에 대한 열정을 가지고 시작한 IMPORT 동아리에서 동아리
                      홈페이지 제작 프로젝트에 참여할 기회가 주어져 웹
                      페이지 제작 공부를 시작하였습니다. 웹 제작을 할 때 조금 더
                      흥미를 느꼈고 더 응용이 가능한 것이 많다고 생각되어 웹
                      개발자를 선택하게 되었습니다.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary class="summaryfont">
                    4. 내가 개발자라는 직업에 적합한 인물인가?
                  </summary>
                  <ul>
                    <li class="lifont">
                      스스로 생각했을 때 저는 ‘개발자’라는 직업이 잘 맞는
                      사람이라고 생각합니다. 저는 배우는 것을 좋아하고, 맡은
                      일엔 책임감이 있는 사람입니다. 배움에는 종목을 가리지 않고
                      도전할 수 있으면 도전하는 편이고, 주어진 일을 해결해야 할
                      땐 며칠 밤낮을 새며 완성해가는 편입니다. 또한 자기 주도
                      능력으로, 항상 더 나은 해결 방법은 없을까 스스로 문제를
                      찾아보고, 정의하고 해결하려 노력합니다. 일상생활을 하다
                      보면, 이런 앱이 혹은 이런 웹 사이트가 있으면 좋을 것 같다
                      싶은 내용은 메모장 혹은 블로그에 항상 기록하고 있습니다.
                      다음에 프로젝트를 하게 된다면 아이디어를 좀 더 보완하고
                      개발하여, 배포까지 해보는 것이 목표입니다.
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </article>
        </div>
      </body>
    </>
  );
}

export default About;
