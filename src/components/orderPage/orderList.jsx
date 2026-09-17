














































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./orderListStyle";
import * as orderService from "../../services/orderServices";

import EmptyOrder from "../../assets/EmptyOrder.webp";

import ForwardButton from "../common/forwardBtn/ForwardButton";
import Loader from "../loader/Loader";
import ReviewModal from "../reviewModal/ReviewModal";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

import { mockOrderData } from "../../mock/mockOrder";

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

const STATUS_LABELS = {
  PAYMENT_COMPLETED: "결제완료",
  PREPARING_SHIPMENT: "상품준비중",
  SHIPPING: "배송중",
  DELIVERED: "배송완료",
  CONFIRMED: "구매확정",
  CANCELED: "주문취소",
};

const CLAIM_TYPE_LABELS = {
  CANCEL: "취소",
  EXCHANGE: "교환",
  RETURN: "반품",
};

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

function formatDate(dateString) {
  if (!dateString) {
    return "";
  }

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

function formatPrice(price) {
  return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
}

function getClaimStatusLabel(claimSummary) {
  if (!claimSummary) {
    return null;
  }

  const typeLabel = CLAIM_TYPE_LABELS[claimSummary.type] ?? claimSummary.type;

  const statusLabel =
    CLAIM_STATUS_LABELS[claimSummary.status] ?? claimSummary.status;

  return `${typeLabel} ${statusLabel}`;
}

function getOrderStatusInfo(order) {
  if (order.status === "CANCELED") {
    return {
      label: "주문취소",
      variant: "CANCELED",
    };
  }

  if (order.claimSummary) {
    return {
      label: getClaimStatusLabel(order.claimSummary),
      variant: "CLAIM",
    };
  }

  return {
    label: STATUS_LABELS[order.status] ?? order.status ?? "-",
    variant: order.status,
  };
}

function filterOrdersByTab(orders, activeTab) {
  if (activeTab === "ALL") {
    return orders;
  }

  if (activeTab === "CLAIM") {
    return orders.filter(
      (order) => Boolean(order.claimSummary) || order.status === "CANCELED",
    );
  }

  if (activeTab === "DELIVERED") {
    return orders.filter(
      (order) =>
        !order.claimSummary &&
        (order.status === "DELIVERED" || order.status === "CONFIRMED"),
    );
  }

  return orders.filter(
    (order) => order.status === activeTab && !order.claimSummary,
  );
}

function filterMockOrdersByKeyword(orders, keyword) {
  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return orders;
  }

  return orders.filter((order) => {
    const orderId = String(order.orderId ?? "").toLowerCase();

    const hasMatchingProduct = order.items?.some((item) =>
      String(item.name ?? "")
        .toLowerCase()
        .includes(normalizedKeyword),
    );

    return orderId.includes(normalizedKeyword) || hasMatchingProduct;
  });
}

function filterMockOrdersByPeriod(orders, period) {
  if (period === "all") {
    return orders;
  }

  const currentDate = new Date();

  let months = 0;

  if (period === "3m") {
    months = 3;
  } else if (period === "6m") {
    months = 6;
  } else if (period === "1y") {
    months = 12;
  }

  if (months === 0) {
    return orders;
  }

  const startDate = new Date(currentDate);

  startDate.setMonth(startDate.getMonth() - months);

  return orders.filter((order) => {
    const createdAt = new Date(order.createdAt);

    if (Number.isNaN(createdAt.getTime())) {
      return false;
    }

    return createdAt >= startDate;
  });
}

function OrderCard({
  order,
  onViewDetail,
  onClaim,
  onConfirm,
  onWriteReview,
  isConfirming,
}) {
  const firstItem = order.items?.[0];

  const statusInfo = getOrderStatusInfo(order);

  const canCancel = order.status === "PAYMENT_COMPLETED" && !order.claimSummary;

  const canDeliveryAction = order.status === "DELIVERED" && !order.claimSummary;

  const canWriteReview = order.status === "CONFIRMED" && !order.claimSummary;

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

      <S.DetailButton
        type="button"
        className="order-action-button"
        onClick={() => onViewDetail(order)}
      >
        <S.DetailButtonText>주문 상세보기</S.DetailButtonText>

        <S.DetailArrow>
          <ChevronRightIcon />
        </S.DetailArrow>
      </S.DetailButton>

      {canCancel && (
        <S.DetailButton
          type="button"
          className="order-action-button"
          onClick={() => onClaim(order, "CANCEL")}
        >
          <S.DetailButtonText>취소신청</S.DetailButtonText>

          <S.DetailArrow>
            <ChevronRightIcon />
          </S.DetailArrow>
        </S.DetailButton>
      )}

      {canDeliveryAction && (
        <>
          <S.DetailButton
            type="button"
            className="order-action-button"
            onClick={() => onClaim(order, "EXCHANGE")}
          >
            <S.DetailButtonText>교환신청</S.DetailButtonText>

            <S.DetailArrow>
              <ChevronRightIcon />
            </S.DetailArrow>
          </S.DetailButton>

          <S.DetailButton
            type="button"
            className="order-action-button"
            onClick={() => onClaim(order, "RETURN")}
          >
            <S.DetailButtonText>반품신청</S.DetailButtonText>

            <S.DetailArrow>
              <ChevronRightIcon />
            </S.DetailArrow>
          </S.DetailButton>

          <S.DetailButton
            type="button"
            className="order-action-button"
            disabled={isConfirming === order.orderId}
            onClick={() => onConfirm(order)}
          >
            <S.DetailButtonText>
              {isConfirming === order.orderId ? "처리중..." : "구매확정"}
            </S.DetailButtonText>

            <S.DetailArrow>
              <ChevronRightIcon />
            </S.DetailArrow>
          </S.DetailButton>
        </>
      )}

      {canWriteReview && (
        <S.DetailButton
          type="button"
          className="order-action-button"
          onClick={() => onWriteReview(order)}
        >
          <S.DetailButtonText>리뷰작성</S.DetailButtonText>

          <S.DetailArrow>
            <ChevronRightIcon />
          </S.DetailArrow>
        </S.DetailButton>
      )}
    </S.OrderCard>
  );
}

export default function OrderList() {
  const [activeTab, setActiveTab] = useState("ALL");

  const [orders, setOrders] = useState([]);

  
  const [realOrderCount, setRealOrderCount] = useState(0);

  const [mockOrders, setMockOrders] = useState(() => mockOrderData);

  const [isConfirming, setIsConfirming] = useState(null);

  const [keyword, setKeyword] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");

  const [period, setPeriod] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [reviewOrder, setReviewOrder] = useState(null);

  const navigate = useNavigate();

  const { accessToken, isAuthLoading } = useAuth();

  const { showToast } = useToast();

  useEffect(() => {
    if (isAuthLoading || !accessToken) {
      return;
    }

    let isCancelled = false;

    orderService
      .getOrders(
        {
          period,
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

        if (currentPage === 1) {
          setOrders(result.orders ?? []);
        } else {
          setOrders((previousOrders) => [
            ...previousOrders,
            ...(result.orders ?? []),
          ]);
        }

        
        setRealOrderCount(
          result.pagination?.totalCount ?? result.orders?.length ?? 0,
        );

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

  
  const sortedRealOrders = [...orders].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  
  const realOrderIds = new Set(sortedRealOrders.map((order) => order.orderId));

  let filteredMockOrders = mockOrders.filter(
    (order) => !realOrderIds.has(order.orderId),
  );

  
  filteredMockOrders = filterMockOrdersByPeriod(filteredMockOrders, period);

  
  filteredMockOrders = filterMockOrdersByKeyword(
    filteredMockOrders,
    searchKeyword,
  );

  
  filteredMockOrders = [...filteredMockOrders].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  
  const shouldShowMockOrders = realOrderCount >= 3;

  
  const hasLoadedAllRealOrders = currentPage >= totalPages;

  
  const combinedOrders =
    shouldShowMockOrders && hasLoadedAllRealOrders
      ? [...sortedRealOrders, ...filteredMockOrders]
      : sortedRealOrders;

  
  const filteredOrders = filterOrdersByTab(combinedOrders, activeTab);

  const handleViewDetail = (order) => {
    navigate(`/mypage/orders/${order.orderId}`, {
      state: order.isMock
        ? {
            isMock: true,
            mockOrder: order,
          }
        : undefined,
    });
  };

  const handleClaim = (order, claimType) => {
    const searchParams = new URLSearchParams({
      orderId: String(order.orderId),
    });

    if (order.isMock) {
      searchParams.set("mock", "true");
    }

    const navigateOptions = {
      state: order.isMock
        ? {
            isMock: true,
            mockOrder: order,
          }
        : undefined,
    };

    if (claimType === "CANCEL") {
      searchParams.set("type", "CANCEL");

      navigate(`/claims/cancel?${searchParams.toString()}`, navigateOptions);

      return;
    }

    if (claimType === "EXCHANGE") {
      navigate(`/claims/exchange?${searchParams.toString()}`, navigateOptions);

      return;
    }

    if (claimType === "RETURN") {
      navigate(`/claims/return?${searchParams.toString()}`, navigateOptions);
    }
  };

  const handleConfirmOrder = async (order) => {
    if (isConfirming) {
      return;
    }

    if (order.status !== "DELIVERED") {
      showToast("배송완료된 주문만 구매확정할 수 있습니다.", false);

      return;
    }

    if (order.claimSummary) {
      showToast("취소/교환/반품이 진행 중인 주문입니다.", false);

      return;
    }

    setIsConfirming(order.orderId);

    
    if (order.isMock) {
      setMockOrders((previousOrders) =>
        previousOrders.map((mockOrder) => {
          if (mockOrder.orderId !== order.orderId) {
            return mockOrder;
          }

          return {
            ...mockOrder,

            status: "CONFIRMED",
            statusLabel: "구매확정",

            items: mockOrder.items?.map((item) => ({
              ...item,
              status: "CONFIRMED",
            })),
          };
        }),
      );

      setIsConfirming(null);

      showToast("구매확정이 완료되었습니다.", true);

      return;
    }

    
    try {
      const result = await orderService.confirmOrder(
        order.orderId,
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "구매확정에 실패했습니다.");
      }

      setOrders((previousOrders) =>
        previousOrders.map((currentOrder) => {
          if (currentOrder.orderId !== order.orderId) {
            return currentOrder;
          }

          return {
            ...currentOrder,

            status: "CONFIRMED",
            statusLabel: "구매확정",

            items: currentOrder.items?.map((item) => ({
              ...item,
              status: "CONFIRMED",
            })),
          };
        }),
      );

      showToast(result.message || "구매확정이 완료되었습니다.", true);
    } catch (error) {
      console.error("구매확정 실패:", error);

      showToast(
        error.message || "구매확정 처리 중 오류가 발생했습니다.",
        false,
      );
    } finally {
      setIsConfirming(null);
    }
  };

  const handleWriteReview = (order) => {
    if (order.status !== "CONFIRMED") {
      showToast("구매확정된 상품만 리뷰를 작성할 수 있습니다.", false);

      return;
    }

    const firstItem = order.items?.[0];

    if (!firstItem?.productId) {
      showToast("리뷰를 작성할 상품 정보를 찾을 수 없습니다.", false);

      return;
    }

    setReviewOrder(order);
  };

  const handleCloseReview = () => {
    setReviewOrder(null);
  };

  const handleTabChange = (status) => {
    setActiveTab(status);
  };

  const handlePeriodChange = (event) => {
    const nextPeriod = event.target.value;

    if (nextPeriod === period) {
      return;
    }

    setIsLoading(true);
    setOrders([]);

    
    setRealOrderCount(0);

    setPeriod(nextPeriod);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    const nextKeyword = keyword.trim();

    if (nextKeyword === searchKeyword && currentPage === 1) {
      return;
    }

    setIsLoading(true);
    setOrders([]);

    
    setRealOrderCount(0);

    setSearchKeyword(nextKeyword);
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

    setIsLoadingMore(true);

    setCurrentPage((previousPage) => previousPage + 1);
  };

  if (isAuthLoading || isLoading) {
    return <Loader />;
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
              onClaim={handleClaim}
              onConfirm={handleConfirmOrder}
              onWriteReview={handleWriteReview}
              isConfirming={isConfirming}
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

      {reviewOrder && (
        <ReviewModal
          orderId={reviewOrder.orderId}
          productId={reviewOrder.items?.[0]?.productId}
          product={reviewOrder.items?.[0]}
          onClose={handleCloseReview}
        />
      )}
    </S.Page>
  );
}
