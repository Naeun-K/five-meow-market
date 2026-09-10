import styled from "@emotion/styled";

export const CartItemRoot = styled.article`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 20px;
  width: min(1200px, 100%);
  min-height: 164px;
  padding: 24px;
  background: #faf8f4;
  border: 1px solid #dcdcdc;
  border-radius: 8px;

  @media (min-width: 320px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 24px 90px minmax(0, 1fr) 24px;
    grid-template-rows: 164px 94px;
    gap: 0 12px;
    width: 100%;
    min-height: 278px;
    padding: 24px 14px 0;
    overflow: hidden;

    &::after {
      position: absolute;
      z-index: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 94px;
      background: #f0e3d4;
      content: "";
    }

    > * {
      position: relative;
      z-index: 1;
    }
  }
`;

export const CheckBox = styled.input`
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  margin: 0;
  aspect-ratio: 1 / 1;
  accent-color: #222;

  @media (min-width: 320px) and (max-width: 767px) {
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    border: 1.5px solid #c7c7c7;
    border-radius: 3px;
    background: #faf8f4;
  }
`;

export const ProductImage = styled.img`
  flex: 0 0 122px;
  width: 122px;
  height: 122px;
  object-fit: cover;
  border-radius: 6px;
  background: #f1ece6;

  @media (min-width: 320px) and (max-width: 767px) {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    display: flex;
    width: 90px;
    height: 90px;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    border-radius: 12px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  @media (min-width: 320px) and (max-width: 767px) {
    grid-column: 3;
    grid-row: 1;
    align-self: center;
  }
`;

export const ProductName = styled.strong`
  overflow: hidden;
  color: #171717;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.25;
    white-space: normal;
  }
`;

export const ProductPrice = styled.span`
  color: #171717;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 2px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  flex: 0 0 66px;
  align-items: center;
  justify-content: space-between;
  width: 66px;
  height: 32px;
  overflow: hidden;
  border: 1px solid #dedede;
  border-radius: 7px;
  background: #fff;

  @media (min-width: 320px) and (max-width: 767px) {
    grid-column: 1 / 3;
    grid-row: 2;
    align-self: center;
    justify-self: start;
    width: 130px;
    height: 64px;
    flex-basis: 130px;
    border-radius: 12px;
  }
`;

export const QuantityButton = styled.button`
  width: 22px;
  height: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: #444;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  color: #222;
  font-size: 14px;
  line-height: 1;
`;

export const ItemPrice = styled.strong`
  flex: 0 0 72px;
  color: #171717;
  font-size: 15px;
  font-weight: 700;
  text-align: right;
  white-space: nowrap;

  @media (min-width: 320px) and (max-width: 767px) {
    grid-column: 3 / 5;
    grid-row: 2;
    align-self: center;
    justify-self: end;
    font-size: 24px;
  }
`;

export const RemoveButton = styled.button`
  flex: 0 0 18px;
  width: 18px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #777;
  font-size: 22px;
  font-weight: 300;
  line-height: 1;
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    grid-column: 4;
    grid-row: 1;
    align-self: center;
    justify-self: end;
    font-size: 28px;
  }
`;
