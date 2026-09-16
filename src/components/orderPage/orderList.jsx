// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import * as S from "./orderListStyle";
// import EmptyOrder from "../../assets/EmptyOrder.webp";
// import ForwardButton from "../common/forwardBtn/ForwardButton";

// const TABS = [
//   { key: "all", label: "전체" },
//   { key: "paid", label: "결제완료" },
//   { key: "preparing", label: "상품준비중" },
//   { key: "shipping", label: "배송중" },
//   { key: "delivered", label: "배송완료" },
//   { key: "cancelExchange", label: "취소/교환/반품" },
// ];

// const ORDERS = [];

// function ProductBoxIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       aria-hidden="true"
//     >
//       <path d="M21 8l-9-5-9 5 9 5 9-5z" />
//       <path d="M3 8v8l9 5 9-5V8" />
//       <path d="M12 13v8" />
//     </svg>
//   );
// }

// function ChevronRightIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 16 16"
//       fill="currentColor"
//       aria-hidden="true"
//     >
//       <path
//         fillRule="evenodd"
//         d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
//       />
//     </svg>
//   );
// }

// function ChevronDownIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 16 16"
//       fill="currentColor"
//       aria-hidden="true"
//     >
//       <path
//         fillRule="evenodd"
//         d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
//       />
//     </svg>
//   );
// }

// function SearchIcon() {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       aria-hidden="true"
//     >
//       <circle cx="11" cy="11" r="7" />
//       <line x1="21" y1="21" x2="16.65" y2="16.65" />
//     </svg>
//   );
// }

// function OrderCard({ order, onViewDetail }) {
//   return (
//     <S.OrderCard>
//       <S.Thumb>
//         <S.ThumbIconWrap>
//           <ProductBoxIcon />
//         </S.ThumbIconWrap>
//       </S.Thumb>

//       <S.OrderInfo>
//         <S.OrderHeader>
//           <S.OrderLabelText>{order.orderLabel}</S.OrderLabelText>

//           <S.OrderIdText>{order.id}</S.OrderIdText>

//           <S.StatusBadge variant={order.statusVariant}>
//             {order.statusLabel}
//           </S.StatusBadge>
//         </S.OrderHeader>

//         <S.MetaList>
//           <S.MetaRow>주문일 {order.date}</S.MetaRow>

//           <S.MetaDivider>|</S.MetaDivider>

//           <S.MetaRow>주문자 {order.buyer}</S.MetaRow>
//         </S.MetaList>

//         <S.OrderSummaryRow>
//           <S.OrderCount>총 {order.count}건</S.OrderCount>

//           <S.OrderTotal>{order.total}</S.OrderTotal>
//         </S.OrderSummaryRow>
//       </S.OrderInfo>

//       <S.DetailButton type="button" onClick={() => onViewDetail(order.id)}>
//         <S.DetailButtonText>주문 상세보기</S.DetailButtonText>

//         <S.DetailArrow>
//           <ChevronRightIcon />
//         </S.DetailArrow>
//       </S.DetailButton>
//     </S.OrderCard>
//   );
// }

// export default function OrderList() {
//   const [activeTab, setActiveTab] = useState("all");

//   const navigate = useNavigate();

//   const handleViewDetail = (orderId) => {
//     navigate(`/mypage/orders/${orderId}`);
//   };

//   const filteredOrders =
//     activeTab === "all"
//       ? ORDERS
//       : ORDERS.filter((order) => order.statusVariant === activeTab);

//   if (ORDERS.length === 0) {
//     return (
//       <S.EmptyOrderStyle>
//         <ForwardButton onClick={() => navigate("/mypage")}>
//           마이페이지로
//         </ForwardButton>
//         <S.Header>
//           <S.Title>주문/배송내역</S.Title>

//           <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
//         </S.Header>
//         <div className="empty-image-container">
//           <img
//             src={EmptyOrder}
//             alt="주문 내역이 없는 상태를 나타내는 고양이"
//             className="empty-image"
//           />
//         </div>

//         <div className="empty-text-container">
//           <strong>아직 주문 내역이 없어요</strong>
//           <p>마음에 드는 상품을 찾아보러 가볼까요?</p>
//         </div>

//         <button
//           type="button"
//           className="navProduct"
//           onClick={() => navigate("/products")}
//         >
//           상품 보러가기
//         </button>
//       </S.EmptyOrderStyle>
//     );
//   }
//   return (
//     <S.Page>
//       <ForwardButton onClick={() => navigate("/mypage")}>
//         마이페이지로
//       </ForwardButton>
//       <S.Header>
//         <S.Title>주문/배송내역</S.Title>

//         <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
//       </S.Header>

//       <S.SearchBar>
//         <S.FilterSelect>
//           <option value="all">주문 전체</option>
//         </S.FilterSelect>

//         <S.SearchInputWrap>
//           <S.SearchInput placeholder="주문번호, 상품명 검색" />

//           <S.SearchIconButton type="button" aria-label="검색">
//             <SearchIcon />
//           </S.SearchIconButton>
//         </S.SearchInputWrap>
//       </S.SearchBar>

//       <S.TabList>
//         {TABS.map((tab) => (
//           <S.TabButton
//             key={tab.key}
//             type="button"
//             isActive={activeTab === tab.key}
//             onClick={() => setActiveTab(tab.key)}
//           >
//             {tab.label}
//           </S.TabButton>
//         ))}
//       </S.TabList>

//       <S.OrderList>
//         {filteredOrders.map((order) => (
//           <OrderCard
//             key={order.id}
//             order={order}
//             onViewDetail={handleViewDetail}
//           />
//         ))}
//       </S.OrderList>

//       <S.LoadMoreWrap>
//         <S.LoadMoreButton type="button">
//           더 보기
//           <ChevronDownIcon />
//         </S.LoadMoreButton>
//       </S.LoadMoreWrap>
//     </S.Page>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./orderListStyle";
import EmptyOrder from "../../assets/EmptyOrder.webp";
import ForwardButton from "../common/forwardBtn/ForwardButton";
import * as orderService from "../../services/orderServices";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import Loader from "../loader/Loader";

const TABS = [
  { key: "ALL", label: "전체" },
  { key: "PAYMENT_COMPLETED", label: "결제완료" },
  { key: "PREPARING_SHIPMENT", label: "상품준비중" },
  { key: "SHIPPING", label: "배송중" },
  { key: "DELIVERED", label: "배송완료" },
  { key: "CLAIM", label: "취소/교환/반품" },
];

const STATUS_LABELS = {
  PAYMENT_COMPLETED: "결제완료",
  PREPARING_SHIPMENT: "상품준비중",
  SHIPPING: "배송중",
  DELIVERED: "배송완료",
  CONFIRMED: "구매결정",
  CANCELED: "주문취소",
};

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

function formatDate(dateString) {
  if (!dateString) {
    return "";
  }

  return new Date(dateString).toLocaleDateString("ko-KR");
}

function formatPrice(price) {
  return `${Number(price ?? 0).toLocaleString()}원`;
}

function OrderCard({ order, onViewDetail }) {
  const firstItem = order.items?.[0];

  const statusLabel = STATUS_LABELS[order.status] ?? order.status;

  return (
    <S.OrderCard>
      <S.Thumb>
        {firstItem?.thumbnail ? (
          <img src={firstItem.thumbnail} alt={firstItem.name} />
        ) : (
          <S.ThumbIconWrap>
            <ProductBoxIcon />
          </S.ThumbIconWrap>
        )}
      </S.Thumb>

      <S.OrderInfo>
        <S.OrderHeader>
          <S.OrderLabelText>{firstItem?.name ?? "주문 상품"}</S.OrderLabelText>

          <S.OrderIdText>{order.orderId}</S.OrderIdText>

          <S.StatusBadge variant={order.status}>{statusLabel}</S.StatusBadge>
        </S.OrderHeader>

        <S.MetaList>
          <S.MetaRow>주문일 {formatDate(order.createdAt)}</S.MetaRow>
        </S.MetaList>

        <S.OrderSummaryRow>
          <S.OrderCount>총 {order.totalItemCount ?? 0}건</S.OrderCount>

          <S.OrderTotal>{formatPrice(order.finalAmount)}</S.OrderTotal>
        </S.OrderSummaryRow>
      </S.OrderInfo>

      <S.DetailButton type="button" onClick={() => onViewDetail(order.orderId)}>
        <S.DetailButtonText>주문 상세보기</S.DetailButtonText>

        <S.DetailArrow>
          <ChevronRightIcon />
        </S.DetailArrow>
      </S.DetailButton>
    </S.OrderCard>
  );
}

export default function OrderList() {
  const [activeTab, setActiveTab] = useState("ALL");

  const [orders, setOrders] = useState([]);

  const [keyword, setKeyword] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");

  const [period, setPeriod] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const navigate = useNavigate();

  const { accessToken, isAuthLoading } = useAuth();

  const { showToast } = useToast();

  useEffect(() => {
    if (isAuthLoading || !accessToken) {
      return;
    }

    const fetchOrders = async () => {
      try {
        if (currentPage === 1) {
          setIsLoading(true);
        } else {
          setIsLoadingMore(true);
        }

        const result = await orderService.getOrders(
          {
            period,
            status: activeTab,
            keyword: searchKeyword,
            page: currentPage,
            limit: 5,
          },
          accessToken,
        );

        if (!result.success) {
          throw new Error(result.message || "주문 내역을 불러오지 못했습니다.");
        }

        if (currentPage === 1) {
          setOrders(result.orders);
        } else {
          setOrders((prevOrders) => [...prevOrders, ...result.orders]);
        }

        setTotalPages(result.pagination?.totalPages ?? 1);
      } catch (error) {
        console.error("주문 내역 조회 실패:", error);

        showToast(error.message || "주문 내역을 불러오지 못했습니다.", false);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    };

    fetchOrders();
  }, [
    accessToken,
    isAuthLoading,
    activeTab,
    period,
    searchKeyword,
    currentPage,
    showToast,
  ]);

  const handleViewDetail = (orderId) => {
    navigate(`/mypage/orders/${orderId}`);
  };

  const handleTabChange = (status) => {
    setActiveTab(status);
    setCurrentPage(1);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setSearchKeyword(keyword.trim());
    setCurrentPage(1);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleLoadMore = () => {
    if (isLoadingMore || currentPage >= totalPages) {
      return;
    }

    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (isAuthLoading || isLoading) {
    return <Loader />;
  }

  if (orders.length === 0) {
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
        <S.FilterSelect value={period} onChange={handlePeriodChange}>
          <option value="all">주문 전체</option>

          <option value="3m">최근 3개월</option>

          <option value="6m">최근 6개월</option>

          <option value="1y">최근 1년</option>
        </S.FilterSelect>

        <S.SearchInputWrap>
          <S.SearchInput
            value={keyword}
            placeholder="주문번호, 상품명 검색"
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={handleSearchKeyDown}
          />

          <S.SearchIconButton
            type="button"
            aria-label="검색"
            onClick={handleSearch}
          >
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
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.label}
          </S.TabButton>
        ))}
      </S.TabList>

      <S.OrderList>
        {orders.map((order) => (
          <OrderCard
            key={order.orderId}
            order={order}
            onViewDetail={handleViewDetail}
          />
        ))}
      </S.OrderList>

      {currentPage < totalPages && (
        <S.LoadMoreWrap>
          <S.LoadMoreButton
            type="button"
            onClick={handleLoadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? "불러오는 중..." : "더 보기"}

            {!isLoadingMore && <ChevronDownIcon />}
          </S.LoadMoreButton>
        </S.LoadMoreWrap>
      )}
    </S.Page>
  );
}
