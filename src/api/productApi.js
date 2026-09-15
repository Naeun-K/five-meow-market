import { apiRequest } from "./apiClient";

// 상품 목록 / 검색 / 카테고리 / 해시태그 조회
export function getProducts({
  categoryId,
  keyword,
  tag,
  page = 1,
  limit = 8,
  token,
} = {}) {
  const params = new URLSearchParams();

  if (categoryId) {
    params.set("categoryId", categoryId);
  }

  if (keyword?.trim()) {
    params.set("keyword", keyword.trim());
  }

  if (tag?.trim()) {
    params.set("tag", tag.trim());
  }

  params.set("page", String(page));
  params.set("limit", String(limit));

  return apiRequest(`/products?${params.toString()}`, {
    token,
  });
}

// 상품 상세 조회
export function getProduct(productId, token) {
  return apiRequest(`/products/${productId}`, {
    token,
  });
}

// 관련 상품 조회
export function getRelatedProducts(productId) {
  return apiRequest(`/products/${productId}/related`);
}

// 베스트 상품 조회
export function getBestProducts() {
  return apiRequest("/products/best");
}

// 신상품 조회
export function getNewProducts() {
  return apiRequest("/products/new");
}

// 메인 상품 조회
export function getMainProducts() {
  return apiRequest("/products/main");
}
