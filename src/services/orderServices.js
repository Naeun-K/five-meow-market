import { orders } from "../mock/orders";
import { carts } from "../mock/carts";
import { products } from "../mock/products";

// 주문번호 생성
export function generateOrderNumber() {
  const now = new Date();

  const yyyy = now.getFullYear();

  const mm = String(now.getMonth() + 1).padStart(2, "0");

  const dd = String(now.getDate()).padStart(2, "0");

  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");

  return `OM${yyyy}${mm}${dd}${random}`;
}

// 주문 검증
export function validateOrder(orderData) {
  if (!orderData.receiver) {
    throw new Error("수령인을 입력해주세요.");
  }

  if (!orderData.phone) {
    throw new Error("휴대폰번호를 입력해주세요.");
  }

  if (!orderData.zipcode) {
    throw new Error("우편번호를 입력해주세요.");
  }

  if (!orderData.address) {
    throw new Error("주소를 입력해주세요.");
  }

  if (!orderData.paymentMethod) {
    throw new Error("결제수단을 선택해주세요.");
  }

  return true;
}

// 주문 생성
export function createOrder({
  userId,
  cartIds,

  receiver,
  phone,
  zipcode,
  address,
  detailAddress,

  paymentMethod,

  usedPoint = 0,

  summary,
}) {
  validateOrder({
    receiver,
    phone,
    zipcode,
    address,
    paymentMethod,
  });

  if (!Array.isArray(cartIds) || cartIds.length === 0) {
    throw new Error("주문할 상품을 선택해주세요.");
  }

  const selectedCart = carts.filter(
    (cart) => cart.userId === userId && cartIds.includes(cart.id),
  );

  if (selectedCart.length === 0) {
    throw new Error("선택한 장바구니 상품이 없습니다.");
  }

  const items = selectedCart.map((cart) => {
    const product = products.find((product) => product.id === cart.productId);

    const optionPrice = cart.selectedOptions.reduce(
      (total, option) => total + option.additionalPrice,
      0,
    );

    return {
      productId: product.id,

      productName: product.name,

      thumbnail: product.thumbnail,

      quantity: cart.quantity,

      productPrice: product.price,

      selectedOptions: structuredClone(cart.selectedOptions),

      optionPrice,

      totalPrice: (product.price + optionPrice) * cart.quantity,
    };
  });

  const order = {
    id: crypto.randomUUID(),

    orderNumber: generateOrderNumber(),

    userId,

    items,

    totalPrice: summary.totalPrice,

    shippingFee: summary.shippingFee,

    usedPoint,

    earnedPoint: summary.earnedPoint,

    finalPrice: summary.finalPrice,

    receiver,

    phone,

    zipcode,

    address,

    detailAddress,

    paymentMethod,

    paymentStatus: "결제완료",

    orderStatus: "배송준비중",

    createdAt: new Date(),

    updatedAt: new Date(),
  };

  orders.push(order);

  // 주문한 장바구니만 삭제
  for (let i = carts.length - 1; i >= 0; i--) {
    if (carts[i].userId === userId && cartIds.includes(carts[i].id)) {
      carts.splice(i, 1);
    }
  }

  return order;
}
