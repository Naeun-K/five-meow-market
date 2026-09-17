import { apiRequest } from "./apiClient";

/**
 * 취소 / 교환 / 반품 신청
 *
 * POST /claims
 *
 * body:
 * {
 *   orderId,
 *   type,
 *   scope,
 *   items?,
 *   reason,
 *   detailReason?
 * }
 *
 * type:
 * CANCEL
 * EXCHANGE
 * RETURN
 *
 * scope:
 * ALL
 * PARTIAL
 */
export const createClaim = async (claimData, accessToken) => {
  return apiRequest("/claims", {
    method: "POST",
    token: accessToken,
    body: claimData,
  });
};

/**
 * Claim 목록 조회
 *
 * GET /claims
 *
 * Query:
 * type?
 * scope?
 * status?
 * page?
 * limit?
 */
export const getClaims = async (
  { type, scope, status, page = 1, limit = 10 } = {},
  accessToken,
) => {
  const searchParams = new URLSearchParams();

  if (type) {
    searchParams.set("type", type);
  }

  if (scope) {
    searchParams.set("scope", scope);
  }

  if (status) {
    searchParams.set("status", status);
  }

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  return apiRequest(`/claims?${searchParams.toString()}`, {
    token: accessToken,
  });
};

/**
 * Claim 상세 조회
 *
 * GET /claims/:claimId
 */
export const getClaim = async (claimId, accessToken) => {
  return apiRequest(`/claims/${encodeURIComponent(claimId)}`, {
    token: accessToken,
  });
};
