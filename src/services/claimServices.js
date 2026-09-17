import * as claimApi from "../api/claimApi";

/**
 * 취소·교환·반품 신청
 *
 * @param {Object} claimData
 * @param {string} claimData.orderId 주문 ID
 * @param {string|null} claimData.productId 상품 ID
 * @param {"CANCEL"|"EXCHANGE"|"RETURN"} claimData.type 신청 유형
 * @param {string} claimData.reason 신청 사유
 * @param {string|null} [claimData.detailReason] 상세 사유
 * @param {string} accessToken Access Token
 */
export async function createClaim(claimData, accessToken) {
  const response = await claimApi.createClaim(claimData, accessToken);

  return response;
}

/**
 * 주문 전체 취소 신청
 *
 * 주문취소는 주문 전체를 대상으로 하므로 productId는 null로 전달합니다.
 *
 * @param {Object} cancelData
 * @param {string} cancelData.orderId 주문 ID
 * @param {string} cancelData.reason 취소 사유
 * @param {string|null} [cancelData.detailReason] 상세 사유
 * @param {string} accessToken Access Token
 */
export async function createCancelClaim(
  { orderId, reason, detailReason = null },
  accessToken,
) {
  const response = await claimApi.createClaim(
    {
      orderId,
      productId: null,
      type: "CANCEL",
      reason,
      detailReason,
    },
    accessToken,
  );

  return response;
}

/**
 * 상품 교환 신청
 *
 * @param {Object} exchangeData
 * @param {string} exchangeData.orderId 주문 ID
 * @param {string} exchangeData.productId 상품 ID
 * @param {string} exchangeData.reason 교환 사유
 * @param {string|null} [exchangeData.detailReason] 상세 사유
 * @param {string} accessToken Access Token
 */
export async function createExchangeClaim(
  { orderId, productId, reason, detailReason = null },
  accessToken,
) {
  const response = await claimApi.createClaim(
    {
      orderId,
      productId,
      type: "EXCHANGE",
      reason,
      detailReason,
    },
    accessToken,
  );

  return response;
}

/**
 * 상품 반품 신청
 *
 * @param {Object} returnData
 * @param {string} returnData.orderId 주문 ID
 * @param {string} returnData.productId 상품 ID
 * @param {string} returnData.reason 반품 사유
 * @param {string|null} [returnData.detailReason] 상세 사유
 * @param {string} accessToken Access Token
 */
export async function createReturnClaim(
  { orderId, productId, reason, detailReason = null },
  accessToken,
) {
  const response = await claimApi.createClaim(
    {
      orderId,
      productId,
      type: "RETURN",
      reason,
      detailReason,
    },
    accessToken,
  );

  return response;
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
export async function getClaims(
  { type = "ALL", status = "ALL", page = 1, limit = 10 } = {},
  accessToken,
) {
  const response = await claimApi.getClaims(
    {
      type,
      status,
      page,
      limit,
    },
    accessToken,
  );

  return {
    claims: response.data?.claims ?? [],
    pagination: response.data?.pagination ?? {
      currentPage: page,
      totalPages: 0,
      totalCount: 0,
      limit,
    },
  };
}

/**
 * 취소·교환·반품 상세 조회
 *
 * @param {string} claimId Claim ID
 * @param {string} accessToken Access Token
 */
export async function getClaimById(claimId, accessToken) {
  const response = await claimApi.getClaimById(claimId, accessToken);

  return response.data?.claim ?? null;
}
