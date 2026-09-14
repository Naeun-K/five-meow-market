import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  TitleWrapper,
  Title,
  Subtitle,
  EmptyStateWrapper,
  IconWrap,
  MessageWrapper,
  TextWrapper,
  EmptyMessage,
  NewProductMessage,
  GoShopButton,
  ButtonWrapper,
} from "./emptyCartStyle";
import useAuth from "../../hooks/useAuth";

const EmptyCartIcon = () => (
  <IconWrap
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-cart-x"
    viewBox="0 0 16 16"
  >
    <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" />
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </IconWrap>
);

const EmptyCart = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>장바구니</Title>
        <Subtitle>0개의 상품이 담겨있습니다.</Subtitle>
      </TitleWrapper>

      <EmptyStateWrapper>
        <EmptyCartIcon />

        <MessageWrapper>
          <TextWrapper>
            <EmptyMessage>장바구니가 비어있습니다.</EmptyMessage>
            <NewProductMessage>새로운 상품으로 채워주세요.</NewProductMessage>
          </TextWrapper>

          <ButtonWrapper>
            <GoShopButton
              className="products-btn"
              onClick={() => navigate("/products")}
            >
              상품보러가기
            </GoShopButton>

            {!isLoggedIn && (
              <GoShopButton
                className="login-btn"
                onClick={() => navigate("/login")}
              >
                로그인하러 가기
              </GoShopButton>
            )}
          </ButtonWrapper>
        </MessageWrapper>
      </EmptyStateWrapper>
    </Wrapper>
  );
};

export default EmptyCart;
