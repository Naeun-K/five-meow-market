import { products } from "../data/products";

// 모든 상품 가져오기
export function getProducts() {
  return products;
}

// 특정 한 상품만 가져오기
export function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

// 카테고리별 조회
export function getProductsByCategory(categoryId) {
  return products.filter((product) => product.categoryId === categoryId);
}

// 상품 검색
export function searchProducts(keyword) {
  return products.filter((product) => product.name.includes(keyword));
}

// 상품 추가
export function addProduct(newProduct) {
  products.push(newProduct);
}

// 상품 수정
export function updateProduct(productId, updatedProduct) {
  const product = products.find((product) => product.id === productId);

  Object.assign(product, updatedProduct);
}

// 상품 삭제
export function deleteProduct(productId) {
  const index = products.findIndex((product) => product.id === productId);

  products.splice(index, 1);
}

// 베스트 상품 4개 보여주기
// 개발 중에는 랜덤으로 보여주고 실 서비스일때는 판매량에 따라 보여줄 수 있음
export function getBestProducts({ random = false, count = 4 } = {}) {
  if (random) {
    return [...products].sort(() => Math.random() - 0.5).slice(0, count);
  }

  return [...products]
    .sort((a, b) => b.soldCount - a.soldCount)
    .slice(0, count);
}
