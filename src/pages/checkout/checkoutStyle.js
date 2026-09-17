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

export const BackToCartButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #6d5038;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  span {
    display: inline-block;
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #745a42;
  }

  &:hover span {
    transform: translateX(-4px);
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
    font-size: 13px;

    span {
      font-size: 18px;
    }
  }
`;

export const PageHeader = styled.header`
  margin-bottom: 34px;

  h1 {
    color: #28231f;
    font-size: 30px;
    font-weight: 800;
    line-height: 1.2;
  }

  p {
    margin-top: 8px;
    color: #4a433d;
    font-size: 15px;
    font-weight: 600;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 26px;
    }
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
  gap: 18px;

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 20px;
  }

  @media (max-width: 767px) {
    gap: 16px;
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
  background: transparent;
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
  overflow: hidden;
  background: #e3d2bd;
  color: #fff;
  font-size: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

  /* 배송정보 내부 항목 간격 */
  &.delivery-info-list {
    gap: 14px;
    padding-top: 18px;
  }

  @media (max-width: 767px) {
    &.delivery-info-list {
      gap: 12px;
      padding-top: 16px;
    }
  }
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

  @media (max-width: 767px) {
    width: fit-content;
    p {
      width: fit-content;
    }
  }
`;

export const MessageBox = styled.div`
  display: grid;
  grid-template-columns: 74px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  min-height: 40px;
  padding: 6px 8px;
  border: 1px solid #e5e3e0;
  border-radius: 5px;
  background: #fff;
  color: #4a433d;
  font-size: 15px;
  font-weight: 600;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    border-color: #b9a18b;
    box-shadow: 0 0 7px rgb(116 90 66 / 13%);
  }

  > span:first-child {
    white-space: nowrap;
  }

  @media (max-width: 767px) {
    grid-template-columns: 70px minmax(0, 1fr);
    gap: 6px;
    font-size: 13px;
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

  option {
    background: #fff;
    color: #201b17;
  }

  option:hover,
  option:checked {
    background: #f1efec;
    color: #745a42;
  }
`;

export const MessageTrigger = styled.button`
  justify-self: end;
  min-width: 0;
  padding: 7px 12px;
  border: 1px solid #8b725c;
  border-radius: 3px;
  background: #fff;
  color: #6d5038;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: #745a42;
    background: #745a42;
    color: #fff;
    box-shadow: 0 0 6px rgb(116 90 66 / 14%);
  }

  @media (max-width: 767px) {
    padding: 6px 9px;
    font-size: 12px;
  }
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
  gap: 10px;
  padding-top: 12px;

  /* 보유 적립금 행 */
  > div:first-child {
    grid-template-columns: max-content minmax(0, 1fr);
    column-gap: 19px;

    > span {
      white-space: nowrap;
    }
  }

  small {
    margin-left: 82px;
    color: #4a433d;
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    strong {
      padding-left: 10px;
    }
  }

  @media (max-width: 767px) {
    > div:first-child {
      grid-template-columns: max-content minmax(0, 1fr);
    }

    small {
      margin-left: 75px;
      font-size: 13px;
    }
  }
`;

export const PointInputRow = styled.div`
  display: grid;
  grid-template-columns: 74px minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  color: #4a433d;
  font-size: 15px;
  font-weight: 600;
  .point-button-wrap {
    display: flex;
    gap: 10px;
  }
  input {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid #eee9e4;
    border-radius: 5px;
    outline: 0;
    color: #201b17;
    font: inherit;
    font-weight: 600;

    &:focus {
      border-color: #8b725c;
    }
  }

  button {
    padding: 7px 9px;
    border: 1px solid #8b725c;
    border-radius: 3px;
    background: #fff;
    color: #6d5038;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      border-color: #745a42;
      background: #745a42;
      color: #fff;
    }
  }

  @media (max-width: 767px) {
    display: contents;
    .point-button-wrap {
      align-self: flex-start;
      flex-direction: column;
      gap: 10px;
    }
    input {
      font-size: 13px;
    }

    button {
      padding: 7px 6px;
      font-size: 12px;
    }
  }
`;

export const PointAvailableText = styled.p`
  margin: 0 0 0 82px;
  color: #4a433d;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  white-space: nowrap;

  strong {
    color: #201b17;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    margin-left: 75px;
    font-size: 13px;
  }
`;

export const PointApplyButton = styled.button`
  justify-self: end;
  padding: 7px 12px;
  border: 1px solid #8b725c;
  border-radius: 3px;
  background: #fff;
  color: #6d5038;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    border-color: #745a42;
    background: #745a42;
    color: #fff;
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

  @media (max-width: 767px) {
    gap: 12px;

    label {
      font-size: 13px;
    }
  }
`;

export const PaymentSelect = styled.div`
  position: relative;
  border: 1px solid #e5e3e0;
  border-radius: 4px;
  background: #fff;
  color: #3f362f;
  font-size: 15px;
  font-weight: 600;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  &:hover,
  &:focus-within {
    border-color: #b9a18b;
    background: #fff;
    box-shadow: 0 0 7px rgb(116 90 66 / 13%);
  }
`;

export const PaymentTrigger = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 9px;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;

  span:first-child {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span:last-child {
    flex-shrink: 0;
    color: #8b725c;
  }
`;

export const PaymentOptionsList = styled.div`
  position: absolute;
  z-index: 40;
  top: calc(100% + 5px);
  right: 0;
  left: 0;
  overflow: hidden;
  max-height: 220px;
  overflow-y: auto;
  box-sizing: border-box;
  border: 1px solid #dedbd7;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 5px 16px rgb(50 40 30 / 10%);

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #d5d1cc;
  }
`;

export const PaymentOption = styled.button`
  display: block;
  width: 100%;
  min-width: 0;
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #f0eeeb;
  background: #fff;
  color: #4a433d;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:last-child {
    border-bottom: 0;
  }

  &:hover,
  &[aria-selected="true"] {
    background: #f7f7f7;
    color: #745a42;
  }
`;

export const PriceSummary = styled.section`
  min-width: 0;
  padding: 15px 20px 16px;
  border: 1px solid #eee9e4;
  border-radius: 5px;
  background: #fff;

  @media (max-width: 767px) {
    padding: 14px 16px 14px;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  min-width: 0;
  justify-content: space-between;
  gap: 10px;
  padding-top: 16px;
  color: #4a433d;
  font-size: 15px;
  font-weight: 600;

  p {
    min-width: 0;
    padding: 0;
    color: #201b17;
    font-weight: 700;
  }
`;

export const TotalRow = styled(PriceRow)`
  margin-top: 16px;
  padding: 14px 0;
  border-top: 1px solid #eee9e4;
  color: #3c332c;

  p {
    color: #34291f;
    font-size: 18px;
  }
`;

export const RewardRow = styled(PriceRow)`
  padding: 10px 8px;
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

/* 결제하기 버튼 hover 시 나타나는 고양이 5마리 */
export const HoverCats = styled.div`
  position: absolute;
  left: 50%;
  bottom: 35%;
  z-index: 10;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;

  width: max-content;
  height: 60px;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateX(-50%) translateY(10px);

  transition:
    opacity 0.25s ease,
    visibility 0.25s ease,
    transform 0.25s ease;

  img {
    display: block;
    width: 50px;
    height: 50px;
    object-fit: contain;
    flex: 0 0 42px;
    transform: none;
  }
`;

export const SubmitButtonWrapper = styled.div`
  position: relative;
  z-index: 0;
  display: grid;
  gap: 0;
  padding-top: 34px;
  overflow: visible;

  &:hover .hover-cats {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-4px);
  }
`;

export const SubmitButton = styled.button`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 12px;
  border: 0;
  border-radius: 5px;
  background: #d8c1a8;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: #745a42;
    box-shadow: 0 3px 10px rgb(116 90 66 / 18%);
  }
`;

export const CustomDropdown = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
`;

export const CustomDropdownTrigger = styled.button`
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: 42px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 9px;

  border: 1px solid #e5e3e0;
  border-radius: 4px;
  background: #fff;
  color: #201b17;

  font: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;
  cursor: pointer;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  &:hover,
  &:focus-visible {
    border-color: #b9a18b;
    background: #fff;
    box-shadow: 0 0 7px rgb(116 90 66 / 13%);
    outline: none;
  }

  span:first-child {
    display: block;
    flex: 1;
    min-width: 0;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span:last-child {
    flex-shrink: 0;
    color: #8b725c;
    line-height: 1;
  }

  @media (max-width: 767px) {
    min-height: 42px;
    padding: 8px 9px;
    font-size: 13px;

    span:first-child {
      line-height: 22px;
    }
  }
`;

export const CustomDropdownList = styled.div`
  position: absolute;
  z-index: 30;
  top: calc(100% + 5px);
  right: 0;
  left: 0;
  overflow: hidden;
  max-height: 220px;
  overflow-y: auto;
  border: 1px solid #dedbd7;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 5px 16px rgb(50 40 30 / 10%);

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #d5d1cc;
  }
`;

export const CustomDropdownOption = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #f0eeeb;
  background: #fff;
  color: #4a433d;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:last-child {
    border-bottom: 0;
  }

  &:hover,
  &[aria-selected="true"] {
    background: #f7f7f7;
    color: #745a42;
  }
`;

export const CustomDropdownEmpty = styled.p`
  padding: 12px 10px;
  background: #fff;
  color: #8a837d;
  font-size: 14px;
  text-align: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgb(0 0 0 / 40%);
`;

export const AddressModal = styled.div`
  width: min(100%, 430px);
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 12px 30px rgb(0 0 0 / 15%);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid #eee9e4;

  h2 {
    margin: 0;
    color: #302a26;
    font-size: 18px;
    font-weight: 800;
  }
`;

export const ModalCloseButton = styled.button`
  border: 0;
  background: transparent;
  color: #756b63;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
`;

export const AddressForm = styled.form`
  display: grid;
  gap: 10px;
  padding: 20px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #4a433d;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 11px 12px;
  border: 1px solid #eee9e4;
  border-radius: 4px;
  outline: 0;
  color: #201b17;
  font-size: 14px;

  &:focus {
    border-color: #8b725c;
  }

  &::placeholder {
    color: #aaa29b;
  }
`;

export const AddressModalSubmit = styled.button`
  width: 100%;
  padding: 12px;
  border: 0;
  border-radius: 5px;
  background: #d8c1a8;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #745a42;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
