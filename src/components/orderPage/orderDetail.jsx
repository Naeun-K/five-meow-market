import React, { useState } from "react";
import * as S from "./orderStyle";

function OrderRow({ label, children }) {
  return (
    <S.InfoRow>
      <S.InfoLabel>{label}</S.InfoLabel>
      {children}
    </S.InfoRow>
  );
}

function Chevron({ isOpen }) {
  return (
    <S.ChevronIcon
      isOpen={isOpen}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" />
    </S.ChevronIcon>
  );
}

function CollapsiblePanel({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Panel>
      <S.AccordionHeader onClick={() => setIsOpen((prev) => !prev)}>
        {title}
        <Chevron isOpen={isOpen} />
      </S.AccordionHeader>
      <S.PanelBody isOpen={isOpen}>{children}</S.PanelBody>
    </S.Panel>
  );
}

function ProductItem() {
  return (
    <S.ProductItemWrap>
      <S.Thumb>
        <S.ThumbText></S.ThumbText>
      </S.Thumb>

      <S.ProductBody>
        <S.ProductName></S.ProductName>
        <S.ProductOption></S.ProductOption>
        <S.PriceRow>
          <S.ProductPrice></S.ProductPrice>
          <S.ProductQty></S.ProductQty>
        </S.PriceRow>
      </S.ProductBody>

      <S.ProductActions>
        <S.StatusBadgeSmall></S.StatusBadgeSmall>
        <S.ActionButtons>
          <S.GhostButton>구매평 작성</S.GhostButton>
          <S.GhostButton>반품/교환</S.GhostButton>
        </S.ActionButtons>
      </S.ProductActions>
    </S.ProductItemWrap>
  );
}

export default function OrderDetail() {
  return (
    <S.Page>
      <S.Breadcrumb href="#">← 주문/배송내역으로 돌아가기</S.Breadcrumb>

      <S.Header>
        <S.Title>주문 상세보기</S.Title>
        <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
      </S.Header>

      <S.SummaryBar>
        <OrderRow label="주문일">
          <S.InfoValue></S.InfoValue>
        </OrderRow>
        <OrderRow label="주문번호">
          <S.InfoValue></S.InfoValue>
        </OrderRow>
        <OrderRow label="주문자">
          <S.InfoValue></S.InfoValue>
        </OrderRow>
        <OrderRow label="주문상태">
          <S.StatusBadge></S.StatusBadge>
        </OrderRow>
        <OrderRow label="주문 총 금액">
          <S.InfoValueStrong></S.InfoValueStrong>
        </OrderRow>
      </S.SummaryBar>

      <S.Section>
        <S.SectionTitle>주문 상품</S.SectionTitle>
        <S.ProductList>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </S.ProductList>
      </S.Section>

      <S.BottomGrid>
        <CollapsiblePanel title="배송 정보">
          <S.PanelRow>
            <S.PanelLabel>받는 분</S.PanelLabel>
            <S.PanelValue></S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>연락처</S.PanelLabel>
            <S.PanelValue></S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송지</S.PanelLabel>
            <S.PanelValueGroup>
              <S.PanelValue></S.PanelValue>
              <S.PanelValueSub></S.PanelValueSub>
            </S.PanelValueGroup>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송요청사항</S.PanelLabel>
            <S.PanelValue></S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송방법</S.PanelLabel>
            <S.PanelValue>택배배송</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>송장번호</S.PanelLabel>
            <S.TrackingGroup>
              <S.PanelValue>1234-5678-9012</S.PanelValue>
              <S.LinkButton>배송조회</S.LinkButton>
            </S.TrackingGroup>
          </S.PanelRow>
        </CollapsiblePanel>

        <CollapsiblePanel title="결제 정보">
          <S.PanelRow>
            <S.PanelLabel>상품금액</S.PanelLabel>
            <S.PanelValue></S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송비</S.PanelLabel>
            <S.PanelValue></S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>쿠폰할인</S.PanelLabel>
            <S.PanelValue></S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>포인트 사용</S.PanelLabel>
            <S.PanelValue></S.PanelValue>
          </S.PanelRow>

          <S.Divider />

          <S.PanelRow>
            <S.PanelLabel>총 결제금액</S.PanelLabel>
            <S.InfoValueStrong></S.InfoValueStrong>
          </S.PanelRow>

          <S.Divider />

          <S.PanelRow>
            <S.PanelLabel>결제수단</S.PanelLabel>
            <S.PanelValue></S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>결제일시</S.PanelLabel>
            <S.PanelValue></S.PanelValue>
          </S.PanelRow>
        </CollapsiblePanel>
      </S.BottomGrid>
    </S.Page>
  );
}