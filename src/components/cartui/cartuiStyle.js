import styled from "@emotion/styled";

export const CartWrapper = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;

  /* 모바일 */
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

/* 쇼핑 계속하기 */
export const ContinueButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 16px 0;

  background: transparent;
  border: none;

  color: var(--text-color);
  font-size: 17px;

  cursor: pointer;

  svg {
    flex-shrink: 0;
  }
`;

/* 장바구니 제목 영역 */
export const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  padding-bottom: 24px;
`;

export const CartTitle = styled.h1`
  margin: 0;

  color: var(--text-color);
  font-size: 44px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const CartSubtitle = styled.p`
  margin: 0;

  color: var(--text-color);
  font-size: 22px;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

/* 주문 요약 */
export const OrderSummary = styled.section`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 60px 0;
  padding: 40px 60px;

  background: var(--bg-notice);

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 50px 0;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;

    margin: 30px 0;
    padding: 32px 20px;
    gap: 32px;
  }
`;

/* 주문 정보 */
export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 280px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SummaryTitle = styled.h2`
  margin: 0;

  color: var(--text-color);
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  color: var(--text-secondary);
  font-size: 18px;

  span {
    white-space: nowrap;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

/* 총 주문금액 + 주문하기 버튼 */
export const TotalAndCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  /* 태블릿, 데스크탑, 와이드에서 아래로 */
  margin-top: 60px;

  @media (max-width: 767px) {
    width: 100%;
    align-items: stretch;

    /* 모바일은 기존 위치 유지 */
    margin-top: 0;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  color: var(--text-color);
  font-size: 22px;
  font-weight: 700;

  white-space: nowrap;

  @media (max-width: 767px) {
    justify-content: space-between;
    font-size: 18px;
  }
`;

export const CheckoutButton = styled.button`
  padding: 16px 48px;

  background: var(--bg-button);
  border: none;
  border-radius: 6px;

  color: var(--text-button);
  font-size: 17px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
