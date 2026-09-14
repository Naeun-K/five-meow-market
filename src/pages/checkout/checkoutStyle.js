import styled from "@emotion/styled";

export const CheckoutPage = styled.div`
  width: min(100%, 1080px);
  margin: 0 auto;
  padding: 42px 28px 80px;
  background: var(--bg);

  @media (min-width: 768px) and (max-width: 1023px) {
    width: min(100%, 768px);
    padding: 32px 24px 64px;
  }

  @media (max-width: 767px) {
    width: 100%;
    min-width: 0;
    padding: 24px 16px 64px;
  }
`;

export const PageHeader = styled.header`
  margin-bottom: 34px;

  h1 {
    color: #28231f;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.2;
  }

  p {
    margin-top: 8px;
    color: #4a433d;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 330px;
  align-items: start;
  gap: 20px;

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }

  @media (max-width: 767px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
  }
`;

export const MainColumn = styled.div`
  display: grid;
  min-width: 0;
  gap: 16px;

  @media (max-width: 767px) {
    gap: 10px;
  }
`;

export const SideColumn = styled.aside`
  display: grid;
  min-width: 0;
  gap: 12px;

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 16px;
  }

  @media (max-width: 767px) {
    gap: 12px;
  }
`;

export const InfoSection = styled.section`
  min-width: 0;
  padding: 15px 20px 16px;
  border: 1px solid #eee9e4;
  border-radius: 5px;
  background: #fff;

  @media (max-width: 767px) {
    padding: 14px 16px 15px;
  }
`;

export const SectionHeader = styled.div`
  position: relative;
  display: flex;
  min-height: 24px;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  width: 100%;
  margin: 0;
  color: #302a26;
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  text-align: left;
`;

export const SectionToggle = styled.button`
  display: grid;
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  place-items: center;
  border: 0;
  color: #756b63;
  cursor: pointer;
`;

export const SectionChevron = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  transform: rotate(45deg) translate(-1px, -1px);
  transition: transform 0s;

  &[data-open="true"] {
    transform: rotate(225deg) translate(-1px, -1px);
  }
`;

export const SectionContent = styled.div`
  padding-top: 1px;
  border-top: 1px solid #eee9e4;
`;

export const ProductList = styled.div``;

export const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) auto;
  min-width: 0;
  gap: 10px;
  align-items: center;
  padding: 12px 0 0;

  > * {
    min-width: 0;
  }
`;

export const ProductThumbnail = styled.div`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  background: #e3d2bd;
  color: #fff;
  font-size: 15px;
`;

export const ProductDetails = styled.div`
  min-width: 0;

  p,
  strong {
    display: block;
    overflow: hidden;
    color: #332d28;
    font-size: 15px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ProductOption = styled.span`
  display: block;
  overflow: hidden;
  margin: 2px 0;
  color: #55504a;
  font-size: 15px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductQuantity = styled.p`
  color: #4a433d;
  font-size: 15px;
  font-weight: 600;
`;

export const InfoList = styled.div`
  display: grid;
  gap: 7px;
  padding-top: 12px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  color: #4a433d;
  font-size: 15px;
  font-weight: 600;

  p {
    min-width: 0;
    overflow-wrap: anywhere;
    color: #201b17;
    font-weight: 700;
  }
`;

export const MessageBox = styled.div`
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  min-height: 27px;
  padding: 0 8px;
  border: 1px solid #eee9e4;
  border-radius: 5px;
  color: #4a433d;
  font-size: 15px;
  font-weight: 600;

  p {
    color: #201b17;
    font-weight: 700;
  }
`;

export const MessageSelect = styled.select`
  width: 100%;
  min-width: 0;
  padding: 4px 22px 4px 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #201b17;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const MessageTrigger = styled.button`
  min-width: 0;
  overflow: hidden;
  padding: 4px 0;
  color: #201b17;
  font-size: inherit;
  font-weight: 700;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MessageInput = styled.input`
  width: 100%;
  min-width: 0;
  padding: 4px 0;
  border: 0;
  outline: 0;
  color: #201b17;
  font: inherit;
  font-weight: 700;

  &::placeholder {
    color: #766d66;
  }
`;

export const PointRows = styled.div`
  display: grid;
  gap: 8px;
  padding-top: 12px;

  small {
    margin-left: 62px;
    color: #4a433d;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const PointInputRow = styled.div`
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  color: #4a433d;
  font-size: 15px;
  font-weight: 600;

  p {
    min-width: 0;
    padding: 5px 8px;
    overflow: hidden;
    border: 1px solid #eee9e4;
    border-radius: 5px;
    color: #6b6259;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    padding: 4px 7px;
    border: 1px solid #8b725c;
    border-radius: 3px;
    color: #6d5038;
    font-size: 15px;
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 18px;
  padding: 12px 0 10px;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #3b332c;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const PaymentSelect = styled.div`
  position: relative;
  border: 1px solid #eee9e4;
  border-radius: 4px;
  color: #3f362f;
  font-size: 15px;
  font-weight: 600;
`;

export const PaymentTrigger = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 7px 9px;
  color: inherit;
  font: inherit;
  text-align: left;
`;

export const PaymentOptionsList = styled.div`
  position: absolute;
  z-index: 1;
  top: calc(100% + 4px);
  right: 0;
  left: 0;
  overflow: hidden;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid #eee9e4;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 12px rgb(50 40 30 / 10%);

  @media (max-width: 767px) {
    width: 100%;
    overflow-x: hidden;
  }
`;

export const PaymentOption = styled.button`
  display: block;
  width: 100%;
  padding: 8px 9px;
  color: #3f362f;
  font: inherit;
  min-width: 0;
  text-align: left;

  &:hover,
  &[aria-selected="true"] {
    background: #f5ede5;
  }
`;

export const PriceSummary = styled.section`
  padding: 15px 20px 12px;
  min-width: 0;
  border: 1px solid #eee9e4;
  @media (max-width: 767px) {
    gap: 10px;
  }
  border-radius: 5px;
  background: #fff;
`;

export const PriceRow = styled.div`
  min-width: 0;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  color: #4a433d;

  @media (max-width: 767px) {
    gap: 10px;
  }
  font-size: 15px;
  font-weight: 600;

  min-width: 0;
  p {
    min-width: 0;
    color: #201b17;
    font-weight: 700;
    padding: 12px 12px 13px;
  }
`;

export const TotalRow = styled(PriceRow)`
  margin-top: 10px;
  padding: 10px 0;
  border-top: 1px solid #eee9e4;
  color: #3c332c;

  p {
    color: #34291f;
    font-size: 18px;
  }
`;

export const RewardRow = styled(PriceRow)`
  padding: 8px;
  background: #f5ede5;
  color: #6f5d4d;

  p {
    color: #75583e;
  }
`;

export const AgreementBox = styled.section`
  display: grid;
  gap: 8px;
  padding: 12px 16px;
  border: 1px solid #eee9e4;
  border-radius: 5px;
  background: #fff;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #8e857e;
    font-size: 15px;
  }

  > p {
    padding-top: 8px;
    border-top: 1px solid #f0ece8;
    color: #aaa29b;
    font-size: 15px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  background: #745a42;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;
