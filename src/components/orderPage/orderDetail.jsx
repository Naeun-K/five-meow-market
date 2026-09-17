// // import { useState } from "react";
// // import * as S from "./orderStyle";

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
// //       <S.AccordionHeader onClick={() => setIsOpen((prev) => !prev)}>
// //         {title}
// //         <Chevron isOpen={isOpen} />
// //       </S.AccordionHeader>
// //       <S.PanelBody isOpen={isOpen}>{children}</S.PanelBody>
// //     </S.Panel>
// //   );
// // }

// // function ProductItem() {
// //   return (
// //     <S.ProductItemWrap>
// //       <S.Thumb>
// //         <S.ThumbText></S.ThumbText>
// //       </S.Thumb>

// //       <S.ProductBody>
// //         <S.ProductName></S.ProductName>
// //         <S.ProductOption></S.ProductOption>
// //         <S.PriceRow>
// //           <S.ProductPrice></S.ProductPrice>
// //           <S.ProductQty></S.ProductQty>
// //         </S.PriceRow>
// //       </S.ProductBody>

// //       <S.ProductActions>
// //         <S.StatusBadgeSmall></S.StatusBadgeSmall>
// //         <S.ActionButtons>
// //           <S.GhostButton>구매평 작성</S.GhostButton>
// //           <S.GhostButton>반품/교환</S.GhostButton>
// //         </S.ActionButtons>
// //       </S.ProductActions>
// //     </S.ProductItemWrap>
// //   );
// // }

// // export default function OrderDetail() {
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
// //           <S.InfoValue></S.InfoValue>
// //         </OrderRow>
// //         <OrderRow label="주문번호">
// //           <S.InfoValue></S.InfoValue>
// //         </OrderRow>
// //         <OrderRow label="주문자">
// //           <S.InfoValue></S.InfoValue>
// //         </OrderRow>
// //         <OrderRow label="주문상태">
// //           <S.StatusBadge></S.StatusBadge>
// //         </OrderRow>
// //         <OrderRow label="주문 총 금액">
// //           <S.InfoValueStrong></S.InfoValueStrong>
// //         </OrderRow>
// //       </S.SummaryBar>

// //       <S.Section>
// //         <S.SectionTitle>주문 상품</S.SectionTitle>
// //         <S.ProductList>
// //           <ProductItem />
// //           <ProductItem />
// //           <ProductItem />
// //         </S.ProductList>
// //       </S.Section>

// //       <S.BottomGrid>
// //         <CollapsiblePanel title="배송 정보">
// //           <S.PanelRow>
// //             <S.PanelLabel>받는 분</S.PanelLabel>
// //             <S.PanelValue></S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>연락처</S.PanelLabel>
// //             <S.PanelValue></S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>배송지</S.PanelLabel>
// //             <S.PanelValueGroup>
// //               <S.PanelValue></S.PanelValue>
// //               <S.PanelValueSub></S.PanelValueSub>
// //             </S.PanelValueGroup>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>배송요청사항</S.PanelLabel>
// //             <S.PanelValue></S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>배송방법</S.PanelLabel>
// //             <S.PanelValue>택배배송</S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>송장번호</S.PanelLabel>
// //             <S.TrackingGroup>
// //               <S.PanelValue>1234-5678-9012</S.PanelValue>
// //               <S.LinkButton>배송조회</S.LinkButton>
// //             </S.TrackingGroup>
// //           </S.PanelRow>
// //         </CollapsiblePanel>

// //         <CollapsiblePanel title="결제 정보">
// //           <S.PanelRow>
// //             <S.PanelLabel>상품금액</S.PanelLabel>
// //             <S.PanelValue></S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>배송비</S.PanelLabel>
// //             <S.PanelValue></S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>쿠폰할인</S.PanelLabel>
// //             <S.PanelValue></S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>포인트 사용</S.PanelLabel>
// //             <S.PanelValue></S.PanelValue>
// //           </S.PanelRow>

// //           <S.Divider />

// //           <S.PanelRow>
// //             <S.PanelLabel>총 결제금액</S.PanelLabel>
// //             <S.InfoValueStrong></S.InfoValueStrong>
// //           </S.PanelRow>

// //           <S.Divider />

// //           <S.PanelRow>
// //             <S.PanelLabel>결제수단</S.PanelLabel>
// //             <S.PanelValue></S.PanelValue>
// //           </S.PanelRow>

// //           <S.PanelRow>
// //             <S.PanelLabel>결제일시</S.PanelLabel>
// //             <S.PanelValue></S.PanelValue>
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

// const STATUS_LABELS = {
//   PAYMENT_COMPLETED: "결제완료",
//   PREPARING_SHIPMENT: "상품준비중",
//   SHIPPING: "배송중",
//   DELIVERED: "배송완료",
//   CONFIRMED: "구매결정",
//   CANCELED: "주문취소",
// };

// const PAYMENT_METHOD_LABELS = {
//   CARD: "카드",
//   BANK: "무통장입금",
// };

// function formatDate(dateString) {
//   if (!dateString) {
//     return "-";
//   }

//   return new Date(dateString).toLocaleString("ko-KR");
// }

// function formatPrice(price) {
//   return `${Number(price ?? 0).toLocaleString()}원`;
// }

// function OrderRow({ label, children }) {
//   return (
//     <S.InfoRow>
//       <S.InfoLabel>{label}</S.InfoLabel>
//       {children}
//     </S.InfoRow>
//   );
// }

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

// function CollapsiblePanel({ title, children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <S.Panel>
//       <S.AccordionHeader onClick={() => setIsOpen((prev) => !prev)}>
//         {title}

//         <Chevron isOpen={isOpen} />
//       </S.AccordionHeader>

//       <S.PanelBody isOpen={isOpen}>{children}</S.PanelBody>
//     </S.Panel>
//   );
// }

// function ProductItem({ product, orderStatus, onReview, onClaim }) {
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
//         <S.StatusBadgeSmall>
//           {STATUS_LABELS[orderStatus] ?? orderStatus}
//         </S.StatusBadgeSmall>

//         <S.ActionButtons>
//           {orderStatus === "DELIVERED" && (
//             <>
//               <S.GhostButton
//                 type="button"
//                 onClick={() => onReview(product.productId)}
//               >
//                 구매평 작성
//               </S.GhostButton>

//               <S.GhostButton
//                 type="button"
//                 onClick={() => onClaim(product.productId)}
//               >
//                 반품/교환
//               </S.GhostButton>
//             </>
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

//   useEffect(() => {
//     if (isAuthLoading || !accessToken || !orderId) {
//       return;
//     }

//     const fetchOrder = async () => {
//       try {
//         setIsLoading(true);

//         const result = await orderService.getOrder(orderId, accessToken);

//         if (!result.success) {
//           throw new Error(result.message || "주문 정보를 불러오지 못했습니다.");
//         }

//         setOrder(result.order);
//       } catch (error) {
//         console.error("주문 상세 조회 실패:", error);

//         showToast(error.message || "주문 정보를 불러오지 못했습니다.", false);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOrder();
//   }, [orderId, accessToken, isAuthLoading, showToast]);

//   const handleReview = (productId) => {
//     navigate(`/reviews?productId=${productId}`);
//   };

//   const handleClaim = (productId) => {
//     navigate(`/claims?orderId=${orderId}&productId=${productId}`);
//   };

//   if (isAuthLoading || isLoading) {
//     return <Loader />;
//   }

//   if (!order) {
//     return null;
//   }

//   const { shippingInfo, payment } = order;

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
//           <S.StatusBadge>
//             {STATUS_LABELS[order.status] ?? order.status}
//           </S.StatusBadge>
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
//           {order.items?.map((product) => (
//             <ProductItem
//               key={product.productId}
//               product={product}
//               orderStatus={order.status}
//               onReview={handleReview}
//               onClaim={handleClaim}
//             />
//           ))}
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
//               <S.LinkButton>배송조회</S.LinkButton>
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
 * 주문 상태 표시 문구
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
 * Claim 유형별 표시 문구
 */
const CLAIM_TYPE_LABELS = {
  CANCEL: "취소",
  EXCHANGE: "교환",
  RETURN: "반품",
};

/*
 * Claim 처리 상태별 표시 문구
 */
const CLAIM_STATUS_LABELS = {
  REQUESTED: "신청완료",
  PROCESSING: "처리중",
  COMPLETED: "처리완료",
  REJECTED: "처리불가",
};

const PAYMENT_METHOD_LABELS = {
  CARD: "카드",
  BANK: "무통장입금",
};

/*
 * 처리 중인 Claim 상태
 */
const ACTIVE_CLAIM_STATUSES = ["REQUESTED", "PROCESSING"];

/*
 * 날짜 표시
 */
function formatDate(dateString) {
  if (!dateString) {
    return "-";
  }

  return new Date(dateString).toLocaleString("ko-KR");
}

/*
 * 금액 표시
 */
function formatPrice(price) {
  return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
}

/*
 * 주문에 연결된 주문취소 Claim을 찾습니다.
 *
 * 주문취소는 주문 전체 대상이므로 productId가 null입니다.
 */
function findCancelClaim(order) {
  if (!Array.isArray(order?.claims)) {
    return null;
  }

  return (
    order.claims.find(
      (claim) =>
        claim.type === "CANCEL" &&
        (claim.productId === null || claim.productId === undefined),
    ) ?? null
  );
}

/*
 * 특정 상품에 연결된 교환·반품 Claim을 찾습니다.
 */
function findProductClaim(order, productId) {
  if (!Array.isArray(order?.claims)) {
    return null;
  }

  return (
    order.claims.find(
      (claim) =>
        claim.productId === productId &&
        (claim.type === "EXCHANGE" || claim.type === "RETURN"),
    ) ?? null
  );
}

/*
 * 주문 상태에 표시할 문구를 계산합니다.
 *
 * 취소 신청 직후에는 서버의 order.status가 PAYMENT_COMPLETED여도
 * Claim 상태를 기준으로 "취소 신청완료" 또는 "취소 처리중"을 표시합니다.
 */
function getOrderStatusLabel(order) {
  const cancelClaim = findCancelClaim(order);

  /*
   * 서버에서 주문 상태가 이미 CANCELED로 변경되었다면
   * 최종 주문 상태를 우선 표시합니다.
   */
  if (order.status === "CANCELED") {
    return STATUS_LABELS.CANCELED;
  }

  if (!cancelClaim) {
    return STATUS_LABELS[order.status] ?? order.status;
  }

  switch (cancelClaim.status) {
    case "REQUESTED":
      return "취소 신청완료";

    case "PROCESSING":
      return "취소 처리중";

    case "COMPLETED":
      return "주문취소";

    case "REJECTED":
      return "취소 처리불가";

    default:
      return STATUS_LABELS[order.status] ?? order.status;
  }
}

/*
 * 각 상품에 표시할 상태 문구를 계산합니다.
 */
function getProductStatusLabel(order, productId) {
  const cancelClaim = findCancelClaim(order);

  /*
   * 주문취소는 주문 전체 상품에 적용됩니다.
   */
  if (cancelClaim) {
    switch (cancelClaim.status) {
      case "REQUESTED":
        return "취소 신청완료";

      case "PROCESSING":
        return "취소 처리중";

      case "COMPLETED":
        return "주문취소";

      case "REJECTED":
        return "취소 처리불가";

      default:
        break;
    }
  }

  /*
   * 상품별 교환·반품 상태를 확인합니다.
   */
  const productClaim = findProductClaim(order, productId);

  if (productClaim) {
    const typeLabel = CLAIM_TYPE_LABELS[productClaim.type] ?? productClaim.type;

    const statusLabel =
      CLAIM_STATUS_LABELS[productClaim.status] ?? productClaim.status;

    return `${typeLabel} ${statusLabel}`;
  }

  return STATUS_LABELS[order.status] ?? order.status;
}

/*
 * 주문에 처리 중인 주문취소 Claim이 있는지 확인합니다.
 */
function hasActiveCancelClaim(order) {
  const cancelClaim = findCancelClaim(order);

  return cancelClaim && ACTIVE_CLAIM_STATUSES.includes(cancelClaim.status);
}

/*
 * 특정 상품에 처리 중인 교환·반품 Claim이 있는지 확인합니다.
 */
function hasActiveProductClaim(order, productId) {
  const productClaim = findProductClaim(order, productId);

  return productClaim && ACTIVE_CLAIM_STATUSES.includes(productClaim.status);
}

function OrderRow({ label, children }) {
  return (
    <S.InfoRow>
      <S.InfoLabel>{label}</S.InfoLabel>
      {children}
    </S.InfoRow>
  );
}

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
   *
   * Claim API 명세에 따라 주문 상세 응답의 order.claims에
   * 해당 주문과 연결된 Claim 목록이 포함되어야 합니다.
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
   * 구매평 작성 페이지 이동
   */
  const handleReview = (productId) => {
    const searchParams = new URLSearchParams({
      orderId: String(orderId),
      productId: String(productId),
    });

    navigate(`/reviews?${searchParams.toString()}`);
  };

  /*
   * 교환·반품 페이지 이동
   */
  const handleClaim = (productId) => {
    const searchParams = new URLSearchParams({
      orderId: String(orderId),
      productId: String(productId),
    });

    navigate(`/claims?${searchParams.toString()}`);
  };

  /*
   * 주문취소 페이지 이동
   *
   * 주문취소는 상품별 신청이 아니라 주문 전체 신청이므로
   * productId를 전달하지 않습니다.
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

  const orderStatusLabel = getOrderStatusLabel(order);
  const activeCancelClaim = hasActiveCancelClaim(order);

  /*
   * 결제완료 상태이고 처리 중인 취소 신청이 없을 때만
   * 주문취소 버튼을 표시합니다.
   */
  const canCancelOrder =
    order.status === "PAYMENT_COMPLETED" && !activeCancelClaim;

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
            const activeProductClaim = hasActiveProductClaim(
              order,
              product.productId,
            );

            /*
             * 배송완료이고 처리 중인 Claim이 없을 때만
             * 구매평과 교환·반품 버튼을 표시합니다.
             */
            const canUseDeliveredActions =
              order.status === "DELIVERED" &&
              !activeProductClaim &&
              !activeCancelClaim;

            return (
              <ProductItem
                key={product.productId}
                product={product}
                statusLabel={getProductStatusLabel(order, product.productId)}
                canWriteReview={canUseDeliveredActions}
                canRequestClaim={canUseDeliveredActions}
                /*
                 * 주문취소는 주문 전체에 한 번만 신청하므로
                 * 첫 번째 상품에만 취소 버튼을 표시합니다.
                 */
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
