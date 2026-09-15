import * as productApi from "../api/productApi";

// export async function getProducts({
//   category,
//   keyword,
//   page = 1,
//   limit = 8,
// } = {}) {
//   return productApi.getProducts({ category, keyword, page, limit });
// }

// export async function getProduct(productId) {
//   return productApi.getProduct(productId);
// }

// export async function getMainProducts() {
//   return productApi.getMainProducts();
// }

// export async function getRelatedProducts(productId) {
//   return productApi.getRelatedProducts(productId);
// }

// import { apiRequest } from "./apiClient";

// 상품 목록 조회
export async function getProducts({
  categoryId,
  keyword,
  tag,
  page = 1,
  limit = 8,
} = {}) {
  const response = await productApi.getProducts({
    categoryId,
    keyword,
    tag,
    page,
    limit,
  });

  return {
    success: response.success,
    products: response.data?.products ?? [],
    pagination: response.data?.pagination ?? {
      currentPage: 1,
      totalPages: 1,
      totalCount: 0,
      limit,
    },
  };
}

// 상품 상세 조회
export async function getProduct(productId) {
  const response = await productApi.getProduct(productId);

  return {
    success: response.success,
    product: response.data?.product ?? null,
  };
}

// 메인 상품 조회
export async function getMainProducts() {
  const response = await productApi.getMainProducts();

  return {
    success: response.success,
    bestProducts: response.data?.bestProducts ?? [],
    newProducts: response.data?.newProducts ?? [],
  };
}

// 관련 상품 조회
export async function getRelatedProducts(productId) {
  const response = await productApi.getRelatedProducts(productId);

  return {
    success: response.success,
    products: response.data?.products ?? [],
  };
}

// 베스트 상품 조회
export async function getBestProducts() {
  const response = await productApi.getBestProducts();

  return {
    success: response.success,
    products: response.data?.products ?? [],
  };
}

// 신상품 조회
export async function getNewProducts() {
  const response = await productApi.getNewProducts();

  return {
    success: response.success,
    products: response.data?.products ?? [],
  };
}
