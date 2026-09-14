import { apiRequest } from "./apiClient";


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


export function getProduct(productId) {
  return apiRequest(`/products/${productId}`);
}


export function getMainProducts() {
  return apiRequest("/products/main");
}


export function getRelatedProducts(productId) {
  return apiRequest(`/products/${productId}/related`);
}
