import * as S from "./CartUiStyle";

const CartUI = ({
  cartCount = 0,
  productPrice = 0,
  reward = 0,
  shippingFee = 0,
  totalPrice = 0,
}) => {
  return (
    <S.CartWrapper>
      {/* 쇼핑 계속하기 */}
      <S.ContinueButton type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
        쇼핑 계속하기
      </S.ContinueButton>

      {/* 장바구니 제목 */}
      <S.CartHeader>
        <S.CartTitle>장바구니</S.CartTitle>

        <S.CartSubtitle>{cartCount}개의 상품이 담겨져있습니다.</S.CartSubtitle>
      </S.CartHeader>

      {/* 주문 요약 */}
      <S.OrderSummary>
        <S.SummaryInfo>
          <S.SummaryTitle>주문 요약</S.SummaryTitle>

          <S.SummaryRow>
            <span>상품금액</span>
            <span>{productPrice.toLocaleString()}원</span>
          </S.SummaryRow>

          <S.SummaryRow>
            <span>예상 적립금</span>
            <span>{reward.toLocaleString()}원</span>
          </S.SummaryRow>

          <S.SummaryRow>
            <span>배송비</span>
            <span>{shippingFee.toLocaleString()}원</span>
          </S.SummaryRow>
        </S.SummaryInfo>

        <S.TotalAndCheckout>
          <S.TotalPrice>
            <span>총 주문금액</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </S.TotalPrice>

          <S.CheckoutButton type="button">주문하기</S.CheckoutButton>
        </S.TotalAndCheckout>
      </S.OrderSummary>
    </S.CartWrapper>
  );
};

export default CartUI;
