import { apiRequest } from "./apiClient";

const createQueryString = (params = {}) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, String(value));
    }
  });

  const queryString = searchParams.toString();

  return queryString ? `?${queryString}` : "";
};

/**
 * 문의 작성
 *
 * POST /inquiries
 */
export function createInquiry(
  { category, orderId = null, productId = null, title, content, isPrivate },
  token,
) {
  return apiRequest("/inquiries", {
    method: "POST",
    token,
    body: {
      category,
      orderId,
      productId,
      title,
      content,
      isPrivate,
    },
  });
}

/**
 * Q&A 전체 문의 목록 조회
 *
 * GET /inquiries
 *
 * 공개글과 비밀글을 모두 반환한다.
 * category와 status 필터를 사용할 수 있다.
 */
export function getInquiries({ page = 1, limit = 10, category, status } = {}) {
  const queryString = createQueryString({
    page,
    limit,
    category,
    status,
  });

  return apiRequest(`/inquiries${queryString}`);
}

/**
 * 내가 작성한 문의 목록 조회
 *
 * GET /users/me/inquiries
 */
export function getMyInquiries(
  { page = 1, limit = 10, category, status } = {},
  token,
) {
  const queryString = createQueryString({
    page,
    limit,
    category,
    status,
  });

  return apiRequest(`/users/me/inquiries${queryString}`, {
    token,
  });
}

/**
 * 문의 상세 조회
 *
 * GET /inquiries/:inquiryId
 *
 * 공개글은 token 없이 조회할 수 있다.
 * 비밀글은 작성자의 token이 필요하다.
 */
export function getInquiry(inquiryId, token) {
  if (!inquiryId) {
    throw new Error("문의 ID가 필요합니다.");
  }

  return apiRequest(`/inquiries/${encodeURIComponent(inquiryId)}`, {
    token,
  });
}

/**
 * 문의 수정
 *
 * PATCH /inquiries/:inquiryId
 *
 * 변경된 필드만 전달한다.
 */
export function updateInquiry(inquiryId, changes, token) {
  if (!inquiryId) {
    throw new Error("문의 ID가 필요합니다.");
  }

  const allowedFields = [
    "category",
    "orderId",
    "productId",
    "title",
    "content",
    "isPrivate",
  ];

  const body = Object.fromEntries(
    Object.entries(changes ?? {}).filter(
      ([key, value]) => allowedFields.includes(key) && value !== undefined,
    ),
  );

  if (Object.keys(body).length === 0) {
    throw new Error("수정할 문의 정보를 입력해주세요.");
  }

  return apiRequest(`/inquiries/${encodeURIComponent(inquiryId)}`, {
    method: "PATCH",
    token,
    body,
  });
}

/**
 * 문의 삭제
 *
 * DELETE /inquiries/:inquiryId
 */
export function deleteInquiry(inquiryId, token) {
  if (!inquiryId) {
    throw new Error("문의 ID가 필요합니다.");
  }

  return apiRequest(`/inquiries/${encodeURIComponent(inquiryId)}`, {
    method: "DELETE",
    token,
  });
}
