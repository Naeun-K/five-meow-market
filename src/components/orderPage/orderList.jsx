// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import * as S from "./orderListStyle";
// import * as orderService from "../../services/orderServices";

// import EmptyOrder from "../../assets/EmptyOrder.webp";

// import ForwardButton from "../common/forwardBtn/ForwardButton";
// import Loader from "../loader/Loader";

// import useAuth from "../../hooks/useAuth";
// import useToast from "../../hooks/useToast";

// /*
//  * 주문 목록 탭
//  *
//  * CLAIM은 주문 상태가 아니라 취소·교환·반품 내역이 있는
//  * 주문을 조회하기 위한 필터값입니다.
//  */
// const TABS = [
//   {
//     key: "ALL",
//     label: "전체",
//   },
//   {
//     key: "PAYMENT_COMPLETED",
//     label: "결제완료",
//   },
//   {
//     key: "PREPARING_SHIPMENT",
//     label: "상품준비중",
//   },
//   {
//     key: "SHIPPING",
//     label: "배송중",
//   },
//   {
//     key: "DELIVERED",
//     label: "배송완료",
//   },
//   {
//     key: "CLAIM",
//     label: "취소/교환/반품",
//   },
// ];

// /*
//  * 일반 주문 상태 표시 문구
//  */
// const STATUS_LABELS = {
//   PAYMENT_COMPLETED: "결제완료",
//   PREPARING_SHIPMENT: "상품준비중",
//   SHIPPING: "배송중",
//   DELIVERED: "배송완료",
//   CONFIRMED: "구매결정",
//   CANCELED: "주문취소",
// };

// /*
//  * Claim 유형 표시 문구
//  */
// const CLAIM_TYPE_LABELS = {
//   CANCEL: "취소",
//   EXCHANGE: "교환",
//   RETURN: "반품",
// };

// /*
//  * Claim 처리 상태 표시 문구
//  */
// const CLAIM_STATUS_LABELS = {
//   REQUESTED: "신청완료",
//   PROCESSING: "처리중",
//   COMPLETED: "처리완료",
//   REJECTED: "처리불가",
// };

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

// /*
//  * 주문 날짜 변환
//  */
// function formatDate(dateString) {
//   if (!dateString) {
//     return "-";
//   }

//   return new Date(dateString).toLocaleDateString("ko-KR");
// }

// /*
//  * 금액 변환
//  */
// function formatPrice(price) {
//   return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
// }

// /*
//  * Claim 상태를 화면에 표시할 문구로 변환합니다.
//  *
//  * 예:
//  * CANCEL + REQUESTED  -> 취소 신청완료
//  * RETURN + PROCESSING -> 반품 처리중
//  * EXCHANGE + COMPLETED -> 교환 처리완료
//  */
// function getClaimStatusLabel(claimSummary) {
//   if (!claimSummary) {
//     return null;
//   }

//   const typeLabel = CLAIM_TYPE_LABELS[claimSummary.type] ?? claimSummary.type;

//   const statusLabel =
//     CLAIM_STATUS_LABELS[claimSummary.status] ?? claimSummary.status;

//   return `${typeLabel} ${statusLabel}`;
// }

// /*
//  * 주문 카드에 표시할 상태를 계산합니다.
//  *
//  * 서버의 실제 주문 상태가 CANCELED라면 "주문취소"를 표시합니다.
//  *
//  * 주문 상태가 아직 PAYMENT_COMPLETED여도 취소 Claim이 REQUESTED라면
//  * "취소 신청완료"를 표시합니다.
//  */
// function getOrderStatusInfo(order) {
//   /*
//    * 서버에서 주문 상태가 최종적으로 취소 처리된 경우
//    */
//   if (order.status === "CANCELED") {
//     return {
//       label: STATUS_LABELS.CANCELED,
//       variant: "CANCELED",
//     };
//   }

//   /*
//    * 주문 목록 응답에 claimSummary가 포함된 경우
//    */
//   if (order.claimSummary) {
//     return {
//       label: getClaimStatusLabel(order.claimSummary),
//       variant: "CLAIM",
//     };
//   }

//   /*
//    * Claim이 없는 일반 주문
//    */
//   return {
//     label: STATUS_LABELS[order.status] ?? order.status ?? "-",
//     variant: order.status,
//   };
// }

// function OrderCard({ order, onViewDetail }) {
//   const firstItem = order.items?.[0];

//   const statusInfo = getOrderStatusInfo(order);

//   return (
//     <S.OrderCard>
//       <S.Thumb>
//         {firstItem?.thumbnail ? (
//           <img src={firstItem.thumbnail} alt={firstItem.name} />
//         ) : (
//           <S.ThumbIconWrap>
//             <ProductBoxIcon />
//           </S.ThumbIconWrap>
//         )}
//       </S.Thumb>

//       <S.OrderInfo>
//         <S.OrderHeader>
//           <S.OrderLabelText>{firstItem?.name ?? "주문 상품"}</S.OrderLabelText>

//           <S.OrderIdText>{order.orderId}</S.OrderIdText>

//           <S.StatusBadge variant={statusInfo.variant}>
//             {statusInfo.label}
//           </S.StatusBadge>
//         </S.OrderHeader>

//         <S.MetaList>
//           <S.MetaRow>주문일 {formatDate(order.createdAt)}</S.MetaRow>
//         </S.MetaList>

//         <S.OrderSummaryRow>
//           <S.OrderCount>
//             총 {order.totalItemCount ?? order.items?.length ?? 0}건
//           </S.OrderCount>

//           <S.OrderTotal>{formatPrice(order.finalAmount)}</S.OrderTotal>
//         </S.OrderSummaryRow>
//       </S.OrderInfo>

//       <S.DetailButton type="button" onClick={() => onViewDetail(order.orderId)}>
//         <S.DetailButtonText>주문 상세보기</S.DetailButtonText>

//         <S.DetailArrow>
//           <ChevronRightIcon />
//         </S.DetailArrow>
//       </S.DetailButton>
//     </S.OrderCard>
//   );
// }

// export default function OrderList() {
//   const [activeTab, setActiveTab] = useState("ALL");

//   const [orders, setOrders] = useState([]);

//   /*
//    * 입력창에 현재 작성 중인 검색어
//    */
//   const [keyword, setKeyword] = useState("");

//   /*
//    * 실제 API에 전달하는 검색어
//    */
//   const [searchKeyword, setSearchKeyword] = useState("");

//   const [period, setPeriod] = useState("all");

//   const [currentPage, setCurrentPage] = useState(1);

//   const [totalPages, setTotalPages] = useState(1);

//   const [isLoading, setIsLoading] = useState(true);

//   const [isLoadingMore, setIsLoadingMore] = useState(false);

//   const navigate = useNavigate();

//   const { accessToken, isAuthLoading } = useAuth();

//   const { showToast } = useToast();

//   /*
//    * 주문 목록 조회
//    *
//    * Effect 안에서 API 호출 전에 setIsLoading을 동기적으로
//    * 실행하지 않습니다.
//    *
//    * 로딩 상태 변경은 탭, 기간, 검색, 더 보기 등의
//    * 사용자 이벤트 핸들러에서 처리합니다.
//    */
//   useEffect(() => {
//     if (isAuthLoading || !accessToken) {
//       return;
//     }

//     let isCancelled = false;

//     orderService
//       .getOrders(
//         {
//           period,
//           status: activeTab,
//           keyword: searchKeyword,
//           page: currentPage,
//           limit: 5,
//         },
//         accessToken,
//       )
//       .then((result) => {
//         if (isCancelled) {
//           return;
//         }

//         if (!result.success) {
//           throw new Error(result.message || "주문 내역을 불러오지 못했습니다.");
//         }

//         /*
//          * 첫 페이지이면 기존 목록을 교체합니다.
//          * 다음 페이지이면 기존 목록 뒤에 추가합니다.
//          */
//         if (currentPage === 1) {
//           setOrders(result.orders);
//         } else {
//           setOrders((previousOrders) => [...previousOrders, ...result.orders]);
//         }

//         setTotalPages(result.pagination?.totalPages ?? 1);
//       })
//       .catch((error) => {
//         if (isCancelled) {
//           return;
//         }

//         console.error("주문 내역 조회 실패:", error);

//         showToast(error.message || "주문 내역을 불러오지 못했습니다.", false);
//       })
//       .finally(() => {
//         if (isCancelled) {
//           return;
//         }

//         setIsLoading(false);
//         setIsLoadingMore(false);
//       });

//     return () => {
//       isCancelled = true;
//     };
//   }, [
//     accessToken,
//     isAuthLoading,
//     activeTab,
//     period,
//     searchKeyword,
//     currentPage,
//     showToast,
//   ]);

//   /*
//    * 주문 상세 페이지 이동
//    */
//   const handleViewDetail = (orderId) => {
//     navigate(`/mypage/orders/${orderId}`);
//   };

//   /*
//    * 주문 상태 탭 변경
//    */
//   const handleTabChange = (status) => {
//     if (status === activeTab) {
//       return;
//     }

//     setIsLoading(true);
//     setOrders([]);
//     setActiveTab(status);
//     setCurrentPage(1);
//   };

//   /*
//    * 조회 기간 변경
//    */
//   const handlePeriodChange = (event) => {
//     const nextPeriod = event.target.value;

//     if (nextPeriod === period) {
//       return;
//     }

//     setIsLoading(true);
//     setOrders([]);
//     setPeriod(nextPeriod);
//     setCurrentPage(1);
//   };

//   /*
//    * 검색 실행
//    */
//   const handleSearch = () => {
//     const nextKeyword = keyword.trim();

//     /*
//      * 같은 검색어로 다시 검색하면서 로딩 상태가
//      * 끝나지 않는 상황을 방지합니다.
//      */
//     if (nextKeyword === searchKeyword && currentPage === 1) {
//       return;
//     }

//     setIsLoading(true);
//     setOrders([]);
//     setSearchKeyword(nextKeyword);
//     setCurrentPage(1);
//   };

//   /*
//    * 검색창에서 Enter 입력 처리
//    */
//   const handleSearchKeyDown = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   /*
//    * 다음 페이지 조회
//    */
//   const handleLoadMore = () => {
//     if (isLoadingMore || currentPage >= totalPages) {
//       return;
//     }

//     setIsLoadingMore(true);

//     setCurrentPage((previousPage) => previousPage + 1);
//   };

//   if (isAuthLoading || isLoading) {
//     return <Loader />;
//   }

//   if (orders.length === 0) {
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
//         <S.FilterSelect value={period} onChange={handlePeriodChange}>
//           <option value="all">주문 전체</option>

//           <option value="3m">최근 3개월</option>

//           <option value="6m">최근 6개월</option>

//           <option value="1y">최근 1년</option>
//         </S.FilterSelect>

//         <S.SearchInputWrap>
//           <S.SearchInput
//             value={keyword}
//             placeholder="주문번호, 상품명 검색"
//             onChange={(event) => setKeyword(event.target.value)}
//             onKeyDown={handleSearchKeyDown}
//           />

//           <S.SearchIconButton
//             type="button"
//             aria-label="검색"
//             onClick={handleSearch}
//           >
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
//             onClick={() => handleTabChange(tab.key)}
//           >
//             {tab.label}
//           </S.TabButton>
//         ))}
//       </S.TabList>

//       <S.OrderList>
//         {orders.map((order) => (
//           <OrderCard
//             key={order.orderId}
//             order={order}
//             onViewDetail={handleViewDetail}
//           />
//         ))}
//       </S.OrderList>

//       {currentPage < totalPages && (
//         <S.LoadMoreWrap>
//           <S.LoadMoreButton
//             type="button"
//             onClick={handleLoadMore}
//             disabled={isLoadingMore}
//           >
//             {isLoadingMore ? "불러오는 중..." : "더 보기"}

//             {!isLoadingMore && <ChevronDownIcon />}
//           </S.LoadMoreButton>
//         </S.LoadMoreWrap>
//       )}
//     </S.Page>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./orderListStyle";
import * as orderService from "../../services/orderServices";

import EmptyOrder from "../../assets/EmptyOrder.webp";

import ForwardButton from "../common/forwardBtn/ForwardButton";
import Loader from "../loader/Loader";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

/*
 * 주문 목록 탭
 */
const TABS = [
  {
    key: "ALL",
    label: "전체",
  },
  {
    key: "PAYMENT_COMPLETED",
    label: "결제완료",
  },
  {
    key: "PREPARING_SHIPMENT",
    label: "상품준비중",
  },
  {
    key: "SHIPPING",
    label: "배송중",
  },
  {
    key: "DELIVERED",
    label: "배송완료",
  },
  {
    key: "CLAIM",
    label: "취소/교환/반품",
  },
];

/*
 * 주문 상태 표시 문구
 */
const STATUS_LABELS = {
  PAYMENT_COMPLETED: "결제완료",
  PREPARING_SHIPMENT: "상품준비중",
  SHIPPING: "배송중",
  DELIVERED: "배송완료",
  CONFIRMED: "구매결정",
  CANCELED: "주문취소",
};

/*
 * Claim 유형 표시 문구
 */
const CLAIM_TYPE_LABELS = {
  CANCEL: "취소",
  EXCHANGE: "교환",
  RETURN: "반품",
};

/*
 * Claim 상태 표시 문구
 */
const CLAIM_STATUS_LABELS = {
  REQUESTED: "신청완료",
  PROCESSING: "처리중",
  COMPLETED: "처리완료",
  REJECTED: "처리불가",
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

/*
 * 주문 날짜 표시
 */
// function formatDate(dateString) {
//   if (!dateString) {
//     return "-";
//   }

// return new Date(dateString).toLocaleDateString("ko-KR");
function formatDate(dateString) {
  if (!dateString) {
    return "";
  }

  // return new Date(dateString).toLocaleDateString("ko-KR");

  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);

  const getPart = (type) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const year = getPart("year");
  const month = getPart("month");
  const day = getPart("day");
  const hour = getPart("hour");
  const minute = getPart("minute");

  return `${year}.${month}.${day} ${hour}:${minute}`;
}

/*
 * 가격 표시
 */
function formatPrice(price) {
  return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
}

/*
 * Claim 상태 문구를 생성합니다.
 *
 * CANCEL + REQUESTED -> 취소 신청완료
 * EXCHANGE + PROCESSING -> 교환 처리중
 * RETURN + COMPLETED -> 반품 처리완료
 */
function getClaimStatusLabel(claimSummary) {
  if (!claimSummary) {
    return null;
  }

  const typeLabel = CLAIM_TYPE_LABELS[claimSummary.type] ?? claimSummary.type;

  const statusLabel =
    CLAIM_STATUS_LABELS[claimSummary.status] ?? claimSummary.status;

  return `${typeLabel} ${statusLabel}`;
}

/*
 * 주문 카드에 표시할 상태를 계산합니다.
 *
 * order.status가 PAYMENT_COMPLETED여도 claimSummary가 있으면
 * "결제완료" 대신 "취소 신청완료"와 같은 Claim 상태를 표시합니다.
 */
function getOrderStatusInfo(order) {
  /*
   * 주문취소가 최종 완료된 주문
   */
  if (order.status === "CANCELED") {
    return {
      label: "주문취소",
      variant: "CANCELED",
    };
  }

  /*
   * 취소·교환·반품 신청이 연결된 주문
   */
  if (order.claimSummary) {
    return {
      label: getClaimStatusLabel(order.claimSummary),
      variant: "CLAIM",
    };
  }

  /*
   * 일반 주문
   */
  return {
    label: STATUS_LABELS[order.status] ?? order.status ?? "-",
    variant: order.status,
  };
}

/*
 * 현재 선택한 탭에 표시할 주문을 걸러냅니다.
 *
 * 중요:
 * Claim이 존재하는 주문은 order.status가 PAYMENT_COMPLETED여도
 * 결제완료 탭에서 제외합니다.
 */
function filterOrdersByTab(orders, activeTab) {
  /*
   * 전체 탭에서는 모든 주문을 표시합니다.
   */
  if (activeTab === "ALL") {
    return orders;
  }

  /*
   * 취소/교환/반품 탭에서는 Claim이 있는 주문과
   * 취소가 완료된 주문을 표시합니다.
   */
  if (activeTab === "CLAIM") {
    return orders.filter(
      (order) => Boolean(order.claimSummary) || order.status === "CANCELED",
    );
  }

  /*
   * 일반 상태 탭에서는 현재 주문 상태가 일치하면서
   * Claim이 없는 주문만 표시합니다.
   *
   * 따라서 취소 신청완료 주문은 결제완료 탭에서 제외됩니다.
   */
  return orders.filter(
    (order) => order.status === activeTab && !order.claimSummary,
  );
}

function OrderCard({ order, onViewDetail }) {
  const firstItem = order.items?.[0];

  const statusInfo = getOrderStatusInfo(order);

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

          <S.StatusBadge variant={statusInfo.variant}>
            {statusInfo.label}
          </S.StatusBadge>
        </S.OrderHeader>

        <S.MetaList>
          <S.MetaRow>주문일 {formatDate(order.createdAt)}</S.MetaRow>
        </S.MetaList>

        <S.OrderSummaryRow>
          <S.OrderCount>
            총 {order.totalItemCount ?? order.items?.length ?? 0}건
          </S.OrderCount>

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

  /*
   * 검색창에 입력 중인 값
   */
  const [keyword, setKeyword] = useState("");

  /*
   * 실제 API 요청에 사용하는 검색어
   */
  const [searchKeyword, setSearchKeyword] = useState("");

  const [period, setPeriod] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const navigate = useNavigate();

  const { accessToken, isAuthLoading } = useAuth();

  const { showToast } = useToast();

  /*
   * 주문 목록 조회
   *
   * 취소/교환/반품 주문을 프런트에서 정확히 분류하기 위해
   * 서버에는 ALL 상태로 요청합니다.
   *
   * 이후 filterOrdersByTab()에서 현재 선택한 탭에 맞게
   * 주문을 분류합니다.
   */
  useEffect(() => {
    if (isAuthLoading || !accessToken) {
      return;
    }

    let isCancelled = false;

    orderService
      .getOrders(
        {
          period,

          /*
           * Claim이 연결된 PAYMENT_COMPLETED 주문이 서버의
           * 결제완료 필터에 섞이는 문제를 방지하기 위해
           * 상태는 ALL로 조회합니다.
           */
          status: "ALL",

          keyword: searchKeyword,
          page: currentPage,
          limit: 5,
        },
        accessToken,
      )
      .then((result) => {
        if (isCancelled) {
          return;
        }

        if (!result.success) {
          throw new Error(result.message || "주문 내역을 불러오지 못했습니다.");
        }

        /*
         * 첫 페이지는 목록을 교체합니다.
         * 다음 페이지는 기존 목록 뒤에 추가합니다.
         */
        if (currentPage === 1) {
          setOrders(result.orders);
        } else {
          setOrders((previousOrders) => [...previousOrders, ...result.orders]);
        }

        setTotalPages(result.pagination?.totalPages ?? 1);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("주문 내역 조회 실패:", error);

        showToast(error.message || "주문 내역을 불러오지 못했습니다.", false);
      })
      .finally(() => {
        if (isCancelled) {
          return;
        }

        setIsLoading(false);
        setIsLoadingMore(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [
    accessToken,
    isAuthLoading,
    period,
    searchKeyword,
    currentPage,
    showToast,
  ]);

  /*
   * 현재 선택한 탭에 표시할 주문 목록입니다.
   *
   * 별도 state로 만들 필요가 없는 계산값이므로
   * 렌더링 과정에서 바로 계산합니다.
   */
  const filteredOrders = filterOrdersByTab(orders, activeTab);

  /*
   * 주문 상세 페이지 이동
   */
  const handleViewDetail = (orderId) => {
    navigate(`/mypage/orders/${orderId}`);
  };

  /*
   * 탭 변경
   *
   * 전체 주문 데이터를 이미 받아왔으므로
   * 탭 변경 시 API를 다시 호출하지 않습니다.
   */
  const handleTabChange = (status) => {
    setActiveTab(status);
  };

  /*
   * 조회 기간 변경
   */
  const handlePeriodChange = (event) => {
    const nextPeriod = event.target.value;

    if (nextPeriod === period) {
      return;
    }

    setIsLoading(true);
    setOrders([]);
    setPeriod(nextPeriod);
    setCurrentPage(1);
  };

  /*
   * 검색
   */
  const handleSearch = () => {
    const nextKeyword = keyword.trim();

    if (nextKeyword === searchKeyword && currentPage === 1) {
      return;
    }

    setIsLoading(true);
    setOrders([]);
    setSearchKeyword(nextKeyword);
    setCurrentPage(1);
  };

  /*
   * 검색창 Enter 처리
   */
  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  /*
   * 다음 페이지 조회
   */
  const handleLoadMore = () => {
    if (isLoadingMore || currentPage >= totalPages) {
      return;
    }

    setIsLoadingMore(true);

    setCurrentPage((previousPage) => previousPage + 1);
  };

  if (isAuthLoading || isLoading) {
    return <Loader />;
  }

  /*
   * 전체 주문 데이터가 없는 경우
   */
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

      {/*
       * 선택한 탭에 주문이 없는 경우
       *
       * 전체 주문 자체는 존재하므로 상품 보러가기 화면 대신
       * 해당 탭에 내역이 없다는 문구만 표시합니다.
       */}
      {filteredOrders.length === 0 ? (
        <S.EmptyOrderStyle>
          <div className="empty-image-container">
            <img src={EmptyOrder} alt="" className="empty-image" />
          </div>

          <div className="empty-text-container">
            <strong>해당 상태의 주문이 없어요</strong>

            <p>다른 주문 상태를 선택해주세요.</p>
          </div>
        </S.EmptyOrderStyle>
      ) : (
        <S.OrderList>
          {filteredOrders.map((order) => (
            <OrderCard
              key={order.orderId}
              order={order}
              onViewDetail={handleViewDetail}
            />
          ))}
        </S.OrderList>
      )}

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
