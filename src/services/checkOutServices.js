// 옵션가격 계산
export function calculateOptionPrice(selectedOptions) {
  return selectedOptions.reduce(
    (total, option) => total + option.additionalPrice,
    0,
  );
}

// 배송비 계산
export function getShippingFee(userId) {
  const totalPrice = getCartTotalPrice(userId);

  return totalPrice >= 70000 ? 0 : 3000;
}

// 총 상품금액 계산
export function getCartTotalPrice(userId) {
  const cartItems = getCartItems(userId);

  return cartItems.reduce((total, cart) => {
    const optionPrice = calculateOptionPrice(cart.selectedOptions);

    const itemPrice = (cart.product.price + optionPrice) * cart.quantity;

    return total + itemPrice;
  }, 0);
}

// 적립금 계산
export function getEarnPoint(userId) {
  const totalPrice = getCartTotalPrice(userId);

  return Math.floor(totalPrice * 0.05);
}

// 최종금액 계산
export function getFinalPrice(userId) {
  const totalPrice = getCartTotalPrice(userId);

  const shippingFee = getShippingFee(userId);

  return totalPrice + shippingFee;
}
