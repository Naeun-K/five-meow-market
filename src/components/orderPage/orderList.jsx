import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./orderListStyle";
import EmptyOrder from "../../assets/EmptyOrder.webp";
import ForwardButton from "../common/forwardBtn/ForwardButton";

const TABS = [
  { key: "all", label: "전체" },
  { key: "paid", label: "결제완료" },
  { key: "preparing", label: "상품준비중" },
  { key: "shipping", label: "배송중" },
  { key: "delivered", label: "배송완료" },
  { key: "cancelExchange", label: "취소/교환/반품" },
];

const ORDERS = [];

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

function OrderCard({ order, onViewDetail }) {
  return (
    <S.OrderCard>
      <S.Thumb>
        <S.ThumbIconWrap>
          <ProductBoxIcon />
        </S.ThumbIconWrap>
      </S.Thumb>

      <S.OrderInfo>
        <S.OrderHeader>
          <S.OrderLabelText>{order.orderLabel}</S.OrderLabelText>

          <S.OrderIdText>{order.id}</S.OrderIdText>

          <S.StatusBadge variant={order.statusVariant}>
            {order.statusLabel}
          </S.StatusBadge>
        </S.OrderHeader>

        <S.MetaList>
          <S.MetaRow>주문일 {order.date}</S.MetaRow>

          <S.MetaDivider>|</S.MetaDivider>

          <S.MetaRow>주문자 {order.buyer}</S.MetaRow>
        </S.MetaList>

        <S.OrderSummaryRow>
          <S.OrderCount>총 {order.count}건</S.OrderCount>

          <S.OrderTotal>{order.total}</S.OrderTotal>
        </S.OrderSummaryRow>
      </S.OrderInfo>

      <S.DetailButton type="button" onClick={() => onViewDetail(order.id)}>
        <S.DetailButtonText>주문 상세보기</S.DetailButtonText>

        <S.DetailArrow>
          <ChevronRightIcon />
        </S.DetailArrow>
      </S.DetailButton>
    </S.OrderCard>
  );
}

export default function OrderList() {
  const [activeTab, setActiveTab] = useState("all");

  const navigate = useNavigate();

  const handleViewDetail = (orderId) => {
    navigate(`/mypage/orders/${orderId}`);
  };

  const filteredOrders =
    activeTab === "all"
      ? ORDERS
      : ORDERS.filter((order) => order.statusVariant === activeTab);

  if (ORDERS.length === 0) {
    return (
      <S.EmptyOrderStyle>
        <ForwardButton onClick={() => navigate("/mypage")}>
          마이페이지로
        </ForwardButton>
        <S.Header>
          <S.Title>주문/배송내역</S.Title>

          <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
        </S.Header>
        <div className="empty-image-container">
          <img
            src={EmptyOrder}
            alt="주문 내역이 없는 상태를 나타내는 고양이"
            className="empty-image"
          />
        </div>

        <div className="empty-text-container">
          <strong>아직 주문 내역이 없어요</strong>
          <p>마음에 드는 상품을 찾아보러 가볼까요?</p>
        </div>

        <button
          type="button"
          className="navProduct"
          onClick={() => navigate("/products")}
        >
          상품 보러가기
        </button>
      </S.EmptyOrderStyle>
    );
  }
  return (
    <S.Page>
      <ForwardButton onClick={() => navigate("/mypage")}>
        마이페이지로
      </ForwardButton>
      <S.Header>
        <S.Title>주문/배송내역</S.Title>

        <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
      </S.Header>

      <S.SearchBar>
        <S.FilterSelect>
          <option value="all">주문 전체</option>
        </S.FilterSelect>

        <S.SearchInputWrap>
          <S.SearchInput placeholder="주문번호, 상품명 검색" />

          <S.SearchIconButton type="button" aria-label="검색">
            <SearchIcon />
          </S.SearchIconButton>
        </S.SearchInputWrap>
      </S.SearchBar>

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

      <S.OrderList>
        {filteredOrders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onViewDetail={handleViewDetail}
          />
        ))}
      </S.OrderList>

      <S.LoadMoreWrap>
        <S.LoadMoreButton type="button">
          더 보기
          <ChevronDownIcon />
        </S.LoadMoreButton>
      </S.LoadMoreWrap>
    </S.Page>
  );
}
