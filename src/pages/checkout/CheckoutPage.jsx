import { useState } from "react";
import * as S from "./checkoutStyle";

const products = [
  {
    name: "시즌별 냥냥 방탄티",
    option: "색상: 화이트 / 사이즈: M",
    price: "12,900원",
  },
  {
    name: "구름 목도리 발랄 2P 세트",
    option: "색상: 스킨 / 사이즈: M",
    price: "19,800원",
  },
];

const priceRows = [
  ["상품금액", "45,200원"],
  ["배송비", "+3,000원"],
  ["쿠폰할인", "-0원"],
  ["적립금 사용", "-3,000원"],
];

const cardCompanies = [
  "신한카드",
  "삼성카드",
  "현대카드",
  "KB국민카드",
  "롯데카드",
  "NH농협카드",
  "하나카드",
  "우리카드",
];

function InfoSection({ id, title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <S.InfoSection>
      <S.SectionHeader>
        <S.SectionTitle>{title}</S.SectionTitle>
        <S.SectionToggle
          type="button"
          aria-expanded={isOpen}
          aria-controls={id}
          aria-label={`${title} ${isOpen ? "닫기" : "열기"}`}
          onClick={() => setIsOpen((open) => !open)}
        >
          <S.SectionChevron aria-hidden="true" data-open={isOpen} />
        </S.SectionToggle>
      </S.SectionHeader>
      {isOpen && <S.SectionContent id={id}>{children}</S.SectionContent>}
    </S.InfoSection>
  );
}

function CheckoutPage() {
  const [deliveryMemo, setDeliveryMemo] = useState("문 앞에 놓아주세요.");
  const [isRequestInputOpen, setIsRequestInputOpen] = useState(false);
  const [requestMessage, setRequestMessage] = useState("");
  const [selectedCardCompany, setSelectedCardCompany] = useState("");
  const [isCardCompanyOpen, setIsCardCompanyOpen] = useState(false);

  return (
    <S.CheckoutPage>
      <S.PageHeader>
        <h1>결제하기</h1>
        <p>주문 내역을 확인하시고 결제를 진행해주세요.</p>
      </S.PageHeader>

      <S.CheckoutLayout>
        <S.MainColumn>
          <InfoSection id="order-products" title="주문 상품" defaultOpen>
            <S.ProductList>
              {products.map((product) => (
                <S.ProductRow key={product.name}>
                  <S.ProductThumbnail>사진</S.ProductThumbnail>
                  <S.ProductDetails>
                    <p>{product.name}</p>
                    <S.ProductOption>{product.option}</S.ProductOption>
                    <strong>{product.price}</strong>
                  </S.ProductDetails>
                  <S.ProductQuantity>1개</S.ProductQuantity>
                </S.ProductRow>
              ))}
            </S.ProductList>
          </InfoSection>

          <InfoSection id="customer-info" title="주문자 정보">
            <S.InfoList>
              <S.InfoRow>
                <span>이름</span>
                <p></p>
              </S.InfoRow>
              <S.InfoRow>
                <span>연락처</span>
                <p></p>
              </S.InfoRow>
              <S.InfoRow>
                <span>이메일</span>
                <p></p>
              </S.InfoRow>
            </S.InfoList>
          </InfoSection>

          <InfoSection id="delivery-info" title="배송 정보">
            <S.InfoList>
              <S.InfoRow>
                <span>받는 분</span>
                <p></p>
              </S.InfoRow>
              <S.InfoRow>
                <span>연락처</span>
                <p></p>
              </S.InfoRow>
              <S.InfoRow>
                <span>우편번호</span>
                <p></p>
              </S.InfoRow>
              <S.InfoRow>
                <span>주소</span>
                <p></p>
              </S.InfoRow>
              <S.InfoRow>
                <span>상세주소</span>
                <p></p>
              </S.InfoRow>
              <S.MessageBox>
                <span>배송메모</span>
                <S.MessageSelect
                  value={deliveryMemo}
                  onChange={(event) => setDeliveryMemo(event.target.value)}
                  aria-label="배송메모 선택"
                >
                  <option>문 앞</option>
                  <option>직접 받고 부재 시 문 앞</option>
                  <option>경비실</option>
                  <option>택배함</option>
                  <option>기타사항</option>
                </S.MessageSelect>
              </S.MessageBox>
              <S.MessageBox>
                <span>요청사항</span>
                {isRequestInputOpen ? (
                  <S.MessageInput
                    autoFocus
                    value={requestMessage}
                    onChange={(event) => setRequestMessage(event.target.value)}
                    placeholder="요청사항을 입력해주세요."
                    aria-label="요청사항 직접 입력"
                  />
                ) : (
                  <S.MessageTrigger
                    type="button"
                    onClick={() => setIsRequestInputOpen(true)}
                  >
                    요청사항 직접 입력하기
                  </S.MessageTrigger>
                )}
              </S.MessageBox>
            </S.InfoList>
          </InfoSection>

          <InfoSection id="points-info" title="적립금 사용">
            <S.PointRows>
              <S.InfoRow>
                <span>보유 적립금</span>
                <p>원</p>
              </S.InfoRow>
              <S.PointInputRow>
                <span>적립금 입력</span>
                <p>사용할 적립금을 입력해주세요.</p>
                <button type="button">전액사용</button>
              </S.PointInputRow>
              <small>
                사용 가능 적립금 <strong>원</strong>
              </small>
            </S.PointRows>
          </InfoSection>

          <InfoSection id="payment-method" title="결제수단">
            <S.PaymentOptions>
              <label>
                <input type="radio" name="payment" defaultChecked />
                <p>신용/체크카드</p>
              </label>
              <label>
                <input type="radio" name="payment" />
                <p>무통장입금</p>
              </label>
            </S.PaymentOptions>
            <S.PaymentSelect>
              <S.PaymentTrigger
                type="button"
                aria-expanded={isCardCompanyOpen}
                aria-haspopup="listbox"
                onClick={() => setIsCardCompanyOpen((isOpen) => !isOpen)}
              >
                <span>{selectedCardCompany || "카드사 선택"}</span>
                <span aria-hidden="true">▾</span>
              </S.PaymentTrigger>
              {isCardCompanyOpen && (
                <S.PaymentOptionsList role="listbox" aria-label="카드사 목록">
                  {cardCompanies.map((cardCompany) => (
                    <S.PaymentOption
                      key={cardCompany}
                      type="button"
                      role="option"
                      aria-selected={selectedCardCompany === cardCompany}
                      onClick={() => {
                        setSelectedCardCompany(cardCompany);
                        setIsCardCompanyOpen(false);
                      }}
                    >
                      {cardCompany}
                    </S.PaymentOption>
                  ))}
                </S.PaymentOptionsList>
              )}
            </S.PaymentSelect>
          </InfoSection>
        </S.MainColumn>

        <S.SideColumn>
          <S.PriceSummary>
            <S.SectionTitle>결제 금액</S.SectionTitle>
            {priceRows.map(([label, price]) => (
              <S.PriceRow key={label}>
                <span>{label}</span>
                <p>{price}</p>
              </S.PriceRow>
            ))}
            <S.TotalRow>
              <span>총 결제금액</span>
              <p>원</p>
            </S.TotalRow>
            <S.RewardRow>
              <span>결제 후 적립 예정</span>
              <p>원</p>
            </S.RewardRow>
          </S.PriceSummary>

          <S.AgreementBox>
            <label>
              <input type="checkbox" />
              <p>전체 동의</p>
            </label>
            <p>주문 상품 및 결제정보를 확인하였으며 구매에 동의합니다.</p>
          </S.AgreementBox>

          <S.SubmitButton type="button">원 결제하기</S.SubmitButton>
        </S.SideColumn>
      </S.CheckoutLayout>
    </S.CheckoutPage>
  );
}

export default CheckoutPage;
