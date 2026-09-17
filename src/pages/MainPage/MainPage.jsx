// import BasicPage from "../basicPage/BasicPage";

// import tabletMainBanner from "../../assets/tablet-meow-main-banner.webp";
// import wideMainBanner from "../../assets/wide-main-banner.webp";
// import mobileMainBanner from "../../assets/mobile-meow-main-banner2.webp";

// import MeowCategory from "../../components/main/MeowCategory/MeowCategory";
// import MainBenefits from "../../components/main/MainBenefits/MainBenefits";
// import ProductCard from "../../components/product/ProductCard/ProductCard";
// import BestReview from "../../components/bestReview/BestReview";
// import PawIcon from "../../components/common/PawIcon/PawIcon";

// import {
//   CardContainer,
//   ProductListStyle,
//   MainPageSytle,
//   BannerContainer,
//   BannerBackground,
// } from "./MainPageStyle";

// import useToast from "../../hooks/useToast";
// import useAuth from "../../hooks/useAuth";

// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { getMainProducts } from "../../services/productServices";
// import { getWishlist } from "../../services/wishlistServices";

// export default function MainPage() {
//   const { showToast } = useToast();
//   const { accessToken, isAuthLoading } = useAuth();

//   const navigate = useNavigate();

//   const [bestProducts, setBestProducts] = useState([]);
//   const [newProducts, setNewProducts] = useState([]);

//   useEffect(() => {
//     if (isAuthLoading) {
//       return;
//     }

//     const fetchMainData = async () => {
//       try {
//         // ================================
//         // 1. 메인 상품 조회
//         // ================================
//         const mainResult = await getMainProducts();

//         if (!mainResult.success) {
//           showToast(
//             mainResult.message || "메인 상품을 불러오지 못했습니다.",
//             false,
//           );

//           return;
//         }

//         const mainBestProducts = mainResult.bestProducts ?? [];
//         const mainNewProducts = mainResult.newProducts ?? [];

//         // ================================
//         // 2. 비로그인
//         // 모든 상품 isLiked = false
//         // ================================
//         if (!accessToken) {
//           setBestProducts(
//             mainBestProducts.map((product) => ({
//               ...product,
//               isLiked: false,
//             })),
//           );

//           setNewProducts(
//             mainNewProducts.map((product) => ({
//               ...product,
//               isLiked: false,
//             })),
//           );

//           return;
//         }

//         // ================================
//         // 3. 로그인 상태
//         // 기존에 저장된 찜 목록 조회
//         // ================================
//         const wishlistResult = await getWishlist(
//           {
//             page: 1,
//             limit: 100,
//           },
//           accessToken,
//         );

//         if (!wishlistResult.success) {
//           throw new Error(
//             wishlistResult.message || "찜한 상품을 불러오지 못했습니다.",
//           );
//         }

//         // ================================
//         // 4. 찜 상품 목록 가져오기
//         // ================================
//         const wishlistProducts =
//           wishlistResult.products ??
//           wishlistResult.data?.products ??
//           wishlistResult.items ??
//           wishlistResult.data?.items ??
//           [];

//         // ================================
//         // 5. 기존 찜 상품 productId 추출
//         // ================================
//         const wishlistIds = new Set(
//           wishlistProducts
//             .map((item) => {
//               if (item.productId) {
//                 return String(item.productId);
//               }

//               if (item.product?.productId) {
//                 return String(item.product.productId);
//               }

//               return null;
//             })
//             .filter(Boolean),
//         );

//         // ================================
//         // 6. 베스트 상품에 기존 찜 상태 합치기
//         // ================================
//         const bestProductsWithWishlist = mainBestProducts.map((product) => ({
//           ...product,

//           isLiked: wishlistIds.has(String(product.productId)),
//         }));

//         // ================================
//         // 7. 신상품에 기존 찜 상태 합치기
//         // ================================
//         const newProductsWithWishlist = mainNewProducts.map((product) => ({
//           ...product,

//           isLiked: wishlistIds.has(String(product.productId)),
//         }));

//         // ================================
//         // 8. 최종 상품 저장
//         // ================================
//         setBestProducts(bestProductsWithWishlist);
//         setNewProducts(newProductsWithWishlist);
//       } catch (error) {
//         console.error("메인 페이지 데이터 조회 실패:", error);

//         showToast(
//           error.message ||
//             "메인 페이지 데이터를 불러오는 중 오류가 발생했습니다.",
//           false,
//         );
//       }
//     };

//     fetchMainData();
//   }, [accessToken, isAuthLoading, showToast]);

//   // ========================================
//   // 찜 등록 / 해제 후 화면 상태 변경
//   // ========================================
//   const handleWishlistChange = (productId, isLiked) => {
//     // 베스트 상품 상태 변경
//     setBestProducts((prev) =>
//       prev.map((product) =>
//         String(product.productId) === String(productId)
//           ? {
//               ...product,
//               isLiked,
//             }
//           : product,
//       ),
//     );

//     // 신상품 상태 변경
//     setNewProducts((prev) =>
//       prev.map((product) =>
//         String(product.productId) === String(productId)
//           ? {
//               ...product,
//               isLiked,
//             }
//           : product,
//       ),
//     );
//   };

//   return (
//     <BasicPage>
//       <BannerBackground
//         style={{
//           "--desktop-banner": `url(${wideMainBanner})`,
//           "--tablet-banner": `url(${tabletMainBanner})`,
//           "--mobile-banner": `url(${mobileMainBanner})`,
//         }}
//       >
//         <BannerContainer>
//           <source
//             media="(max-width: 767px)"
//             srcSet={mobileMainBanner}
//             fetchPriority="high"
//           />

//           <source
//             media="(max-width: 1023px)"
//             srcSet={tabletMainBanner}
//             fetchPriority="high"
//           />

//           <img
//             src={wideMainBanner}
//             alt="메인 배너 - 다섯 고양이가 고른 묘한 PICK"
//             fetchPriority="high"
//           />
//         </BannerContainer>
//       </BannerBackground>

//       <MainPageSytle>
//         <MeowCategory />

//         {/* =========================
//             베스트 상품
//         ========================= */}
//         <CardContainer>
//           <div className="labeling-wrapper">
//             <div className="labeling">
//               <p>많은 집사들이 꾹꾹한 상품</p>

//               <span className="paw-container">
//                 <PawIcon />
//               </span>
//             </div>

//             <button
//               type="button"
//               className="see-more labeling"
//               onClick={() => navigate("/products/best")}
//             >
//               <p>전체보기</p>

//               <span className="arrow-container">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="100%"
//                   height="100%"
//                   fill="currentColor"
//                   viewBox="4 4.5 8 7"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           <ProductListStyle>
//             {bestProducts.map((product) => (
//               <Link
//                 key={product.productId}
//                 to={`/products/${product.productId}`}
//                 className="product-link"
//               >
//                 <div className="product-item">
//                   <ProductCard
//                     productId={product.productId}
//                     image={product.thumbnail}
//                     name={product.name}
//                     badge="bestOrange"
//                     showHeart
//                     isLiked={product.isLiked}
//                     onWishlistChange={handleWishlistChange}
//                   />

//                   <div className="product-info">
//                     <p className="product-name">{product.name}</p>

//                     <p className="product-price">
//                       {product.price.toLocaleString()}원
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </ProductListStyle>

//           <button
//             type="button"
//             className="mobile-more-button"
//             onClick={() => navigate("/products/best")}
//           >
//             더보기
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               viewBox="0 0 16 16"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
//               />
//             </svg>
//           </button>
//         </CardContainer>

//         {/* =========================
//             신상품
//         ========================= */}
//         <CardContainer>
//           <div className="labeling-wrapper">
//             <div className="labeling">
//               <p>고양이도 궁금해할 신상품</p>

//               <span className="paw-container">
//                 <PawIcon />
//               </span>
//             </div>

//             <button
//               type="button"
//               className="see-more labeling"
//               onClick={() => navigate("/products/new")}
//             >
//               <p>전체보기</p>

//               <span className="arrow-container">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="100%"
//                   height="100%"
//                   fill="currentColor"
//                   viewBox="4 4.5 8 7"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           <ProductListStyle>
//             {newProducts.map((product) => (
//               <Link
//                 key={product.productId}
//                 to={`/products/${product.productId}`}
//                 className="product-link"
//               >
//                 <div className="product-item">
//                   <ProductCard
//                     productId={product.productId}
//                     image={product.thumbnail}
//                     name={product.name}
//                     badge=""
//                     showHeart
//                     isLiked={product.isLiked}
//                     onWishlistChange={handleWishlistChange}
//                   />

//                   <div className="product-info">
//                     <p className="product-name">{product.name}</p>

//                     <p className="product-price">
//                       {product.price.toLocaleString()}원
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </ProductListStyle>

//           <button
//             type="button"
//             className="mobile-more-button"
//             onClick={() => navigate("/products/new")}
//           >
//             더보기
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               viewBox="0 0 16 16"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
//               />
//             </svg>
//           </button>
//         </CardContainer>

//         {/* =========================
//             베스트 리뷰
//         ========================= */}
//         <CardContainer>
//           <div className="labeling-wrapper">
//             <div className="labeling">
//               <p>Best Review</p>

//               <span className="paw-container">
//                 <PawIcon />
//               </span>
//             </div>

//             <button
//               type="button"
//               className="see-more labeling"
//               onClick={() => navigate("/community/review")}
//             >
//               <p>전체보기</p>

//               <span className="arrow-container">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="100%"
//                   height="100%"
//                   fill="currentColor"
//                   viewBox="4 4.5 8 7"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           <div className="card-wrapper">
//             <BestReview />
//           </div>

//           <button
//             type="button"
//             className="mobile-more-button"
//             onClick={() => navigate("/community/review")}
//           >
//             더보기
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               viewBox="0 0 16 16"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
//               />
//             </svg>
//           </button>
//         </CardContainer>
//       </MainPageSytle>

//       <MainBenefits />
//     </BasicPage>
//   );
// }

import BasicPage from "../basicPage/BasicPage";

import tabletMainBanner from "../../assets/tablet-meow-main-banner.webp";
import wideMainBanner from "../../assets/wide-main-banner.webp";
import mobileMainBanner from "../../assets/mobile-meow-main-banner2.webp";

import MeowCategory from "../../components/main/MeowCategory/MeowCategory";
import MainBenefits from "../../components/main/MainBenefits/MainBenefits";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import BestReview from "../../components/bestReview/BestReview";
import PawIcon from "../../components/common/PawIcon/PawIcon";

import {
  CardContainer,
  ProductListStyle,
  MainPageSytle,
  BannerContainer,
  BannerBackground,
} from "./MainPageStyle";

import useToast from "../../hooks/useToast";
import useAuth from "../../hooks/useAuth";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getMainProducts } from "../../services/productServices";
import { getWishlist } from "../../services/wishlistServices";

export default function MainPage() {
  const { showToast } = useToast();
  const { accessToken, isAuthLoading } = useAuth();

  const navigate = useNavigate();

  const [bestProducts, setBestProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  // ========================================
  // 메인 상품 + 기존 찜 상태 조회
  // ========================================
  useEffect(() => {
    if (isAuthLoading) {
      return;
    }

    let isMounted = true;

    const fetchMainData = async () => {
      try {
        // ========================================
        // 1. 메인 상품 조회
        //
        // GET /products/main
        // ========================================
        const mainResult = await getMainProducts();

        if (!mainResult.success) {
          throw new Error(
            mainResult.message || "메인 상품을 불러오지 못했습니다.",
          );
        }

        if (!isMounted) {
          return;
        }

        const mainBestProducts = mainResult.bestProducts ?? [];

        const mainNewProducts = mainResult.newProducts ?? [];

        // ========================================
        // 2. 비로그인
        //
        // 비로그인 사용자는 찜 상태 false
        // ========================================
        if (!accessToken) {
          setBestProducts(
            mainBestProducts.map((product) => ({
              ...product,
              isLiked: false,
            })),
          );

          setNewProducts(
            mainNewProducts.map((product) => ({
              ...product,
              isLiked: false,
            })),
          );

          return;
        }

        // ========================================
        // 3. 로그인 사용자의 찜 목록 조회
        //
        // GET /wishlist
        // ========================================
        const wishlistResult = await getWishlist(
          {
            page: 1,
            limit: 100,
          },
          accessToken,
        );

        if (!wishlistResult.success) {
          throw new Error(
            wishlistResult.message || "찜한 상품을 불러오지 못했습니다.",
          );
        }

        if (!isMounted) {
          return;
        }

        // ========================================
        // 4. wishlistService 반환값
        //
        // {
        //   success,
        //   wishlistItems,
        //   pagination,
        //   message
        // }
        // ========================================
        const wishlistItems = wishlistResult.wishlistItems ?? [];

        // ========================================
        // 5. 찜한 상품 productId 추출
        //
        // 서버 데이터가
        // item.productId
        // 또는
        // item.product.productId
        // 형태일 수 있으므로 둘 다 대응
        // ========================================
        const wishlistIds = new Set(
          wishlistItems
            .map((item) => {
              if (item.productId) {
                return String(item.productId);
              }

              if (item.product?.productId) {
                return String(item.product.productId);
              }

              return null;
            })
            .filter(Boolean),
        );

        // ========================================
        // 6. 베스트 상품 찜 상태 적용
        // ========================================
        const bestProductsWithWishlist = mainBestProducts.map((product) => ({
          ...product,

          isLiked: wishlistIds.has(String(product.productId)),
        }));

        // ========================================
        // 7. 신상품 찜 상태 적용
        // ========================================
        const newProductsWithWishlist = mainNewProducts.map((product) => ({
          ...product,

          isLiked: wishlistIds.has(String(product.productId)),
        }));

        // ========================================
        // 8. 최종 상품 상태 저장
        // ========================================
        setBestProducts(bestProductsWithWishlist);
        setNewProducts(newProductsWithWishlist);
      } catch (error) {
        console.error("메인 페이지 데이터 조회 실패:", error);

        if (!isMounted) {
          return;
        }

        showToast(
          error.message ||
            "메인 페이지 데이터를 불러오는 중 오류가 발생했습니다.",
          false,
        );
      }
    };

    fetchMainData();

    return () => {
      isMounted = false;
    };
  }, [accessToken, isAuthLoading, showToast]);

  // ========================================
  // 찜 등록 / 해제 후 화면 상태 변경
  //
  // ProductCard에서
  // onWishlistChange(productId, isLiked)
  // 호출
  // ========================================
  const handleWishlistChange = (productId, isLiked) => {
    // 베스트 상품 상태 변경
    setBestProducts((prev) =>
      prev.map((product) =>
        String(product.productId) === String(productId)
          ? {
              ...product,
              isLiked,
            }
          : product,
      ),
    );

    // 신상품 상태 변경
    setNewProducts((prev) =>
      prev.map((product) =>
        String(product.productId) === String(productId)
          ? {
              ...product,
              isLiked,
            }
          : product,
      ),
    );
  };

  return (
    <BasicPage>
      <BannerBackground
        style={{
          "--desktop-banner": `url(${wideMainBanner})`,
          "--tablet-banner": `url(${tabletMainBanner})`,
          "--mobile-banner": `url(${mobileMainBanner})`,
        }}
      >
        <BannerContainer>
          <source
            media="(max-width: 767px)"
            srcSet={mobileMainBanner}
            fetchPriority="high"
          />

          <source
            media="(max-width: 1023px)"
            srcSet={tabletMainBanner}
            fetchPriority="high"
          />

          <img
            src={wideMainBanner}
            alt="메인 배너 - 다섯 고양이가 고른 묘한 PICK"
            fetchPriority="high"
          />
        </BannerContainer>
      </BannerBackground>

      <MainPageSytle>
        <MeowCategory />

        {/* =========================
            베스트 상품
        ========================== */}
        <CardContainer>
          <div className="labeling-wrapper">
            <div className="labeling">
              <p>많은 집사들이 꾹꾹한 상품</p>

              <span className="paw-container">
                <PawIcon />
              </span>
            </div>

            <button
              type="button"
              className="see-more labeling"
              onClick={() => navigate("/products/best")}
            >
              <p>전체보기</p>

              <span className="arrow-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="4 4.5 8 7"
                  aria-hidden="true"
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
              <Link
                key={product.productId}
                to={`/products/${product.productId}`}
                className="product-link"
              >
                <div className="product-item">
                  <ProductCard
                    productId={product.productId}
                    image={product.thumbnail}
                    name={product.name}
                    badge="bestOrange"
                    showHeart
                    isLiked={product.isLiked}
                    onWishlistChange={handleWishlistChange}
                  />

                  <div className="product-info">
                    <p className="product-name">{product.name}</p>

                    <p className="product-price">
                      {product.price.toLocaleString()}원
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </ProductListStyle>

          <button
            type="button"
            className="mobile-more-button"
            onClick={() => navigate("/products/best")}
          >
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

        {/* =========================
            신상품
        ========================== */}
        <CardContainer>
          <div className="labeling-wrapper">
            <div className="labeling">
              <p>고양이도 궁금해할 신상품</p>

              <span className="paw-container">
                <PawIcon />
              </span>
            </div>

            <button
              type="button"
              className="see-more labeling"
              onClick={() => navigate("/products/new")}
            >
              <p>전체보기</p>

              <span className="arrow-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="4 4.5 8 7"
                  aria-hidden="true"
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
            {newProducts.map((product) => (
              <Link
                key={product.productId}
                to={`/products/${product.productId}`}
                className="product-link"
              >
                <div className="product-item">
                  <ProductCard
                    productId={product.productId}
                    image={product.thumbnail}
                    name={product.name}
                    badge=""
                    showHeart
                    isLiked={product.isLiked}
                    onWishlistChange={handleWishlistChange}
                  />

                  <div className="product-info">
                    <p className="product-name">{product.name}</p>

                    <p className="product-price">
                      {product.price.toLocaleString()}원
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </ProductListStyle>

          <button
            type="button"
            className="mobile-more-button"
            onClick={() => navigate("/products/new")}
          >
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

        {/* =========================
            베스트 리뷰
        ========================== */}
        <CardContainer>
          <div className="labeling-wrapper">
            <div className="labeling">
              <p>Best Review</p>

              <span className="paw-container">
                <PawIcon />
              </span>
            </div>

            <button
              type="button"
              className="see-more labeling"
              onClick={() => navigate("/community/review")}
            >
              <p>전체보기</p>

              <span className="arrow-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="4 4.5 8 7"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="card-wrapper">
            <BestReview />
          </div>

          <button
            type="button"
            className="mobile-more-button"
            onClick={() => navigate("/community/review")}
          >
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
      </MainPageSytle>

      <MainBenefits />
    </BasicPage>
  );
}
