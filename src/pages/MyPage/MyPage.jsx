/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  page,
  pageTitle,
  userCard,
  userInfo,
  userName,
  userEmail,
  editButton,
  summary,
  summaryItem,
  summaryLabel,
  summaryValue,
  section,
  sectionTitle,
  orderCard,
  titleWrapper,
  quickTitle,
  OrderCardWrapper,
  OrderCard,
} from "./MyPageStyle";

import buttonHover from "../../assets/buttonHover.webp";
import myShopCat from "../../assets/logo-myshop.webp";

import BasicPage from "../basicPage/BasicPage";
import Loader from "../../components/loader/Loader";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import ReviewModal from "../../components/reviewModal/ReviewModal";
import PasswordConfirmModal from "../../components/passwordConfirmModal/PasswordConfirmModal";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

import * as orderService from "../../services/orderServices";
import * as wishlistService from "../../services/wishlistServices";

import { getPoints } from "../../services/userService";
import { getWritableReviews } from "../../services/reviewService";
import { getMyInquiries } from "../../services/inquiryService";

/*
 * 일반 주문 상태
 */
const STATUS_LABELS = {
  PAYMENT_COMPLETED: "결제완료",
  PREPARING_SHIPMENT: "상품준비중",
  SHIPPING: "배송중",
  DELIVERED: "배송완료",
  CONFIRMED: "구매확정",
  CANCELED: "주문취소",
};

/*
 * Claim 유형
 */
const CLAIM_TYPE_LABELS = {
  CANCEL: "취소",
  EXCHANGE: "교환",
  RETURN: "반품",
};

/*
 * Claim 처리 상태
 */
const CLAIM_STATUS_LABELS = {
  REQUESTED: "신청완료",
  PROCESSING: "처리중",
  COMPLETED: "처리완료",
  REJECTED: "처리불가",
};

/*
 * 처리 중인 Claim 상태
 *
 * REQUESTED 또는 PROCESSING 상태의 Claim이 있으면
 * 중복 신청과 구매확정을 막습니다.
 */
const ACTIVE_CLAIM_STATUSES = ["REQUESTED", "PROCESSING"];

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

function formatPrice(price) {
  return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
}

/*
 * 주문 카드의 상품명을 생성합니다.
 *
 * 상품이 하나면 상품명만 표시하고,
 * 여러 개면 "상품명 외 N건"으로 표시합니다.
 */
function getOrderProductName(order) {
  const items = order.items ?? [];
  const firstProduct = items[0];

  if (!firstProduct) {
    return "";
  }

  const additionalItemCount = items.length - 1;

  if (additionalItemCount <= 0) {
    return firstProduct.name;
  }

  return `${firstProduct.name} 외 ${additionalItemCount}건`;
}

/*
 * 주문 상품 종류, 총수량, 총금액을 계산합니다.
 */
function getOrderSummary(order) {
  const items = order.items ?? [];

  const totalQuantity = items.reduce(
    (total, item) => total + Number(item.quantity ?? 0),
    0,
  );

  return {
    productCount: items.length,
    totalQuantity,

    /*
     * 주문 API 응답마다 금액 필드명이 다를 수 있으므로
     * 사용 가능한 금액을 순서대로 확인합니다.
     */
    totalAmount:
      order.finalAmount ??
      order.totalPaymentAmount ??
      order.paymentAmount ??
      order.totalAmount ??
      items.reduce((total, item) => total + Number(item.itemAmount ?? 0), 0),
  };
}

/*
 * Claim 상태 표시 문구를 생성합니다.
 *
 * 예:
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
 * 마이페이지 주문 카드에 표시할 상태를 계산합니다.
 *
 * 취소 신청 직후에는 order.status가 PAYMENT_COMPLETED여도
 * claimSummary를 확인하여 "취소 신청완료"를 표시합니다.
 */
function getOrderStatusLabel(order) {
  /*
   * 주문 상태가 실제로 CANCELED까지 변경된 경우
   */
  if (order.status === "CANCELED") {
    return STATUS_LABELS.CANCELED;
  }

  /*
   * 주문에 취소·교환·반품 신청이 연결된 경우
   */
  if (order.claimSummary) {
    return getClaimStatusLabel(order.claimSummary);
  }

  /*
   * Claim이 없는 일반 주문
   */
  return STATUS_LABELS[order.status] ?? order.status ?? "-";
}

/*
 * 현재 주문에 처리 중인 Claim이 있는지 확인합니다.
 */
function hasActiveClaim(order) {
  const claimStatus = order.claimSummary?.status;

  if (!claimStatus) {
    return false;
  }

  return ACTIVE_CLAIM_STATUSES.includes(claimStatus);
}

/*
 * 취소가 완료된 주문인지 확인합니다.
 *
 * 서버 주문 상태가 CANCELED이거나,
 * 취소 Claim이 COMPLETED이면 취소 완료로 판단합니다.
 */
function isCanceledOrder(order) {
  if (order.status === "CANCELED") {
    return true;
  }

  return (
    order.claimSummary?.type === "CANCEL" &&
    order.claimSummary?.status === "COMPLETED"
  );
}

function OrderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="currentColor"
      className="bi bi-receipt-cutoff"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />

      <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118z" />
    </svg>
  );
}

function WishlistIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="currentColor"
      className="bi bi-box2-heart"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982" />

      <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z" />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="currentColor"
      className="bi bi-pencil-square"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />

      <path
        fillRule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
      />
    </svg>
  );
}

function InquiryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="currentColor"
      className="bi bi-patch-question"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745" />

      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />

      <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
    </svg>
  );
}

const MENU_ICONS = {
  orders: OrderIcon,
  wishlist: WishlistIcon,
  reviews: ReviewIcon,
  inquiries: InquiryIcon,
};

function MyPage() {
  const { user, isLoggedIn, isAuthLoading, accessToken } = useAuth();

  const navigate = useNavigate();
  const { showToast } = useToast();

  const [orders, setOrders] = useState([]);
  const [points, setPoints] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [isOrderLoading, setIsOrderLoading] = useState(true);

  const [writableReviewCount, setWritableReviewCount] = useState(0);

  const [inquiryCount, setInquiryCount] = useState(0);

  const [wishlistProducts, setWishlistProducts] = useState([]);

  const [wishlistCount, setWishlistCount] = useState(0);

  const [isWishlistLoading, setIsWishlistLoading] = useState(true);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const nickname =
    user?.nickname || user?.nickName || user?.username || user?.name || "회원";

  const email = user?.email ?? "";

  const myPageMenus = [
    {
      key: "orders",
      label: "주문 내역",
      count: orderCount,
      path: "/mypage/orders",
    },
    {
      key: "wishlist",
      label: "찜한 상품",
      count: wishlistCount,
      path: "/mypage/wishlist",
    },
    {
      key: "reviews",
      label: "리뷰 관리",
      count: writableReviewCount,
      path: "/mypage/reviews",
    },
    {
      key: "inquiries",
      label: "문의 내역",
      count: inquiryCount,
      path: "/mypage/inquiry",
    },
  ];

  /*
   * 작성 가능한 리뷰 개수 조회
   */
  useEffect(() => {
    if (!accessToken) {
      return undefined;
    }

    let isCancelled = false;

    getWritableReviews(
      {
        page: 1,
        limit: 1,
      },
      accessToken,
    )
      .then((response) => {
        if (isCancelled) {
          return;
        }

        setWritableReviewCount(response.data?.pagination?.totalCount ?? 0);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("작성 가능한 리뷰 개수 조회 실패:", error);
      });

    return () => {
      isCancelled = true;
    };
  }, [accessToken]);

  /*
   * 문의 내역 개수 조회
   */
  useEffect(() => {
    if (!accessToken) {
      return undefined;
    }

    let isCancelled = false;

    getMyInquiries(
      {
        page: 1,
        limit: 1,
      },
      accessToken,
    )
      .then((response) => {
        if (isCancelled) {
          return;
        }

        setInquiryCount(response.data?.pagination?.totalCount ?? 0);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("문의 내역 개수 조회 실패:", error);
      });

    return () => {
      isCancelled = true;
    };
  }, [accessToken]);

  /*
   * 최근 주문과 적립금 조회
   *
   * 주문 API에서 각 주문의 claimSummary를 함께 받아야
   * 취소·교환·반품 상태를 표시할 수 있습니다.
   */
  useEffect(() => {
    if (isAuthLoading || !accessToken) {
      return undefined;
    }

    let isCancelled = false;

    Promise.all([
      orderService.getOrders(
        {
          period: "all",
          status: "ALL",
          keyword: "",
          page: 1,
          limit: 2,
        },
        accessToken,
      ),

      getPoints(accessToken),
    ])
      .then(([orderResult, pointResult]) => {
        if (isCancelled) {
          return;
        }

        if (!orderResult.success) {
          throw new Error(
            orderResult.message || "주문 내역을 불러오지 못했습니다.",
          );
        }

        if (!pointResult.success) {
          throw new Error(
            pointResult.message || "적립금을 불러오지 못했습니다.",
          );
        }

        setOrders(orderResult.orders ?? []);

        setOrderCount(orderResult.pagination?.totalCount ?? 0);

        setPoints(pointResult.point ?? 0);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("마이페이지 데이터 조회 실패:", error);

        showToast(
          error.message || "마이페이지 정보를 불러오지 못했습니다.",
          false,
        );
      })
      .finally(() => {
        if (!isCancelled) {
          setIsOrderLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [accessToken, isAuthLoading, showToast]);

  /*
   * 찜한 상품 조회
   */
  useEffect(() => {
    if (isAuthLoading || !accessToken) {
      return undefined;
    }

    let isCancelled = false;

    wishlistService
      .getWishlist(
        {
          page: 1,
          limit: 4,
        },
        accessToken,
      )
      .then((result) => {
        if (isCancelled) {
          return;
        }

        if (!result.success) {
          throw new Error(result.message || "찜한 상품을 불러오지 못했습니다.");
        }

        setWishlistProducts(result.products ?? []);

        setWishlistCount(result.pagination?.totalCount ?? 0);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("마이페이지 찜 목록 조회 실패:", error);

        showToast(error.message || "찜한 상품을 불러오지 못했습니다.", false);
      })
      .finally(() => {
        if (!isCancelled) {
          setIsWishlistLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [accessToken, isAuthLoading, showToast]);

  /*
   * 구매확정
   */
  const handleConfirmOrder = async (orderId) => {
    const selectedOrder = orders.find((order) => order.orderId === orderId);

    /*
     * 처리 중인 취소·교환·반품이 있으면
     * 구매확정을 요청하지 않습니다.
     */
    if (!selectedOrder || hasActiveClaim(selectedOrder)) {
      showToast("처리 중인 취소, 교환 또는 반품 신청이 있습니다.", false);

      return;
    }

    try {
      const result = await orderService.confirmOrder(orderId, accessToken);

      if (!result.success) {
        throw new Error(result.message || "구매확정에 실패했습니다.");
      }

      setOrders((previousOrders) =>
        previousOrders.map((order) =>
          order.orderId === orderId
            ? {
                ...order,
                status: result.status ?? "CONFIRMED",
                canConfirm: false,
                confirmedAt: result.confirmedAt,
              }
            : order,
        ),
      );

      const confirmedItemCount = selectedOrder.items?.length ?? 0;

      setWritableReviewCount(
        (previousCount) => previousCount + confirmedItemCount,
      );

      showToast(result.message || "구매가 확정되었습니다.", true);
    } catch (error) {
      console.error("구매확정 실패:", error);

      showToast(error.message || "구매확정에 실패했습니다.", false);
    }
  };

  /*
   * 취소·교환·반품 페이지 이동
   */
  const handleClaim = (orderId, claimType) => {
    const searchParams = new URLSearchParams({
      orderId: String(orderId),
    });

    navigate(`/claims/${claimType}?${searchParams.toString()}`);
  };

  /*
   * 리뷰 작성 모달 열기
   */
  const handleReview = (productId) => {
    if (!productId) {
      showToast("리뷰를 작성할 상품 정보가 없습니다.", false);

      return;
    }

    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  if (isAuthLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  if (!isLoggedIn) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <BasicPage>
      <main css={page}>
        <h1 css={pageTitle}>MY PAGE</h1>

        <section css={userCard}>
          <div className="profile-wrapper">
            <div className="profile-svg">
              <img src={myShopCat} alt="" />
            </div>

            <div css={userInfo}>
              <span css={userName}>{nickname}님</span>

              <div className="info-wrapper">
                <span css={userEmail}>{email}</span>

                <button
                  type="button"
                  css={userEmail}
                  className="pointDeco"
                  onClick={() => navigate("/mypage/points")}
                >
                  <span>적립금</span>

                  <span>{Number(points ?? 0).toLocaleString()} P</span>
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            css={editButton}
            onClick={() => setIsPasswordModalOpen(true)}
          >
            <strong css={quickTitle}>회원정보 수정</strong>

            <span className="quick-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>
          </button>
        </section>

        <section css={summary}>
          {myPageMenus.map((menu) => {
            const MenuIcon = MENU_ICONS[menu.key];

            return (
              <div css={summaryItem} key={menu.key}>
                <div className="btn-hover-container">
                  <img
                    src={buttonHover}
                    alt=""
                    className="btn-hover"
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>

                <button
                  type="button"
                  className="svg-container"
                  aria-label={menu.label}
                  onClick={() => navigate(menu.path)}
                >
                  <MenuIcon />
                </button>

                <span css={summaryLabel}>{menu.label}</span>

                <strong css={summaryValue}>{menu.count}</strong>
              </div>
            );
          })}
        </section>

        <section css={section}>
          <div css={titleWrapper}>
            <h2 css={sectionTitle}>주문 내역</h2>

            <button
              type="button"
              css={editButton}
              onClick={() => navigate("/mypage/orders")}
            >
              <strong css={quickTitle}>전체보기</strong>

              <span className="quick-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="section-content">
            <span className="guide-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              밀어서 보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>

            {isOrderLoading ? (
              <Loader />
            ) : (
              <OrderCardWrapper>
                {orders.map((order) => {
                  const product = order.items?.[0];

                  if (!product) {
                    return null;
                  }

                  const displayProductName = getOrderProductName(order);

                  const orderSummary = getOrderSummary(order);

                  const orderStatusLabel = getOrderStatusLabel(order);

                  const activeClaim = hasActiveClaim(order);

                  const canceledOrder = isCanceledOrder(order);

                  /*
                   * 결제완료이고 처리 중인 Claim이 없을 때만
                   * 주문취소 버튼을 표시합니다.
                   */
                  const canCancel =
                    order.status === "PAYMENT_COMPLETED" &&
                    !activeClaim &&
                    !canceledOrder &&
                    !order.claimSummary;

                  /*
                   * 배송완료이고 처리 중인 Claim이 없을 때만
                   * 교환·반품 및 구매확정 버튼을 표시합니다.
                   */
                  const canUseDeliveredActions =
                    order.status === "DELIVERED" &&
                    !activeClaim &&
                    !canceledOrder;

                  /*
                   * 구매확정 주문이면서 취소·반품 완료 주문이
                   * 아닐 때 리뷰 버튼을 표시합니다.
                   */
                  const canWriteReview =
                    order.status === "CONFIRMED" &&
                    !canceledOrder &&
                    !(
                      order.claimSummary?.type === "RETURN" &&
                      order.claimSummary?.status === "COMPLETED"
                    );

                  return (
                    <OrderCard key={order.orderId}>
                      <div className="order-banner">
                        <span className="order-date">
                          {formatDate(order.createdAt)}
                        </span>

                        <button
                          type="button"
                          className="order-number"
                          onClick={() =>
                            navigate(`/mypage/orders/${order.orderId}`)
                          }
                        >
                          {order.orderId}
                        </button>
                      </div>

                      <div className="order-content">
                        <div className="order-product-summary">
                          <div className="img-container">
                            <ProductCard
                              image={product.thumbnail}
                              name={displayProductName}
                              badge=""
                              showHeart={false}
                            />
                          </div>

                          <div className="product-summary-info">
                            <strong>{displayProductName}</strong>

                            <span>
                              총 {orderSummary.productCount}종 · 총{" "}
                              {orderSummary.totalQuantity}개
                            </span>
                          </div>
                        </div>

                        <div className="payment-status-wrapper">
                          <p className="payments">
                            총 결제금액{" "}
                            <strong>
                              {formatPrice(orderSummary.totalAmount)}
                            </strong>
                          </p>

                          {/*
                           * order.status 대신 Claim까지 반영한
                           * 상태 문구를 표시합니다.
                           */}
                          <div className="order-status">{orderStatusLabel}</div>
                        </div>

                        <div className="button-container">
                          {canCancel && (
                            <button
                              type="button"
                              className="cancel-order-button"
                              onClick={() =>
                                handleClaim(order.orderId, "cancel")
                              }
                            >
                              주문취소
                            </button>
                          )}

                          {canUseDeliveredActions && (
                            <>
                              <button
                                type="button"
                                className="claim-button"
                                onClick={() =>
                                  handleClaim(order.orderId, "exchange-return")
                                }
                              >
                                교환/반품 신청
                              </button>

                              {order.canConfirm !== false && (
                                <button
                                  type="button"
                                  className="confirm-button"
                                  onClick={() =>
                                    handleConfirmOrder(order.orderId)
                                  }
                                >
                                  구매확정
                                </button>
                              )}
                            </>
                          )}

                          {canWriteReview && (
                            <button
                              type="button"
                              className="review-button"
                              onClick={() => handleReview(product.productId)}
                            >
                              리뷰작성
                            </button>
                          )}
                        </div>
                      </div>
                    </OrderCard>
                  );
                })}
              </OrderCardWrapper>
            )}
          </div>
        </section>

        <section css={section}>
          <div css={titleWrapper}>
            <h2 css={sectionTitle}>찜한 상품</h2>

            <button
              type="button"
              css={editButton}
              onClick={() => navigate("/mypage/wishlist")}
            >
              <strong css={quickTitle}>전체보기</strong>

              <span className="quick-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="section-content">
            <span className="guide-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              밀어서 보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>

            {isWishlistLoading ? (
              <Loader />
            ) : (
              <article css={orderCard}>
                {wishlistProducts.map((product) => (
                  <div className="item-wrapper" key={product.productId}>
                    <div className="img-wrapper">
                      <ProductCard
                        productId={product.productId}
                        image={product.thumbnail}
                        name={product.name}
                        badge=""
                        showHeart
                        isLiked={product.isLiked}
                      />
                    </div>

                    <div className="desc-wrapper">
                      <p>{product.name}</p>

                      <strong>{formatPrice(product.price)}</strong>
                    </div>

                    <div className="btn-wrapper">
                      <button type="button">장바구니</button>

                      <button type="button">바로구매</button>
                    </div>
                  </div>
                ))}
              </article>
            )}
          </div>
        </section>
      </main>

      {isModalOpen && (
        <ReviewModal
          productId={selectedProductId}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <PasswordConfirmModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSuccess={() => {
          setIsPasswordModalOpen(false);
          navigate("/mypage/edit");
        }}
        purpose="회원정보를 확인"
      />
    </BasicPage>
  );
}

export default MyPage;
