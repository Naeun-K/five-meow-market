import ProductCard from "../../components/product/ProductCard/ProductCard";
import BasicPage from "../basicPage/BasicPage";
import { DetailProductStyle } from "./detailProductStyle";

export default function DetailProduct() {
  return (
    <BasicPage>
      <DetailProductStyle>
        <div className="product-image">
          <ProductCard image="" name="" badge="" showHeart />
        </div>
        <div className="product-description">
          <div className="desc-container">
            <div className="desc-field">
              <p>상품명</p>

              <p>판매가</p>
              <p>적립금</p>
              <p>결제수단</p>
              <p>배송비</p>
            </div>
            <div className="desc-info">
              <p></p>
              <p></p>
              <p></p>
              <p>카드결제, 무통장입금</p>
              <p>3,000원(70,000원 이상 구매 시 무료)</p>
            </div>
          </div>
          <div className="desc-summary">
            <p>상품명</p>
            <p></p>
            <p>가격</p>
            <div>
              <span className="svg-container">
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
              </span>
              <span className="svg-container">1</span>
              <span className="svg-container">
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
              </span>
            </div>
            <p>총금액</p>
          </div>
          <div className="button-container">
            <button className="btn-buy-now">바로 구매하기</button>
            <div className="button-wrapper">
              <button className="btn btn-cart">장바구니 담기</button>
              <button className="btn btn-wishlist">찜하기</button>
            </div>
          </div>
        </div>
      </DetailProductStyle>
    </BasicPage>
  );
}
