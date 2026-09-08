import * as productApi from "../api/productApi";

export async function getProducts({
  category,
  keyword,
  page = 1,
  limit = 8,
} = {}) {
  return productApi.getProducts({ category, keyword, page, limit });
}

export async function getProduct(productId) {
  return productApi.getProduct(productId);
}

export async function getMainProducts() {
  return productApi.getMainProducts();
}

export async function getRelatedProducts(productId) {
  return productApi.getRelatedProducts(productId);
}
