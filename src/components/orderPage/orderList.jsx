import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./orderListStyle";

{/* 주문 상태 데이터 */}
const TABS = [
  { key: "all", label: "전체" },
  { key: "paid", label: "결제완료" },
  { key: "preparing", label: "상품준비중" },
  { key: "shipping", label: "배송중" },
  { key: "delivered", label: "배송완료" },
  { key: "cancelExchange", label: "취소/교환/반품" },
];

{/* 주문 목록 데이터 */}
const ORDERS = [
  {
    id: "202405012345",
    orderLabel: "주문번호",
    statusLabel: "배송완료",
    statusVariant: "delivered",
    date: "2024.05.01",
    buyer: "홍길동",
    count: 3,
    total: "45,200원",
  },
  {
    id: "202404281234",
    orderLabel: "주문번호",
    statusLabel: "배송중",
    statusVariant: "shipping",
    date: "2024.04.28",
    buyer: "홍길동",
    count: 2,
    total: "32,800원",
  },
  {
    id: "202404210987",
    orderLabel: "주문번호",
    statusLabel: "상품준비중",
    statusVariant: "preparing",
    date: "2024.04.21",
    buyer: "홍길동",
    count: 1,
    total: "12,900원",
  },
  {
    id: "202404150456",
    orderLabel: "주문번호",
    statusLabel: "배송완료",
    statusVariant: "delivered",
    date: "2024.04.15",
    buyer: "홍길동",
    count: 4,
    total: "78,600원",
  },
  {
    id: "202404080123",
    orderLabel: "주문번호",
    statusLabel: "결제완료",
    statusVariant: "paid",
    date: "2024.04.08",
    buyer: "홍길동",
    count: 2,
    total: "25,800원",
  },
];

{/* 상품 박스 안에 들어간 아이콘 */}
function ProductBoxIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

{/* 상품 상세부분 오른쪽 화살표 SVG */}
function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
      />
    </svg>
  );
}

{/* 더보기 아래 화살표 SVG */}
function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
      />
    </svg>
  );
}

{/* 검색창 돋보기 SVG */}
function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

{/* 개별 주문 카드 창 컴포넌트 */}
function OrderCard({ order, onViewDetail }) {
  return (
    <S.OrderCard>

      {/* 상품 이미지 및 아이콘 영역 */}
      <S.Thumb>
        <S.ThumbIconWrap>
          <ProductBoxIcon />
        </S.ThumbIconWrap>
      </S.Thumb>
      
      {/* 주문번호 전체 영역 */}
      <S.OrderInfo>

        {/* 주문 번호 및 주문 상태 영역*/}
        <S.OrderHeader>
          <S.OrderLabelText>
            {order.orderLabel}
          </S.OrderLabelText>

          <S.OrderIdText>
            {order.id}
          </S.OrderIdText>

          {/* 주문 상태에 따라 색상 변경하는 뱃지 */}
          <S.StatusBadge variant={order.statusVariant}>
            {order.statusLabel}
          </S.StatusBadge>
        </S.OrderHeader>
        
        {/* 주문 날짜 및 주문자 정보 */}
        <S.MetaList>
          <S.MetaRow>
            주문일 {order.date}
          </S.MetaRow>

          <S.MetaDivider>|</S.MetaDivider>

          <S.MetaRow>
            주문자 {order.buyer}
          </S.MetaRow>
        </S.MetaList>

        {/* 총 상품 개수 및 총 주문 금액 */}
        <S.OrderSummaryRow>
          <S.OrderCount>
            총 {order.count}건
          </S.OrderCount>

          <S.OrderTotal>
            {order.total}
          </S.OrderTotal>
        </S.OrderSummaryRow>
      </S.OrderInfo>

      {/* 주문 상세 페이지 이동 버튼 */}
      <S.DetailButton
        type="button"
        onClick={() => onViewDetail(order.id)}
      >
        <S.DetailButtonText>
          주문 상세보기
        </S.DetailButtonText>
        
        {/* 오른쪽 화살표 SVG */}
        <S.DetailArrow>
          <ChevronRightIcon />
        </S.DetailArrow>
      </S.DetailButton>
    </S.OrderCard>
  );
}

{/* 주문 목록 페이지 */}
export default function OrderList() {

  {/* 현재 선택된 주문상태 탭 */}
  const [activeTab, setActiveTab] = useState("all");

  {/* 페이지 이동 함수  */}
  const navigate = useNavigate();

  {/* 주문 상세 페이지로 이동  */}
  const handleViewDetail = (orderId) => {
    navigate(`/orders/${orderId}`);
  };

  {/* 주문 목록 필터링 (전체 탭, 특정 상태 탭 등)  */}
  const filteredOrders =
    activeTab === "all"
      ? ORDERS
      : ORDERS.filter(
          (order) => order.statusVariant === activeTab
        );

  return (
    <S.Page>

      {/* 페이지 제목  */}
      <S.Header>
        <S.Title>주문/배송내역</S.Title>

        <S.Subtitle>
          고객님의 주문 내역을 확인해보세요.
        </S.Subtitle>
      </S.Header>

      {/* 주문 검색 영역 */}
      <S.SearchBar>
        <S.FilterSelect>
          <option value="all">주문 전체</option>
        </S.FilterSelect>

        <S.SearchInputWrap>
          <S.SearchInput
            placeholder="주문번호, 상품명 검색"
          />

          <S.SearchIconButton
            type="button"
            aria-label="검색"
          >
            <SearchIcon />
          </S.SearchIconButton>
        </S.SearchInputWrap>
      </S.SearchBar>
      
      {/* 주문 상태 필터 탭 ( 탭 클릭시 해당 상태 필터링 ) */}
      <S.TabList>
        {TABS.map((tab) => (
          <S.TabButton
            key={tab.key}
            type="button"
            isActive={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </S.TabButton>
        ))}
      </S.TabList>

      {/* 주문 목록 카드 형태로 출력하는 라인 */}
      <S.OrderList>
        {filteredOrders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onViewDetail={handleViewDetail}
          />
        ))}
      </S.OrderList>
      
      {/* 더보기 버튼 및 SVG 영역 */}
      <S.LoadMoreWrap>
        <S.LoadMoreButton type="button">
          더 보기
          <ChevronDownIcon />
        </S.LoadMoreButton>
      </S.LoadMoreWrap>
    </S.Page>
  );
}