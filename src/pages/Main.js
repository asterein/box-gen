import BtnGen from "../components/gen/BtnGen";
import BoxGen from "../components/gen/BoxGen";
import FontsGen from "../components/gen/FontsGen";
import "./Main.css";

const Main = () => {
  return (
    <>
      <FontsGen />
      <BtnGen />
      <BoxGen />
      <div className="github-link" onClick={() => window.open("https://github.com/asterein/box-gen", "_blank")}>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Go to Github repo" />
      </div>
      <span>Go to Github repo!</span>
    </>
  );
}

export default Main;
