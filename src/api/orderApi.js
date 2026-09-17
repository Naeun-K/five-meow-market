import { apiRequest } from "./apiClient";

/**
 * 주문 생성
 *
 * POST /orders
 *
 * body:
 * {
 *   checkoutId
 * }
 *
 * 주문 생성 시 서버에서
 * - Checkout 검증
 * - 재고 검증
 * - 배송비 검증
 * - 사용 적립금 검증
 * - 적립금 사용 처리
 * - 적립금 적립 처리
 * - Point History 저장
 * 을 수행한다.
 */
export const createOrder = async (checkoutId, accessToken) => {
  return apiRequest("/orders", {
    method: "POST",
    token: accessToken,

    body: {
      checkoutId,
    },
  });
};

/**
 * 주문 목록 조회
 *
 * GET /orders
 *
 * Query:
 * period?
 * status?
 * keyword?
 * page?
 * limit?
 */
export const getOrders = async (
  { period, status, keyword, page = 1, limit = 10 } = {},
  accessToken,
) => {
  const searchParams = new URLSearchParams();

  if (period) {
    searchParams.set("period", period);
  }

  if (status) {
    searchParams.set("status", status);
  }

  if (keyword) {
    searchParams.set("keyword", keyword);
  }

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  return apiRequest(`/orders?${searchParams.toString()}`, {
    token: accessToken,
  });
};

/**
 * 주문 상세 조회
 *
 * GET /orders/:orderId
 */
export const getOrder = async (orderId, accessToken) => {
  return apiRequest(`/orders/${encodeURIComponent(orderId)}`, {
    token: accessToken,
  });
};

/**
 * 구매확정
 *
 * POST /orders/:orderId/confirm
 */
export const confirmOrder = async (orderId, accessToken) => {
  return apiRequest(`/orders/${encodeURIComponent(orderId)}/confirm`, {
    method: "POST",
    token: accessToken,
  });
};
