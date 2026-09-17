import styled from "@emotion/styled";

export const CartWrapper = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const ContinueButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 16px 0;

  background: transparent;
  border: none;

  color: var(--text-color);
  font-size: 20px;
  font-weight: 500;

  cursor: pointer;

  svg {
    flex-shrink: 0;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  padding-bottom: 24px;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    gap: 8px 12px;
  }
`;

export const CartTitle = styled.h1`
  margin: 0;

  color: var(--text-color);
  font-size: 44px;
  font-weight: 700;

  @media (max-width: 767px) {
    grid-column: 1 / -1;
    font-size: 32px;
  }
`;
export const CartInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: contents; /* 🔵 CHANGE: 모바일에서 wrapper만 레이아웃에서 제거 */
  }
`;

export const CartList = styled.div`
  min-height: 400px;
`;

export const SelectAllLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  cursor: pointer;

  input {
    width: 24px;
    height: 24px;
    margin: 0;
    cursor: pointer;
  }
`;
export const CartSubtitle = styled.p`
  margin: 0;

  color: var(--text-color);
  font-size: 22px;
  font-weight: 400;

  @media (max-width: 767px) {
    grid-column: 1 / -1;
    font-size: 18px;
  }
`;
export const DeleteAllButton = styled.button`
  padding: 0;
  margin-left: 12px;

  border: none;
  background: none;

  color: #777;
  font-size: 20px;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 3px;

  cursor: pointer;

  &:hover {
    color: #222;
  }

  @media (max-width: 767px) {
    grid-column: 2; 
    grid-row: 3; 
    margin-left: 0; 
    white-space: nowrap;
`;
export const OrderSummary = styled.section`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 60px 0;
  padding: 40px 60px;

  background: var(--bg-notice);

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 50px 0;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;

    margin: 30px 0;
    padding: 32px 20px;
    gap: 32px;
  }
`;

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

export const TotalAndCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  margin-top: 60px;

  @media (max-width: 767px) {
    width: 100%;
    align-items: stretch;

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
