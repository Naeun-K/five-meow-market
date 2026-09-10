import BasicPage from "../basicPage/BasicPage";
// import MainBanner from "../../components/main/MainBanner/MainBanner";
import mainBanner from "../../assets/main-meow-pick-banner.webp";
import MeowCategory from "../../components/main/MeowCategory/MeowCategory";
import MainBenefits from "../../components/main/MainBenefits/MainBenefits";
import ChatIcon from "../../components/ChatIcon/ChatIcon";
import {
  CardContainer,
  ProductListStyle,
  MainPageSytle,
} from "./MainPageStyle";
// import MainProduct from "../../components/main/MainProduct/MainProduct";
import useToast from "../../hooks/useToast";
import { useEffect, useState } from "react";
import { getMainProducts } from "../../services/productServices";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import mobileMainBanner from "../../assets/mobile-meow-main-banner.webp";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const { showToast } = useToast();
  const naviagate = useNavigate();
  const [bestProducts, setBestProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    const fetchMainProducts = async () => {
      try {
        const result = await getMainProducts();

        if (!result.success) {
          showToast(
            result.message || "메인 상품을 불러오지 못했습니다.",
            false,
          );
          return;
        }

        setBestProducts(result.bestProducts ?? []);
        setNewProducts(result.newProducts ?? []);
      } catch (error) {
        console.error("메인 상품 조회 실패:", error);
        showToast("메인 상품 조회 중 오류가 발생했습니다.", false);
      }
    };

    fetchMainProducts();
  }, [showToast]);

  return (
    <BasicPage>
      <MainPageSytle>
        <picture className="banner-container">
          {/* 모바일 320px ~ 767px */}
          <source
            media="(max-width: 767px)"
            srcSet={mobileMainBanner}
            alt="메인 배너 - 다섯 고양이가 고른 묘한 PICK"
          />

          {/* 태블릿/데스크톱 */}
          <img
            src={mainBanner}
            alt="메인 배너 - 다섯 고양이가 고른 묘한 PICK"
          />
        </picture>
        <MeowCategory />
        {/* 베스트 상품 */}
        <CardContainer>
          <div className="labeling-wrapper">
            <div className="labeling">
              <p>많은 집사들이 꾹꾹한 상품</p>
              <span className="paw-container">
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
            <button
              className="see-more labeling"
              onClick={() => naviagate("/products")}
            >
              <p>전체보기</p>
              <span className="arrow-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="4 4.5 8 7"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </button>
          </div>
          <ProductListStyle>
            {bestProducts.map((product) => (
              <div className="product-item" key={product.productId}>
                <ProductCard
                  image={product.thumbnail}
                  name={product.name}
                  badge="bestOrange"
                  showHeart
                />

                <div className="product-info">
                  <p className="product-name">{product.name}</p>

                  <p className="product-price">
                    {product.price.toLocaleString()}원
                  </p>
                </div>
              </div>
            ))}
          </ProductListStyle>
          <button type="button" className="mobile-more-button">
            더보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </button>
        </CardContainer>
        {/* 신상품 */}
        <CardContainer>
          <div className="labeling-wrapper">
            <div className="labeling">
              <p>고양이도 궁금해할 신상품</p>
              <span className="paw-container">
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
            <div className="see-more labeling">
              <p>전체보기</p>
              <span className="arrow-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="4 4.5 8 7"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </div>
          </div>
          <ProductListStyle>
            {newProducts.map((product) => (
              <div className="product-item" key={product.productId}>
                <ProductCard
                  image={product.thumbnail}
                  name={product.name}
                  badge="new"
                  showHeart
                />

                <div className="product-info">
                  <p className="product-name">{product.name}</p>

                  <p className="product-price">
                    {product.price.toLocaleString()}원
                  </p>
                </div>
              </div>
            ))}
          </ProductListStyle>
          <button type="button" className="mobile-more-button">
            더보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </button>
        </CardContainer>
        {/* 베스트 리뷰 */}
        <CardContainer>
          <div className="labeling-wrapper">
            <div className="labeling">
              <p>Best Review</p>
              <span className="paw-container">
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
            <div className="see-more labeling">
              <p>전체보기</p>
              <span className="arrow-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="4 4.5 8 7"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="card-wrapper">{/* 리뷰 목업 자리 */}</div>
          <button type="button" className="mobile-more-button">
            더보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </button>
        </CardContainer>
        <ChatIcon />
        <MainBenefits />
      </MainPageSytle>
    </BasicPage>
  );
}
