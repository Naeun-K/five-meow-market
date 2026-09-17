

import { useNavigate } from "react-router-dom";

import BasicPage from "../basicPage/BasicPage";
import PawIcon from "../../components/common/PawIcon/PawIcon";

import errorCat from "../../assets/empty-review-cat.webp";

import {
  errorPage,
  errorContent,
  errorImage,
  errorTitle,
  errorDescription,
  buttonWrapper,
  retryButton,
  homeButton,
} from "./ApiErrorPageStyle";

export default function ApiErrorPage() {
  const navigate = useNavigate();

  const handleRetry = () => {
    window.location.reload();
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <BasicPage>
      <main css={errorPage}>
        <section css={errorContent}>
          <div css={errorImage}>
            <img src={errorCat} alt="오류 안내 고양이" />
          </div>

          <div css={errorTitle}>
            <h1>앗! 문제가 발생했어요</h1>

            <span aria-hidden="true">
              <PawIcon />
            </span>
          </div>

          <div css={errorDescription}>
            <p>일시적인 오류로 정보를 불러오지 못했어요.</p>
            <p>잠시 후 다시 시도해주세요.</p>
          </div>

          <div css={buttonWrapper}>
            <button type="button" css={retryButton} onClick={handleRetry}>
              다시 시도
            </button>

            <button type="button" css={homeButton} onClick={handleHome}>
              홈으로
            </button>
          </div>
        </section>
      </main>
    </BasicPage>
  );
}
