import * as reviewApi from "../api/reviewApi";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const MAX_REVIEW_IMAGE_COUNT = 3;

const normalizePagination = ({
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
} = {}) => {
  const normalizedPage = Number(page);
  const normalizedLimit = Number(limit);

  return {
    page:
      Number.isInteger(normalizedPage) && normalizedPage > 0
        ? normalizedPage
        : DEFAULT_PAGE,

    limit:
      Number.isInteger(normalizedLimit) && normalizedLimit > 0
        ? normalizedLimit
        : DEFAULT_LIMIT,
  };
};

const validateReviewId = (reviewId) => {
  if (typeof reviewId !== "string" || !reviewId.trim()) {
    throw new Error("리뷰 ID가 필요합니다.");
  }

  return reviewId.trim();
};

const validateProductId = (productId) => {
  if (typeof productId !== "string" || !productId.trim()) {
    throw new Error("상품 ID가 필요합니다.");
  }

  return productId.trim();
};

const validateOrderId = (orderId) => {
  if (typeof orderId !== "string" || !orderId.trim()) {
    throw new Error("주문 ID가 필요합니다.");
  }

  return orderId.trim();
};

const validateRating = (rating) => {
  const normalizedRating = Number(rating);

  if (
    !Number.isInteger(normalizedRating) ||
    normalizedRating < 1 ||
    normalizedRating > 5
  ) {
    throw new Error("별점은 1점부터 5점 사이의 정수여야 합니다.");
  }

  return normalizedRating;
};

const validateContent = (content) => {
  if (typeof content !== "string" || !content.trim()) {
    throw new Error("리뷰 내용을 입력해주세요.");
  }

  return content.trim();
};

const validateImages = (images = []) => {
  if (!Array.isArray(images)) {
    throw new Error("리뷰 이미지는 배열 형식이어야 합니다.");
  }

  if (images.length > MAX_REVIEW_IMAGE_COUNT) {
    throw new Error(
      `리뷰 이미지는 최대 ${MAX_REVIEW_IMAGE_COUNT}장까지 등록할 수 있습니다.`,
    );
  }

  return images;
};

/**
 * 작성 가능한 리뷰 목록 조회
 *
 * 구매 결정된 주문 상품 중 아직 리뷰를 작성하지 않은
 * 상품만 조회한다.
 */
export async function getWritableReviews(params = {}, token) {
  if (!token) {
    throw new Error("로그인이 필요합니다.");
  }

  const pagination = normalizePagination(params);

  return reviewApi.getWritableReviews(pagination, token);
}

/**
 * 리뷰 작성
 */
export async function createReview(
  { orderId, productId, rating, content, images = [] },
  token,
) {
  if (!token) {
    throw new Error("로그인이 필요합니다.");
  }

  const reviewData = {
    orderId: validateOrderId(orderId),
    productId: validateProductId(productId),
    rating: validateRating(rating),
    content: validateContent(content),
    images: validateImages(images),
  };

  return reviewApi.createReview(reviewData, token);
}

/**
 * 전체 리뷰 목록 조회
 */
export async function getReviews(params = {}) {
  const pagination = normalizePagination(params);

  return reviewApi.getReviews(pagination);
}

/**
 * 상품별 리뷰 목록 조회
 */
export async function getProductReviews(productId, params = {}) {
  const normalizedProductId = validateProductId(productId);

  const pagination = normalizePagination(params);

  return reviewApi.getProductReviews(normalizedProductId, pagination);
}

/**
 * 내가 작성한 리뷰 목록 조회
 */
export async function getMyReviews(params = {}, token) {
  if (!token) {
    throw new Error("로그인이 필요합니다.");
  }

  const pagination = normalizePagination(params);

  return reviewApi.getMyReviews(pagination, token);
}

/**
 * 리뷰 상세 조회
 */
export async function getReview(reviewId) {
  const normalizedReviewId = validateReviewId(reviewId);

  return reviewApi.getReview(normalizedReviewId);
}

/**
 * 리뷰 수정
 *
 * rating, content, images 중 전달된 필드만 수정한다.
 */
export async function updateReview(reviewId, changes = {}, token) {
  if (!token) {
    throw new Error("로그인이 필요합니다.");
  }

  const normalizedReviewId = validateReviewId(reviewId);

  const updateData = {};

  if (changes.rating !== undefined) {
    updateData.rating = validateRating(changes.rating);
  }

  if (changes.content !== undefined) {
    updateData.content = validateContent(changes.content);
  }

  if (changes.images !== undefined) {
    updateData.images = validateImages(changes.images);
  }

  if (Object.keys(updateData).length === 0) {
    throw new Error("수정할 리뷰 정보를 입력해주세요.");
  }

  return reviewApi.updateReview(normalizedReviewId, updateData, token);
}

/**
 * 리뷰 삭제
 */
export async function deleteReview(reviewId, token) {
  if (!token) {
    throw new Error("로그인이 필요합니다.");
  }

  const normalizedReviewId = validateReviewId(reviewId);

  return reviewApi.deleteReview(normalizedReviewId, token);
}
