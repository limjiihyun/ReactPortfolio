import "./styles/WhyZiihyun.css";

const home = () => {
  window.location.href = "/main";
};

function WhyZiihyun() {
  return (
    <>
      <body className="mainbackcolor">
        <div className="whitebox scroll">
          <header>
            <img className="imgbox" src="/img/homeimg.png" onClick={home}></img>
          </header>
          <article>
            <img className="selfiibox" src="/img/selfii.jpg" />
            <div class="content">
              <div className="whyziihyun">🤔 ZiHyun 을 뽑아야 하는 이유!</div>
              <div className="detailbox">
                <details>
                  <summary class="summaryfont">1. 뛰어난 팀 플레이어 능력</summary>
                  <ul>
                    <li class="lifont">
                      좋은 팀의 일원이 된다는 것은 다양한 관점과 배경을 수용할
                      수 있는 기회로, 창의적인 문제 해결을 촉진합니다. 저는
                      긍정적인 영향과 협력을 통해 개인의 성장을 촉진하는
                      팀워크를 믿습니다. 그렇기 때문에, 나 또한 좋은 팀원이 될
                      수 있도록 피드백에 열린 자세로 팀 프로젝트에 적극 참여하려
                      항상 노력합니다.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary class="summaryfont">2. 적응력 및 새로운 것을 추구하는 능력</summary>
                  <ul>
                    <li class="lifont">
                      새로운 기술을 적응하고 배우려 항상 노력하는 자세를
                      가졌습니다. 또한 새로운 환경에 나를 노출하는 것을
                      좋아합니다. 타지에 가서 살아본다던지, 색다른 모임활동에
                      참여 한다던지, 처음 해보는 이색 알바를 하는 등의 낯선
                      것들에 스스로를 노출시킵니다. 이러한 자세는 스스로를
                      내적이나 외적으로 성장시키는데 많은 도움을 주었고,
                      앞으로도 계속해서 새로운 환경, 새로운 기술들에 나를
                      노출시킬 것 입니다.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary class="summaryfont">3. 프로젝트에 대한 열정</summary>
                  <ul>
                    <li class="lifont">
                      한개의 프로젝트를 시작하게 되면 그것에 미친듯이 열정을
                      쏟는 스타일입니다. 그것이 나를 좀 더 열정적이게 만들고, 그
                      열정이 나를 살아있음을 느끼게 해줍니다. 그리고 항상 내가
                      할 수 있는 유의미한 프로젝트는 무엇일까에 대해 항상
                      생각하고, 기록하고 있습니다.
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

export default WhyZiihyun;
