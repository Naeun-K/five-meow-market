/** @jsxImportSource @emotion/react */

import * as S from "./MeowCategory.style";
import logoClean from "../../../assets/logo-clean.webp";
import logoPlay from "../../../assets/logo-play.webp";
import logoRest from "../../../assets/logo-rest.webp";
import logoEat from "../../../assets/logo-eat.webp";
import logoHigh from "../../../assets/logo-high.webp";
import { useNavigate } from "react-router-dom";
import PawIcon from "../../common/PawIcon/PawIcon";

const categories = [
  {
    id: 1,
    name: "먹묘",
    image: logoEat,
    tags: ["#먹방요정", "#고양이먹거리"],
    path: "/products?category=cat-eat",
  },
  {
    id: 2,
    name: "놀묘",
    image: logoPlay,
    tags: ["#장난꾸러기", "#내고양이는관심"],
    path: "/products?category=cat-play",
  },
  {
    id: 3,
    name: "쉼묘",
    image: logoRest,
    tags: ["#잠꾸러기", "#고양이쉼터"],
    path: "/products?category=cat-rest",
  },
  {
    id: 4,
    name: "높묘",
    image: logoHigh,
    tags: ["#점프킹", "#고양이집사"],
    path: "/products?category=cat-high",
  },
  {
    id: 5,
    name: "깔묘",
    image: logoClean,
    tags: ["#왕감자", "#고양이화장실"],
    path: "/products?category=cat-clean",
  },
];

const MeowCategory = () => {
  const navigate = useNavigate();
  return (
    <section css={S.categorySection}>
      <header className="header">
        <h2 className="section-title">
          오묘한 생활의 다섯고양이{" "}
          <span className="paw-container">
            <PawIcon />
          </span>
        </h2>

        <span className="guide-message">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>{" "}
          밀어서 보기{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </span>
      </header>

      <div css={S.categoryList}>
        {categories.map((category) => (
          <div key={category.id} css={S.categoryItem}>
            <div css={S.categoryItem}>
              <button css={S.imageBox} onClick={() => navigate(category.path)}>
                {category.image && (
                  <img src={category.image} alt={category.name} />
                )}
              </button>

              <strong>{category.name}</strong>

              <div css={S.tags}>
                {category.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeowCategory;
