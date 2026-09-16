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
 * 작성 가능한 리뷰 목록 조회
 * 구매 결정되었지만 아직 리뷰를 작성하지 않은 주문 상품 조회
 *
 * GET /users/me/reviews/writable
 */
export function getWritableReviews({ page = 1, limit = 10 } = {}, token) {
  const queryString = createQueryString({
    page,
    limit,
  });

  return apiRequest(`/users/me/reviews/writable${queryString}`, {
    token,
  });
}

/**
 * 리뷰 작성
 *
 * POST /reviews
 */
export function createReview(
  { orderId, productId, rating, content, images = [] },
  token,
) {
  return apiRequest("/reviews", {
    method: "POST",
    token,
    body: {
      orderId,
      productId,
      rating,
      content,
      images,
    },
  });
}

/**
 * 전체 리뷰 목록 조회
 *
 * GET /reviews
 */
export function getReviews({ page = 1, limit = 10 } = {}) {
  const queryString = createQueryString({
    page,
    limit,
  });

  return apiRequest(`/reviews${queryString}`);
}

/**
 * 상품별 리뷰 목록 조회
 *
 * GET /products/:productId/reviews
 */
export function getProductReviews(productId, { page = 1, limit = 10 } = {}) {
  if (!productId) {
    throw new Error("상품 ID가 필요합니다.");
  }

  const queryString = createQueryString({
    page,
    limit,
  });

  return apiRequest(
    `/products/${encodeURIComponent(productId)}/reviews${queryString}`,
  );
}

/**
 * 내가 작성한 리뷰 목록 조회
 *
 * GET /users/me/reviews
 */
export function getMyReviews({ page = 1, limit = 10 } = {}, token) {
  const queryString = createQueryString({
    page,
    limit,
  });

  return apiRequest(`/users/me/reviews${queryString}`, {
    token,
  });
}

/**
 * 리뷰 상세 조회
 *
 * GET /reviews/:reviewId
 */
export function getReview(reviewId) {
  if (!reviewId) {
    throw new Error("리뷰 ID가 필요합니다.");
  }

  return apiRequest(`/reviews/${encodeURIComponent(reviewId)}`);
}

/**
 * 리뷰 수정
 *
 * PATCH /reviews/:reviewId
 */
export function updateReview(reviewId, changes, token) {
  if (!reviewId) {
    throw new Error("리뷰 ID가 필요합니다.");
  }

  const allowedFields = ["rating", "content", "images"];

  const body = Object.fromEntries(
    Object.entries(changes ?? {}).filter(
      ([key, value]) => allowedFields.includes(key) && value !== undefined,
    ),
  );

  if (Object.keys(body).length === 0) {
    throw new Error("수정할 리뷰 정보를 입력해주세요.");
  }

  return apiRequest(`/reviews/${encodeURIComponent(reviewId)}`, {
    method: "PATCH",
    token,
    body,
  });
}

/**
 * 리뷰 삭제
 *
 * DELETE /reviews/:reviewId
 */
export function deleteReview(reviewId, token) {
  if (!reviewId) {
    throw new Error("리뷰 ID가 필요합니다.");
  }

  return apiRequest(`/reviews/${encodeURIComponent(reviewId)}`, {
    method: "DELETE",
    token,
  });
}
