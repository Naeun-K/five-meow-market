import errorImage from "../../assets/404img.svg";

import catClean from "../../assets/logo-clean.svg";
import catEat from "../../assets/logo-eat.svg";
import catHigh from "../../assets/logo-high.svg";
import catPlay from "../../assets/logo-play.svg";
import catRest from "../../assets/logo-rest.svg";

import styles from "./404styles.js";

function NotFound() {
  return (
    <>
      <style>{styles}</style>

      <main className="not-found">
        <div className="not-found-content">
          <div className="not-found-number">404</div>

          <div className="not-found-main">
            <h1>페이지를 찾을 수 없습니다</h1>

            <img
              className="not-found-image"
              src={errorImage}
              alt="404 페이지"
            />

            <p>
              요청하신 페이지가 존재하지 않거나
              <br />
              주소가 변경되었을 수도 있습니다.
            </p>
          </div>

          <div className="not-found-bottom">
            <div className="not-found-cats">
              <div className="cat cat-clean">
                <img src={catClean} alt="" />
              </div>

              <div className="cat cat-eat">
                <img src={catEat} alt="" />
              </div>

              <div className="cat cat-high">
                <img src={catHigh} alt="" />
              </div>

              <div className="cat cat-play">
                <img src={catPlay} alt="" />
              </div>

              <div className="cat cat-rest">
                <img src={catRest} alt="" />
              </div>
            </div>

            <button type="button" className="not-found-button">
              홈으로 돌아가기
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
