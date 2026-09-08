import { apiRequest } from "./apiClient";

// 상품 목록 / 카테고리 / 검색 / 페이지네이션
export function getProducts({ category, keyword, page = 1, limit = 8 } = {}) {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  if (keyword) {
    params.set("keyword", keyword.trim());
  }

  params.set("page", page);
  params.set("limit", limit);

  return apiRequest(`/products?${params.toString()}`);
}

// 상품 상세 조회
export function getProduct(productId) {
  return apiRequest(`/products/${productId}`);
}

// 메인 상품 조회
export function getMainProducts() {
  return apiRequest("/products/main");
}

// 관련 상품 조회
export function getRelatedProducts(productId) {
  return apiRequest(`/products/${productId}/related`);
}
