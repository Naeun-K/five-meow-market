import { apiRequest } from "./apiClient";

/**
 * 주문취소·교환·반품 신청
 *
 * @param {Object} claimData
 * @param {string} claimData.orderId 주문 ID
 * @param {string|null} claimData.productId 상품 ID
 * @param {"CANCEL"|"EXCHANGE"|"RETURN"} claimData.type 신청 유형
 * @param {string} claimData.reason 신청 사유
 * @param {string|null} [claimData.detailReason] 상세 사유
 * @param {string} accessToken Access Token
 */
export function createClaim(claimData, accessToken) {
  return apiRequest("/claims", {
    method: "POST",
    body: claimData,
    token: accessToken,
  });
}

/**
 * 로그인 사용자의 취소·교환·반품 목록 조회
 *
 * @param {Object} params
 * @param {"ALL"|"CANCEL"|"EXCHANGE"|"RETURN"} [params.type]
 * @param {"ALL"|"REQUESTED"|"PROCESSING"|"COMPLETED"|"REJECTED"} [params.status]
 * @param {number} [params.page]
 * @param {number} [params.limit]
 * @param {string} accessToken Access Token
 */
export function getClaims(
  { type = "ALL", status = "ALL", page = 1, limit = 10 } = {},
  accessToken,
) {
  const searchParams = new URLSearchParams({
    type,
    status,
    page: String(page),
    limit: String(limit),
  });

  return apiRequest(`/claims?${searchParams.toString()}`, {
    token: accessToken,
  });
}

/**
 * 취소·교환·반품 상세 조회
 *
 * @param {string} claimId Claim ID
 * @param {string} accessToken Access Token
 */
export function getClaimById(claimId, accessToken) {
  return apiRequest(`/claims/${encodeURIComponent(claimId)}`, {
    token: accessToken,
  });
}
