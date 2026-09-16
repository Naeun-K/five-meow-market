// import { useState } from "react";
// import * as S from "./orderStyle";

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

// function ProductItem() {
//   return (
//     <S.ProductItemWrap>
//       <S.Thumb>
//         <S.ThumbText></S.ThumbText>
//       </S.Thumb>

//       <S.ProductBody>
//         <S.ProductName></S.ProductName>
//         <S.ProductOption></S.ProductOption>
//         <S.PriceRow>
//           <S.ProductPrice></S.ProductPrice>
//           <S.ProductQty></S.ProductQty>
//         </S.PriceRow>
//       </S.ProductBody>

//       <S.ProductActions>
//         <S.StatusBadgeSmall></S.StatusBadgeSmall>
//         <S.ActionButtons>
//           <S.GhostButton>구매평 작성</S.GhostButton>
//           <S.GhostButton>반품/교환</S.GhostButton>
//         </S.ActionButtons>
//       </S.ProductActions>
//     </S.ProductItemWrap>
//   );
// }

// export default function OrderDetail() {
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
//           <S.InfoValue></S.InfoValue>
//         </OrderRow>
//         <OrderRow label="주문번호">
//           <S.InfoValue></S.InfoValue>
//         </OrderRow>
//         <OrderRow label="주문자">
//           <S.InfoValue></S.InfoValue>
//         </OrderRow>
//         <OrderRow label="주문상태">
//           <S.StatusBadge></S.StatusBadge>
//         </OrderRow>
//         <OrderRow label="주문 총 금액">
//           <S.InfoValueStrong></S.InfoValueStrong>
//         </OrderRow>
//       </S.SummaryBar>

//       <S.Section>
//         <S.SectionTitle>주문 상품</S.SectionTitle>
//         <S.ProductList>
//           <ProductItem />
//           <ProductItem />
//           <ProductItem />
//         </S.ProductList>
//       </S.Section>

//       <S.BottomGrid>
//         <CollapsiblePanel title="배송 정보">
//           <S.PanelRow>
//             <S.PanelLabel>받는 분</S.PanelLabel>
//             <S.PanelValue></S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>연락처</S.PanelLabel>
//             <S.PanelValue></S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>배송지</S.PanelLabel>
//             <S.PanelValueGroup>
//               <S.PanelValue></S.PanelValue>
//               <S.PanelValueSub></S.PanelValueSub>
//             </S.PanelValueGroup>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>배송요청사항</S.PanelLabel>
//             <S.PanelValue></S.PanelValue>
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
//             <S.PanelValue></S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>배송비</S.PanelLabel>
//             <S.PanelValue></S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>쿠폰할인</S.PanelLabel>
//             <S.PanelValue></S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>포인트 사용</S.PanelLabel>
//             <S.PanelValue></S.PanelValue>
//           </S.PanelRow>

//           <S.Divider />

//           <S.PanelRow>
//             <S.PanelLabel>총 결제금액</S.PanelLabel>
//             <S.InfoValueStrong></S.InfoValueStrong>
//           </S.PanelRow>

//           <S.Divider />

//           <S.PanelRow>
//             <S.PanelLabel>결제수단</S.PanelLabel>
//             <S.PanelValue></S.PanelValue>
//           </S.PanelRow>

//           <S.PanelRow>
//             <S.PanelLabel>결제일시</S.PanelLabel>
//             <S.PanelValue></S.PanelValue>
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

const STATUS_LABELS = {
  PAYMENT_COMPLETED: "결제완료",
  PREPARING_SHIPMENT: "상품준비중",
  SHIPPING: "배송중",
  DELIVERED: "배송완료",
  CONFIRMED: "구매결정",
  CANCELED: "주문취소",
};

const PAYMENT_METHOD_LABELS = {
  CARD: "카드",
  BANK: "무통장입금",
};

function formatDate(dateString) {
  if (!dateString) {
    return "-";
  }

  return new Date(dateString).toLocaleString("ko-KR");
}

function formatPrice(price) {
  return `${Number(price ?? 0).toLocaleString()}원`;
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
      <S.AccordionHeader onClick={() => setIsOpen((prev) => !prev)}>
        {title}

        <Chevron isOpen={isOpen} />
      </S.AccordionHeader>

      <S.PanelBody isOpen={isOpen}>{children}</S.PanelBody>
    </S.Panel>
  );
}

function ProductItem({ product, orderStatus, onReview, onClaim }) {
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
        <S.StatusBadgeSmall>
          {STATUS_LABELS[orderStatus] ?? orderStatus}
        </S.StatusBadgeSmall>

        <S.ActionButtons>
          {orderStatus === "DELIVERED" && (
            <>
              <S.GhostButton
                type="button"
                onClick={() => onReview(product.productId)}
              >
                구매평 작성
              </S.GhostButton>

              <S.GhostButton
                type="button"
                onClick={() => onClaim(product.productId)}
              >
                반품/교환
              </S.GhostButton>
            </>
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

  useEffect(() => {
    if (isAuthLoading || !accessToken || !orderId) {
      return;
    }

    const fetchOrder = async () => {
      try {
        setIsLoading(true);

        const result = await orderService.getOrder(orderId, accessToken);

        if (!result.success) {
          throw new Error(result.message || "주문 정보를 불러오지 못했습니다.");
        }

        setOrder(result.order);
      } catch (error) {
        console.error("주문 상세 조회 실패:", error);

        showToast(error.message || "주문 정보를 불러오지 못했습니다.", false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, accessToken, isAuthLoading, showToast]);

  const handleReview = (productId) => {
    navigate(`/reviews?productId=${productId}`);
  };

  const handleClaim = (productId) => {
    navigate(`/claims?orderId=${orderId}&productId=${productId}`);
  };

  if (isAuthLoading || isLoading) {
    return <Loader />;
  }

  if (!order) {
    return null;
  }

  const { shippingInfo, payment } = order;

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
          <S.StatusBadge>
            {STATUS_LABELS[order.status] ?? order.status}
          </S.StatusBadge>
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
          {order.items?.map((product) => (
            <ProductItem
              key={product.productId}
              product={product}
              orderStatus={order.status}
              onReview={handleReview}
              onClaim={handleClaim}
            />
          ))}
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
              <S.LinkButton>배송조회</S.LinkButton>
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
