import { apiRequest } from "./apiClient";

/**
 * 문의 작성
 *
 * POST /inquiries
 *
 * body:
 * {
 *   category,
 *   orderId,
 *   productId,
 *   title,
 *   content,
 *   isPrivate
 * }
 */
export const createInquiry = async (inquiryData, accessToken) => {
  return apiRequest("/inquiries", {
    method: "POST",
    token: accessToken,
    body: inquiryData,
  });
};

/**
 * 전체 문의 목록 조회
 *
 * GET /inquiries
 *
 * Query:
 * page?
 * limit?
 * category?
 * status?
 */
export const getInquiries = async ({
  page = 1,
  limit = 10,
  category,
  status,
} = {}) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  if (category) {
    searchParams.set("category", category);
  }

  if (status) {
    searchParams.set("status", status);
  }

  return apiRequest(`/inquiries?${searchParams.toString()}`);
};

/**
 * 내가 작성한 문의 목록 조회
 *
 * GET /users/me/inquiries
 */
export const getMyInquiries = async (
  { page = 1, limit = 10, category, status } = {},
  accessToken,
) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  if (category) {
    searchParams.set("category", category);
  }

  if (status) {
    searchParams.set("status", status);
  }

  return apiRequest(`/users/me/inquiries?${searchParams.toString()}`, {
    token: accessToken,
  });
};

/**
 * 문의 상세 조회
 *
 * GET /inquiries/:inquiryId
 *
 * 공개 문의:
 * accessToken 없어도 조회 가능
 *
 * 비밀 문의:
 * accessToken 필요
 */
export const getInquiry = async (inquiryId, accessToken) => {
  return apiRequest(`/inquiries/${encodeURIComponent(inquiryId)}`, {
    token: accessToken,
  });
};

/**
 * 문의 수정
 *
 * PATCH /inquiries/:inquiryId
 *
 * 변경 가능한 필드:
 * category?
 * orderId?
 * productId?
 * title?
 * content?
 * isPrivate?
 */
export const updateInquiry = async (inquiryId, inquiryData, accessToken) => {
  return apiRequest(`/inquiries/${encodeURIComponent(inquiryId)}`, {
    method: "PATCH",
    token: accessToken,
    body: inquiryData,
  });
};

/**
 * 문의 삭제
 *
 * DELETE /inquiries/:inquiryId
 */
export const deleteInquiry = async (inquiryId, accessToken) => {
  return apiRequest(`/inquiries/${encodeURIComponent(inquiryId)}`, {
    method: "DELETE",
    token: accessToken,
  });
};
