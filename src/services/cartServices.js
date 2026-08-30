import { carts } from "../mock/carts";
import { products } from "../mock/products";

// 장바구니 상품 조회
export function getCartItems(userId) {
  return carts
    .filter((cart) => cart.userId === userId)
    .map((cart) => {
      const product = products.find((product) => product.id === cart.productId);

      return {
        ...cart,
        product,
      };
    });
}

// 장바구니 추가
export function addCart(userId, productId, quantity, selectedOptions) {
  const existCart = carts.find(
    (cart) =>
      cart.userId === userId &&
      cart.productId === productId &&
      JSON.stringify(cart.selectedOptions) === JSON.stringify(selectedOptions),
  );

  if (existCart) {
    existCart.quantity += quantity;
    existCart.updatedAt = new Date();

    return existCart;
  }

  const newCart = {
    id: crypto.randomUUID(),

    userId,

    productId,

    quantity,

    selectedOptions,

    createdAt: new Date(),

    updatedAt: new Date(),
  };

  carts.push(newCart);

  return newCart;
}

// 장바구니 수량 수정
export function addCart(userId, productId, quantity, selectedOptions) {
  const existCart = carts.find(
    (cart) =>
      cart.userId === userId &&
      cart.productId === productId &&
      JSON.stringify(cart.selectedOptions) === JSON.stringify(selectedOptions),
  );

  if (existCart) {
    existCart.quantity += quantity;
    existCart.updatedAt = new Date();

    return existCart;
  }

  const newCart = {
    id: crypto.randomUUID(),

    userId,

    productId,

    quantity,

    selectedOptions,

    createdAt: new Date(),

    updatedAt: new Date(),
  };

  carts.push(newCart);

  return newCart;
}

// 장바구니 옵션 수정
export function updateOptions(cartId, selectedOptions) {
  const cart = carts.find((cart) => cart.id === cartId);

  if (!cart) return null;

  cart.selectedOptions = selectedOptions;

  cart.updatedAt = new Date();

  return cart;
}

// 장바구니 삭제
export function removeCart(cartId) {
  const index = carts.findIndex((cart) => cart.id === cartId);

  if (index === -1) return false;

  carts.splice(index, 1);

  return true;
}

// 전체 삭제
export function clearCart(userId) {
  const remainCart = carts.filter((cart) => cart.userId !== userId);

  carts.length = 0;

  carts.push(...remainCart);

  return true;
}

// 장바구니 개수
export function getCartCount(userId) {
  return carts.filter((cart) => cart.userId === userId).length;
}
