import { useParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import BasicPage from "../basicPage/BasicPage";
import {
  ButtonContainer,
  DescWrapper,
  DetailProductStyle,
  PhotoWrapper,
  SummaryStyle,
} from "./detailProductStyle";
import useToast from "../../hooks/useToast";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { getProduct } from "../../services/productServices";
import HeartButton from "../../components/product/HeartButton/HeartButton";
import ProductBottomSheet from "../../components/product/ProductBottomSheet/ProductBottomSheet";
import useAuth from "../../hooks/useAuth";
import { addCartItem } from "../../services/cartServices";

export default function DetailProduct() {
  const { isAuthLoading, isLoggedIn, accessToken } = useAuth();
  const { productId } = useParams();
  const { showToast } = useToast();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [bottomSheetType, setBottomSheetType] = useState(null);

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
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
      return;
    }

    if (!isLoggedIn || !accessToken) {
      showToast("로그인 후 장바구니를 이용해주세요.", false);
      return;
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

      showToast(result.message || "장바구니에 상품을 담았습니다.", true);

      return true;
    } catch (error) {
      console.error("장바구니 추가 실패:", error);

      showToast(error.message || "장바구니 담기에 실패했습니다.", false);

      return false;
    }
  };

  const handleBottomSheetSubmit = () => {
    if (bottomSheetType === "cart") {
      handleAddCart(quantity);
      return;
    }

    if (bottomSheetType === "buy") {
      // 나중에 바로구매 연결
    }
  };

  const handleBuyClick = () => {
    if (window.innerWidth <= 600) {
      setBottomSheetType("buy");
      return;
    }
  };
  const handleCartClick = () => {
    if (window.innerWidth <= 600) {
      setBottomSheetType("cart");
      return;
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
                      class="bi bi-dash-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
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
                      class="bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
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
    </>
  );
}
