import "./styles/StartPage.css";

const goToMain = () => {
  window.location.href = "/main";
};

function StartPage() {
  return (
    <>
      <body className="backcolor">
        <hr />
        <div className="startbox" onClick={goToMain}>
          <div className="hellobox">Hello, ZiiHyunWorld!</div>
          <div className="textbox">🤨: Who is ZiHyun?</div>
          <div className="textbox blink">😊: click Me!</div>
        </div>
        <hr />
      </body>
    </>
  );
}

export default StartPage;
