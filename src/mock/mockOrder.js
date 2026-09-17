// // src/mock/mockOrder.js

// export const mockOrderData = [
//   /**
//    * 배송완료
//    */
//   {
//     orderId: "OM-260910090000001",

//     status: "DELIVERED",
//     statusLabel: "배송완료",

//     createdAt: "2026-09-10T09:00:00+09:00",

//     totalQuantity: 1,
//     totalItemCount: 1,

//     productAmount: 26000,
//     shippingFee: 3000,
//     appliedPoints: 0,
//     finalAmount: 29000,

//     items: [
//       {
//         productId: "cat-clean-001",
//         name: "고양이 화장실",
//         thumbnail: "/images/products/cat-clean-001.webp",
//         quantity: 1,
//         price: 26000,
//         status: "DELIVERED",
//       },
//     ],

//     isMock: true,
//   },

//   /**
//    * 배송완료
//    */
//   {
//     orderId: "OM-260904154632157",

//     status: "DELIVERED",
//     statusLabel: "배송완료",

//     createdAt: "2026-09-04T15:46:32+09:00",

//     totalQuantity: 1,
//     totalItemCount: 1,

//     productAmount: 15800,
//     shippingFee: 3000,
//     appliedPoints: 0,
//     finalAmount: 18800,

//     items: [
//       {
//         productId: "cat-play-001",
//         name: "고양이 낚시대",
//         thumbnail: "/images/products/cat-play-001.webp",
//         quantity: 1,
//         price: 15800,
//         status: "DELIVERED",
//       },
//     ],

//     isMock: true,
//   },

//   /**
//    * 구매확정
//    */
//   {
//     orderId: "OM-260901101500001",

//     status: "CONFIRMED",
//     statusLabel: "구매확정",

//     createdAt: "2026-09-01T10:15:00+09:00",

//     totalQuantity: 2,
//     totalItemCount: 1,

//     productAmount: 55900,
//     shippingFee: 3000,
//     appliedPoints: 3000,
//     finalAmount: 55900,

//     items: [
//       {
//         productId: "cat-eat-001",
//         name: "고양이 츄르",
//         thumbnail: "/images/products/cat-eat-001.webp",
//         quantity: 2,
//         price: 27950,
//         status: "CONFIRMED",
//       },
//     ],

//     isMock: true,
//   },

//   /**
//    * 구매확정
//    */
//   {
//     orderId: "OM-260825181000006",

//     status: "CONFIRMED",
//     statusLabel: "구매확정",

//     createdAt: "2026-08-25T18:10:00+09:00",

//     totalQuantity: 1,
//     totalItemCount: 1,

//     productAmount: 72000,
//     shippingFee: 0,
//     appliedPoints: 2000,
//     finalAmount: 70000,

//     items: [
//       {
//         productId: "cat-high-001",
//         name: "고양이 캣타워",
//         thumbnail: "/images/products/cat-high-001.webp",
//         quantity: 1,
//         price: 72000,
//         status: "CONFIRMED",
//       },
//     ],

//     isMock: true,
//   },
// ];
// src/mock/mockOrder.js

export const mockOrderData = [
  {
    orderId: "OM-260910090000001",

    status: "DELIVERED",
    statusLabel: "배송완료",

    createdAt: "2026-09-10T09:00:00+09:00",

    totalQuantity: 1,
    totalItemCount: 1,

    productAmount: 26000,
    shippingFee: 3000,
    appliedPoints: 0,
    finalAmount: 29000,

    items: [
      {
        productId: "cat-clean-001",
        name: "고양이 화장실",
        thumbnail: "https://i.ibb.co/TxRWwgMm/1.webp",
        quantity: 1,
        price: 26000,
        status: "DELIVERED",
      },
    ],

    claimSummary: null,

    isMock: true,
  },

  {
    orderId: "OM-260904154632157",

    status: "DELIVERED",
    statusLabel: "배송완료",

    createdAt: "2026-09-04T15:46:32+09:00",

    totalQuantity: 1,
    totalItemCount: 1,

    productAmount: 12800,
    shippingFee: 3000,
    appliedPoints: 0,
    finalAmount: 15800,

    items: [
      {
        productId: "cat-play-001",
        name: "고양이 낚시대",
        thumbnail: "https://i.ibb.co/zWVwGp1H/1.webp",
        quantity: 1,
        price: 12800,
        status: "DELIVERED",
      },
    ],

    claimSummary: null,

    isMock: true,
  },

  {
    orderId: "OM-260901101500001",

    status: "CONFIRMED",
    statusLabel: "구매확정",

    createdAt: "2026-09-01T10:15:00+09:00",

    totalQuantity: 2,
    totalItemCount: 1,

    productAmount: 31800,
    shippingFee: 3000,
    appliedPoints: 3000,
    finalAmount: 31800,

    items: [
      {
        productId: "cat-eat-001",
        name: "고양이 츄르",
        thumbnail: "https://i.ibb.co/BK4RXnwT/1.webp",
        quantity: 2,
        price: 15900,
        status: "CONFIRMED",
      },
    ],

    claimSummary: null,

    isMock: true,
  },

  {
    orderId: "OM-260825181000006",

    status: "CONFIRMED",
    statusLabel: "구매확정",

    createdAt: "2026-08-25T18:10:00+09:00",

    totalQuantity: 1,
    totalItemCount: 1,

    productAmount: 42000,
    shippingFee: 3000,
    appliedPoints: 2000,
    finalAmount: 43000,

    items: [
      {
        productId: "cat-high-001",
        name: "하우스 캣타워",
        thumbnail: "https://i.ibb.co/WW7CkQy6/1.webp",
        quantity: 1,
        price: 42000,
        status: "CONFIRMED",
      },
    ],

    claimSummary: null,

    isMock: true,
  },
];
