// /** @jsxImportSource @emotion/react */

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import {
//   page,
//   pageTitle,
//   userCard,
//   userInfo,
//   userName,
//   userEmail,
//   editButton,
//   summary,
//   summaryItem,
//   summaryLabel,
//   summaryValue,
//   section,
//   sectionTitle,
//   orderCard,
//   titleWrapper,
//   quickTitle,
//   OrderCardWrapper,
//   OrderCard,
// } from "./MyPageStyle";

// import buttonHover from "../../assets/buttonHover.webp";
// import BasicPage from "../basicPage/BasicPage";
// import useAuth from "../../hooks/useAuth";
// import useToast from "../../hooks/useToast";
// import Loader from "../../components/loader/Loader";
// import myShopCat from "../../assets/logo-myshop.webp";
// import ProductCard from "../../components/product/ProductCard/ProductCard";
// import ReviewModal from "../../components/reviewModal/ReviewModal";

// import * as orderService from "../../services/orderServices";
// import * as wishlistService from "../../services/wishlistServices";
// import * as cartService from "../../services/cartServices";
// import * as checkoutService from "../../services/checkOutServices";

// import { getPoints } from "../../services/userService";
// import { getWritableReviews } from "../../services/reviewService";
// import { getMyInquiries } from "../../services/inquiryService";

// import { mockOrderData } from "../../mock/mockOrder";

// /* =========================================================
//    주문 상태
// ========================================================= */

// const STATUS_LABELS = {
//   PAYMENT_COMPLETED: "결제완료",
//   PREPARING: "상품준비중",
//   SHIPPING: "배송중",
//   DELIVERED: "배송완료",
//   CONFIRMED: "구매확정",

//   CANCEL_REQUESTED: "취소 신청완료",
//   CANCELED: "취소완료",
//   PARTIALLY_CANCELED: "부분취소",

//   EXCHANGE_REQUESTED: "교환 신청완료",
//   EXCHANGED: "교환완료",
//   PARTIALLY_EXCHANGED: "부분교환",

//   RETURN_REQUESTED: "반품 신청완료",
//   RETURNED: "반품완료",
//   PARTIALLY_RETURNED: "부분반품",
// };

// const ACTIVE_CLAIM_STATUSES = [
//   "REQUESTED",
//   "PENDING",
//   "PROCESSING",
//   "APPROVED",
// ];

// /* =========================================================
//    공통 함수
// ========================================================= */

// function getResponseData(response) {
//   return response?.data ?? response ?? {};
// }

// function formatDate(dateString) {
//   if (!dateString) {
//     return "";
//   }

//   const date = new Date(dateString);

//   if (Number.isNaN(date.getTime())) {
//     return "";
//   }

//   const formatter = new Intl.DateTimeFormat("ko-KR", {
//     timeZone: "Asia/Seoul",
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//   });

//   const parts = formatter.formatToParts(date);

//   const getPart = (type) =>
//     parts.find((part) => part.type === type)?.value ?? "";

//   return `${getPart("year")}.${getPart("month")}.${getPart(
//     "day",
//   )} ${getPart("hour")}:${getPart("minute")}`;
// }

// function formatPrice(price) {
//   return `${Number(price ?? 0).toLocaleString()}원`;
// }

// function getOrderProductName(order) {
//   const items = Array.isArray(order?.items) ? order.items : [];

//   if (items.length === 0) {
//     return "";
//   }

//   const firstProductName = items[0]?.name ?? items[0]?.productName ?? "상품";

//   if (items.length === 1) {
//     return firstProductName;
//   }

//   return `${firstProductName} 외 ${items.length - 1}건`;
// }

// function getOrderSummary(order) {
//   const items = Array.isArray(order?.items) ? order.items : [];

//   const productCount = items.length;

//   const totalQuantity = items.reduce(
//     (sum, item) => sum + Number(item?.quantity ?? 0),
//     0,
//   );

//   let totalAmount = Number(
//     order?.finalAmount ?? order?.totalAmount ?? order?.paymentAmount ?? 0,
//   );

//   if (!totalAmount) {
//     totalAmount = items.reduce((sum, item) => {
//       const itemAmount =
//         item?.itemAmount !== undefined
//           ? Number(item.itemAmount)
//           : Number(item?.price ?? 0) * Number(item?.quantity ?? 0);

//       return sum + itemAmount;
//     }, 0);
//   }

//   return {
//     productCount,
//     totalQuantity,
//     totalAmount,
//   };
// }

// function hasActiveClaim(order) {
//   const claimSummary = order?.claimSummary;

//   if (!claimSummary) {
//     return false;
//   }

//   return ACTIVE_CLAIM_STATUSES.includes(claimSummary.status);
// }

// function isCanceledOrder(order) {
//   return (
//     order?.status === "CANCELED" ||
//     (order?.claimSummary?.type === "CANCEL" &&
//       order?.claimSummary?.status === "COMPLETED")
//   );
// }

// function getOrderStatusLabel(order) {
//   if (STATUS_LABELS[order?.status]) {
//     return STATUS_LABELS[order.status];
//   }

//   const claim = order?.claimSummary;

//   if (claim) {
//     if (claim.type === "CANCEL") {
//       return claim.status === "COMPLETED" ? "취소완료" : "취소 신청완료";
//     }

//     if (claim.type === "EXCHANGE") {
//       return claim.status === "COMPLETED" ? "교환완료" : "교환 신청완료";
//     }

//     if (claim.type === "RETURN") {
//       return claim.status === "COMPLETED" ? "반품완료" : "반품 신청완료";
//     }
//   }

//   return order?.statusLabel ?? order?.status ?? "";
// }

// function getOrderTime(order) {
//   const dateValue = order?.orderedAt ?? order?.createdAt;

//   if (!dateValue) {
//     return 0;
//   }

//   const time = new Date(dateValue).getTime();

//   return Number.isNaN(time) ? 0 : time;
// }

// /* =========================================================
//    MyPage
// ========================================================= */

// function MyPage() {
//   const { user, isLoggedIn, isAuthLoading, accessToken } = useAuth();

//   const navigate = useNavigate();
//   const { showToast } = useToast();

//   const [orders, setOrders] = useState([]);
//   const [orderCount, setOrderCount] = useState(0);
//   const [isOrderLoading, setIsOrderLoading] = useState(true);

//   const [points, setPoints] = useState(0);

//   const [writableReviewCount, setWritableReviewCount] = useState(0);

//   const [inquiryCount, setInquiryCount] = useState(0);

//   const [wishlistProducts, setWishlistProducts] = useState([]);
//   const [wishlistCount, setWishlistCount] = useState(0);
//   const [isWishlistLoading, setIsWishlistLoading] = useState(true);

//   const [selectedProductId, setSelectedProductId] = useState(null);

//   const [selectedOrderId, setSelectedOrderId] = useState(null);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const nickname =
//     user?.nickname || user?.nickName || user?.username || user?.name || "회원";

//   const email = user?.email ?? "";

//   /* =========================================================
//      작성 가능한 리뷰 개수
//   ========================================================= */

//   useEffect(() => {
//     if (!accessToken) {
//       return undefined;
//     }

//     let isCancelled = false;

//     getWritableReviews(
//       {
//         page: 1,
//         limit: 1,
//       },
//       accessToken,
//     )
//       .then((response) => {
//         if (isCancelled) {
//           return;
//         }

//         const data = getResponseData(response);

//         setWritableReviewCount(data.pagination?.totalCount ?? 0);
//       })
//       .catch((error) => {
//         if (isCancelled) {
//           return;
//         }

//         console.error("작성 가능한 리뷰 개수 조회 실패:", error);
//       });

//     return () => {
//       isCancelled = true;
//     };
//   }, [accessToken]);

//   /* =========================================================
//      문의 개수
//   ========================================================= */

//   useEffect(() => {
//     if (!accessToken) {
//       return undefined;
//     }

//     let isCancelled = false;

//     getMyInquiries(
//       {
//         page: 1,
//         limit: 1,
//       },
//       accessToken,
//     )
//       .then((response) => {
//         if (isCancelled) {
//           return;
//         }

//         const data = getResponseData(response);

//         setInquiryCount(data.pagination?.totalCount ?? 0);
//       })
//       .catch((error) => {
//         if (isCancelled) {
//           return;
//         }

//         console.error("문의 내역 개수 조회 실패:", error);
//       });

//     return () => {
//       isCancelled = true;
//     };
//   }, [accessToken]);

//   /* =========================================================
//      주문 + 현재 적립금

//      실제 주문 0개
//      → 상단 주문 개수 0
//      → Mock 주문도 표시하지 않음

//      실제 주문 1개 이상
//      → 상단 주문 개수 = 실제 주문 + Mock 주문
//      → 미리보기 = 실제 주문 + Mock 주문 중 최신 2개
//   ========================================================= */

//   useEffect(() => {
//     if (isAuthLoading || !accessToken) {
//       return undefined;
//     }

//     let isCancelled = false;

//     const fetchMyPageData = async () => {
//       try {
//         const [orderResult, pointResult] = await Promise.all([
//           orderService.getOrders(
//             {
//               period: "all",
//               page: 1,
//               limit: 100,
//             },
//             accessToken,
//           ),

//           getPoints(accessToken),
//         ]);

//         if (isCancelled) {
//           return;
//         }

//         /* =========================
//            주문
//         ========================= */

//         if (orderResult?.success === false) {
//           throw new Error(
//             orderResult.message || "주문 내역을 불러오지 못했습니다.",
//           );
//         }

//         const orderData = getResponseData(orderResult);

//         const realOrders = Array.isArray(orderData.orders)
//           ? orderData.orders
//           : [];

//         const realOrderCount =
//           orderData.pagination?.totalCount ?? realOrders.length;

//         /*
//          * 실제 주문이 없으면
//          * Mock 주문도 개수/미리보기에 포함하지 않음
//          */
//         if (realOrderCount === 0) {
//           setOrderCount(0);
//           setOrders([]);
//         } else {
//           /*
//            * 실제 주문과 Mock 주문의 orderId 중복 제거
//            */
//           const realOrderIds = new Set(
//             realOrders.map((order) => order.orderId),
//           );

//           const availableMockOrders = mockOrderData.filter(
//             (mockOrder) => !realOrderIds.has(mockOrder.orderId),
//           );

//           /*
//            * 상단 주문 내역 숫자
//            *
//            * 실제 주문이 하나 이상 존재할 때만
//            * 실제 주문 + Mock 주문
//            */
//           const combinedOrderCount =
//             realOrderCount + availableMockOrders.length;

//           setOrderCount(combinedOrderCount);

//           /*
//            * 마이페이지 주문 미리보기
//            *
//            * 실제 주문 + Mock 주문
//            * 최신순 정렬
//            * 최신 2개 표시
//            */
//           const previewOrders = [...realOrders, ...availableMockOrders]
//             .sort((a, b) => getOrderTime(b) - getOrderTime(a))
//             .slice(0, 2);

//           setOrders(previewOrders);
//         }

//         /* =========================
//            현재 적립금
//         ========================= */

//         if (pointResult?.success === false) {
//           throw new Error(
//             pointResult.message || "적립금을 불러오지 못했습니다.",
//           );
//         }

//         const pointData = getResponseData(pointResult);

//         setPoints(Number(pointData.point ?? 0));
//       } catch (error) {
//         if (isCancelled) {
//           return;
//         }

//         console.error("마이페이지 데이터 조회 실패:", error);

//         showToast(
//           error?.message || "마이페이지 정보를 불러오지 못했습니다.",
//           false,
//         );
//       } finally {
//         if (!isCancelled) {
//           setIsOrderLoading(false);
//         }
//       }
//     };

//     fetchMyPageData();

//     return () => {
//       isCancelled = true;
//     };
//   }, [accessToken, isAuthLoading, showToast]);

//   /* =========================================================
//      찜한 상품
//   ========================================================= */

//   useEffect(() => {
//     if (isAuthLoading || !accessToken) {
//       return undefined;
//     }

//     let isCancelled = false;

//     const fetchWishlist = async () => {
//       try {
//         const result = await wishlistService.getWishlist(
//           {
//             page: 1,
//             limit: 4,
//           },
//           accessToken,
//         );

//         if (isCancelled) {
//           return;
//         }

//         if (!result.success) {
//           throw new Error(result.message || "찜한 상품을 불러오지 못했습니다.");
//         }

//         const wishlistItems = Array.isArray(result.wishlistItems)
//           ? result.wishlistItems
//           : [];

//         const products = wishlistItems
//           .map((item) => {
//             const product = item?.product ?? item;

//             return {
//               ...product,

//               productId: product?.productId ?? item?.productId,

//               thumbnail:
//                 product?.thumbnail ??
//                 product?.image ??
//                 item?.thumbnail ??
//                 item?.image ??
//                 "",

//               name: product?.name ?? item?.name ?? "",

//               price: Number(product?.price ?? item?.price ?? 0),

//               isLiked: true,
//             };
//           })
//           .filter((product) => product.productId);

//         setWishlistProducts(products);

//         setWishlistCount(result.pagination?.totalCount ?? 0);
//       } catch (error) {
//         if (isCancelled) {
//           return;
//         }

//         console.error("마이페이지 찜 목록 조회 실패:", error);

//         showToast(error?.message || "찜한 상품을 불러오지 못했습니다.", false);
//       } finally {
//         if (!isCancelled) {
//           setIsWishlistLoading(false);
//         }
//       }
//     };

//     fetchWishlist();

//     return () => {
//       isCancelled = true;
//     };
//   }, [accessToken, isAuthLoading, showToast]);

//   /* =========================================================
//      찜 해제
//   ========================================================= */

//   const handleRemoveWishlist = async (productId) => {
//     if (!accessToken) {
//       showToast("로그인이 필요합니다.", false);
//       return;
//     }

//     try {
//       const result = await wishlistService.removeWishlist(
//         productId,
//         accessToken,
//       );

//       if (!result.success) {
//         throw new Error(result.message || "찜 해제에 실패했습니다.");
//       }

//       setWishlistProducts((previousProducts) =>
//         previousProducts.filter((product) => product.productId !== productId),
//       );

//       setWishlistCount((previousCount) => Math.max(0, previousCount - 1));

//       showToast(result.message || "찜한 상품에서 삭제되었습니다.", true);
//     } catch (error) {
//       console.error("찜 해제 실패:", error);

//       showToast(error?.message || "찜 해제에 실패했습니다.", false);
//     }
//   };

//   /* =========================================================
//      장바구니
//   ========================================================= */

//   const handleAddCart = async (productId) => {
//     if (!accessToken) {
//       showToast("로그인이 필요합니다.", false);
//       return;
//     }

//     if (!productId) {
//       showToast("상품 정보가 없습니다.", false);
//       return;
//     }

//     try {
//       const result = await cartService.addCartItem(productId, 1, accessToken);

//       if (!result.success) {
//         throw new Error(result.message || "장바구니에 상품을 담지 못했습니다.");
//       }

//       showToast(result.message || "장바구니에 상품을 담았습니다.", true);
//     } catch (error) {
//       console.error("장바구니 추가 실패:", error);

//       showToast(error?.message || "장바구니에 상품을 담지 못했습니다.", false);
//     }
//   };

//   /* =========================================================
//      바로구매
//   ========================================================= */

//   const handleBuyNow = async (productId) => {
//     if (!accessToken) {
//       showToast("로그인이 필요합니다.", false);
//       return;
//     }

//     if (!productId) {
//       showToast("상품 정보가 없습니다.", false);
//       return;
//     }

//     try {
//       const result = await checkoutService.createCheckout(
//         {
//           items: [
//             {
//               productId,
//               quantity: 1,
//             },
//           ],
//         },
//         accessToken,
//       );

//       if (!result.success) {
//         throw new Error(result.message || "바로구매 처리에 실패했습니다.");
//       }

//       if (!result.checkoutId) {
//         throw new Error("Checkout ID를 확인할 수 없습니다.");
//       }

//       navigate(`/checkout?checkoutId=${encodeURIComponent(result.checkoutId)}`);
//     } catch (error) {
//       console.error("바로구매 실패:", error);

//       showToast(error?.message || "바로구매 처리에 실패했습니다.", false);
//     }
//   };

//   /* =========================================================
//      취소 / 교환 / 반품
//   ========================================================= */

//   const handleClaim = (orderId, claimType) => {
//     const searchParams = new URLSearchParams({
//       orderId: String(orderId),
//       type: claimType,
//     });

//     navigate(`/claims?${searchParams.toString()}`);
//   };

//   /* =========================================================
//      구매확정
//   ========================================================= */

//   const handleConfirmOrder = async (orderId) => {
//     if (!accessToken) {
//       showToast("로그인 정보가 없습니다.", false);

//       return;
//     }

//     try {
//       const result = await orderService.confirmOrder(orderId, accessToken);

//       if (result?.success === false) {
//         throw new Error(result.message || "구매확정에 실패했습니다.");
//       }

//       const data = getResponseData(result);

//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order.orderId === orderId
//             ? {
//                 ...order,
//                 status: data.status ?? "CONFIRMED",
//                 statusLabel: "구매확정",
//                 canConfirm: false,
//                 confirmedAt: data.confirmedAt ?? order.confirmedAt,
//               }
//             : order,
//         ),
//       );

//       showToast(result?.message || "구매가 확정되었습니다.", true);
//     } catch (error) {
//       console.error("구매확정 실패:", error);

//       showToast(error?.message || "구매확정에 실패했습니다.", false);
//     }
//   };

//   /* =========================================================
//      리뷰
//   ========================================================= */

//   const handleReview = (orderId, productId) => {
//     setSelectedOrderId(orderId);
//     setSelectedProductId(productId);
//     setIsModalOpen(true);
//   };

//   /* =========================================================
//      Loading
//   ========================================================= */

//   if (isAuthLoading) {
//     return (
//       <BasicPage>
//         <Loader />
//       </BasicPage>
//     );
//   }

//   if (!isLoggedIn) {
//     return <div>로그인이 필요합니다.</div>;
//   }

//   return (
//     <BasicPage>
//       <main css={page}>
//         <h1 css={pageTitle}>MY PAGE</h1>

//         {/* 회원 정보 */}

//         <section css={userCard}>
//           <div className="profile-wrapper">
//             <div className="profile-svg">
//               <img src={myShopCat} alt="" />
//             </div>

//             <div css={userInfo}>
//               <span css={userName}>안녕하세요, {nickname}님!</span>

//               <div className="info-wrapper">
//                 <span css={userEmail}>{email}</span>

//                 <button
//                   type="button"
//                   css={userEmail}
//                   className="pointDeco"
//                   onClick={() => navigate("/mypage/points")}
//                 >
//                   <span>적립금</span>

//                   <span>{Number(points ?? 0).toLocaleString()} P</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* 회원정보 수정 */}

//           <button
//             type="button"
//             css={editButton}
//             onClick={() => navigate("/mypage/edit")}
//           >
//             <strong css={quickTitle}>회원정보 수정</strong>

//             <span className="quick-arrow">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="100%"
//                 height="100%"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
//                 />
//               </svg>
//             </span>
//           </button>
//         </section>

//         {/* 요약 */}

//         <section css={summary}>
//           {/* 주문 내역 */}

//           <div css={summaryItem}>
//             <div className="btn-hover-container">
//               <img
//                 src={buttonHover}
//                 alt="버튼꾸미기용 고양이 이미지"
//                 className="btn-hover"
//                 aria-hidden="true"
//               />
//             </div>

//             <button
//               type="button"
//               className="svg-container"
//               onClick={() => navigate("/mypage/orders")}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="100%"
//                 height="100%"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
//                 <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118z" />
//               </svg>
//             </button>

//             <span css={summaryLabel}>주문 내역</span>

//             <strong css={summaryValue}>{orderCount}</strong>
//           </div>

//           {/* 찜한 상품 */}

//           <div css={summaryItem}>
//             <div className="btn-hover-container">
//               <img
//                 src={buttonHover}
//                 alt="버튼꾸미기용 고양이 이미지"
//                 className="btn-hover"
//                 aria-hidden="true"
//               />
//             </div>

//             <button
//               type="button"
//               className="svg-container"
//               onClick={() => navigate("/mypage/wishlist")}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="100%"
//                 height="100%"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982" />
//                 <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z" />
//               </svg>
//             </button>

//             <span css={summaryLabel}>찜한 상품</span>

//             <strong css={summaryValue}>{wishlistCount}</strong>
//           </div>

//           {/* 리뷰 관리 */}

//           <div css={summaryItem}>
//             <div className="btn-hover-container">
//               <img
//                 src={buttonHover}
//                 alt="버튼꾸미기용 고양이 이미지"
//                 className="btn-hover"
//                 aria-hidden="true"
//               />
//             </div>

//             <button
//               type="button"
//               className="svg-container"
//               onClick={() => navigate("/mypage/reviews")}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="100%"
//                 height="100%"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//                 <path
//                   fillRule="evenodd"
//                   d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
//                 />
//               </svg>
//             </button>

//             <span css={summaryLabel}>리뷰 관리</span>

//             <strong css={summaryValue}>
//               {accessToken ? writableReviewCount : 0}
//             </strong>
//           </div>

//           {/* 문의 내역 */}

//           <div css={summaryItem}>
//             <div className="btn-hover-container">
//               <img
//                 src={buttonHover}
//                 alt="버튼꾸미기용 고양이 이미지"
//                 className="btn-hover"
//                 aria-hidden="true"
//                 loading="lazy"
//               />
//             </div>

//             <button
//               type="button"
//               className="svg-container"
//               onClick={() => navigate("/mypage/inquiry")}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="100%"
//                 height="100%"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745" />
//                 <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
//                 <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
//               </svg>
//             </button>

//             <span css={summaryLabel}>문의 내역</span>

//             <strong css={summaryValue}>{accessToken ? inquiryCount : 0}</strong>
//           </div>
//         </section>

//         {/* 주문 내역 */}

//         <section css={section}>
//           <div css={titleWrapper}>
//             <h2 css={sectionTitle}>주문 내역</h2>

//             <button
//               type="button"
//               css={editButton}
//               onClick={() => navigate("/mypage/orders")}
//             >
//               <strong css={quickTitle}>전체보기</strong>

//               <span className="quick-arrow">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="100%"
//                   height="100%"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           <div className="section-content">
//             {orderCount > 0 && (
//               <span className="guide-message">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
//                   />
//                 </svg>
//                 밀어서 보기
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
//                   />
//                 </svg>
//               </span>
//             )}

//             {isOrderLoading ? (
//               <Loader />
//             ) : orderCount > 0 ? (
//               <OrderCardWrapper>
//                 {orders.map((order) => {
//                   const product = order.items?.[0];

//                   if (!product) {
//                     return null;
//                   }

//                   const displayProductName = getOrderProductName(order);

//                   const orderSummary = getOrderSummary(order);

//                   const orderStatusLabel = getOrderStatusLabel(order);

//                   const activeClaim = hasActiveClaim(order);

//                   const canceledOrder = isCanceledOrder(order);

//                   const canCancel =
//                     order.status === "PAYMENT_COMPLETED" &&
//                     !activeClaim &&
//                     !canceledOrder &&
//                     !order.claimSummary;

//                   const canUseDeliveredActions =
//                     order.status === "DELIVERED" &&
//                     !activeClaim &&
//                     !canceledOrder;

//                   const canWriteReview =
//                     order.status === "CONFIRMED" &&
//                     !canceledOrder &&
//                     !(
//                       order.claimSummary?.type === "RETURN" &&
//                       order.claimSummary?.status === "COMPLETED"
//                     );

//                   return (
//                     <OrderCard key={order.orderId}>
//                       <div className="order-banner">
//                         <span className="order-date">
//                           {formatDate(order.orderedAt ?? order.createdAt)}
//                         </span>

//                         <button
//                           type="button"
//                           className="order-number"
//                           onClick={() =>
//                             navigate(
//                               `/mypage/orders?orderId=${encodeURIComponent(
//                                 order.orderId,
//                               )}`,
//                             )
//                           }
//                         >
//                           {order.orderId}
//                         </button>
//                       </div>

//                       <div className="order-content">
//                         <div className="order-product-summary">
//                           <div className="img-container">
//                             <ProductCard
//                               image={product.thumbnail}
//                               name={displayProductName}
//                               badge=""
//                               showHeart={false}
//                             />
//                           </div>

//                           <div className="product-summary-info">
//                             <strong>{displayProductName}</strong>

//                             <span>
//                               총 {orderSummary.productCount}종 · 총{" "}
//                               {orderSummary.totalQuantity}개
//                             </span>
//                           </div>
//                         </div>

//                         <div className="payment-status-wrapper">
//                           <p className="payments">
//                             총 결제금액{" "}
//                             <strong>
//                               {formatPrice(orderSummary.totalAmount)}
//                             </strong>
//                           </p>

//                           <div className="order-status">{orderStatusLabel}</div>
//                         </div>

//                         <div className="button-container">
//                           {canCancel && (
//                             <button
//                               type="button"
//                               className="cancel-order-button"
//                               onClick={() =>
//                                 handleClaim(order.orderId, "cancel")
//                               }
//                             >
//                               주문취소
//                             </button>
//                           )}

//                           {canUseDeliveredActions && (
//                             <>
//                               <button
//                                 type="button"
//                                 className="claim-button"
//                                 onClick={() =>
//                                   handleClaim(order.orderId, "exchange-return")
//                                 }
//                               >
//                                 교환/반품 신청
//                               </button>

//                               {order.canConfirm !== false && (
//                                 <button
//                                   type="button"
//                                   className="confirm-button"
//                                   onClick={() =>
//                                     handleConfirmOrder(order.orderId)
//                                   }
//                                 >
//                                   구매확정
//                                 </button>
//                               )}
//                             </>
//                           )}

//                           {canWriteReview && (
//                             <button
//                               type="button"
//                               className="review-button"
//                               onClick={() =>
//                                 handleReview(order.orderId, product.productId)
//                               }
//                             >
//                               리뷰작성
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     </OrderCard>
//                   );
//                 })}
//               </OrderCardWrapper>
//             ) : null}
//           </div>
//         </section>

//         {/* 찜한 상품 */}

//         <section css={section}>
//           <div css={titleWrapper}>
//             <h2 css={sectionTitle}>찜한 상품</h2>

//             <button
//               type="button"
//               css={editButton}
//               onClick={() => navigate("/mypage/wishlist")}
//             >
//               <strong css={quickTitle}>전체보기</strong>

//               <span className="quick-arrow">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="100%"
//                   height="100%"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           <div className="section-content">
//             <span className="guide-message">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="30"
//                 height="30"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
//                 />
//               </svg>
//               밀어서 보기
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="30"
//                 height="30"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
//                 />
//               </svg>
//             </span>

//             {isWishlistLoading ? (
//               <Loader />
//             ) : (
//               <article css={orderCard}>
//                 {wishlistProducts.map((product) => (
//                   <div className="item-wrapper" key={product.productId}>
//                     <div className="img-wrapper">
//                       <ProductCard
//                         productId={product.productId}
//                         image={product.thumbnail}
//                         name={product.name}
//                         badge=""
//                         showHeart
//                         isLiked={product.isLiked}
//                         onHeartClick={() =>
//                           handleRemoveWishlist(product.productId)
//                         }
//                       />
//                     </div>

//                     <div className="desc-wrapper">
//                       <p>{product.name}</p>

//                       <strong>{formatPrice(product.price)}</strong>
//                     </div>

//                     <div className="btn-wrapper">
//                       <button
//                         type="button"
//                         onClick={() => handleAddCart(product.productId)}
//                       >
//                         장바구니
//                       </button>

//                       <button
//                         type="button"
//                         onClick={() => handleBuyNow(product.productId)}
//                       >
//                         바로구매
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </article>
//             )}
//           </div>
//         </section>
//       </main>

//       {isModalOpen && (
//         <ReviewModal
//           orderId={selectedOrderId}
//           productId={selectedProductId}
//           onClose={() => {
//             setIsModalOpen(false);
//             setSelectedOrderId(null);
//             setSelectedProductId(null);
//           }}
//         />
//       )}
//     </BasicPage>
//   );
// }

// export default MyPage;
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  page,
  pageTitle,
  userCard,
  userInfo,
  userName,
  userEmail,
  editButton,
  summary,
  summaryItem,
  summaryLabel,
  summaryValue,
  section,
  sectionTitle,
  orderCard,
  titleWrapper,
  quickTitle,
  OrderCardWrapper,
  OrderCard,
} from "./MyPageStyle";

import buttonHover from "../../assets/buttonHover.webp";
import BasicPage from "../basicPage/BasicPage";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import Loader from "../../components/loader/Loader";
import myShopCat from "../../assets/logo-myshop.webp";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import ReviewModal from "../../components/reviewModal/ReviewModal";

import * as orderService from "../../services/orderServices";
import * as wishlistService from "../../services/wishlistServices";
import * as cartService from "../../services/cartServices";
import * as checkoutService from "../../services/checkOutServices";

import { getPoints } from "../../services/userService";
import { getWritableReviews } from "../../services/reviewService";
import { getMyInquiries } from "../../services/inquiryService";

import { mockOrderData } from "../../mock/mockOrder";

const STATUS_LABELS = {
  PAYMENT_COMPLETED: "결제완료",
  PREPARING: "상품준비중",
  SHIPPING: "배송중",
  DELIVERED: "배송완료",
  CONFIRMED: "구매확정",

  CANCEL_REQUESTED: "취소 신청완료",
  CANCELED: "취소완료",
  PARTIALLY_CANCELED: "부분취소",

  EXCHANGE_REQUESTED: "교환 신청완료",
  EXCHANGED: "교환완료",
  PARTIALLY_EXCHANGED: "부분교환",

  RETURN_REQUESTED: "반품 신청완료",
  RETURNED: "반품완료",
  PARTIALLY_RETURNED: "부분반품",
};

const ACTIVE_CLAIM_STATUSES = [
  "REQUESTED",
  "PENDING",
  "PROCESSING",
  "APPROVED",
];

function getResponseData(response) {
  return response?.data ?? response ?? {};
}

function formatDate(dateString) {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const formatter = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);

  const getPart = (type) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${getPart("year")}.${getPart("month")}.${getPart(
    "day",
  )} ${getPart("hour")}:${getPart("minute")}`;
}

function formatPrice(price) {
  return `${Number(price ?? 0).toLocaleString()}원`;
}

function getOrderProductName(order) {
  const items = Array.isArray(order?.items) ? order.items : [];

  if (items.length === 0) {
    return "";
  }

  const firstProductName = items[0]?.name ?? items[0]?.productName ?? "상품";

  if (items.length === 1) {
    return firstProductName;
  }

  return `${firstProductName} 외 ${items.length - 1}건`;
}

function getOrderSummary(order) {
  const items = Array.isArray(order?.items) ? order.items : [];

  const productCount = items.length;

  const totalQuantity = items.reduce(
    (sum, item) => sum + Number(item?.quantity ?? 0),
    0,
  );

  let totalAmount = Number(
    order?.finalAmount ?? order?.totalAmount ?? order?.paymentAmount ?? 0,
  );

  if (!totalAmount) {
    totalAmount = items.reduce((sum, item) => {
      const itemAmount =
        item?.itemAmount !== undefined
          ? Number(item.itemAmount)
          : Number(item?.price ?? 0) * Number(item?.quantity ?? 0);

      return sum + itemAmount;
    }, 0);
  }

  return {
    productCount,
    totalQuantity,
    totalAmount,
  };
}

function hasActiveClaim(order) {
  const claimSummary = order?.claimSummary;

  if (!claimSummary) {
    return false;
  }

  return ACTIVE_CLAIM_STATUSES.includes(claimSummary.status);
}

function isCanceledOrder(order) {
  return (
    order?.status === "CANCELED" ||
    (order?.claimSummary?.type === "CANCEL" &&
      order?.claimSummary?.status === "COMPLETED")
  );
}

function getOrderStatusLabel(order) {
  if (STATUS_LABELS[order?.status]) {
    return STATUS_LABELS[order.status];
  }

  const claim = order?.claimSummary;

  if (claim) {
    if (claim.type === "CANCEL") {
      return claim.status === "COMPLETED" ? "취소완료" : "취소 신청완료";
    }

    if (claim.type === "EXCHANGE") {
      return claim.status === "COMPLETED" ? "교환완료" : "교환 신청완료";
    }

    if (claim.type === "RETURN") {
      return claim.status === "COMPLETED" ? "반품완료" : "반품 신청완료";
    }
  }

  return order?.statusLabel ?? order?.status ?? "";
}

function getOrderTime(order) {
  const dateValue = order?.orderedAt ?? order?.createdAt;

  if (!dateValue) {
    return 0;
  }

  const time = new Date(dateValue).getTime();

  return Number.isNaN(time) ? 0 : time;
}

function MyPage() {
  const { user, isLoggedIn, isAuthLoading, accessToken } = useAuth();

  const navigate = useNavigate();
  const { showToast } = useToast();

  const [orders, setOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [isOrderLoading, setIsOrderLoading] = useState(true);

  const [points, setPoints] = useState(0);

  const [writableReviewCount, setWritableReviewCount] = useState(0);

  const [inquiryCount, setInquiryCount] = useState(0);

  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isWishlistLoading, setIsWishlistLoading] = useState(true);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const nickname =
    user?.nickname || user?.nickName || user?.username || user?.name || "회원";

  const email = user?.email ?? "";

  useEffect(() => {
    if (!accessToken) {
      return undefined;
    }

    let isCancelled = false;

    getWritableReviews(
      {
        page: 1,
        limit: 1,
      },
      accessToken,
    )
      .then((response) => {
        if (isCancelled) {
          return;
        }

        const data = getResponseData(response);

        setWritableReviewCount(data.pagination?.totalCount ?? 0);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("작성 가능한 리뷰 개수 조회 실패:", error);
      });

    return () => {
      isCancelled = true;
    };
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) {
      return undefined;
    }

    let isCancelled = false;

    getMyInquiries(
      {
        page: 1,
        limit: 1,
      },
      accessToken,
    )
      .then((response) => {
        if (isCancelled) {
          return;
        }

        const data = getResponseData(response);

        setInquiryCount(data.pagination?.totalCount ?? 0);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("문의 내역 개수 조회 실패:", error);
      });

    return () => {
      isCancelled = true;
    };
  }, [accessToken]);

  useEffect(() => {
    if (isAuthLoading || !accessToken) {
      return undefined;
    }

    let isCancelled = false;

    const fetchMyPageData = async () => {
      try {
        const [orderResult, pointResult] = await Promise.all([
          orderService.getOrders(
            {
              period: "all",
              page: 1,
              limit: 100,
            },
            accessToken,
          ),

          getPoints(accessToken),
        ]);

        if (isCancelled) {
          return;
        }

        if (orderResult?.success === false) {
          throw new Error(
            orderResult.message || "주문 내역을 불러오지 못했습니다.",
          );
        }

        const orderData = getResponseData(orderResult);

        const realOrders = Array.isArray(orderData.orders)
          ? orderData.orders
          : [];

        const realOrderCount =
          orderData.pagination?.totalCount ?? realOrders.length;

        const sortedRealOrders = [...realOrders].sort(
          (a, b) => getOrderTime(b) - getOrderTime(a),
        );

        const previewOrders = sortedRealOrders.slice(0, 2);

        setOrders(previewOrders);

        if (realOrderCount <= 2) {
          setOrderCount(realOrderCount);
        } else {
          const realOrderIds = new Set(
            realOrders.map((order) => order.orderId),
          );

          const availableMockOrders = mockOrderData.filter(
            (mockOrder) => !realOrderIds.has(mockOrder.orderId),
          );

          const combinedOrderCount =
            realOrderCount + availableMockOrders.length;

          setOrderCount(combinedOrderCount);
        }

        if (pointResult?.success === false) {
          throw new Error(
            pointResult.message || "적립금을 불러오지 못했습니다.",
          );
        }

        const pointData = getResponseData(pointResult);

        setPoints(Number(pointData.point ?? 0));
      } catch (error) {
        if (isCancelled) {
          return;
        }

        console.error("마이페이지 데이터 조회 실패:", error);

        showToast(
          error?.message || "마이페이지 정보를 불러오지 못했습니다.",
          false,
        );
      } finally {
        if (!isCancelled) {
          setIsOrderLoading(false);
        }
      }
    };

    fetchMyPageData();

    return () => {
      isCancelled = true;
    };
  }, [accessToken, isAuthLoading, showToast]);

  useEffect(() => {
    if (isAuthLoading || !accessToken) {
      return undefined;
    }

    let isCancelled = false;

    const fetchWishlist = async () => {
      try {
        const result = await wishlistService.getWishlist(
          {
            page: 1,
            limit: 4,
          },
          accessToken,
        );

        if (isCancelled) {
          return;
        }

        if (!result.success) {
          throw new Error(result.message || "찜한 상품을 불러오지 못했습니다.");
        }

        const wishlistItems = Array.isArray(result.wishlistItems)
          ? result.wishlistItems
          : [];

        const products = wishlistItems
          .map((item) => {
            const product = item?.product ?? item;

            return {
              ...product,

              productId: product?.productId ?? item?.productId,

              thumbnail:
                product?.thumbnail ??
                product?.image ??
                item?.thumbnail ??
                item?.image ??
                "",

              name: product?.name ?? item?.name ?? "",

              price: Number(product?.price ?? item?.price ?? 0),

              isLiked: true,
            };
          })
          .filter((product) => product.productId);

        setWishlistProducts(products);

        setWishlistCount(result.pagination?.totalCount ?? 0);
      } catch (error) {
        if (isCancelled) {
          return;
        }

        console.error("마이페이지 찜 목록 조회 실패:", error);

        showToast(error?.message || "찜한 상품을 불러오지 못했습니다.", false);
      } finally {
        if (!isCancelled) {
          setIsWishlistLoading(false);
        }
      }
    };

    fetchWishlist();

    return () => {
      isCancelled = true;
    };
  }, [accessToken, isAuthLoading, showToast]);

  const handleRemoveWishlist = async (productId) => {
    if (!accessToken) {
      showToast("로그인이 필요합니다.", false);
      return;
    }

    try {
      const result = await wishlistService.removeWishlist(
        productId,
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "찜 해제에 실패했습니다.");
      }

      setWishlistProducts((previousProducts) =>
        previousProducts.filter((product) => product.productId !== productId),
      );

      setWishlistCount((previousCount) => Math.max(0, previousCount - 1));

      showToast(result.message || "찜한 상품에서 삭제되었습니다.", true);
    } catch (error) {
      console.error("찜 해제 실패:", error);

      showToast(error?.message || "찜 해제에 실패했습니다.", false);
    }
  };

  const handleAddCart = async (productId) => {
    if (!accessToken) {
      showToast("로그인이 필요합니다.", false);
      return;
    }

    if (!productId) {
      showToast("상품 정보가 없습니다.", false);
      return;
    }

    try {
      const result = await cartService.addCartItem(productId, 1, accessToken);

      if (!result.success) {
        throw new Error(result.message || "장바구니에 상품을 담지 못했습니다.");
      }

      showToast(result.message || "장바구니에 상품을 담았습니다.", true);
    } catch (error) {
      console.error("장바구니 추가 실패:", error);

      showToast(error?.message || "장바구니에 상품을 담지 못했습니다.", false);
    }
  };

  const handleBuyNow = async (productId) => {
    if (!accessToken) {
      showToast("로그인이 필요합니다.", false);
      return;
    }

    if (!productId) {
      showToast("상품 정보가 없습니다.", false);
      return;
    }

    try {
      const result = await checkoutService.createCheckout(
        {
          items: [
            {
              productId,
              quantity: 1,
            },
          ],
        },
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "바로구매 처리에 실패했습니다.");
      }

      if (!result.checkoutId) {
        throw new Error("Checkout ID를 확인할 수 없습니다.");
      }

      navigate(`/checkout?checkoutId=${encodeURIComponent(result.checkoutId)}`);
    } catch (error) {
      console.error("바로구매 실패:", error);

      showToast(error?.message || "바로구매 처리에 실패했습니다.", false);
    }
  };

  const handleClaim = (orderId, claimType) => {
    const searchParams = new URLSearchParams({
      orderId: String(orderId),
      type: claimType,
    });

    navigate(`/claims?${searchParams.toString()}`);
  };

  const handleConfirmOrder = async (orderId) => {
    if (!accessToken) {
      showToast("로그인 정보가 없습니다.", false);

      return;
    }

    try {
      const result = await orderService.confirmOrder(orderId, accessToken);

      if (result?.success === false) {
        throw new Error(result.message || "구매확정에 실패했습니다.");
      }

      const data = getResponseData(result);

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderId === orderId
            ? {
                ...order,
                status: data.status ?? "CONFIRMED",
                statusLabel: "구매확정",
                canConfirm: false,
                confirmedAt: data.confirmedAt ?? order.confirmedAt,
              }
            : order,
        ),
      );

      showToast(result?.message || "구매가 확정되었습니다.", true);
    } catch (error) {
      console.error("구매확정 실패:", error);

      showToast(error?.message || "구매확정에 실패했습니다.", false);
    }
  };

  const handleReview = (orderId, productId) => {
    setSelectedOrderId(orderId);
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  if (isAuthLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  if (!isLoggedIn) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <BasicPage>
      <main css={page}>
        <h1 css={pageTitle}>MY PAGE</h1>

        <section css={userCard}>
          <div className="profile-wrapper">
            <div className="profile-svg">
              <img src={myShopCat} alt="" />
            </div>

            <div css={userInfo}>
              <span css={userName}>안녕하세요, {nickname}님!</span>

              <div className="info-wrapper">
                <span css={userEmail}>{email}</span>

                <button
                  type="button"
                  css={userEmail}
                  className="pointDeco"
                  onClick={() => navigate("/mypage/points")}
                >
                  <span>적립금</span>

                  <span>{Number(points ?? 0).toLocaleString()} P</span>
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            css={editButton}
            onClick={() => navigate("/mypage/edit")}
          >
            <strong css={quickTitle}>회원정보 수정</strong>

            <span className="quick-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>
          </button>
        </section>

        <section css={summary}>
          <div css={summaryItem}>
            <div className="btn-hover-container">
              <img
                src={buttonHover}
                alt="버튼꾸미기용 고양이 이미지"
                className="btn-hover"
                aria-hidden="true"
              />
            </div>

            <button
              type="button"
              className="svg-container"
              onClick={() => navigate("/mypage/orders")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118z" />
              </svg>
            </button>

            <span css={summaryLabel}>주문 내역</span>

            <strong css={summaryValue}>{orderCount}</strong>
          </div>

          <div css={summaryItem}>
            <div className="btn-hover-container">
              <img
                src={buttonHover}
                alt="버튼꾸미기용 고양이 이미지"
                className="btn-hover"
                aria-hidden="true"
              />
            </div>

            <button
              type="button"
              className="svg-container"
              onClick={() => navigate("/mypage/wishlist")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982" />
                <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z" />
              </svg>
            </button>

            <span css={summaryLabel}>찜한 상품</span>

            <strong css={summaryValue}>{wishlistCount}</strong>
          </div>

          <div css={summaryItem}>
            <div className="btn-hover-container">
              <img
                src={buttonHover}
                alt="버튼꾸미기용 고양이 이미지"
                className="btn-hover"
                aria-hidden="true"
              />
            </div>

            <button
              type="button"
              className="svg-container"
              onClick={() => navigate("/mypage/reviews")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />

                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </button>

            <span css={summaryLabel}>리뷰 관리</span>

            <strong css={summaryValue}>
              {accessToken ? writableReviewCount : 0}
            </strong>
          </div>

          <div css={summaryItem}>
            <div className="btn-hover-container">
              <img
                src={buttonHover}
                alt="버튼꾸미기용 고양이 이미지"
                className="btn-hover"
                aria-hidden="true"
                loading="lazy"
              />
            </div>

            <button
              type="button"
              className="svg-container"
              onClick={() => navigate("/mypage/inquiry")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745" />
                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
              </svg>
            </button>

            <span css={summaryLabel}>문의 내역</span>

            <strong css={summaryValue}>{accessToken ? inquiryCount : 0}</strong>
          </div>
        </section>

        <section css={section}>
          <div css={titleWrapper}>
            <h2 css={sectionTitle}>주문 내역</h2>

            <button
              type="button"
              css={editButton}
              onClick={() => navigate("/mypage/orders")}
            >
              <strong css={quickTitle}>전체보기</strong>

              <span className="quick-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="section-content">
            {orders.length > 0 && (
              <span className="guide-message">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                  />
                </svg>
                밀어서 보기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            )}

            {isOrderLoading ? (
              <Loader />
            ) : orders.length > 0 ? (
              <OrderCardWrapper>
                {orders.map((order) => {
                  const product = order.items?.[0];

                  if (!product) {
                    return null;
                  }

                  const displayProductName = getOrderProductName(order);

                  const orderSummary = getOrderSummary(order);

                  const orderStatusLabel = getOrderStatusLabel(order);

                  const activeClaim = hasActiveClaim(order);

                  const canceledOrder = isCanceledOrder(order);

                  const canCancel =
                    order.status === "PAYMENT_COMPLETED" &&
                    !activeClaim &&
                    !canceledOrder &&
                    !order.claimSummary;

                  const canUseDeliveredActions =
                    order.status === "DELIVERED" &&
                    !activeClaim &&
                    !canceledOrder;

                  const canWriteReview =
                    order.status === "CONFIRMED" &&
                    !canceledOrder &&
                    !(
                      order.claimSummary?.type === "RETURN" &&
                      order.claimSummary?.status === "COMPLETED"
                    );

                  return (
                    <OrderCard key={order.orderId}>
                      <div className="order-banner">
                        <span className="order-date">
                          {formatDate(order.orderedAt ?? order.createdAt)}
                        </span>

                        <button
                          type="button"
                          className="order-number"
                          onClick={() =>
                            navigate(
                              `/mypage/orders?orderId=${encodeURIComponent(
                                order.orderId,
                              )}`,
                            )
                          }
                        >
                          {order.orderId}
                        </button>
                      </div>

                      <div className="order-content">
                        <div className="order-product-summary">
                          <div className="img-container">
                            <ProductCard
                              image={product.thumbnail}
                              name={displayProductName}
                              badge=""
                              showHeart={false}
                            />
                          </div>

                          <div className="product-summary-info">
                            <strong>{displayProductName}</strong>

                            <span>
                              총 {orderSummary.productCount}종 · 총{" "}
                              {orderSummary.totalQuantity}개
                            </span>
                          </div>
                        </div>

                        <div className="payment-status-wrapper">
                          <p className="payments">
                            총 결제금액{" "}
                            <strong>
                              {formatPrice(orderSummary.totalAmount)}
                            </strong>
                          </p>

                          <div className="order-status">{orderStatusLabel}</div>
                        </div>

                        <div className="button-container">
                          {canCancel && (
                            <button
                              type="button"
                              className="cancel-order-button"
                              onClick={() =>
                                handleClaim(order.orderId, "cancel")
                              }
                            >
                              주문취소
                            </button>
                          )}

                          {canUseDeliveredActions && (
                            <>
                              <button
                                type="button"
                                className="claim-button"
                                onClick={() =>
                                  handleClaim(order.orderId, "exchange-return")
                                }
                              >
                                교환/반품 신청
                              </button>

                              {order.canConfirm !== false && (
                                <button
                                  type="button"
                                  className="confirm-button"
                                  onClick={() =>
                                    handleConfirmOrder(order.orderId)
                                  }
                                >
                                  구매확정
                                </button>
                              )}
                            </>
                          )}

                          {canWriteReview && (
                            <button
                              type="button"
                              className="review-button"
                              onClick={() =>
                                handleReview(order.orderId, product.productId)
                              }
                            >
                              리뷰작성
                            </button>
                          )}
                        </div>
                      </div>
                    </OrderCard>
                  );
                })}
              </OrderCardWrapper>
            ) : null}
          </div>
        </section>

        <section css={section}>
          <div css={titleWrapper}>
            <h2 css={sectionTitle}>찜한 상품</h2>

            <button
              type="button"
              css={editButton}
              onClick={() => navigate("/mypage/wishlist")}
            >
              <strong css={quickTitle}>전체보기</strong>

              <span className="quick-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="section-content">
            <span className="guide-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              밀어서 보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>

            {isWishlistLoading ? (
              <Loader />
            ) : (
              <article css={orderCard}>
                {wishlistProducts.map((product) => (
                  <div className="item-wrapper" key={product.productId}>
                    <div className="img-wrapper">
                      <ProductCard
                        productId={product.productId}
                        image={product.thumbnail}
                        name={product.name}
                        badge=""
                        showHeart
                        isLiked={product.isLiked}
                        onHeartClick={() =>
                          handleRemoveWishlist(product.productId)
                        }
                      />
                    </div>

                    <div className="desc-wrapper">
                      <p>{product.name}</p>

                      <strong>{formatPrice(product.price)}</strong>
                    </div>

                    <div className="btn-wrapper">
                      <button
                        type="button"
                        onClick={() => handleAddCart(product.productId)}
                      >
                        장바구니
                      </button>

                      <button
                        type="button"
                        onClick={() => handleBuyNow(product.productId)}
                      >
                        바로구매
                      </button>
                    </div>
                  </div>
                ))}
              </article>
            )}
          </div>
        </section>
      </main>

      {isModalOpen && (
        <ReviewModal
          orderId={selectedOrderId}
          productId={selectedProductId}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedOrderId(null);
            setSelectedProductId(null);
          }}
        />
      )}
    </BasicPage>
  );
}

export default MyPage;
