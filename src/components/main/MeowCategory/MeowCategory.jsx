/** @jsxImportSource @emotion/react */

import * as S from "./MeowCategory.style";
import logoClean from "../../../assets/logo-clean.webp";
import logoPlay from "../../../assets/logo-play.webp";
import logoRest from "../../../assets/logo-rest.webp";
import logoEat from "../../../assets/logo-eat.webp";
import logoHigh from "../../../assets/logo-high.webp";
import { useNavigate } from "react-router-dom";

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
      <h2>
        오묘한 생활의 다섯고양이{" "}
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
      </h2>

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
