// import { useParams } from "react-router-dom";
// import ProductCard from "../../../components/product/ProductCard/ProductCard";
// import BasicPage from "../../basicPage/BasicPage";
// import {
//   ButtonContainer,
//   DescWrapper,
//   DetailProductStyle,
//   PhotoWrapper,
//   SummaryStyle,
//   DetailBanner,
//   DetailSection,
// } from "./copyDetailProductStyle";
// import useToast from "../../../hooks/useToast";
// import { useEffect, useRef, useState } from "react";
// import Loader from "../../../components/loader/Loader";
// import { getProduct } from "../../../services/productServices";
// import HeartButton from "../../../components/product/HeartButton/HeartButton";
// import ProductBottomSheet from "../../../components/product/ProductBottomSheet/ProductBottomSheet";
// import useAuth from "../../../hooks/useAuth";
// import { addCartItem } from "../../../services/cartServices";
// import CartSuccessModal from "../../../components/cartui/CartSuccessModal";
// import RelatedProducts from "../../../components/product/RelateProduct/RelatedProduct";
// import PawIcon from "../../../components/common/PawIcon/PawIcon";

// const categoryNames = {
//   "cat-eat": "먹묘",
//   "cat-play": "놀묘",
//   "cat-rest": "쉼묘",
//   "cat-high": "높묘",
//   "cat-clean": "깔묘",
// };

// export default function DetailProduct() {
//   const { isAuthLoading, isLoggedIn, accessToken } = useAuth();
//   const { productId } = useParams();
//   const { showToast } = useToast();

//   const [product, setProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [bottomSheetType, setBottomSheetType] = useState(null);
//   const [isCartModalOpen, setIsCartModalOpen] = useState(false);
//   const [isDetailExpanded, setIsDetailExpanded] = useState(false);
//   const [isDetailOverflowing, setIsDetailOverflowing] = useState(false);

//   const detailImageContentRef = useRef(null);

//   const handleDecrease = () => {
//     setQuantity((prev) => Math.max(1, prev - 1));
//   };

//   const handleIncrease = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const handleBannerClick = (event, sectionId) => {
//     event.preventDefault();

//     document.getElementById(sectionId)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   useEffect(() => {
//     const detailContent = detailImageContentRef.current;

//     if (!detailContent || !product?.detailImages?.length) {
//       setIsDetailOverflowing(false);
//       return;
//     }

//     const getCollapsedHeight = () => {
//       if (window.innerWidth <= 767) return 1200;
//       if (window.innerWidth <= 1023) return 1500;

//       return 1800;
//     };

//     const checkDetailHeight = () => {
//       setIsDetailOverflowing(detailContent.scrollHeight > getCollapsedHeight());
//     };

//     checkDetailHeight();

//     const resizeObserver = new ResizeObserver(checkDetailHeight);

//     resizeObserver.observe(detailContent);
//     window.addEventListener("resize", checkDetailHeight);

//     return () => {
//       resizeObserver.disconnect();
//       window.removeEventListener("resize", checkDetailHeight);
//     };
//   }, [product]);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setIsLoading(true);

//         const result = await getProduct(productId);

//         if (!result.success) {
//           throw new Error("상품 상세 조회에 실패했습니다.");
//         }

//         setProduct(result.product);
//       } catch (error) {
//         console.error("상품 상세 조회 실패:", error);

//         showToast("상품 정보를 불러오지 못했습니다.", false);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId, showToast]);

//   const handleAddCart = async (selectedQuantity) => {
//     if (isAuthLoading) {
//       return false;
//     }

//     if (!isLoggedIn || !accessToken) {
//       showToast("로그인 후 장바구니를 이용해주세요.", false);

//       return false;
//     }

//     try {
//       const result = await addCartItem(
//         productId,
//         selectedQuantity,
//         accessToken,
//       );

//       if (!result.success) {
//         throw new Error(result.message || "장바구니 담기에 실패했습니다.");
//       }

//       return true;
//     } catch (error) {
//       console.error("장바구니 추가 실패:", error);

//       showToast(error.message || "장바구니 담기에 실패했습니다.", false);

//       return false;
//     }
//   };

//   const handleBottomSheetSubmit = async () => {
//     if (bottomSheetType === "cart") {
//       const success = await handleAddCart(quantity);

//       if (success) {
//         setBottomSheetType(null);
//         setIsCartModalOpen(true);
//       }

//       return;
//     }

//     // if (bottomSheetType === "buy") {
//     //
//     // }
//   };

//   const handleBuyClick = () => {
//     if (window.innerWidth <= 600) {
//       setBottomSheetType("buy");

//       return;
//     }
//   };

//   const handleCartClick = async () => {
//     if (window.innerWidth <= 600) {
//       setBottomSheetType("cart");

//       return;
//     }

//     const success = await handleAddCart(quantity);

//     if (success) {
//       setIsCartModalOpen(true);
//     }
//   };

//   if (isLoading) {
//     return (
//       <BasicPage>
//         <Loader />
//       </BasicPage>
//     );
//   }

//   if (!product) {
//     return (
//       <BasicPage>
//         <div>상품을 찾을 수 없습니다.</div>
//       </BasicPage>
//     );
//   }

//   const totalPrice = product.price * quantity;

//   const categoryName = product.categoryId
//     ? categoryNames[product.categoryId]
//     : "전체상품";

//   return (
//     <>
//       <BasicPage>
//         {/* =========================
//             상품 대표 영역
//         ========================== */}
//         <DetailProductStyle>
//           {/* =========================
//               왼쪽 상품 이미지 영역
//           ========================== */}
//           <div className="product-photo-area">
//             <PhotoWrapper>
//               <ProductCard
//                 image={product.thumbnail}
//                 name={product.name}
//                 badge=""
//                 showHeart
//               />
//             </PhotoWrapper>

//             {/* 관련상품 스크롤 유도 */}
//             <button
//               type="button"
//               className="related-scroll-button"
//               onClick={(event) => handleBannerClick(event, "related-products")}
//               aria-label="함께 구매하면 좋은 상품 보기"
//             >
//               <span className="related-scroll-paw" aria-hidden="true">
//                 <PawIcon />
//               </span>

//               <span className="related-scroll-text">
//                 다른 묘한 Pick도 구경해보세요
//               </span>

//               <span className="related-scroll-icon" aria-hidden="true">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                 >
//                   <path
//                     d="M3 6L8 11L13 6"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </span>
//             </button>

//             <p className="related-scroll-description">
//               지금 보고 있는 상품과 함께 많이 찾는 상품이에요.
//             </p>
//           </div>

//           {/* =========================
//               오른쪽 상품정보 영역
//           ========================== */}
//           <DescWrapper>
//             <div className="desc-container">
//               <div className="desc-field product-info">
//                 <strong>상품명</strong>
//                 <strong>판매가</strong>
//                 <p>적립금</p>
//                 <p>결제수단</p>
//                 <p>배송비</p>
//               </div>

//               <div className="desc-info product-info">
//                 <strong>{product.name}</strong>
//                 <strong>{product.price.toLocaleString()}원</strong>
//                 <p>{product.expectedPoint.toLocaleString()}원(5%)</p>
//                 <p>카드결제, 무통장입금</p>
//                 <p>3,000원(70,000원 이상 구매 시 무료)</p>
//               </div>
//             </div>

//             {/* 수량 / 총 상품금액 */}
//             <SummaryStyle>
//               <div className="summary-wrapper">
//                 <strong>{product.name}</strong>

//                 <div className="count-wrapper">
//                   <button
//                     onClick={handleDecrease}
//                     disabled={quantity === 1}
//                     aria-label="수량 줄이기"
//                     className="svg-container"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-dash-lg"
//                       viewBox="0 0 16 16"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
//                       />
//                     </svg>
//                   </button>

//                   <span className="svg-container">{quantity}</span>

//                   <button
//                     className="svg-container"
//                     aria-label="수량 늘리기"
//                     onClick={handleIncrease}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-plus-lg"
//                       viewBox="0 0 16 16"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 <p>{product.price.toLocaleString()}원</p>
//               </div>

//               <div className="summary-wrapper">
//                 <p>총 상품금액(수량)</p>

//                 <strong>{totalPrice.toLocaleString()}원</strong>
//               </div>
//             </SummaryStyle>

//             {/* 구매 버튼 */}
//             <ButtonContainer>
//               <button className="btn btn-buy-now" onClick={handleBuyClick}>
//                 <span className="button-text">바로 구매하기</span>

//                 <span className="button-icon" aria-hidden="true">
//                   구매하기
//                 </span>
//               </button>

//               <div className="button-wrapper">
//                 <button className="btn btn-cart" onClick={handleCartClick}>
//                   <span className="button-text">장바구니 담기</span>

//                   <span className="button-icon" aria-hidden="true">
//                     장바구니
//                   </span>
//                 </button>

//                 <button type="button" className="btn btn-wishlist">
//                   <span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       aria-hidden="true"
//                     >
//                       <path
//                         d="
//                           M8 14.5
//                           C7.5 14.15 1.5 10.15 1.5 5.65
//                           C1.5 3.35 3.15 1.85 5.15 1.85
//                           C6.35 1.85 7.35 2.45 8 3.35
//                           C8.65 2.45 9.65 1.85 10.85 1.85
//                           C12.85 1.85 14.5 3.35 14.5 5.65
//                           C14.5 10.15 8.5 14.15 8 14.5
//                           Z
//                         "
//                         stroke="currentColor"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   찜하기
//                 </button>

//                 <div className="mobile-wishlist">
//                   <HeartButton />
//                 </div>
//               </div>
//             </ButtonContainer>
//           </DescWrapper>
//         </DetailProductStyle>

//         {/* =========================
//             관련상품
//         ========================== */}
//         <DetailSection id="related-products">
//           <div className="section-heading">
//             <p>YOU MAY ALSO LIKE</p>
//             <h2>함께 구매하면 좋은 상품</h2>
//           </div>

//           <RelatedProducts productId={productId} />
//         </DetailSection>

//         {/* =========================
//             상세페이지 메뉴
//         ========================== */}
//         <DetailBanner aria-label="상품 상세 메뉴">
//           <a
//             href="#product-information"
//             onClick={(event) => handleBannerClick(event, "product-information")}
//           >
//             상세정보
//           </a>

//           <a
//             href="#purchase-guide"
//             onClick={(event) => handleBannerClick(event, "purchase-guide")}
//           >
//             구매안내
//           </a>
//         </DetailBanner>

//         {/* =========================
//             상세정보
//         ========================== */}
//         <DetailSection id="product-information">
//           <div className="section-heading">
//             <p>PRODUCT INFORMATION</p>
//             <h2>상세정보</h2>
//           </div>

//           <div className="information-content">
//             <p>오묘한 생활이 고른 상품을 일상 속에서 편안하게 사용해 보세요.</p>

//             <dl>
//               <div>
//                 <dt>상품명</dt>
//                 <dd>{product.name}</dd>
//               </div>

//               <div>
//                 <dt>카테고리</dt>
//                 <dd>{categoryName ?? "오묘한 생활 상품"}</dd>
//               </div>

//               <div>
//                 <dt>상품 구성</dt>
//                 <dd>상품 본품 1개</dd>
//               </div>
//             </dl>
//           </div>
//           {/* 상품 상세 이미지 */}
//           {product.images?.[1] && (
//             <div className="detail-image-area">
//               <div
//                 className={`detail-image-container${
//                   isDetailExpanded ? " is-expanded" : ""
//                 }${isDetailOverflowing ? " is-overflowing" : ""}`}
//               >
//                 <div
//                   className="detail-image-content"
//                   ref={detailImageContentRef}
//                 >
//                   <img
//                     src={product.images[1]}
//                     alt={`${product.name} 상세 이미지`}
//                   />
//                 </div>

//                 {isDetailOverflowing && !isDetailExpanded && (
//                   <div className="detail-image-fade" aria-hidden="true" />
//                 )}
//               </div>

//               {isDetailOverflowing && (
//                 <button
//                   type="button"
//                   className="detail-more-button"
//                   onClick={() => setIsDetailExpanded((prev) => !prev)}
//                   aria-expanded={isDetailExpanded}
//                 >
//                   <span>
//                     {isDetailExpanded ? "상세정보 접기" : "상세정보 더보기"}
//                   </span>

//                   <span
//                     className={`detail-more-arrow${
//                       isDetailExpanded ? " is-expanded" : ""
//                     }`}
//                     aria-hidden="true"
//                   >
//                     ↓
//                   </span>
//                 </button>
//               )}
//             </div>
//           )}
//         </DetailSection>

//         {/* =========================
//             구매안내
//         ========================== */}
//         <DetailSection id="purchase-guide">
//           <div className="section-heading">
//             <p>SHOPPING GUIDE</p>
//             <h2>구매안내</h2>
//           </div>

//           <div className="guide-content">
//             <p>
//               <strong>배송 안내</strong> 결제 완료 후 영업일 기준 2~5일 이내
//               배송됩니다.
//             </p>

//             <p>
//               <strong>교환 및 반품</strong> 상품 수령 후 7일 이내 고객센터를
//               통해 신청해 주세요.
//             </p>

//             <p>
//               <strong>주의사항</strong> 상품의 색상은 화면 설정에 따라 실제와
//               다르게 보일 수 있습니다.
//             </p>
//           </div>
//         </DetailSection>
//       </BasicPage>

//       {/* 모바일 구매 BottomSheet */}
//       <ProductBottomSheet
//         isOpen={bottomSheetType !== null}
//         type={bottomSheetType}
//         onClose={() => setBottomSheetType(null)}
//         product={product}
//         quantity={quantity}
//         onDecrease={handleDecrease}
//         onIncrease={handleIncrease}
//         onSubmit={handleBottomSheetSubmit}
//       />

//       {/* 장바구니 성공 모달 */}
//       <CartSuccessModal
//         isOpen={isCartModalOpen}
//         onClose={() => setIsCartModalOpen(false)}
//       />
//     </>
//   );
// }

import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../../../components/product/ProductCard/ProductCard";
import BasicPage from "../../basicPage/BasicPage";
import {
  ButtonContainer,
  DescWrapper,
  DetailProductStyle,
  PhotoWrapper,
  SummaryStyle,
  DetailBanner,
  DetailSection,
} from "./copyDetailProductStyle";
import useToast from "../../../hooks/useToast";
import { useEffect, useRef, useState } from "react";
import Loader from "../../../components/loader/Loader";
import { getProduct } from "../../../services/productServices";
import HeartButton from "../../../components/product/HeartButton/HeartButton";
import ProductBottomSheet from "../../../components/product/ProductBottomSheet/ProductBottomSheet";
import useAuth from "../../../hooks/useAuth";
import { addCartItem } from "../../../services/cartServices";
import { createCheckout } from "../../../services/checkOutServices";
import CartSuccessModal from "../../../components/cartui/CartSuccessModal";
import RelatedProducts from "../../../components/product/RelateProduct/RelatedProduct";
import PawIcon from "../../../components/common/PawIcon/PawIcon";

const categoryNames = {
  "cat-eat": "먹묘",
  "cat-play": "놀묘",
  "cat-rest": "쉼묘",
  "cat-high": "높묘",
  "cat-clean": "깔묘",
};

export default function DetailProduct() {
  const { isAuthLoading, isLoggedIn, accessToken } = useAuth();
  const { productId } = useParams();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [bottomSheetType, setBottomSheetType] = useState(null);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  const [isDetailOverflowing, setIsDetailOverflowing] = useState(false);

  const detailImageContentRef = useRef(null);

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleBannerClick = (event, sectionId) => {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const detailContent = detailImageContentRef.current;

    if (!detailContent || !product?.detailImages?.length) {
      setIsDetailOverflowing(false);
      return;
    }

    const getCollapsedHeight = () => {
      if (window.innerWidth <= 767) return 1200;
      if (window.innerWidth <= 1023) return 1500;

      return 1800;
    };

    const checkDetailHeight = () => {
      setIsDetailOverflowing(detailContent.scrollHeight > getCollapsedHeight());
    };

    checkDetailHeight();

    const resizeObserver = new ResizeObserver(checkDetailHeight);

    resizeObserver.observe(detailContent);
    window.addEventListener("resize", checkDetailHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkDetailHeight);
    };
  }, [product]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);

        const result = await getProduct(productId);

        if (!result.success) {
          throw new Error("상품 상세 조회에 실패했습니다.");
        }

        setProduct(result.product);
      } catch (error) {
        console.error("상품 상세 조회 실패:", error);

        showToast("상품 정보를 불러오지 못했습니다.", false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId, showToast]);

  // 장바구니 담기
  const handleAddCart = async (selectedQuantity) => {
    if (isAuthLoading) {
      return false;
    }

    if (!isLoggedIn || !accessToken) {
      showToast("로그인 후 장바구니를 이용해주세요.", false);

      return false;
    }

    try {
      const result = await addCartItem(
        productId,
        selectedQuantity,
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "장바구니 담기에 실패했습니다.");
      }

      return true;
    } catch (error) {
      console.error("장바구니 추가 실패:", error);

      showToast(error.message || "장바구니 담기에 실패했습니다.", false);

      return false;
    }
  };

  // 바로 구매하기
  const handleBuyNow = async (selectedQuantity) => {
    if (isAuthLoading) {
      return false;
    }

    if (!isLoggedIn || !accessToken) {
      showToast("로그인 후 구매할 수 있습니다.", false);

      return false;
    }

    try {
      // 1. 현재 상품을 장바구니에 추가
      const cartResult = await addCartItem(
        productId,
        selectedQuantity,
        accessToken,
      );

      if (!cartResult.success) {
        throw new Error(cartResult.message || "상품 구매 준비에 실패했습니다.");
      }

      const cartItemId = cartResult.cartItemId;

      if (!cartItemId) {
        throw new Error("장바구니 상품 정보를 확인할 수 없습니다.");
      }

      // 2. 방금 추가한 상품으로 Checkout 생성
      const checkoutResult = await createCheckout([cartItemId], accessToken);

      if (!checkoutResult.success) {
        throw new Error(checkoutResult.message || "주문 준비에 실패했습니다.");
      }

      const checkoutId = checkoutResult.checkoutId;

      if (!checkoutId) {
        throw new Error("Checkout 정보를 확인할 수 없습니다.");
      }

      // 3. Checkout 페이지 이동
      navigate(`/checkout?checkoutId=${encodeURIComponent(checkoutId)}`);

      return true;
    } catch (error) {
      console.error("바로 구매 실패:", error);

      showToast(error.message || "구매 준비에 실패했습니다.", false);

      return false;
    }
  };

  // 모바일 BottomSheet 제출
  const handleBottomSheetSubmit = async () => {
    if (bottomSheetType === "cart") {
      const success = await handleAddCart(quantity);

      if (success) {
        setBottomSheetType(null);
        setIsCartModalOpen(true);
      }

      return;
    }

    if (bottomSheetType === "buy") {
      const success = await handleBuyNow(quantity);

      if (success) {
        setBottomSheetType(null);
      }
    }
  };

  // 바로 구매 버튼
  const handleBuyClick = async () => {
    if (window.innerWidth <= 600) {
      setBottomSheetType("buy");

      return;
    }

    await handleBuyNow(quantity);
  };

  // 장바구니 버튼
  const handleCartClick = async () => {
    if (window.innerWidth <= 600) {
      setBottomSheetType("cart");

      return;
    }

    const success = await handleAddCart(quantity);

    if (success) {
      setIsCartModalOpen(true);
    }
  };

  if (isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  if (!product) {
    return (
      <BasicPage>
        <div>상품을 찾을 수 없습니다.</div>
      </BasicPage>
    );
  }

  const totalPrice = product.price * quantity;

  const categoryName = product.categoryId
    ? categoryNames[product.categoryId]
    : "전체상품";

  return (
    <>
      <BasicPage>
        {/* =========================
            상품 대표 영역
        ========================== */}
        <DetailProductStyle>
          {/* =========================
              왼쪽 상품 이미지 영역
          ========================== */}
          <div className="product-photo-area">
            <PhotoWrapper>
              <ProductCard
                productId={product.productId}
                image={product.thumbnail}
                name={product.name}
                badge=""
                showHeart
              />
            </PhotoWrapper>

            {/* 관련상품 스크롤 유도 */}
            <button
              type="button"
              className="related-scroll-button"
              onClick={(event) => handleBannerClick(event, "related-products")}
              aria-label="함께 구매하면 좋은 상품 보기"
            >
              <span className="related-scroll-paw" aria-hidden="true">
                <PawIcon />
              </span>

              <span className="related-scroll-text">
                다른 묘한 Pick도 구경해보세요
              </span>

              <span className="related-scroll-icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 6L8 11L13 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <p className="related-scroll-description">
              지금 보고 있는 상품과 함께 많이 찾는 상품이에요.
            </p>
          </div>

          {/* =========================
              오른쪽 상품정보 영역
          ========================== */}
          <DescWrapper>
            <div className="desc-container">
              <div className="desc-field product-info">
                <strong>상품명</strong>
                <strong>판매가</strong>
                <p>적립금</p>
                <p>결제수단</p>
                <p>배송비</p>
              </div>

              <div className="desc-info product-info">
                <strong>{product.name}</strong>

                <strong>{product.price.toLocaleString()}원</strong>

                <p>{product.expectedPoint.toLocaleString()}원(5%)</p>

                <p>카드결제, 무통장입금</p>

                <p>3,000원(70,000원 이상 구매 시 무료)</p>
              </div>
            </div>

            {/* 수량 / 총 상품금액 */}
            <SummaryStyle>
              <div className="summary-wrapper">
                <strong>{product.name}</strong>

                <div className="count-wrapper">
                  <button
                    onClick={handleDecrease}
                    disabled={quantity === 1}
                    aria-label="수량 줄이기"
                    className="svg-container"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-dash-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 1 1 0 1h-11A.5.5 0 0 1 2 8"
                      />
                    </svg>
                  </button>

                  <span className="svg-container">{quantity}</span>

                  <button
                    className="svg-container"
                    aria-label="수량 늘리기"
                    onClick={handleIncrease}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                      />
                    </svg>
                  </button>
                </div>

                <p>{product.price.toLocaleString()}원</p>
              </div>

              <div className="summary-wrapper">
                <p>총 상품금액(수량)</p>

                <strong>{totalPrice.toLocaleString()}원</strong>
              </div>
            </SummaryStyle>

            {/* 구매 버튼 */}
            <ButtonContainer>
              <button className="btn btn-buy-now" onClick={handleBuyClick}>
                <span className="button-text">바로 구매하기</span>

                <span className="button-icon" aria-hidden="true">
                  구매하기
                </span>
              </button>

              <div className="button-wrapper">
                <button className="btn btn-cart" onClick={handleCartClick}>
                  <span className="button-text">장바구니 담기</span>

                  <span className="button-icon" aria-hidden="true">
                    장바구니
                  </span>
                </button>

                <button type="button" className="btn btn-wishlist">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="
                          M8 14.5
                          C7.5 14.15 1.5 10.15 1.5 5.65
                          C1.5 3.35 3.15 1.85 5.15 1.85
                          C6.35 1.85 7.35 2.45 8 3.35
                          C8.65 2.45 9.65 1.85 10.85 1.85
                          C12.85 1.85 14.5 3.35 14.5 5.65
                          C14.5 10.15 8.5 14.15 8 14.5
                          Z
                        "
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  찜하기
                </button>

                <div className="mobile-wishlist">
                  <HeartButton />
                </div>
              </div>
            </ButtonContainer>
          </DescWrapper>
        </DetailProductStyle>

        {/* =========================
            관련상품
        ========================== */}
        <DetailSection id="related-products">
          <div className="section-heading">
            <p>YOU MAY ALSO LIKE</p>
            <h2>함께 구매하면 좋은 상품</h2>
          </div>

          <RelatedProducts productId={productId} />
        </DetailSection>

        {/* =========================
            상세페이지 메뉴
        ========================== */}
        <DetailBanner aria-label="상품 상세 메뉴">
          <a
            href="#product-information"
            onClick={(event) => handleBannerClick(event, "product-information")}
          >
            상세정보
          </a>

          <a
            href="#purchase-guide"
            onClick={(event) => handleBannerClick(event, "purchase-guide")}
          >
            구매안내
          </a>
        </DetailBanner>

        {/* =========================
            상세정보
        ========================== */}
        <DetailSection id="product-information">
          <div className="section-heading">
            <p>PRODUCT INFORMATION</p>
            <h2>상세정보</h2>
          </div>

          <div className="information-content">
            <p>오묘한 생활이 고른 상품을 일상 속에서 편안하게 사용해 보세요.</p>

            <dl>
              <div>
                <dt>상품명</dt>
                <dd>{product.name}</dd>
              </div>

              <div>
                <dt>카테고리</dt>
                <dd>{categoryName ?? "오묘한 생활 상품"}</dd>
              </div>

              <div>
                <dt>상품 구성</dt>
                <dd>상품 본품 1개</dd>
              </div>
            </dl>
          </div>

          {/* 상품 상세 이미지 */}
          {product.images?.[1] && (
            <div className="detail-image-area">
              <div
                className={`detail-image-container${
                  isDetailExpanded ? " is-expanded" : ""
                }${isDetailOverflowing ? " is-overflowing" : ""}`}
              >
                <div
                  className="detail-image-content"
                  ref={detailImageContentRef}
                >
                  <img
                    src={product.images[1]}
                    alt={`${product.name} 상세 이미지`}
                  />
                </div>

                {isDetailOverflowing && !isDetailExpanded && (
                  <div className="detail-image-fade" aria-hidden="true" />
                )}
              </div>

              {isDetailOverflowing && (
                <button
                  type="button"
                  className="detail-more-button"
                  onClick={() => setIsDetailExpanded((prev) => !prev)}
                  aria-expanded={isDetailExpanded}
                >
                  <span>
                    {isDetailExpanded ? "상세정보 접기" : "상세정보 더보기"}
                  </span>

                  <span
                    className={`detail-more-arrow${
                      isDetailExpanded ? " is-expanded" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>
              )}
            </div>
          )}
        </DetailSection>

        {/* =========================
            구매안내
        ========================== */}
        <DetailSection id="purchase-guide">
          <div className="section-heading">
            <p>SHOPPING GUIDE</p>
            <h2>구매안내</h2>
          </div>

          <div className="guide-content">
            <p>
              <strong>배송 안내</strong> 결제 완료 후 영업일 기준 2~5일 이내
              배송됩니다.
            </p>

            <p>
              <strong>교환 및 반품</strong> 상품 수령 후 7일 이내 고객센터를
              통해 신청해 주세요.
            </p>

            <p>
              <strong>주의사항</strong> 상품의 색상은 화면 설정에 따라 실제와
              다르게 보일 수 있습니다.
            </p>
          </div>
        </DetailSection>
      </BasicPage>

      {/* 모바일 구매 BottomSheet */}
      <ProductBottomSheet
        isOpen={bottomSheetType !== null}
        type={bottomSheetType}
        onClose={() => setBottomSheetType(null)}
        product={product}
        quantity={quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
        onSubmit={handleBottomSheetSubmit}
      />

      {/* 장바구니 성공 모달 */}
      <CartSuccessModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </>
  );
}
