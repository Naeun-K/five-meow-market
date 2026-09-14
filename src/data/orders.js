export const orders = [
  {
    id: "order_001",

    orderNumber: "202608300001",

    userId: "user_001",

    items: [
      {
        productId: "product_001",

        quantity: 2,

        price: 15000,
      },
    ],

    totalPrice: 30000,

    shippingFee: 3000,

    usedPoint: 0,

    earnedPoint: 1500,

    finalPrice: 33000,

    orderStatus: "배송중",

    orderedAt: new Date("2026-08-30"),
  },
];
