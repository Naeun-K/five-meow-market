import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import * as S from "./CartUiStyle";

const CartUI = ({
  cartItems = [],
  selectedItems = [],
  onCheck,
  onQuantityChange,
  onRemove,
  onCheckout,
}) => {
  const navigate = useNavigate();

  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  
  const selectedCartItems = cartItems.filter((item) =>
    selectedItems.includes(item.cartItemId),
  );

  
  const productPrice = selectedCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  
  
  const reward = 0;

  
  const shippingFee = productPrice === 0 ? 0 : productPrice >= 70000 ? 0 : 3000;

  
  const totalPrice = productPrice + shippingFee;

  return (
    <S.CartWrapper>
      
      <S.ContinueButton type="button" onClick={() => navigate("/products")}>
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

      
      <S.CartHeader>
        <S.CartTitle>장바구니</S.CartTitle>

        <S.CartSubtitle>{cartCount}개의 상품이 담겨져있습니다.</S.CartSubtitle>
      </S.CartHeader>

      
      {cartItems.map((item) => (
        <CartItem
          key={item.cartItemId}
          item={item}
          checked={selectedItems.includes(item.cartItemId)}
          onCheck={onCheck}
          onQuantityChange={onQuantityChange}
          onRemove={onRemove}
        />
      ))}

      
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

          <S.CheckoutButton
            type="button"
            disabled={selectedItems.length === 0}
            onClick={onCheckout}
          >
            주문하기
          </S.CheckoutButton>
        </S.TotalAndCheckout>
      </S.OrderSummary>
    </S.CartWrapper>
  );
};

export default CartUI;
