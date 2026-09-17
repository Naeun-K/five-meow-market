import { apiRequest } from "./apiClient";

/**
 * Checkout 생성
 *
 * POST /checkout
 *
 * 장바구니 구매:
 * {
 *   cartItemIds: [...]
 * }
 *
 * 바로구매:
 * {
 *   items: [
 *     {
 *       productId,
 *       quantity
 *     }
 *   ]
 * }
 */
export const createCheckout = async (checkoutData, accessToken) => {
  return apiRequest("/checkout", {
    method: "POST",
    token: accessToken,
    body: checkoutData,
  });
};

/**
 * 배송지 목록 조회
 *
 * GET /checkout/addresses
 */
export const getAddresses = async (accessToken) => {
  return apiRequest("/checkout/addresses", {
    token: accessToken,
  });
};

/**
 * 배송지 추가
 *
 * POST /checkout/addresses
 */
export const addAddress = async (
  { addressName, recipient, phone, zipCode, address, detailAddress },
  accessToken,
) => {
  return apiRequest("/checkout/addresses", {
    method: "POST",
    token: accessToken,

    body: {
      addressName,
      recipient,
      phone,
      zipCode,
      address,
      detailAddress,
    },
  });
};

/**
 * Checkout 배송지 선택
 *
 * PATCH /checkout/:checkoutId/address
 */
export const selectCheckoutAddress = async (
  checkoutId,
  addressId,
  accessToken,
) => {
  return apiRequest(`/checkout/${encodeURIComponent(checkoutId)}/address`, {
    method: "PATCH",
    token: accessToken,

    body: {
      addressId,
    },
  });
};

/**
 * Checkout 적립금 적용
 *
 * PATCH /checkout/:checkoutId/points
 */
export const applyCheckoutPoints = async (checkoutId, points, accessToken) => {
  return apiRequest(`/checkout/${encodeURIComponent(checkoutId)}/points`, {
    method: "PATCH",
    token: accessToken,

    body: {
      points,
    },
  });
};

/**
 * 주문 요약 조회
 *
 * GET /checkout/:checkoutId/summary
 */
export const getCheckoutSummary = async (checkoutId, accessToken) => {
  return apiRequest(`/checkout/${encodeURIComponent(checkoutId)}/summary`, {
    token: accessToken,
  });
};

/**
 * 주문 가능 여부 검증
 *
 * GET /checkout/:checkoutId/validate
 */
export const validateCheckout = async (checkoutId, accessToken) => {
  return apiRequest(`/checkout/${encodeURIComponent(checkoutId)}/validate`, {
    token: accessToken,
  });
};
