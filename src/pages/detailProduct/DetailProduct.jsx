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

export default function DetailProduct() {
  const { productId } = useParams();
  const { showToast } = useToast();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

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

  // ① API 요청 중
  if (isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  // ② API 요청은 끝났는데 상품이 없음
  if (!product) {
    return (
      <BasicPage>
        <div>상품을 찾을 수 없습니다.</div>
      </BasicPage>
    );
  }

  // ③ 여기부터는 product가 있다는 것이 보장됨
  const totalPrice = product.price * quantity;
  return (
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
            <button className="btn btn-buy-now">바로 구매하기</button>
            <div className="button-wrapper">
              <button className="btn btn-cart">장바구니 담기</button>
              <button className="btn btn-wishlist">찜하기</button>
            </div>
          </ButtonContainer>
        </DescWrapper>
      </DetailProductStyle>
    </BasicPage>
  );
}
