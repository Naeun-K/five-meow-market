import BasicPage from "../basicPage/BasicPage";
import MainBanner from "../../components/main/MainBanner/MainBanner";
import MeowCategory from "../../components/main/MeowCategory/MeowCategory";
import MainBenefits from "../../components/main/MainBenefits/MainBenefits";
import ChatIcon from "../../components/ChatIcon/ChatIcon";
import { CardContainer } from "./MainPageStyle";

export default function MainPage() {
  return (
    <BasicPage>
      <MainBanner />
      <MeowCategory />
      {/* 베스트 상품 */}
      <CardContainer>
        <div className="labeling-wrapper">
          <div className="labeling">
            <p>많은 집사들이 꾹꾹한 상품</p>
            <span className="svg-container">
              <svg
                className="paw-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
                fill="currentColor"
                aria-hidden="true"
              >
                <ellipse
                  cx="25"
                  cy="46"
                  rx="10"
                  ry="14"
                  transform="rotate(-25 25 46)"
                />

                <ellipse
                  cx="47"
                  cy="29"
                  rx="10"
                  ry="14"
                  transform="rotate(-8 47 29)"
                />

                <ellipse
                  cx="73"
                  cy="29"
                  rx="10"
                  ry="14"
                  transform="rotate(8 73 29)"
                />

                <ellipse
                  cx="95"
                  cy="46"
                  rx="10"
                  ry="14"
                  transform="rotate(25 95 46)"
                />

                <path
                  d="
                M60 52
                C47 52 39 61 34 71
                C31 77 27 82 27 90
                C27 101 35 108 46 108
                C51 108 56 104 60 104
                C64 104 69 108 74 108
                C85 108 93 101 93 90
                C93 82 89 77 86 71
                C81 61 73 52 60 52Z
              "
                />
              </svg>
            </span>
          </div>
          <div className="labeling">
            <p>전체보기</p>
            <span className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="card-wrapper"></div>
      </CardContainer>
      {/* 신상품 */}
      <CardContainer>
        <div className="labeling-wrapper">
          <div className="labeling">
            <p>고양이도 궁금해할 신상품</p>
            <span className="svg-container">
              <svg
                className="paw-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
                fill="currentColor"
                aria-hidden="true"
              >
                <ellipse
                  cx="25"
                  cy="46"
                  rx="10"
                  ry="14"
                  transform="rotate(-25 25 46)"
                />

                <ellipse
                  cx="47"
                  cy="29"
                  rx="10"
                  ry="14"
                  transform="rotate(-8 47 29)"
                />

                <ellipse
                  cx="73"
                  cy="29"
                  rx="10"
                  ry="14"
                  transform="rotate(8 73 29)"
                />

                <ellipse
                  cx="95"
                  cy="46"
                  rx="10"
                  ry="14"
                  transform="rotate(25 95 46)"
                />

                <path
                  d="
                M60 52
                C47 52 39 61 34 71
                C31 77 27 82 27 90
                C27 101 35 108 46 108
                C51 108 56 104 60 104
                C64 104 69 108 74 108
                C85 108 93 101 93 90
                C93 82 89 77 86 71
                C81 61 73 52 60 52Z
              "
                />
              </svg>
            </span>
          </div>
          <div className="labeling">
            <p>전체보기</p>
            <span className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="card-wrapper"></div>
      </CardContainer>
      {/* 베스트 리뷰 */}
      <CardContainer>
        <div className="labeling-wrapper">
          <div className="labeling">
            <p>Best Review</p>
            <span className="svg-container">
              <svg
                className="paw-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
                fill="currentColor"
                aria-hidden="true"
              >
                <ellipse
                  cx="25"
                  cy="46"
                  rx="10"
                  ry="14"
                  transform="rotate(-25 25 46)"
                />

                <ellipse
                  cx="47"
                  cy="29"
                  rx="10"
                  ry="14"
                  transform="rotate(-8 47 29)"
                />

                <ellipse
                  cx="73"
                  cy="29"
                  rx="10"
                  ry="14"
                  transform="rotate(8 73 29)"
                />

                <ellipse
                  cx="95"
                  cy="46"
                  rx="10"
                  ry="14"
                  transform="rotate(25 95 46)"
                />

                <path
                  d="
                M60 52
                C47 52 39 61 34 71
                C31 77 27 82 27 90
                C27 101 35 108 46 108
                C51 108 56 104 60 104
                C64 104 69 108 74 108
                C85 108 93 101 93 90
                C93 82 89 77 86 71
                C81 61 73 52 60 52Z
              "
                />
              </svg>
            </span>
          </div>
          <div className="labeling">
            <p>전체보기</p>
            <span className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="card-wrapper"></div>
      </CardContainer>
      <ChatIcon />
      <MainBenefits />
    </BasicPage>
  );
}
