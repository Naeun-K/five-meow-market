// // // // import { useState } from "react";
// // // // import * as S from "./orderStyle";

// // // // function OrderRow({ label, children }) {
// // // //   return (
// // // //     <S.InfoRow>
// // // //       <S.InfoLabel>{label}</S.InfoLabel>
// // // //       {children}
// // // //     </S.InfoRow>
// // // //   );
// // // // }

// // // // function Chevron({ isOpen }) {
// // // //   return (
// // // //     <S.ChevronIcon
// // // //       isOpen={isOpen}
// // // //       viewBox="0 0 24 24"
// // // //       fill="none"
// // // //       stroke="currentColor"
// // // //       strokeWidth="2"
// // // //     >
// // // //       <path d="M6 9l6 6 6-6" />
// // // //     </S.ChevronIcon>
// // // //   );
// // // // }

// // // // function CollapsiblePanel({ title, children }) {
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   return (
// // // //     <S.Panel>
// // // //       <S.AccordionHeader onClick={() => setIsOpen((prev) => !prev)}>
// // // //         {title}
// // // //         <Chevron isOpen={isOpen} />
// // // //       </S.AccordionHeader>
// // // //       <S.PanelBody isOpen={isOpen}>{children}</S.PanelBody>
// // // //     </S.Panel>
// // // //   );
// // // // }

// // // // function ProductItem() {
// // // //   return (
// // // //     <S.ProductItemWrap>
// // // //       <S.Thumb>
// // // //         <S.ThumbText></S.ThumbText>
// // // //       </S.Thumb>

// // // //       <S.ProductBody>
// // // //         <S.ProductName></S.ProductName>
// // // //         <S.ProductOption></S.ProductOption>
// // // //         <S.PriceRow>
// // // //           <S.ProductPrice></S.ProductPrice>
// // // //           <S.ProductQty></S.ProductQty>
// // // //         </S.PriceRow>
// // // //       </S.ProductBody>

// // // //       <S.ProductActions>
// // // //         <S.StatusBadgeSmall></S.StatusBadgeSmall>
// // // //         <S.ActionButtons>
// // // //           <S.GhostButton>구매평 작성</S.GhostButton>
// // // //           <S.GhostButton>반품/교환</S.GhostButton>
// // // //         </S.ActionButtons>
// // // //       </S.ProductActions>
// // // //     </S.ProductItemWrap>
// // // //   );
// // // // }

// // // // export default function OrderDetail() {
// // // //   return (
// // // //     <S.Page>
// // // //       <S.Breadcrumb href="/mypage/orders">
// // // //         ← 주문/배송내역으로 돌아가기
// // // //       </S.Breadcrumb>

// // // //       <S.Header>
// // // //         <S.Title>주문 상세보기</S.Title>
// // // //         <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
// // // //       </S.Header>

// // // //       <S.SummaryBar>
// // // //         <OrderRow label="주문일">
// // // //           <S.InfoValue></S.InfoValue>
// // // //         </OrderRow>
// // // //         <OrderRow label="주문번호">
// // // //           <S.InfoValue></S.InfoValue>
// // // //         </OrderRow>
// // // //         <OrderRow label="주문자">
// // // //           <S.InfoValue></S.InfoValue>
// // // //         </OrderRow>
// // // //         <OrderRow label="주문상태">
// // // //           <S.StatusBadge></S.StatusBadge>
// // // //         </OrderRow>
// // // //         <OrderRow label="주문 총 금액">
// // // //           <S.InfoValueStrong></S.InfoValueStrong>
// // // //         </OrderRow>
// // // //       </S.SummaryBar>

// // // //       <S.Section>
// // // //         <S.SectionTitle>주문 상품</S.SectionTitle>
// // // //         <S.ProductList>
// // // //           <ProductItem />
// // // //           <ProductItem />
// // // //           <ProductItem />
// // // //         </S.ProductList>
// // // //       </S.Section>

// // // //       <S.BottomGrid>
// // // //         <CollapsiblePanel title="배송 정보">
// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>받는 분</S.PanelLabel>
// // // //             <S.PanelValue></S.PanelValue>
// // // //           </S.PanelRow>

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>연락처</S.PanelLabel>
// // // //             <S.PanelValue></S.PanelValue>
// // // //           </S.PanelRow>

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>배송지</S.PanelLabel>
// // // //             <S.PanelValueGroup>
// // // //               <S.PanelValue></S.PanelValue>
// // // //               <S.PanelValueSub></S.PanelValueSub>
// // // //             </S.PanelValueGroup>
// // // //           </S.PanelRow>

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>배송요청사항</S.PanelLabel>
// // // //             <S.PanelValue></S.PanelValue>
// // // //           </S.PanelRow>

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>배송방법</S.PanelLabel>
// // // //             <S.PanelValue>택배배송</S.PanelValue>
// // // //           </S.PanelRow>

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>송장번호</S.PanelLabel>
// // // //             <S.TrackingGroup>
// // // //               <S.PanelValue>1234-5678-9012</S.PanelValue>
// // // //               <S.LinkButton>배송조회</S.LinkButton>
// // // //             </S.TrackingGroup>
// // // //           </S.PanelRow>
// // // //         </CollapsiblePanel>

// // // //         <CollapsiblePanel title="결제 정보">
// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>상품금액</S.PanelLabel>
// // // //             <S.PanelValue></S.PanelValue>
// // // //           </S.PanelRow>

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>배송비</S.PanelLabel>
// // // //             <S.PanelValue></S.PanelValue>
// // // //           </S.PanelRow>

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>쿠폰할인</S.PanelLabel>
// // // //             <S.PanelValue></S.PanelValue>
// // // //           </S.PanelRow>

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>포인트 사용</S.PanelLabel>
// // // //             <S.PanelValue></S.PanelValue>
// // // //           </S.PanelRow>

// // // //           <S.Divider />

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>총 결제금액</S.PanelLabel>
// // // //             <S.InfoValueStrong></S.InfoValueStrong>
// // // //           </S.PanelRow>

// // // //           <S.Divider />

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>결제수단</S.PanelLabel>
// // // //             <S.PanelValue></S.PanelValue>
// // // //           </S.PanelRow>

// // // //           <S.PanelRow>
// // // //             <S.PanelLabel>결제일시</S.PanelLabel>
// // // //             <S.PanelValue></S.PanelValue>
// // // //           </S.PanelRow>
// // // //         </CollapsiblePanel>
// // // //       </S.BottomGrid>
// // // //     </S.Page>
// // // //   );
// // // // }

// // // import { useEffect, useState } from "react";
// // // import { useNavigate, useParams } from "react-router-dom";
// // // import * as S from "./orderStyle";
// // // import * as orderService from "../../services/orderServices";
// // // import useAuth from "../../hooks/useAuth";
// // // import useToast from "../../hooks/useToast";
// // // import Loader from "../loader/Loader";

// // // const STATUS_LABELS = {
// // //   PAYMENT_COMPLETED: "결제완료",
// // //   PREPARING_SHIPMENT: "상품준비중",
// // //   SHIPPING: "배송중",
// // //   DELIVERED: "배송완료",
// // //   CONFIRMED: "구매결정",
// // //   CANCELED: "주문취소",
// // // };

// // // const PAYMENT_METHOD_LABELS = {
// // //   CARD: "카드",
// // //   BANK: "무통장입금",
// // // };

// // // function formatDate(dateString) {
// // //   if (!dateString) {
// // //     return "-";
// // //   }

// // //   return new Date(dateString).toLocaleString("ko-KR");
// // // }

// // // function formatPrice(price) {
// // //   return `${Number(price ?? 0).toLocaleString()}원`;
// // // }

// // // function OrderRow({ label, children }) {
// // //   return (
// // //     <S.InfoRow>
// // //       <S.InfoLabel>{label}</S.InfoLabel>
// // //       {children}
// // //     </S.InfoRow>
// // //   );
// // // }

// // // function Chevron({ isOpen }) {
// // //   return (
// // //     <S.ChevronIcon
// // //       isOpen={isOpen}
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       stroke="currentColor"
// // //       strokeWidth="2"
// // //     >
// // //       <path d="M6 9l6 6 6-6" />
// // //     </S.ChevronIcon>
// // //   );
// // // }

// // // function CollapsiblePanel({ title, children }) {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   return (
// // //     <S.Panel>
// // //       <S.AccordionHeader onClick={() => setIsOpen((prev) => !prev)}>
// // //         {title}

// // //         <Chevron isOpen={isOpen} />
// // //       </S.AccordionHeader>

// // //       <S.PanelBody isOpen={isOpen}>{children}</S.PanelBody>
// // //     </S.Panel>
// // //   );
// // // }

// // // function ProductItem({ product, orderStatus, onReview, onClaim }) {
// // //   return (
// // //     <S.ProductItemWrap>
// // //       <S.Thumb>
// // //         {product.thumbnail ? (
// // //           <img src={product.thumbnail} alt={product.name} />
// // //         ) : (
// // //           <S.ThumbText />
// // //         )}
// // //       </S.Thumb>

// // //       <S.ProductBody>
// // //         <S.ProductName>{product.name}</S.ProductName>

// // //         <S.ProductOption>상품번호 {product.productId}</S.ProductOption>

// // //         <S.PriceRow>
// // //           <S.ProductPrice>{formatPrice(product.itemAmount)}</S.ProductPrice>

// // //           <S.ProductQty>{product.quantity}개</S.ProductQty>
// // //         </S.PriceRow>
// // //       </S.ProductBody>

// // //       <S.ProductActions>
// // //         <S.StatusBadgeSmall>
// // //           {STATUS_LABELS[orderStatus] ?? orderStatus}
// // //         </S.StatusBadgeSmall>

// // //         <S.ActionButtons>
// // //           {orderStatus === "DELIVERED" && (
// // //             <>
// // //               <S.GhostButton
// // //                 type="button"
// // //                 onClick={() => onReview(product.productId)}
// // //               >
// // //                 구매평 작성
// // //               </S.GhostButton>

// // //               <S.GhostButton
// // //                 type="button"
// // //                 onClick={() => onClaim(product.productId)}
// // //               >
// // //                 반품/교환
// // //               </S.GhostButton>
// // //             </>
// // //           )}
// // //         </S.ActionButtons>
// // //       </S.ProductActions>
// // //     </S.ProductItemWrap>
// // //   );
// // // }

// // // export default function OrderDetail() {
// // //   const [order, setOrder] = useState(null);

// // //   const [isLoading, setIsLoading] = useState(true);

// // //   const { orderId } = useParams();

// // //   const navigate = useNavigate();

// // //   const { accessToken, isAuthLoading } = useAuth();

// // //   const { showToast } = useToast();

// // //   useEffect(() => {
// // //     if (isAuthLoading || !accessToken || !orderId) {
// // //       return;
// // //     }

// // //     const fetchOrder = async () => {
// // //       try {
// // //         setIsLoading(true);

// // //         const result = await orderService.getOrder(orderId, accessToken);

// // //         if (!result.success) {
// // //           throw new Error(result.message || "주문 정보를 불러오지 못했습니다.");
// // //         }

// // //         setOrder(result.order);
// // //       } catch (error) {
// // //         console.error("주문 상세 조회 실패:", error);

// // //         showToast(error.message || "주문 정보를 불러오지 못했습니다.", false);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     fetchOrder();
// // //   }, [orderId, accessToken, isAuthLoading, showToast]);

// // //   const handleReview = (productId) => {
// // //     navigate(`/reviews?productId=${productId}`);
// // //   };

// // //   const handleClaim = (productId) => {
// // //     navigate(`/claims?orderId=${orderId}&productId=${productId}`);
// // //   };

// // //   if (isAuthLoading || isLoading) {
// // //     return <Loader />;
// // //   }

// // //   if (!order) {
// // //     return null;
// // //   }

// // //   const { shippingInfo, payment } = order;

// // //   return (
// // //     <S.Page>
// // //       <S.Breadcrumb href="/mypage/orders">
// // //         ← 주문/배송내역으로 돌아가기
// // //       </S.Breadcrumb>

// // //       <S.Header>
// // //         <S.Title>주문 상세보기</S.Title>

// // //         <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
// // //       </S.Header>

// // //       <S.SummaryBar>
// // //         <OrderRow label="주문일">
// // //           <S.InfoValue>{formatDate(order.createdAt)}</S.InfoValue>
// // //         </OrderRow>

// // //         <OrderRow label="주문번호">
// // //           <S.InfoValue>{order.orderId}</S.InfoValue>
// // //         </OrderRow>

// // //         <OrderRow label="주문자">
// // //           <S.InfoValue>{order.ordererName}</S.InfoValue>
// // //         </OrderRow>

// // //         <OrderRow label="주문상태">
// // //           <S.StatusBadge>
// // //             {STATUS_LABELS[order.status] ?? order.status}
// // //           </S.StatusBadge>
// // //         </OrderRow>

// // //         <OrderRow label="주문 총 금액">
// // //           <S.InfoValueStrong>
// // //             {formatPrice(payment?.finalAmount)}
// // //           </S.InfoValueStrong>
// // //         </OrderRow>
// // //       </S.SummaryBar>

// // //       <S.Section>
// // //         <S.SectionTitle>주문 상품</S.SectionTitle>

// // //         <S.ProductList>
// // //           {order.items?.map((product) => (
// // //             <ProductItem
// // //               key={product.productId}
// // //               product={product}
// // //               orderStatus={order.status}
// // //               onReview={handleReview}
// // //               onClaim={handleClaim}
// // //             />
// // //           ))}
// // //         </S.ProductList>
// // //       </S.Section>

// // //       <S.BottomGrid>
// // //         <CollapsiblePanel title="배송 정보">
// // //           <S.PanelRow>
// // //             <S.PanelLabel>받는 분</S.PanelLabel>

// // //             <S.PanelValue>{shippingInfo?.recipientName ?? "-"}</S.PanelValue>
// // //           </S.PanelRow>

// // //           <S.PanelRow>
// // //             <S.PanelLabel>연락처</S.PanelLabel>

// // //             <S.PanelValue>{shippingInfo?.recipientPhone ?? "-"}</S.PanelValue>
// // //           </S.PanelRow>

// // //           <S.PanelRow>
// // //             <S.PanelLabel>배송지</S.PanelLabel>

// // //             <S.PanelValueGroup>
// // //               <S.PanelValue>
// // //                 {shippingInfo?.zipCode
// // //                   ? `(${shippingInfo.zipCode}) ${shippingInfo.address}`
// // //                   : (shippingInfo?.address ?? "-")}
// // //               </S.PanelValue>

// // //               <S.PanelValueSub>{shippingInfo?.detailAddress}</S.PanelValueSub>
// // //             </S.PanelValueGroup>
// // //           </S.PanelRow>

// // //           <S.PanelRow>
// // //             <S.PanelLabel>배송요청사항</S.PanelLabel>

// // //             <S.PanelValue>{shippingInfo?.deliveryRequest ?? "-"}</S.PanelValue>
// // //           </S.PanelRow>

// // //           <S.PanelRow>
// // //             <S.PanelLabel>배송방법</S.PanelLabel>
// // //             <S.PanelValue>택배배송</S.PanelValue>
// // //           </S.PanelRow>

// // //           <S.PanelRow>
// // //             <S.PanelLabel>송장번호</S.PanelLabel>

// // //             <S.TrackingGroup>
// // //               <S.PanelValue>1234-5678-9012</S.PanelValue>
// // //               <S.LinkButton>배송조회</S.LinkButton>
// // //             </S.TrackingGroup>
// // //           </S.PanelRow>
// // //         </CollapsiblePanel>

// // //         <CollapsiblePanel title="결제 정보">
// // //           <S.PanelRow>
// // //             <S.PanelLabel>상품금액</S.PanelLabel>

// // //             <S.PanelValue>{formatPrice(payment?.productAmount)}</S.PanelValue>
// // //           </S.PanelRow>

// // //           <S.PanelRow>
// // //             <S.PanelLabel>배송비</S.PanelLabel>

// // //             <S.PanelValue>{formatPrice(payment?.shippingFee)}</S.PanelValue>
// // //           </S.PanelRow>

// // //           <S.PanelRow>
// // //             <S.PanelLabel>쿠폰할인</S.PanelLabel>

// // //             <S.PanelValue>{formatPrice(payment?.discountAmount)}</S.PanelValue>
// // //           </S.PanelRow>

// // //           <S.PanelRow>
// // //             <S.PanelLabel>포인트 사용</S.PanelLabel>

// // //             <S.PanelValue>{formatPrice(payment?.appliedPoints)}</S.PanelValue>
// // //           </S.PanelRow>

// // //           <S.Divider />

// // //           <S.PanelRow>
// // //             <S.PanelLabel>총 결제금액</S.PanelLabel>

// // //             <S.InfoValueStrong>
// // //               {formatPrice(payment?.finalAmount)}
// // //             </S.InfoValueStrong>
// // //           </S.PanelRow>

// // //           <S.Divider />

// // //           <S.PanelRow>
// // //             <S.PanelLabel>결제수단</S.PanelLabel>

// // //             <S.PanelValue>
// // //               {PAYMENT_METHOD_LABELS[payment?.paymentMethod] ??
// // //                 payment?.paymentMethod ??
// // //                 "-"}
// // //             </S.PanelValue>
// // //           </S.PanelRow>

// // //           <S.PanelRow>
// // //             <S.PanelLabel>결제일시</S.PanelLabel>

// // //             <S.PanelValue>{formatDate(payment?.paidAt)}</S.PanelValue>
// // //           </S.PanelRow>
// // //         </CollapsiblePanel>
// // //       </S.BottomGrid>
// // //     </S.Page>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";

// // import * as S from "./orderStyle";
// // import * as orderService from "../../services/orderServices";

// // import useAuth from "../../hooks/useAuth";
// // import useToast from "../../hooks/useToast";

// // import Loader from "../loader/Loader";

// // /*
// //  * 주문 상태 표시 문구
// //  */
// // const STATUS_LABELS = {
// //   PAYMENT_COMPLETED: "결제완료",
// //   PREPARING_SHIPMENT: "상품준비중",
// //   SHIPPING: "배송중",
// //   DELIVERED: "배송완료",
// //   CONFIRMED: "구매결정",
// //   CANCELED: "주문취소",
// // };

// // /*
// //  * Claim 유형별 표시 문구
// //  */
// // const CLAIM_TYPE_LABELS = {
// //   CANCEL: "취소",
// //   EXCHANGE: "교환",
// //   RETURN: "반품",
// // };

// // /*
// //  * Claim 처리 상태별 표시 문구
// //  */
// // const CLAIM_STATUS_LABELS = {
// //   REQUESTED: "신청완료",
// //   PROCESSING: "처리중",
// //   COMPLETED: "처리완료",
// //   REJECTED: "처리불가",
// // };

// // const PAYMENT_METHOD_LABELS = {
// //   CARD: "카드",
// //   BANK: "무통장입금",
// // };

// // /*
// //  * 처리 중인 Claim 상태
// //  */
// // const ACTIVE_CLAIM_STATUSES = ["REQUESTED", "PROCESSING"];

// // /*
// //  * 날짜 표시
// //  */
// // function formatDate(dateString) {
// //   if (!dateString) {
// //     return "-";
// //   }

// //   return new Date(dateString).toLocaleString("ko-KR");
// // }

// // /*
// //  * 금액 표시
// //  */
// // function formatPrice(price) {
// //   return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
// // }

// // /*
// //  * 주문에 연결된 주문취소 Claim을 찾습니다.
// //  *
// //  * 주문취소는 주문 전체 대상이므로 productId가 null입니다.
// //  */
// // function findCancelClaim(order) {
// //   if (!Array.isArray(order?.claims)) {
// //     return null;
// //   }

// //   return (
// //     order.claims.find(
// //       (claim) =>
// //         claim.type === "CANCEL" &&
// //         (claim.productId === null || claim.productId === undefined),
// //     ) ?? null
// //   );
// // }

// // /*
// //  * 특정 상품에 연결된 교환·반품 Claim을 찾습니다.
// //  */
// // function findProductClaim(order, productId) {
// //   if (!Array.isArray(order?.claims)) {
// //     return null;
// //   }

// //   return (
// //     order.claims.find(
// //       (claim) =>
// //         claim.productId === productId &&
// //         (claim.type === "EXCHANGE" || claim.type === "RETURN"),
// //     ) ?? null
// //   );
// // }

// // /*
// //  * 주문 상태에 표시할 문구를 계산합니다.
// //  *
// //  * 취소 신청 직후에는 서버의 order.status가 PAYMENT_COMPLETED여도
// //  * Claim 상태를 기준으로 "취소 신청완료" 또는 "취소 처리중"을 표시합니다.
// //  */
// // function getOrderStatusLabel(order) {
// //   const cancelClaim = findCancelClaim(order);

// //   /*
// //    * 서버에서 주문 상태가 이미 CANCELED로 변경되었다면
// //    * 최종 주문 상태를 우선 표시합니다.
// //    */
// //   if (order.status === "CANCELED") {
// //     return STATUS_LABELS.CANCELED;
// //   }

// //   if (!cancelClaim) {
// //     return STATUS_LABELS[order.status] ?? order.status;
// //   }

// //   switch (cancelClaim.status) {
// //     case "REQUESTED":
// //       return "취소 신청완료";

// //     case "PROCESSING":
// //       return "취소 처리중";

// //     case "COMPLETED":
// //       return "주문취소";

// //     case "REJECTED":
// //       return "취소 처리불가";

// //     default:
// //       return STATUS_LABELS[order.status] ?? order.status;
// //   }
// // }

// // /*
// //  * 각 상품에 표시할 상태 문구를 계산합니다.
// //  */
// // function getProductStatusLabel(order, productId) {
// //   const cancelClaim = findCancelClaim(order);

// //   /*
// //    * 주문취소는 주문 전체 상품에 적용됩니다.
// //    */
// //   if (cancelClaim) {
// //     switch (cancelClaim.status) {
// //       case "REQUESTED":
// //         return "취소 신청완료";

// //       case "PROCESSING":
// //         return "취소 처리중";

// //       case "COMPLETED":
// //         return "주문취소";

// //       case "REJECTED":
// //         return "취소 처리불가";

// //       default:
// //         break;
// //     }
// //   }

// //   /*
// //    * 상품별 교환·반품 상태를 확인합니다.
// //    */
// //   const productClaim = findProductClaim(order, productId);

// //   if (productClaim) {
// //     const typeLabel = CLAIM_TYPE_LABELS[productClaim.type] ?? productClaim.type;

// //     const statusLabel =
// //       CLAIM_STATUS_LABELS[productClaim.status] ?? productClaim.status;

// //     return `${typeLabel} ${statusLabel}`;
// //   }

// //   return STATUS_LABELS[order.status] ?? order.status;
// // }

// // /*
// //  * 주문에 처리 중인 주문취소 Claim이 있는지 확인합니다.
// //  */
// // function hasActiveCancelClaim(order) {
// //   const cancelClaim = findCancelClaim(order);

// //   return cancelClaim && ACTIVE_CLAIM_STATUSES.includes(cancelClaim.status);
// // }

// // /*
// //  * 특정 상품에 처리 중인 교환·반품 Claim이 있는지 확인합니다.
// //  */
// // function hasActiveProductClaim(order, productId) {
// //   const productClaim = findProductClaim(order, productId);

// //   return productClaim && ACTIVE_CLAIM_STATUSES.includes(productClaim.status);
// // }

// // function OrderRow({ label, children }) {
// //   return (
// //     <S.InfoRow>
// //       <S.InfoLabel>{label}</S.InfoLabel>
// //       {children}
// //     </S.InfoRow>
// //   );
// // }

// // function Chevron({ isOpen }) {
// //   return (
// //     <S.ChevronIcon
// //       isOpen={isOpen}
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //     >
// //       <path d="M6 9l6 6 6-6" />
// //     </S.ChevronIcon>
// //   );
// // }

// // function CollapsiblePanel({ title, children }) {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <S.Panel>
// //       <S.AccordionHeader
// //         type="button"
// //         onClick={() => setIsOpen((previous) => !previous)}
// //       >
// //         {title}

// //         <Chevron isOpen={isOpen} />
// //       </S.AccordionHeader>

// //       <S.PanelBody isOpen={isOpen}>{children}</S.PanelBody>
// //     </S.Panel>
// //   );
// // }

// // function ProductItem({
// //   product,
// //   statusLabel,
// //   canWriteReview,
// //   canRequestClaim,
// //   showCancelButton,
// //   onReview,
// //   onClaim,
// //   onCancel,
// // }) {
// //   return (
// //     <S.ProductItemWrap>
// //       <S.Thumb>
// //         {product.thumbnail ? (
// //           <img src={product.thumbnail} alt={product.name} />
// //         ) : (
// //           <S.ThumbText />
// //         )}
// //       </S.Thumb>

// //       <S.ProductBody>
// //         <S.ProductName>{product.name}</S.ProductName>

// //         <S.ProductOption>상품번호 {product.productId}</S.ProductOption>

// //         <S.PriceRow>
// //           <S.ProductPrice>{formatPrice(product.itemAmount)}</S.ProductPrice>

// //           <S.ProductQty>{product.quantity}개</S.ProductQty>
// //         </S.PriceRow>
// //       </S.ProductBody>

// //       <S.ProductActions>
// //         <S.StatusBadgeSmall>{statusLabel}</S.StatusBadgeSmall>

// //         <S.ActionButtons>
// //           {canWriteReview && (
// //             <S.GhostButton
// //               type="button"
// //               onClick={() => onReview(product.productId)}
// //             >
// //               구매평 작성
// //             </S.GhostButton>
// //           )}

// //           {canRequestClaim && (
// //             <S.GhostButton
// //               type="button"
// //               onClick={() => onClaim(product.productId)}
// //             >
// //               반품/교환
// //             </S.GhostButton>
// //           )}

// //           {showCancelButton && (
// //             <S.GhostButton type="button" onClick={onCancel}>
// //               주문 취소
// //             </S.GhostButton>
// //           )}
// //         </S.ActionButtons>
// //       </S.ProductActions>
// //     </S.ProductItemWrap>
// //   );
// // }

// // export default function OrderDetail() {
// //   const [order, setOrder] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);

// //   const { orderId } = useParams();
// //   const navigate = useNavigate();

// //   const { accessToken, isAuthLoading } = useAuth();
// //   const { showToast } = useToast();

// //   /*
// //    * 주문 상세 조회
// //    *
// //    * Claim API 명세에 따라 주문 상세 응답의 order.claims에
// //    * 해당 주문과 연결된 Claim 목록이 포함되어야 합니다.
// //    */
// //   useEffect(() => {
// //     if (isAuthLoading || !accessToken || !orderId) {
// //       return;
// //     }

// //     let isCancelled = false;

// //     orderService
// //       .getOrder(orderId, accessToken)
// //       .then((result) => {
// //         if (isCancelled) {
// //           return;
// //         }

// //         if (!result.success || !result.order) {
// //           throw new Error(result.message || "주문 정보를 불러오지 못했습니다.");
// //         }

// //         setOrder(result.order);
// //       })
// //       .catch((error) => {
// //         if (isCancelled) {
// //           return;
// //         }

// //         console.error("주문 상세 조회 실패:", error);

// //         showToast(error.message || "주문 정보를 불러오지 못했습니다.", false);
// //       })
// //       .finally(() => {
// //         if (!isCancelled) {
// //           setIsLoading(false);
// //         }
// //       });

// //     return () => {
// //       isCancelled = true;
// //     };
// //   }, [orderId, accessToken, isAuthLoading, showToast]);

// //   /*
// //    * 구매평 작성 페이지 이동
// //    */
// //   const handleReview = (productId) => {
// //     const searchParams = new URLSearchParams({
// //       orderId: String(orderId),
// //       productId: String(productId),
// //     });

// //     navigate(`/reviews?${searchParams.toString()}`);
// //   };

// //   /*
// //    * 교환·반품 페이지 이동
// //    */
// //   const handleClaim = (productId) => {
// //     const searchParams = new URLSearchParams({
// //       orderId: String(orderId),
// //       productId: String(productId),
// //     });

// //     navigate(`/claims?${searchParams.toString()}`);
// //   };

// //   /*
// //    * 주문취소 페이지 이동
// //    *
// //    * 주문취소는 상품별 신청이 아니라 주문 전체 신청이므로
// //    * productId를 전달하지 않습니다.
// //    */
// //   const handleCancel = () => {
// //     const searchParams = new URLSearchParams({
// //       orderId: String(orderId),
// //     });

// //     navigate(`/claims/cancel?${searchParams.toString()}`);
// //   };

// //   if (isAuthLoading || isLoading) {
// //     return <Loader />;
// //   }

// //   if (!order) {
// //     return null;
// //   }

// //   const { shippingInfo, payment } = order;

// //   const orderStatusLabel = getOrderStatusLabel(order);
// //   const activeCancelClaim = hasActiveCancelClaim(order);

// //   /*
// //    * 결제완료 상태이고 처리 중인 취소 신청이 없을 때만
// //    * 주문취소 버튼을 표시합니다.
// //    */
// //   const canCancelOrder =
// //     order.status === "PAYMENT_COMPLETED" && !activeCancelClaim;

// //   return (
// //     <S.Page>
// //       <S.Breadcrumb href="/mypage/orders">
// //         ← 주문/배송내역으로 돌아가기
// //       </S.Breadcrumb>

// //       <S.Header>
// //         <S.Title>주문 상세보기</S.Title>

// //         <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
// //       </S.Header>

// //       <S.SummaryBar>
// //         <OrderRow label="주문일">
// //           <S.InfoValue>{formatDate(order.createdAt)}</S.InfoValue>
// //         </OrderRow>

// //         <OrderRow label="주문번호">
// //           <S.InfoValue>{order.orderId}</S.InfoValue>
// //         </OrderRow>

// //         <OrderRow label="주문자">
// //           <S.InfoValue>{order.ordererName}</S.InfoValue>
// //         </OrderRow>

// //         <OrderRow label="주문상태">
// //           <S.StatusBadge>{orderStatusLabel}</S.StatusBadge>
// //         </OrderRow>

// //         <OrderRow label="주문 총 금액">
// //           <S.InfoValueStrong>
// //             {formatPrice(payment?.finalAmount)}
// //           </S.InfoValueStrong>
// //         </OrderRow>
// //       </S.SummaryBar>

// //       <S.Section>
// //         <S.SectionTitle>주문 상품</S.SectionTitle>

// //         <S.ProductList>
// //           {order.items?.map((product, index) => {
// //             const activeProductClaim = hasActiveProductClaim(
// //               order,
// //               product.productId,
// //             );

// //             /*
// //              * 배송완료이고 처리 중인 Claim이 없을 때만
// //              * 구매평과 교환·반품 버튼을 표시합니다.
// //              */
// //             const canUseDeliveredActions =
// //               order.status === "DELIVERED" &&
// //               !activeProductClaim &&
// //               !activeCancelClaim;

// //             return (
// //               <ProductItem
// //                 key={product.productId}
// //                 product={product}
// //                 statusLabel={getProductStatusLabel(order, product.productId)}
// //                 canWriteReview={canUseDeliveredActions}
// //                 canRequestClaim={canUseDeliveredActions}
// //                 /*
// //                  * 주문취소는 주문 전체에 한 번만 신청하므로
// //                  * 첫 번째 상품에만 취소 버튼을 표시합니다.
// //                  */
// //                 showCancelButton={canCancelOrder && index === 0}
// //                 onReview={handleReview}
// //                 onClaim={handleClaim}
// //                 onCancel={handleCancel}
// //               />
// //             );
// //           })}
// //         </S.ProductList>
// //       </S.Section>

// //       <S.BottomGrid>
// //         <CollapsiblePanel title="배송 정보">
// //           <S.PanelRow>
// //             <S.PanelLabel>받는 분</S.PanelLabel>

// //             <S.PanelValue>{shippingInfo?.recipientName ?? "-"}</S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>연락처</S.PanelLabel>

// //             <S.PanelValue>{shippingInfo?.recipientPhone ?? "-"}</S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>배송지</S.PanelLabel>

// //             <S.PanelValueGroup>
// //               <S.PanelValue>
// //                 {shippingInfo?.zipCode
// //                   ? `(${shippingInfo.zipCode}) ${shippingInfo.address}`
// //                   : (shippingInfo?.address ?? "-")}
// //               </S.PanelValue>

// //               <S.PanelValueSub>{shippingInfo?.detailAddress}</S.PanelValueSub>
// //             </S.PanelValueGroup>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>배송요청사항</S.PanelLabel>

// //             <S.PanelValue>{shippingInfo?.deliveryRequest ?? "-"}</S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>배송방법</S.PanelLabel>

// //             <S.PanelValue>택배배송</S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>송장번호</S.PanelLabel>

// //             <S.TrackingGroup>
// //               <S.PanelValue>1234-5678-9012</S.PanelValue>

// //               <S.LinkButton type="button">배송조회</S.LinkButton>
// //             </S.TrackingGroup>
// //           </S.PanelRow>
// //         </CollapsiblePanel>

// //         <CollapsiblePanel title="결제 정보">
// //           <S.PanelRow>
// //             <S.PanelLabel>상품금액</S.PanelLabel>

// //             <S.PanelValue>{formatPrice(payment?.productAmount)}</S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>배송비</S.PanelLabel>

// //             <S.PanelValue>{formatPrice(payment?.shippingFee)}</S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>쿠폰할인</S.PanelLabel>

// //             <S.PanelValue>{formatPrice(payment?.discountAmount)}</S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>포인트 사용</S.PanelLabel>

// //             <S.PanelValue>{formatPrice(payment?.appliedPoints)}</S.PanelValue>
// //           </S.PanelRow>

// //           <S.Divider />

// //           <S.PanelRow>
// //             <S.PanelLabel>총 결제금액</S.PanelLabel>

// //             <S.InfoValueStrong>
// //               {formatPrice(payment?.finalAmount)}
// //             </S.InfoValueStrong>
// //           </S.PanelRow>

// //           <S.Divider />

// //           <S.PanelRow>
// //             <S.PanelLabel>결제수단</S.PanelLabel>

// //             <S.PanelValue>
// //               {PAYMENT_METHOD_LABELS[payment?.paymentMethod] ??
// //                 payment?.paymentMethod ??
// //                 "-"}
// //             </S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>결제일시</S.PanelLabel>

// //             <S.PanelValue>{formatDate(payment?.paidAt)}</S.PanelValue>
// //           </S.PanelRow>
// //         </CollapsiblePanel>
// //       </S.BottomGrid>
// //     </S.Page>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import * as S from "./orderStyle";
// import * as orderService from "../../services/orderServices";

// import useAuth from "../../hooks/useAuth";
// import useToast from "../../hooks/useToast";

// import Loader from "../loader/Loader";

// /*
//  * 주문 상태
//  */
// const STATUS_LABELS = {
//   PAYMENT_COMPLETED: "결제완료",
//   PREPARING_SHIPMENT: "상품준비중",
//   SHIPPING: "배송중",
//   DELIVERED: "배송완료",
//   CONFIRMED: "구매결정",
//   CANCELED: "주문취소",
// };

// /*
//  * Claim 유형
//  */
// const CLAIM_TYPE_LABELS = {
//   CANCEL: "취소",
//   EXCHANGE: "교환",
//   RETURN: "반품",
// };

// /*
//  * Claim 처리 상태
//  */
// const CLAIM_STATUS_LABELS = {
//   REQUESTED: "신청완료",
//   PROCESSING: "처리중",
//   COMPLETED: "처리완료",
//   REJECTED: "처리불가",
// };

// const PAYMENT_METHOD_LABELS = {
//   CARD: "카드",
//   BANK: "무통장입금",
// };

// const ACTIVE_CLAIM_STATUSES = ["REQUESTED", "PROCESSING"];

// /*
//  * 날짜
//  */
// function formatDate(dateString) {
//   if (!dateString) {
//     return "-";
//   }

//   return new Date(dateString).toLocaleString("ko-KR");
// }

// /*
//  * 금액
//  */
// function formatPrice(price) {
//   return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
// }

// /*
//  * CANCEL Claim 목록
//  */
// function getCancelClaims(order) {
//   if (!Array.isArray(order?.claims)) {
//     return [];
//   }

//   return order.claims.filter((claim) => claim.type === "CANCEL");
// }

// /*
//  * 전체취소 Claim
//  *
//  * scope === "ALL"
//  */
// function findAllCancelClaim(order) {
//   const cancelClaims = getCancelClaims(order);

//   return cancelClaims.find((claim) => claim.scope === "ALL") ?? null;
// }

// /*
//  * Claim의 상품 목록에서 특정 상품이
//  * 취소 대상인지 확인
//  */
// function isProductIncludedInClaim(claim, productId) {
//   if (!claim || !productId) {
//     return false;
//   }

//   /*
//    * 전체취소
//    */
//   if (claim.scope === "ALL") {
//     return true;
//   }

//   /*
//    * 부분취소
//    */
//   if (claim.scope === "PARTIAL") {
//     if (!Array.isArray(claim.items)) {
//       return false;
//     }

//     return claim.items.some((item) => {
//       const claimProductId = item.productId ?? item.product?.productId;

//       return String(claimProductId) === String(productId);
//     });
//   }

//   /*
//    * 이전 데이터 호환
//    *
//    * productId가 Claim 자체에 있는 경우
//    */
//   if (claim.productId != null) {
//     return String(claim.productId) === String(productId);
//   }

//   return false;
// }

// /*
//  * 특정 상품에 적용되는 취소 Claim
//  */
// function findProductCancelClaim(order, productId) {
//   const cancelClaims = getCancelClaims(order);

//   return (
//     cancelClaims.find((claim) => isProductIncludedInClaim(claim, productId)) ??
//     null
//   );
// }

// /*
//  * 교환 / 반품 Claim
//  */
// function findProductClaim(order, productId) {
//   if (!Array.isArray(order?.claims)) {
//     return null;
//   }

//   return (
//     order.claims.find(
//       (claim) =>
//         String(claim.productId) === String(productId) &&
//         (claim.type === "EXCHANGE" || claim.type === "RETURN"),
//     ) ?? null
//   );
// }

// /*
//  * 취소 Claim 상태 → 화면 문구
//  */
// function getCancelStatusLabel(claim) {
//   if (!claim) {
//     return null;
//   }

//   switch (claim.status) {
//     case "REQUESTED":
//       return "취소 신청완료";

//     case "PROCESSING":
//       return "취소 처리중";

//     case "COMPLETED":
//       return "주문취소";

//     case "REJECTED":
//       return "취소 처리불가";

//     default:
//       return null;
//   }
// }

// /*
//  * 주문 전체 상태
//  */
// function getOrderStatusLabel(order) {
//   /*
//    * 서버 주문 자체가 취소 완료 상태라면
//    * 전체 주문상태는 주문취소로 표시
//    */
//   if (order.status === "CANCELED") {
//     return "주문취소";
//   }

//   /*
//    * 전체취소 Claim 확인
//    */
//   const allCancelClaim = findAllCancelClaim(order);

//   if (allCancelClaim) {
//     const cancelStatus = getCancelStatusLabel(allCancelClaim);

//     if (cancelStatus) {
//       return cancelStatus;
//     }
//   }

//   /*
//    * 부분취소 Claim 확인
//    *
//    * 주문 자체는 결제완료이지만
//    * 일부 상품 취소가 진행 중일 수 있음
//    */
//   const partialCancelClaims = getCancelClaims(order).filter(
//     (claim) => claim.scope === "PARTIAL",
//   );

//   const hasRequestedPartial = partialCancelClaims.some(
//     (claim) => claim.status === "REQUESTED",
//   );

//   const hasProcessingPartial = partialCancelClaims.some(
//     (claim) => claim.status === "PROCESSING",
//   );

//   if (hasProcessingPartial) {
//     return "부분취소 처리중";
//   }

//   if (hasRequestedPartial) {
//     return "부분취소 신청완료";
//   }

//   return STATUS_LABELS[order.status] ?? order.status;
// }

// /*
//  * 상품별 상태
//  *
//  * ★ 핵심
//  *
//  * 전체 주문의 order.status를 그대로 사용하는 것이 아니라
//  * 해당 상품이 CANCEL Claim의 대상인지 먼저 확인합니다.
//  */
// function getProductStatusLabel(order, productId) {
//   /*
//    * 이 상품에 적용된 취소 Claim
//    */
//   const cancelClaim = findProductCancelClaim(order, productId);

//   if (cancelClaim) {
//     const cancelStatus = getCancelStatusLabel(cancelClaim);

//     if (cancelStatus) {
//       return cancelStatus;
//     }
//   }

//   /*
//    * 교환 / 반품
//    */
//   const productClaim = findProductClaim(order, productId);

//   if (productClaim) {
//     const typeLabel = CLAIM_TYPE_LABELS[productClaim.type] ?? productClaim.type;

//     const statusLabel =
//       CLAIM_STATUS_LABELS[productClaim.status] ?? productClaim.status;

//     return `${typeLabel} ${statusLabel}`;
//   }

//   /*
//    * ★ 부분취소 주문의 핵심
//    *
//    * order.status가 CANCELED여도
//    * 해당 상품이 취소 Claim에 포함되어 있지 않으면
//    * 무조건 "주문취소"로 표시하지 않습니다.
//    */
//   if (order.status === "CANCELED") {
//     const hasPartialCancel = getCancelClaims(order).some(
//       (claim) => claim.scope === "PARTIAL",
//     );

//     if (hasPartialCancel) {
//       /*
//        * 취소되지 않은 상품의 원래 상태가
//        * item.status로 내려오면 그것을 우선 사용하는 것이
//        * 가장 정확합니다.
//        *
//        * 여기서는 product 객체를 받지 않기 때문에
//        * 아래 ProductItem 호출 전에 처리합니다.
//        */
//       return "결제완료";
//     }
//   }

//   return STATUS_LABELS[order.status] ?? order.status;
// }

// /*
//  * 처리 중인 전체취소 Claim
//  */
// function hasActiveAllCancelClaim(order) {
//   const claim = findAllCancelClaim(order);

//   return Boolean(claim && ACTIVE_CLAIM_STATUSES.includes(claim.status));
// }

// /*
//  * 특정 상품의 처리 중 Claim
//  */
// function hasActiveProductClaim(order, productId) {
//   const cancelClaim = findProductCancelClaim(order, productId);

//   if (cancelClaim && ACTIVE_CLAIM_STATUSES.includes(cancelClaim.status)) {
//     return true;
//   }

//   const productClaim = findProductClaim(order, productId);

//   return Boolean(
//     productClaim && ACTIVE_CLAIM_STATUSES.includes(productClaim.status),
//   );
// }

// /*
//  * 해당 상품이 최종 취소되었는지
//  */
// function isProductCanceled(order, productId) {
//   const cancelClaim = findProductCancelClaim(order, productId);

//   return cancelClaim?.status === "COMPLETED";
// }

// /*
//  * OrderRow
//  */
// function OrderRow({ label, children }) {
//   return (
//     <S.InfoRow>
//       <S.InfoLabel>{label}</S.InfoLabel>

//       {children}
//     </S.InfoRow>
//   );
// }

// /*
//  * 화살표
//  */
// function Chevron({ isOpen }) {
//   return (
//     <S.ChevronIcon
//       isOpen={isOpen}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M6 9l6 6 6-6" />
//     </S.ChevronIcon>
//   );
// }

// /*
//  * 아코디언
//  */
// function CollapsiblePanel({ title, children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <S.Panel>
//       <S.AccordionHeader
//         type="button"
//         onClick={() => setIsOpen((previous) => !previous)}
//       >
//         {title}

//         <Chevron isOpen={isOpen} />
//       </S.AccordionHeader>

//       <S.PanelBody isOpen={isOpen}>{children}</S.PanelBody>
//     </S.Panel>
//   );
// }

// /*
//  * 주문 상품
//  */
// function ProductItem({
//   product,
//   statusLabel,
//   canWriteReview,
//   canRequestClaim,
//   showCancelButton,
//   onReview,
//   onClaim,
//   onCancel,
// }) {
//   return (
//     <S.ProductItemWrap>
//       <S.Thumb>
//         {product.thumbnail ? (
//           <img src={product.thumbnail} alt={product.name} />
//         ) : (
//           <S.ThumbText />
//         )}
//       </S.Thumb>

//       <S.ProductBody>
//         <S.ProductName>{product.name}</S.ProductName>

//         <S.ProductOption>상품번호 {product.productId}</S.ProductOption>

//         <S.PriceRow>
//           <S.ProductPrice>{formatPrice(product.itemAmount)}</S.ProductPrice>

//           <S.ProductQty>{product.quantity}개</S.ProductQty>
//         </S.PriceRow>
//       </S.ProductBody>

//       <S.ProductActions>
//         {/*
//           ★ 여기 표시되는 상태가
//           이제 상품별 Claim을 기준으로 계산됨
//         */}
//         <S.StatusBadgeSmall>{statusLabel}</S.StatusBadgeSmall>

//         <S.ActionButtons>
//           {canWriteReview && (
//             <S.GhostButton
//               type="button"
//               onClick={() => onReview(product.productId)}
//             >
//               구매평 작성
//             </S.GhostButton>
//           )}

//           {canRequestClaim && (
//             <S.GhostButton
//               type="button"
//               onClick={() => onClaim(product.productId)}
//             >
//               반품/교환
//             </S.GhostButton>
//           )}

//           {showCancelButton && (
//             <S.GhostButton type="button" onClick={onCancel}>
//               주문 취소
//             </S.GhostButton>
//           )}
//         </S.ActionButtons>
//       </S.ProductActions>
//     </S.ProductItemWrap>
//   );
// }

// export default function OrderDetail() {
//   const [order, setOrder] = useState(null);

//   const [isLoading, setIsLoading] = useState(true);

//   const { orderId } = useParams();

//   const navigate = useNavigate();

//   const { accessToken, isAuthLoading } = useAuth();

//   const { showToast } = useToast();

//   /*
//    * 주문 상세 조회
//    */
//   useEffect(() => {
//     if (isAuthLoading || !accessToken || !orderId) {
//       return;
//     }

//     let isCancelled = false;

//     orderService
//       .getOrder(orderId, accessToken)
//       .then((result) => {
//         if (isCancelled) {
//           return;
//         }

//         if (!result.success || !result.order) {
//           throw new Error(result.message || "주문 정보를 불러오지 못했습니다.");
//         }

//         setOrder(result.order);
//       })
//       .catch((error) => {
//         if (isCancelled) {
//           return;
//         }

//         console.error("주문 상세 조회 실패:", error);

//         showToast(error.message || "주문 정보를 불러오지 못했습니다.", false);
//       })
//       .finally(() => {
//         if (!isCancelled) {
//           setIsLoading(false);
//         }
//       });

//     return () => {
//       isCancelled = true;
//     };
//   }, [orderId, accessToken, isAuthLoading, showToast]);

//   /*
//    * 리뷰
//    */
//   const handleReview = (productId) => {
//     const searchParams = new URLSearchParams({
//       orderId: String(orderId),
//       productId: String(productId),
//     });

//     navigate(`/reviews?${searchParams.toString()}`);
//   };

//   /*
//    * 교환 / 반품
//    */
//   const handleClaim = (productId) => {
//     const searchParams = new URLSearchParams({
//       orderId: String(orderId),
//       productId: String(productId),
//     });

//     navigate(`/claims?${searchParams.toString()}`);
//   };

//   /*
//    * 취소
//    *
//    * 취소 페이지에서 상품 체크박스를 이용해
//    * 전체취소 / 부분취소를 선택합니다.
//    */
//   const handleCancel = () => {
//     const searchParams = new URLSearchParams({
//       orderId: String(orderId),
//     });

//     navigate(`/claims/cancel?${searchParams.toString()}`);
//   };

//   if (isAuthLoading || isLoading) {
//     return <Loader />;
//   }

//   if (!order) {
//     return null;
//   }

//   const { shippingInfo, payment } = order;

//   /*
//    * 주문 전체 상태
//    */
//   const orderStatusLabel = getOrderStatusLabel(order);

//   /*
//    * 전체취소 진행 여부
//    */
//   const activeAllCancelClaim = hasActiveAllCancelClaim(order);

//   /*
//    * 아직 취소되지 않은 상품 존재 여부
//    */
//   const hasCancelableProduct =
//     order.items?.some(
//       (product) => !isProductCanceled(order, product.productId),
//     ) ?? false;

//   /*
//    * 주문취소 버튼
//    *
//    * 부분취소 후에도 아직 남아있는 상품이 있다면
//    * 다시 취소 페이지에 들어갈 수 있도록 처리
//    */
//   const canCancelOrder =
//     !activeAllCancelClaim &&
//     hasCancelableProduct &&
//     (order.status === "PAYMENT_COMPLETED" ||
//       (order.status === "CANCELED" &&
//         getCancelClaims(order).some((claim) => claim.scope === "PARTIAL")));

//   return (
//     <S.Page>
//       <S.Breadcrumb href="/mypage/orders">
//         ← 주문/배송내역으로 돌아가기
//       </S.Breadcrumb>

//       <S.Header>
//         <S.Title>주문 상세보기</S.Title>

//         <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
//       </S.Header>

//       <S.SummaryBar>
//         <OrderRow label="주문일">
//           <S.InfoValue>{formatDate(order.createdAt)}</S.InfoValue>
//         </OrderRow>

//         <OrderRow label="주문번호">
//           <S.InfoValue>{order.orderId}</S.InfoValue>
//         </OrderRow>

//         <OrderRow label="주문자">
//           <S.InfoValue>{order.ordererName}</S.InfoValue>
//         </OrderRow>

//         <OrderRow label="주문상태">
//           <S.StatusBadge>{orderStatusLabel}</S.StatusBadge>
//         </OrderRow>

//         <OrderRow label="주문 총 금액">
//           <S.InfoValueStrong>
//             {formatPrice(payment?.finalAmount)}
//           </S.InfoValueStrong>
//         </OrderRow>
//       </S.SummaryBar>

//       <S.Section>
//         <S.SectionTitle>주문 상품</S.SectionTitle>

//         <S.ProductList>
//           {order.items?.map((product, index) => {
//             /*
//              * 이 상품에 걸려있는 Claim
//              */
//             const activeProductClaim = hasActiveProductClaim(
//               order,
//               product.productId,
//             );

//             const productCanceled = isProductCanceled(order, product.productId);

//             /*
//              * 상품별 상태 계산
//              *
//              * 서버에서 item.status를 제공한다면
//              * 취소되지 않은 상품은 item.status를 우선 사용
//              */
//             let productStatusLabel = getProductStatusLabel(
//               order,
//               product.productId,
//             );

//             /*
//              * 부분취소 + 전체 주문 CANCELED인 경우
//              *
//              * 취소되지 않은 상품은
//              * product.status가 있으면 그것을 표시
//              */
//             if (
//               order.status === "CANCELED" &&
//               !productCanceled &&
//               product.status
//             ) {
//               productStatusLabel =
//                 STATUS_LABELS[product.status] ?? product.status;
//             }

//             /*
//              * 배송완료 + Claim 없음
//              */
//             const canUseDeliveredActions =
//               !productCanceled &&
//               !activeProductClaim &&
//               (product.status === "DELIVERED" ||
//                 (!product.status && order.status === "DELIVERED"));

//             return (
//               <ProductItem
//                 key={product.productId}
//                 product={product}
//                 statusLabel={productStatusLabel}
//                 canWriteReview={canUseDeliveredActions}
//                 canRequestClaim={canUseDeliveredActions}
//                 /*
//                  * 취소 버튼은 하나만 표시
//                  */
//                 showCancelButton={canCancelOrder && index === 0}
//                 onReview={handleReview}
//                 onClaim={handleClaim}
//                 onCancel={handleCancel}
//               />
//             );
//           })}
//         </S.ProductList>
//       </S.Section>

//       <S.BottomGrid>
//         <CollapsiblePanel title="배송 정보">
//           <S.PanelRow>
//             <S.PanelLabel>받는 분</S.PanelLabel>

//             <S.PanelValue>{shippingInfo?.recipientName ?? "-"}</S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>연락처</S.PanelLabel>

//             <S.PanelValue>{shippingInfo?.recipientPhone ?? "-"}</S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>배송지</S.PanelLabel>

//             <S.PanelValueGroup>
//               <S.PanelValue>
//                 {shippingInfo?.zipCode
//                   ? `(${shippingInfo.zipCode}) ${shippingInfo.address}`
//                   : (shippingInfo?.address ?? "-")}
//               </S.PanelValue>

//               <S.PanelValueSub>{shippingInfo?.detailAddress}</S.PanelValueSub>
//             </S.PanelValueGroup>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>배송요청사항</S.PanelLabel>

//             <S.PanelValue>{shippingInfo?.deliveryRequest ?? "-"}</S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>배송방법</S.PanelLabel>

//             <S.PanelValue>택배배송</S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>송장번호</S.PanelLabel>

//             <S.TrackingGroup>
//               <S.PanelValue>1234-5678-9012</S.PanelValue>

//               <S.LinkButton type="button">배송조회</S.LinkButton>
//             </S.TrackingGroup>
//           </S.PanelRow>
//         </CollapsiblePanel>

//         <CollapsiblePanel title="결제 정보">
//           <S.PanelRow>
//             <S.PanelLabel>상품금액</S.PanelLabel>

//             <S.PanelValue>{formatPrice(payment?.productAmount)}</S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>배송비</S.PanelLabel>

//             <S.PanelValue>{formatPrice(payment?.shippingFee)}</S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>쿠폰할인</S.PanelLabel>

//             <S.PanelValue>{formatPrice(payment?.discountAmount)}</S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>포인트 사용</S.PanelLabel>

//             <S.PanelValue>{formatPrice(payment?.appliedPoints)}</S.PanelValue>
//           </S.PanelRow>

//           <S.Divider />

//           <S.PanelRow>
//             <S.PanelLabel>총 결제금액</S.PanelLabel>

//             <S.InfoValueStrong>
//               {formatPrice(payment?.finalAmount)}
//             </S.InfoValueStrong>
//           </S.PanelRow>

//           <S.Divider />

//           <S.PanelRow>
//             <S.PanelLabel>결제수단</S.PanelLabel>

//             <S.PanelValue>
//               {PAYMENT_METHOD_LABELS[payment?.paymentMethod] ??
//                 payment?.paymentMethod ??
//                 "-"}
//             </S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>결제일시</S.PanelLabel>

//             <S.PanelValue>{formatDate(payment?.paidAt)}</S.PanelValue>
//           </S.PanelRow>
//         </CollapsiblePanel>
//       </S.BottomGrid>
//     </S.Page>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./orderStyle";
import * as orderService from "../../services/orderServices";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

import Loader from "../loader/Loader";

/*
 * 주문 상태
 */
const STATUS_LABELS = {
  PAYMENT_COMPLETED: "결제완료",
  PREPARING_SHIPMENT: "상품준비중",
  SHIPPING: "배송중",
  DELIVERED: "배송완료",
  CONFIRMED: "구매결정",
  CANCELED: "주문취소",
};

/*
 * 결제수단
 */
const PAYMENT_METHOD_LABELS = {
  CARD: "카드",
  BANK: "무통장입금",
};

/*
 * 처리 중인 Claim 상태
 */
const ACTIVE_CLAIM_STATUSES = ["REQUESTED", "PROCESSING"];

/*
 * 날짜
 */
function formatDate(dateString) {
  if (!dateString) {
    return "-";
  }

  return new Date(dateString).toLocaleString("ko-KR");
}

/*
 * 금액
 */
function formatPrice(price) {
  return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
}

/*
 * CANCEL Claim 목록
 */
function getCancelClaims(order) {
  if (!Array.isArray(order?.claims)) {
    return [];
  }

  return order.claims.filter((claim) => claim.type === "CANCEL");
}

/*
 * 전체취소 Claim
 */
function findAllCancelClaim(order) {
  const cancelClaims = getCancelClaims(order);

  return (
    cancelClaims.find(
      (claim) =>
        claim.scope === "ALL" ||
        (claim.scope == null &&
          claim.productId == null &&
          !Array.isArray(claim.items)),
    ) ?? null
  );
}

/*
 * Claim 안에 특정 상품이 포함되어 있는지 확인
 *
 * 취소/교환/반품 모두 사용할 수 있도록 공통 처리
 */
function isProductIncludedInClaim(claim, productId) {
  if (!claim || productId == null) {
    return false;
  }

  /*
   * 전체 취소
   */
  if (claim.type === "CANCEL" && claim.scope === "ALL") {
    return true;
  }

  /*
   * Claim 자체에 productId가 있는 구조
   *
   * EXCHANGE / RETURN의 기존 구조 대응
   */
  if (claim.productId != null) {
    return String(claim.productId) === String(productId);
  }

  /*
   * items 배열 안에 상품정보가 있는 구조
   *
   * 부분취소뿐만 아니라
   * 교환/반품 API가 items 형태로 변경되어도 대응
   */
  if (Array.isArray(claim.items)) {
    return claim.items.some((item) => {
      const claimProductId = item.productId ?? item.product?.productId;

      return String(claimProductId) === String(productId);
    });
  }

  return false;
}

/*
 * 특정 상품에 적용된 취소 Claim
 */
function findProductCancelClaim(order, productId) {
  const cancelClaims = getCancelClaims(order);

  return (
    cancelClaims.find((claim) => isProductIncludedInClaim(claim, productId)) ??
    null
  );
}

/*
 * 특정 상품에 적용된 교환/반품 Claim
 */
function findProductClaim(order, productId) {
  if (!Array.isArray(order?.claims)) {
    return null;
  }

  return (
    order.claims.find(
      (claim) =>
        (claim.type === "EXCHANGE" || claim.type === "RETURN") &&
        isProductIncludedInClaim(claim, productId),
    ) ?? null
  );
}

/*
 * 취소 상태 문구
 */
function getCancelStatusLabel(claim) {
  if (!claim) {
    return null;
  }

  switch (claim.status) {
    case "REQUESTED":
      return "취소 신청완료";

    case "PROCESSING":
      return "취소 처리중";

    case "COMPLETED":
      return "취소완료";

    case "REJECTED":
      return "취소 처리불가";

    default:
      return null;
  }
}

/*
 * 교환 상태 문구
 */
function getExchangeStatusLabel(claim) {
  if (!claim) {
    return null;
  }

  switch (claim.status) {
    case "REQUESTED":
      return "교환 신청완료";

    case "PROCESSING":
      return "교환 처리중";

    case "COMPLETED":
      return "교환완료";

    case "REJECTED":
      return "교환 처리불가";

    default:
      return null;
  }
}

/*
 * 반품 상태 문구
 */
function getReturnStatusLabel(claim) {
  if (!claim) {
    return null;
  }

  switch (claim.status) {
    case "REQUESTED":
      return "반품 신청완료";

    case "PROCESSING":
      return "반품 처리중";

    case "COMPLETED":
      return "반품완료";

    case "REJECTED":
      return "반품 처리불가";

    default:
      return null;
  }
}

/*
 * 주문 전체 상태
 *
 * 상품별 Claim과 주문 전체 상태는 분리합니다.
 *
 * 예:
 *
 * 상품 A = 취소 신청완료
 * 상품 B = 결제완료
 *
 * 라고 해서 주문 전체 상태까지
 * "취소 신청완료"로 바꾸지 않습니다.
 *
 * 전체취소 Claim만 주문 전체 상태에 반영합니다.
 */
function getOrderStatusLabel(order) {
  const allCancelClaim = findAllCancelClaim(order);

  /*
   * 전체취소 Claim이 있으면
   * 주문 전체 상태에 반영
   */
  if (allCancelClaim) {
    const cancelStatus = getCancelStatusLabel(allCancelClaim);

    if (cancelStatus) {
      return cancelStatus;
    }
  }

  /*
   * 서버 주문 자체가 취소 완료
   */
  if (
    order.status === "CANCELED" &&
    !getCancelClaims(order).some((claim) => claim.scope === "PARTIAL")
  ) {
    return "주문취소";
  }

  /*
   * 부분취소는 상품 상태에서만 표현
   *
   * 주문 전체 상태는 원래 상태 유지
   */
  if (
    order.status === "CANCELED" &&
    getCancelClaims(order).some((claim) => claim.scope === "PARTIAL")
  ) {
    return "결제완료";
  }

  return STATUS_LABELS[order.status] ?? order.status;
}

/*
 * 상품별 상태
 *
 * 우선순위
 *
 * 1. 해당 상품의 취소 Claim
 * 2. 해당 상품의 교환 Claim
 * 3. 해당 상품의 반품 Claim
 * 4. product.status
 * 5. order.status
 *
 * 다른 상품의 Claim은 현재 상품에
 * 절대 영향을 주지 않습니다.
 */
function getProductStatusLabel(order, product) {
  const productId = product.productId;

  /*
   * 해당 상품 취소 Claim
   */
  const cancelClaim = findProductCancelClaim(order, productId);

  if (cancelClaim) {
    const cancelStatus = getCancelStatusLabel(cancelClaim);

    if (cancelStatus) {
      return cancelStatus;
    }
  }

  /*
   * 해당 상품 교환/반품 Claim
   */
  const productClaim = findProductClaim(order, productId);

  if (productClaim) {
    if (productClaim.type === "EXCHANGE") {
      const exchangeStatus = getExchangeStatusLabel(productClaim);

      if (exchangeStatus) {
        return exchangeStatus;
      }
    }

    if (productClaim.type === "RETURN") {
      const returnStatus = getReturnStatusLabel(productClaim);

      if (returnStatus) {
        return returnStatus;
      }
    }
  }

  /*
   * Claim이 없는 상품
   *
   * 상품 자체 상태가 있으면
   * 상품 상태를 가장 먼저 사용
   */
  if (product.status) {
    return STATUS_LABELS[product.status] ?? product.status;
  }

  /*
   * 부분취소 때문에 서버의
   * order.status가 CANCELED가 된 경우
   *
   * 현재 상품이 취소 Claim 대상이 아니라면
   * 결제완료 상태 유지
   */
  if (order.status === "CANCELED") {
    const hasPartialCancel = getCancelClaims(order).some(
      (claim) => claim.scope === "PARTIAL",
    );

    if (hasPartialCancel) {
      return "결제완료";
    }
  }

  /*
   * 배송완료 주문에서
   * 교환/반품 Claim이 없는 상품
   */
  if (order.status === "DELIVERED") {
    return "배송완료";
  }

  /*
   * 일반 주문상태
   */
  return STATUS_LABELS[order.status] ?? order.status;
}

/*
 * 전체취소가 처리 중인지 확인
 */
function hasActiveAllCancelClaim(order) {
  const claim = findAllCancelClaim(order);

  return Boolean(claim && ACTIVE_CLAIM_STATUSES.includes(claim.status));
}

/*
 * 특정 상품의 처리 중 Claim 확인
 *
 * CANCEL / EXCHANGE / RETURN 모두 확인
 */
function hasActiveProductClaim(order, productId) {
  const cancelClaim = findProductCancelClaim(order, productId);

  if (cancelClaim && ACTIVE_CLAIM_STATUSES.includes(cancelClaim.status)) {
    return true;
  }

  const productClaim = findProductClaim(order, productId);

  return Boolean(
    productClaim && ACTIVE_CLAIM_STATUSES.includes(productClaim.status),
  );
}

/*
 * 상품이 이미 취소 대상인지 확인
 *
 * REQUESTED / PROCESSING / COMPLETED 상태라면
 * 다시 취소 신청 대상에 포함하지 않습니다.
 */
function isProductCancelClaimed(order, productId) {
  const cancelClaim = findProductCancelClaim(order, productId);

  if (!cancelClaim) {
    return false;
  }

  return ["REQUESTED", "PROCESSING", "COMPLETED"].includes(cancelClaim.status);
}

/*
 * OrderRow
 */
function OrderRow({ label, children }) {
  return (
    <S.InfoRow>
      <S.InfoLabel>{label}</S.InfoLabel>

      {children}
    </S.InfoRow>
  );
}

/*
 * 화살표
 */
function Chevron({ isOpen }) {
  return (
    <S.ChevronIcon
      isOpen={isOpen}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" />
    </S.ChevronIcon>
  );
}

/*
 * 아코디언
 */
function CollapsiblePanel({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Panel>
      <S.AccordionHeader
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
      >
        {title}

        <Chevron isOpen={isOpen} />
      </S.AccordionHeader>

      <S.PanelBody isOpen={isOpen}>{children}</S.PanelBody>
    </S.Panel>
  );
}

/*
 * 주문 상품
 */
function ProductItem({
  product,
  statusLabel,
  canWriteReview,
  canRequestClaim,
  showCancelButton,
  onReview,
  onClaim,
  onCancel,
}) {
  return (
    <S.ProductItemWrap>
      <S.Thumb>
        {product.thumbnail ? (
          <img src={product.thumbnail} alt={product.name} />
        ) : (
          <S.ThumbText />
        )}
      </S.Thumb>

      <S.ProductBody>
        <S.ProductName>{product.name}</S.ProductName>

        <S.ProductOption>상품번호 {product.productId}</S.ProductOption>

        <S.PriceRow>
          <S.ProductPrice>{formatPrice(product.itemAmount)}</S.ProductPrice>

          <S.ProductQty>{product.quantity}개</S.ProductQty>
        </S.PriceRow>
      </S.ProductBody>

      <S.ProductActions>
        <S.StatusBadgeSmall>{statusLabel}</S.StatusBadgeSmall>

        <S.ActionButtons>
          {canWriteReview && (
            <S.GhostButton
              type="button"
              onClick={() => onReview(product.productId)}
            >
              구매평 작성
            </S.GhostButton>
          )}

          {canRequestClaim && (
            <S.GhostButton
              type="button"
              onClick={() => onClaim(product.productId)}
            >
              반품/교환
            </S.GhostButton>
          )}

          {showCancelButton && (
            <S.GhostButton type="button" onClick={onCancel}>
              주문 취소
            </S.GhostButton>
          )}
        </S.ActionButtons>
      </S.ProductActions>
    </S.ProductItemWrap>
  );
}

export default function OrderDetail() {
  const [order, setOrder] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const { orderId } = useParams();

  const navigate = useNavigate();

  const { accessToken, isAuthLoading } = useAuth();

  const { showToast } = useToast();

  /*
   * 주문 상세 조회
   */
  useEffect(() => {
    if (isAuthLoading || !accessToken || !orderId) {
      return;
    }

    let isCancelled = false;

    orderService
      .getOrder(orderId, accessToken)
      .then((result) => {
        if (isCancelled) {
          return;
        }

        if (!result.success || !result.order) {
          throw new Error(result.message || "주문 정보를 불러오지 못했습니다.");
        }

        setOrder(result.order);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("주문 상세 조회 실패:", error);

        showToast(error.message || "주문 정보를 불러오지 못했습니다.", false);
      })
      .finally(() => {
        if (!isCancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [orderId, accessToken, isAuthLoading, showToast]);

  /*
   * 리뷰
   */
  const handleReview = (productId) => {
    const searchParams = new URLSearchParams({
      orderId: String(orderId),
      productId: String(productId),
    });

    navigate(`/reviews?${searchParams.toString()}`);
  };

  /*
   * 교환 / 반품
   */
  const handleClaim = (productId) => {
    const searchParams = new URLSearchParams({
      orderId: String(orderId),
      productId: String(productId),
    });

    navigate(`/claims?${searchParams.toString()}`);
  };

  /*
   * 취소
   *
   * 취소 페이지에서
   * 상품을 선택하여
   * 전체취소 / 부분취소 처리
   */
  const handleCancel = () => {
    const searchParams = new URLSearchParams({
      orderId: String(orderId),
    });

    navigate(`/claims/cancel?${searchParams.toString()}`);
  };

  if (isAuthLoading || isLoading) {
    return <Loader />;
  }

  if (!order) {
    return null;
  }

  const { shippingInfo, payment } = order;

  /*
   * 주문 전체 상태
   */
  const orderStatusLabel = getOrderStatusLabel(order);

  /*
   * 전체취소 진행 여부
   */
  const activeAllCancelClaim = hasActiveAllCancelClaim(order);

  /*
   * 아직 취소 신청할 수 있는
   * 상품이 존재하는지 확인
   */
  const hasCancelableProduct =
    order.items?.some(
      (product) => !isProductCancelClaimed(order, product.productId),
    ) ?? false;

  /*
   * 주문취소 버튼
   *
   * 부분취소 후에도
   * 취소되지 않은 상품이 있으면
   * 다시 취소 페이지 진입 가능
   */
  const canCancelOrder =
    !activeAllCancelClaim &&
    hasCancelableProduct &&
    (order.status === "PAYMENT_COMPLETED" ||
      (order.status === "CANCELED" &&
        getCancelClaims(order).some((claim) => claim.scope === "PARTIAL")));

  return (
    <S.Page>
      <S.Breadcrumb href="/mypage/orders">
        ← 주문/배송내역으로 돌아가기
      </S.Breadcrumb>

      <S.Header>
        <S.Title>주문 상세보기</S.Title>

        <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
      </S.Header>

      <S.SummaryBar>
        <OrderRow label="주문일">
          <S.InfoValue>{formatDate(order.createdAt)}</S.InfoValue>
        </OrderRow>

        <OrderRow label="주문번호">
          <S.InfoValue>{order.orderId}</S.InfoValue>
        </OrderRow>

        <OrderRow label="주문자">
          <S.InfoValue>{order.ordererName}</S.InfoValue>
        </OrderRow>

        <OrderRow label="주문상태">
          <S.StatusBadge>{orderStatusLabel}</S.StatusBadge>
        </OrderRow>

        <OrderRow label="주문 총 금액">
          <S.InfoValueStrong>
            {formatPrice(payment?.finalAmount)}
          </S.InfoValueStrong>
        </OrderRow>
      </S.SummaryBar>

      <S.Section>
        <S.SectionTitle>주문 상품</S.SectionTitle>

        <S.ProductList>
          {order.items?.map((product, index) => {
            /*
             * 현재 상품의 Claim
             */
            const activeProductClaim = hasActiveProductClaim(
              order,
              product.productId,
            );

            /*
             * 현재 상품의 상태
             *
             * 다른 상품의 Claim은
             * 영향을 주지 않음
             */
            const productStatusLabel = getProductStatusLabel(order, product);

            /*
             * 현재 상품에 Claim이
             * 하나라도 있는지 확인
             */
            const cancelClaim = findProductCancelClaim(
              order,
              product.productId,
            );

            const exchangeOrReturnClaim = findProductClaim(
              order,
              product.productId,
            );

            const hasProductClaim = Boolean(
              cancelClaim || exchangeOrReturnClaim,
            );

            /*
             * Claim이 없는 배송완료
             * 상품에만
             *
             * 구매평 작성
             * 반품/교환
             *
             * 버튼 표시
             */
            const baseProductStatus = product.status ?? order.status;

            const canUseDeliveredActions =
              baseProductStatus === "DELIVERED" &&
              !hasProductClaim &&
              !activeProductClaim;

            return (
              <ProductItem
                key={product.productId}
                product={product}
                statusLabel={productStatusLabel}
                canWriteReview={canUseDeliveredActions}
                canRequestClaim={canUseDeliveredActions}
                showCancelButton={canCancelOrder && index === 0}
                onReview={handleReview}
                onClaim={handleClaim}
                onCancel={handleCancel}
              />
            );
          })}
        </S.ProductList>
      </S.Section>

      <S.BottomGrid>
        <CollapsiblePanel title="배송 정보">
          <S.PanelRow>
            <S.PanelLabel>받는 분</S.PanelLabel>

            <S.PanelValue>{shippingInfo?.recipientName ?? "-"}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>연락처</S.PanelLabel>

            <S.PanelValue>{shippingInfo?.recipientPhone ?? "-"}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송지</S.PanelLabel>

            <S.PanelValueGroup>
              <S.PanelValue>
                {shippingInfo?.zipCode
                  ? `(${shippingInfo.zipCode}) ${shippingInfo.address}`
                  : (shippingInfo?.address ?? "-")}
              </S.PanelValue>

              <S.PanelValueSub>{shippingInfo?.detailAddress}</S.PanelValueSub>
            </S.PanelValueGroup>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송요청사항</S.PanelLabel>

            <S.PanelValue>{shippingInfo?.deliveryRequest ?? "-"}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송방법</S.PanelLabel>

            <S.PanelValue>택배배송</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>송장번호</S.PanelLabel>

            <S.TrackingGroup>
              <S.PanelValue>1234-5678-9012</S.PanelValue>

              <S.LinkButton type="button">배송조회</S.LinkButton>
            </S.TrackingGroup>
          </S.PanelRow>
        </CollapsiblePanel>

        <CollapsiblePanel title="결제 정보">
          <S.PanelRow>
            <S.PanelLabel>상품금액</S.PanelLabel>

            <S.PanelValue>{formatPrice(payment?.productAmount)}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송비</S.PanelLabel>

            <S.PanelValue>{formatPrice(payment?.shippingFee)}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>쿠폰할인</S.PanelLabel>

            <S.PanelValue>{formatPrice(payment?.discountAmount)}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>포인트 사용</S.PanelLabel>

            <S.PanelValue>{formatPrice(payment?.appliedPoints)}</S.PanelValue>
          </S.PanelRow>

          <S.Divider />

          <S.PanelRow>
            <S.PanelLabel>총 결제금액</S.PanelLabel>

            <S.InfoValueStrong>
              {formatPrice(payment?.finalAmount)}
            </S.InfoValueStrong>
          </S.PanelRow>

          <S.Divider />

          <S.PanelRow>
            <S.PanelLabel>결제수단</S.PanelLabel>

            <S.PanelValue>
              {PAYMENT_METHOD_LABELS[payment?.paymentMethod] ??
                payment?.paymentMethod ??
                "-"}
            </S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>결제일시</S.PanelLabel>

            <S.PanelValue>{formatDate(payment?.paidAt)}</S.PanelValue>
          </S.PanelRow>
        </CollapsiblePanel>
      </S.BottomGrid>
    </S.Page>
  );
}
