import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import BasicPage from "../basicPage/BasicPage";
import {
  ButtonContainer,
  DescWrapper,
  DetailProductStyle,
  PhotoWrapper,
  SummaryStyle,
  DetailBanner,
  DetailSection,
  RelatedGrid,
  RelatedItem,
} from "./detailProductStyle";
import useToast from "../../hooks/useToast";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { getProduct, getRelatedProducts } from "../../services/productServices";
import HeartButton from "../../components/product/HeartButton/HeartButton";
import ProductBottomSheet from "../../components/product/ProductBottomSheet/ProductBottomSheet";
import useAuth from "../../hooks/useAuth";
import { addCartItem } from "../../services/cartServices";
import CartSuccessModal from "../../components/cartui/CartSuccessModal";

export default function DetailProduct() {
  const { isAuthLoading, isLoggedIn, accessToken } = useAuth();
  const { productId } = useParams();
  const { showToast } = useToast();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [bottomSheetType, setBottomSheetType] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

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

  // 실제 API 호출만 담당
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

      // 성공하면 호출한 쪽에서 모달을 열 수 있도록 true 반환
      return true;
    } catch (error) {
      console.error("장바구니 추가 실패:", error);

      showToast(error.message || "장바구니 담기에 실패했습니다.", false);

      return false;
    }
  };

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
      // 바로구매 로직
    }
  };

  const handleBuyClick = () => {
    if (window.innerWidth <= 600) {
      setBottomSheetType("buy");
      return;
    }
  };
  const handleCartClick = async () => {
    if (window.innerWidth <= 600) {
      setBottomSheetType("cart");
      return;
    }

    const success = await handleAddCart(quantity);

    if (success) setIsCartModalOpen(true);
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
  return (
    <>
      <BasicPage>
        <DetailProductStyle>
          <PhotoWrapper>
            <ProductCard
              image={product.images[0]}
              name={product.name}
              badge=""
              showHeart
            />
          </PhotoWrapper>
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
                        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
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
            <ButtonContainer>
              <button className="btn btn-buy-now" onClick={handleBuyClick}>
                {" "}
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
                  </span>{" "}
                  찜하기
                </button>
                <div className="mobile-wishlist">
                  <HeartButton />
                </div>
              </div>
            </ButtonContainer>
          </DescWrapper>
        </DetailProductStyle>

        <DetailBanner aria-label="상품 상세 메뉴">
          <a
            href="#product-information"
            onClick={(event) => handleBannerClick(event, "product-information")}
          >
            상세정보
          </a>
          <a
            href="#related-products"
            onClick={(event) => handleBannerClick(event, "related-products")}
          >
            관련상품
          </a>
          <a
            href="#purchase-guide"
            onClick={(event) => handleBannerClick(event, "purchase-guide")}
          >
            구매안내
          </a>
        </DetailBanner>

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
                <dd>{product.categoryId ?? "오묘한 생활 상품"}</dd>
              </div>
              <div>
                <dt>상품 구성</dt>
                <dd>상품 본품 1개</dd>
              </div>
            </dl>
          </div>
        </DetailSection>

        <DetailSection id="related-products">
          <div className="section-heading">
            <p>YOU MAY ALSO LIKE</p>
            <h2>관련상품</h2>
          </div>
          {relatedProducts.length > 0 ? (
            <RelatedGrid>
              {relatedProducts.map((relatedProduct) => (
                <RelatedItem key={relatedProduct.productId}>
                  <Link to={`/products/${relatedProduct.productId}`}>
                    <ProductCard
                      image={
                        relatedProduct.images?.[0] ?? relatedProduct.thumbnail
                      }
                      name={relatedProduct.name}
                      badge=""
                      showHeart={false}
                    />
                    <strong>{relatedProduct.name}</strong>
                    <span>{relatedProduct.price.toLocaleString()}원</span>
                  </Link>
                </RelatedItem>
              ))}
            </RelatedGrid>
          ) : (
            <div className="information-content">
              <p>현재 함께 추천할 상품을 준비하고 있습니다.</p>
            </div>
          )}
        </DetailSection>

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
      <CartSuccessModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </>
  );
}
